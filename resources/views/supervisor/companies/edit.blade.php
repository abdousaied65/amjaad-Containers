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
                        <h5 class="p-1 text-white text-center">
                            تعديل بيانات الشركة
                        </h5>
                </div>
                <div class="card-body">
                    {!! Form::model($company, ['method' => 'PATCH','enctype' => 'multipart/form-data','route' => ['supervisor.companies.update', $company->id]]) !!}
                    <div class="row m-t-3 mb-3">
                        <div class="col-md-3">
                            <label> اسم الشركة <span class="text-danger">*</span></label>
                            <input value="{{$company->company_name}}" class="form-control mg-b-20" name="company_name" required="" type="text">
                        </div>
                        <div class="col-md-3">
                            <label> اسم مالك الشركة <span class="text-danger">*</span></label>
                            <input value="{{$company->company_owner}}" class="form-control mg-b-20" name="company_owner" type="text">
                        </div>
                        <div class="col-md-3">
                            <label> رقم الهاتف <span class="text-danger">*</span></label>
                            <input value="{{$company->phone_number}}" class="form-control mg-b-20" dir="ltr" name="phone_number" type="text">
                        </div>
                        <div class="col-md-3">
                            <label> رقم الجوال <span class="text-danger">*</span></label>
                            <input value="{{$company->mobile_number}}" class="form-control mg-b-20" dir="ltr" name="mobile_number" type="text">
                        </div>
                    </div>
                    <div class="row m-t-3 mb-3">
                        <div class="col-md-3">
                            <label> العنوان <span class="text-danger">*</span></label>
                            <input value="{{$company->address}}" class="form-control mg-b-20" name="address" type="text">
                        </div>
                        <div class="col-md-3">
                            <label> الرقم الضريبى <span class="text-danger">*</span></label>
                            <input value="{{$company->tax_number}}" class="form-control mg-b-20" dir="ltr" name="tax_number" type="text">
                        </div>
                        <div class="col-md-3">
                            <label> السجل التجارى <span class="text-danger">*</span></label>
                            <input value="{{$company->commercial_record}}" class="form-control mg-b-20" dir="ltr" name="commercial_record" type="text">
                        </div>
                        <div class="col-md-3">
                            <label> مديونية الشركة <span class="text-danger">*</span></label>
                            <input class="form-control mg-b-20" dir="ltr" name="debts" value="{{$company->debts}}" type="number">
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
