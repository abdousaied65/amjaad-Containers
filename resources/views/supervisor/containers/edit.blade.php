@extends('supervisor.layouts.master')
<style>
</style>
@section('content')
    <!-- row -->
    <div class="row">
        <div class="col-lg-12 col-md-12">

            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <strong>الاخطاء :</strong>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <div class="card">
                <div class="card-header bg-primary">
                    <h5 class="text-center text-white p-1">
                        تعديل بيانات الحاوية
                    </h5>
                </div>
                <div class="card-body">
                    {!! Form::model($container, ['method' => 'PATCH','enctype' => 'multipart/form-data','route' => ['supervisor.containers.update', $container->id]]) !!}
                    <div class="row mb-3 mt-3">
                        <div class="col-md-3">
                            <label> اسم الحاوية <span class="text-danger">*</span></label>
                            <input value="{{$container->name}}" class="form-control mg-b-20" name="name" required=""
                                   type="text">
                        </div>
                        <div class="col-md-3">
                            <label> مقاس الحاوية <span class="text-danger">*</span></label>
                            <input value="{{$container->measure}}" class="form-control mg-b-20" name="measure"
                                   required=""
                                   type="text">
                        </div>
                        <div class="col-md-3">
                            <label> مبلغ الايجار غير شامل الضريبة <span class="text-danger">*</span></label>
                            <input value="{{$container->rent_amount}}" class="form-control mg-b-20" name="rent_amount"
                                   required="" type="text">
                        </div>
                        <div class="col-md-3">
                            <label> الحالة <span class="text-danger">*</span></label>
                            <select name="status" required class="form-control data-table w-100">
                                <option value=""> اختر الحالة</option>
                                <option @if($container->status == "مؤجرة") selected @endif value="مؤجرة">مؤجرة</option>
                                <option @if($container->status == "فارغة") selected @endif value="فارغة">فارغة</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-lg-12 text-center mt-3 mb-3">
                        <button class="btn btn-primary btn-md" type="submit"> تحديث</button>
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>

    <!-- main-content closed -->

    <script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
@endsection
