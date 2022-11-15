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
                <div class="card-body">
                    <div class="col-lg-12 margin-tb">
                        <h5 style="min-width: 300px;" class="pull-right alert alert-md alert-success">
                            تعديل بيانات الخزنة
                        </h5>
                        <div class="clearfix"></div>
                    </div>
                    <br>
                    {!! Form::model($safe, ['method' => 'PATCH','enctype' => 'multipart/form-data','route' => ['supervisor.safes.update', $safe->id]]) !!}
                    <div class="row m-t-3 mb-3">
                        <div class="col-md-4">
                            <label> اسم الخزنة <span class="text-danger">*</span></label>
                            <input value="{{$safe->safe_name}}" class="form-control mg-b-20" name="safe_name" required="" type="text">
                        </div>
                        <div class="col-md-4">
                            <label> رصيد الخزنة <span class="text-danger">*</span></label>
                            <input value="{{$safe->balance}}" class="form-control mg-b-20" dir="ltr" name="balance" required="" type="number">
                        </div>
                        <div class="col-md-4">
                            <label> نوع الخزنة <span class="text-danger">*</span></label>
                            <select name="type" required class="form-control">
                                <option value=""> اختر نوع الخزنة</option>
                                <option @if($safe->type == "بنك") selected @endif value="بنك">بنك</option>
                                <option @if($safe->type == "خزنة") selected @endif value="خزنة">خزنة</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-lg-12 text-center mt-3 mb-3">
                        <button class="btn btn-info btn-md" type="submit"> تحديث</button>
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
    <!-- main-content closed -->

    <script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
@endsection
