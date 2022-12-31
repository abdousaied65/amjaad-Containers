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
    span.badge{
        padding: 10px!important;
    }
</style>
@section('content')
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header bg-primary pb-0">
                    <h5 class="text-white text-center p-1">
                        عرض كل الشروط
                    </h5>
                </div>
                <div class="row mt-3 mb-1 text-center justify-content-center align-content-center">
                    <form class="col-6" method="GET" action="{{route('print.selected.terms')}}">
                        <button type="submit" class="btn btn-md btn-light-warning m-1 print_selected">
                            <i class="fa fa-print"></i>
                            طباعة
                        </button>
                    </form>
                    <form class="col-6" method="POST" action="{{route('export.terms.excel')}}">
                        @csrf
                        @method('POST')
                        <button type="submit" class="btn btn-md btn-light-success m-1">
                            <i class="fa fa-file-excel-o"></i>
                            تصدير الكل EXCEL
                        </button>
                    </form>

                    <form class="col-6" method="POST" id="myForm"
                          action="{{route('remove.selected.terms')}}">
                        @csrf
                        @method('POST')
                        <button type="submit" class="btn btn-md btn-light-danger m-1 remove_selected">
                            <i class="fa fa-trash"></i>
                            حذف
                        </button>
                    </form>
                    <div class="col-6">
                        <a href="{{route('supervisor.terms.create')}}" role="button"
                           class="btn btn-md btn-light-info">
                            <i class="fa fa-plus"></i>
                            اضافة
                        </a>
                    </div>
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
                                <th class="border-bottom-0 text-center">الشرط</th>
                                <th style="width: 5%!important;" class="border-bottom-0 text-center">تحكم</th>
                            </tr>
                            </thead>
                            <tbody>
                            @php
                                $i = 0;
                            @endphp

                            @foreach ($data as $key => $term)
                                <tr>
                                    <td>
                                        <input class="check" name="terms[]" form="myForm"
                                               value="{{$term->id}}"
                                               type="checkbox">
                                    </td>
                                    <td>{{ ++$i }}</td>
                                    <td>{{ $term->term}}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button type="button" class="btn btn-primary dropdown-toggle"
                                                    data-toggle="dropdown">
                                                <i class="fa fa-wrench"></i>
                                                ادارة
                                            </button>
                                            <div class="dropdown-menu">
                                                @can('الاعدادات العامة')
                                                    <a href="{{ route('supervisor.terms.show', $term->id) }}"
                                                       class="dropdown-item">
                                                        <i class="fa fa-eye"></i>
                                                        عرض
                                                    </a>

                                                    <a href="{{ route('supervisor.terms.edit', $term->id) }}"
                                                       class="dropdown-item">
                                                        <i class="fa fa-edit"></i>
                                                        تعديل
                                                    </a>
                                                    <a class="dropdown-item delete_term"
                                                       term_id="{{ $term->id }}"
                                                       term="{{ $term->term }}" data-toggle="modal"
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
                            </tbody>
                            <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            </tfoot>
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
                        <h6 class="modal-title w-100" style="font-family: 'Almarai'; ">حذف شرط</h6>

                    </div>
                    <form action="{{ route('supervisor.terms.destroy', 'test') }}" method="post">
                        {{ method_field('delete') }}
                        {{ csrf_field() }}
                        <div class="modal-body">
                            <p>هل انت متأكد انك تريد الحذف ؟</p><br>
                            <input type="hidden" name="term_id" id="term_id" value="">
                            <input class="form-control" name="term" id="term" type="text" readonly>
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
        $('.delete_term').on('click', function () {
            var term_id = $(this).attr('term_id');
            var term = $(this).attr('term');
            $('.modal-body #term_id').val(term_id);
            $('.modal-body #term').val(term);
        });
        $('.remove_selected').on('click', function (e) {
            e.preventDefault();
            let terms = [];
            $("input:checkbox[name*='terms']:checked").each(function () {
                terms.push($(this).val());
            });
            if (terms.length == 0) {
                alert('اختر بعض السجلات للحذف');
            } else {
                $('#myForm').submit();
            }
        });
        $('#example-table tfoot tr th:nth-child(3)').html('<input class="form-control" type="text" placeholder="اسم الخزنة" />');
        $('#example-table').DataTable({
            "columnDefs": [
                {"orderable": false, "targets": [0, 3]}
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
