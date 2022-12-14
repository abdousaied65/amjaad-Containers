@extends('supervisor.layouts.master')
<style>
    tfoot input {
        width: 100%;
        padding: 3px;
        box-sizing: border-box;
    }

    .btn-md {
        height: 40px !important;
        min-width: 100px !important;
        padding: 10px !important;
        text-align: center !important;
    }

    input[type="checkbox"] {
        width: 20px;
        height: 20px;
    }

    span.badge {
        padding: 10px !important;
    }
</style>
@section('content')
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    @if (session('error'))
        <div class="alert alert-danger fade show">

            {{ session('error') }}
        </div>
    @endif
    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header bg-primary pb-0">
                    <div class="col-lg-12 margin-tb">
                        <h5 class="text-center p-1 text-white">
                            عرض كل الحاويات
                        </h5>
                    </div>
                </div>
                <div class="row mt-1 mb-1 text-center justify-content-center align-content-center">
                    <form class="col-6" method="GET" action="{{route('print.selected.containers')}}">
                        <button type="submit" class="btn btn-md btn-light-warning m-1 print_selected">
                            <i class="fa fa-print"></i>
                            طباعة
                        </button>
                    </form>
                    <form class="col-6" method="POST" action="{{route('export.containers.excel')}}">
                        @csrf
                        @method('POST')
                        <button type="submit" class="btn btn-md btn-light-success m-1">
                            <i class="fa fa-file-excel-o"></i>
                            تصدير الكل EXCEL
                        </button>
                    </form>

                    <form class="col-6" method="POST" id="myForm"
                          action="{{route('remove.selected.containers')}}">
                        @csrf
                        @method('POST')
                        <button type="submit" class="btn btn-md btn-light-danger m-1 remove_selected">
                            <i class="fa fa-trash"></i>
                            حذف
                        </button>
                    </form>
                    <div class="col-6">
                        <a href="{{route('supervisor.containers.create')}}" role="button"
                           class="btn btn-md btn-light-info">
                            <i class="fa fa-plus"></i>
                            اضافة
                        </a>
                    </div>
                </div>

                <div class="row p-3">
                    <form method="POST" class="col-lg-6 pull-right d-inline"
                          action="{{route('export.containers.by.status.excel')}}">
                        @csrf
                        @method('POST')
                        <div class="row">
                            <div class="form-group w-75">
                                <label for="statuses" class="d-block">اختر الحالة للتصدير</label>
                                <select required name="statuses[]" id="statuses" class="data-table w-100">
                                    <option value="فارغة">فارغة</option>
                                    <option value="مؤجرة">مؤجرة</option>
                                </select>
                            </div>
                            <button style="font-size: 10px!important;margin-top: 32px!important;" type="submit"
                                    class="btn btn-md btn-primary w-25">
                                <i class="fa fa-file-excel-o"></i>
                                تصدير
                            </button>
                        </div>

                    </form>
                    <form method="POST" class="col-lg-6 pull-right d-inline"
                          action="{{route('export.containers.by.end.excel')}}">
                        @csrf
                        @method('POST')
                        <label for="" class="d-block">
                            تصدير الحاويات التى ينتهى ايجارها قريبا
                        </label>
                        <button style="font-size: 12px!important;" type="submit"
                                class="btn btn-md btn-block btn-danger pull-right d-inline">
                            <i class="fa fa-file-excel-o"></i>
                            اضغط هنا للتصدير
                        </button>
                    </form>

                </div>

                <div class="card-body p-1 m-1">
                    <div class="table-responsive table-hover">
                        <table id="example-table"
                               class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                            <thead>
                            <tr>
                                <th class="border-bottom-0 text-center">
                                    <input type="checkbox" id="check_all"/>
                                </th>
                                <th class="border-bottom-0 text-center">#</th>
                                <th class="border-bottom-0 text-center">اسم الحاوية</th>
                                <th class="border-bottom-0 text-center"> مقاس الحاوية</th>
                                <th class="border-bottom-0 text-center"> مبلغ الايجار غير شامل الضريبة</th>
                                <th class="border-bottom-0 text-center"> الحالة</th>
                                <th style="width: 5%!important;" class="border-bottom-0 text-center">تحكم</th>
                            </tr>
                            </thead>
                            <tbody>
                            @php
                                $i = 0;
                            @endphp

                            @foreach ($data as $key => $container)
                                <tr>
                                    <td>
                                        <input class="check" name="containers[]" form="myForm"
                                               value="{{$container->id}}"
                                               type="checkbox">
                                    </td>
                                    <td>{{ ++$i }}</td>
                                    <td>{{ $container->name}}</td>
                                    <td>{{ $container->measure }}</td>
                                    <td>{{ $container->rent_amount }}</td>
                                    <td>
                                        @if($container->status == "مؤجرة")
                                            <span class="badge badge-info">
                                                مؤجرة
                                            </span>
                                        @elseif($container->status == "فارغة")
                                            <span class="badge badge-success">
                                                فارغة
                                            </span>
                                        @endif
                                    </td>
                                    <td>
                                        <div class="dropdown">
                                            <button type="button" class="btn btn-primary dropdown-toggle"
                                                    data-toggle="dropdown">
                                                <i class="fa fa-wrench"></i>
                                                ادارة
                                            </button>
                                            <div class="dropdown-menu">
                                                @can('عرض حاوية')
                                                    <a href="{{ route('supervisor.containers.show', $container->id) }}"
                                                       class="dropdown-item">
                                                        <i class="fa fa-eye"></i>
                                                        عرض
                                                    </a>
                                                @endcan
                                                @can('تعديل حاوية')
                                                    <a href="{{ route('supervisor.containers.edit', $container->id) }}"
                                                       class="dropdown-item">
                                                        <i class="fa fa-edit"></i>
                                                        تعديل
                                                    </a>
                                                @endcan
                                                @can('حذف حاوية')
                                                    <a class="dropdown-item delete_container"
                                                       container_id="{{ $container->id }}"
                                                       name="{{ $container->name }}" data-toggle="modal"
                                                       href="#modaldemo8">
                                                        <i class="fa fa-trash"></i>
                                                        حذف
                                                    </a>
                                                @endcan
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            </tfoot>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!--/div-->

        <!-- Modal effects -->
        <div class="modal" id="modaldemo8">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content modal-content-demo">
                    <div class="modal-header text-center">
                        <h6 class="modal-title w-100" style="font-family: 'Almarai'; ">حذف حاوية</h6>

                    </div>
                    <form action="{{ route('supervisor.containers.destroy', 'test') }}" method="post">
                        {{ method_field('delete') }}
                        {{ csrf_field() }}
                        <div class="modal-body">
                            <p>هل انت متأكد انك تريد الحذف ؟</p><br>
                            <input type="hidden" name="container_id" id="container_id" value="">
                            <input class="form-control" name="name" id="name" type="text" readonly>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
                            <button type="submit" class="btn btn-danger">حذف</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection
