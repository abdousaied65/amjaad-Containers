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
                    <div class="col-lg-12 margin-tb">
                        <h5 class="text-center p-1 text-white">
                            عرض كل المشرفين
                        </h5>
                    </div>
                </div>
                <div class="row mt-1 mb-1 text-center justify-content-center align-content-center">
                    <form class="col-6" method="GET" action="{{route('print.selected.supervisors')}}">
                        <button type="submit" class="btn btn-md btn-light-warning m-1 print_selected">
                            <i class="fa fa-print"></i>
                            طباعة
                        </button>
                    </form>
                    <form class="col-6" method="POST" action="{{route('export.supervisors.excel')}}">
                        @csrf
                        @method('POST')
                        <button type="submit" class="btn btn-md btn-light-success m-1">
                            <i class="fa fa-file-excel-o"></i>
                            تصدير الكل EXCEL
                        </button>
                    </form>

                    <form class="col-6" method="POST" id="myForm"
                          action="{{route('remove.selected.supervisors')}}">
                        @csrf
                        @method('POST')
                        <button type="submit" class="btn btn-md btn-light-danger m-1 remove_selected">
                            <i class="fa fa-trash"></i>
                            حذف
                        </button>
                    </form>
                    <div class="col-6">
                        <a href="{{route('supervisor.supervisors.create')}}" role="button"
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
                                <th class="border-bottom-0 text-center">اسم المشرف</th>
                                <th class="border-bottom-0 text-center">البريد الالكترونى</th>
                                <th class="border-bottom-0 text-center">الصورة الشخصية</th>
                                <th class="border-bottom-0 text-center">مجموعة المشرفين</th>
                                <th style="width: 5%!important;" class="border-bottom-0 text-center">تحكم</th>
                            </tr>
                            </thead>
                            <tbody>
                            @php
                                $i = 0;
                            @endphp

                            @foreach ($data as $key => $supervisor)
                                <tr>
                                    <td>
                                        <input class="check" name="supervisors[]" form="myForm"
                                               value="{{$supervisor->id}}"
                                               type="checkbox">
                                    </td>
                                    <td>{{ ++$i }}</td>
                                    <td>{{ $supervisor->name}}</td>
                                    <td>{{ $supervisor->email }}</td>
                                    <td>
                                        @if(empty($supervisor->profile_pic))
                                            <img data-toggle="modal" href="#modaldemo9"
                                                 src="{{asset('assets/img/guest.png')}}"
                                                 style="width: 70px;cursor: pointer; height: 70px;border-radius: 100%; padding: 3px; border: 1px solid #aaa;">
                                        @else
                                            <img data-toggle="modal" href="#modaldemo9"
                                                 src="{{asset($supervisor->profile_pic)}}"
                                                 style="width: 70px;cursor: pointer; height: 70px;border-radius: 100%; padding: 3px; border: 1px solid #aaa;">
                                        @endif
                                    </td>
                                    <td>
                                        {{$supervisor->role_name}}
                                    </td>
                                    <td>
                                        <button class="btn btn-primary btn-sm dropdown-toggle" type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa fa-wrench"></i>
                                            تحكم
                                        </button>
                                        <ul class="dropdown-menu border-0 shadow">
                                            @can('عرض مشرف')
                                                <a href="{{ route('supervisor.supervisors.show', $supervisor->id) }}"
                                                   class="dropdown-item">
                                                    <i class="fa fa-eye"></i>
                                                    عرض
                                                </a>
                                            @endcan
                                            @can('تعديل مشرف')
                                                <a href="{{ route('supervisor.supervisors.edit', $supervisor->id) }}"
                                                   class="dropdown-item">
                                                    <i class="fa fa-edit"></i>
                                                    تعديل
                                                </a>
                                            @endcan
                                            @can('حذف مشرف')
                                                @if (Auth::user()->role_name == "مدير النظام")
                                                    <a class="dropdown-item delete_supervisor"
                                                       supervisor_id="{{ $supervisor->id }}"
                                                       email="{{ $supervisor->email }}" data-toggle="modal"
                                                       href="#modaldemo8">
                                                        <i class="fa fa-trash"></i>
                                                        حذف
                                                    </a>
                                                @endif
                                            @endcan
                                        </ul>
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
                        <h6 class="modal-title w-100" style="font-family: 'Almarai'; ">حذف مشرف</h6>

                    </div>
                    <form action="{{ route('supervisor.supervisors.destroy', 'test') }}" method="post">
                        {{ method_field('delete') }}
                        {{ csrf_field() }}
                        <div class="modal-body">
                            <p>هل انت متأكد انك تريد الحذف ؟</p><br>
                            <input type="hidden" name="supervisor_id" id="supervisor_id" value="">
                            <input class="form-control" name="email" id="email" type="text" readonly>
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
    <!-- Modal effects -->
    <div class="modal" id="modaldemo9">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-content-demo">
                <div class="modal-header text-center">
                    <h6 class="modal-title w-100"
                        style="font-family: 'Almarai'; ">عرض صورة المشرف</h6>

                </div>
                <div class="modal-body">
                    <img id="image_larger" alt="image" style="width: 100%;height: 400px!important;  "/>
                </div>
                <div class="modal-footer">
                    <button data-dismiss="modal" class="btn btn-md btn-danger"><i class="fa fa-colse"></i> اغلاق
                    </button>
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
        $('.delete_supervisor').on('click', function () {
            var supervisor_id = $(this).attr('supervisor_id');
            var email = $(this).attr('email');
            $('.modal-body #supervisor_id').val(supervisor_id);
            $('.modal-body #email').val(email);
        });
        $('img').on('click', function () {
            var image_larger = $('#image_larger');
            var path = $(this).attr('src');
            $(image_larger).prop('src', path);
        });
        $('.remove_selected').on('click', function (e) {
            e.preventDefault();
            let supervisors = [];
            $("input:checkbox[name*='supervisors']:checked").each(function () {
                supervisors.push($(this).val());
            });
            if (supervisors.length == 0) {
                alert('اختر بعض السجلات للحذف');
            } else {
                $('#myForm').submit();
            }
        });
        $('#example-table tfoot tr th:nth-child(3)').html('<input class="form-control" type="text" placeholder="اسم المشرف" />');
        $('#example-table tfoot tr th:nth-child(4)').html('<input class="form-control" type="text" placeholder="البريد الالكترونى" />');
        $('#example-table tfoot tr th:nth-child(6)').html('<select id="roles" class="form-control">@foreach($roles as $role)<option value="{{$role}}">{{$role}}</option>@endforeach</select>');
        $('#example-table').DataTable({
            "columnDefs": [
                {"orderable": false, "targets": [0, 4, 6]}
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