<script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
<script>
    $(document).ready(function () {
        $('#check_all').click(function () {
            if (this.checked) {
                $('input.check').prop('checked', true);
            } else {
                $('input.check').prop('checked', false);
            }
        });
        $('.delete_container').on('click', function () {
            var container_id = $(this).attr('container_id');
            var name = $(this).attr('name');
            $('.modal-body #container_id').val(container_id);
            $('.modal-body #name').val(name);
        });
        $('.remove_selected').on('click', function (e) {
            e.preventDefault();
            let containers = [];
            $("input:checkbox[name*='containers']:checked").each(function () {
                containers.push($(this).val());
            });
            if (containers.length == 0) {
                alert('اختر بعض السجلات للحذف');
            } else {
                $('#myForm').submit();
            }
        });
        $('#example-table tfoot tr th:nth-child(3)').html('<input class="form-control" type="text" placeholder="اسم الحاوية" />');
        $('#example-table tfoot tr th:nth-child(4)').html('<input class="form-control" type="text" placeholder="مقاس الحاوية" />');
        $('#example-table tfoot tr th:nth-child(5)').html('<input class="form-control" type="text" placeholder="مبلغ الايجار" />');
        $('#example-table tfoot tr th:nth-child(6)').html('<select class="form-control"><option value="">اختر الحالة</option> <option value="مؤجرة">مؤجرة</option><option value="فارغة">فارغة</option></select>');
        $('#example-table').DataTable({
            "columnDefs": [
                {"orderable": false, "targets": [0, 5, 6]}
            ],
            "order": [[1, "desc"]],
            initComplete: function () {
                this.api().columns().every(function () {
                    var that = this;
                    $('input[type="text"]', this.footer()).on('keyup change clear', function () {
                        if (that.search() !== this.value) {
                            that.search(this.value).draw();
                        }
                    });
                    $('select', this.footer()).on('change', function () {
                        if (that.search() !== this.value) {
                            that.search(this.value).draw();
                        }
                    });
                });
            }
        });
    });
</script>
