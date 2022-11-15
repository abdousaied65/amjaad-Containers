@extends('supervisor.layouts.master')
<style>

</style>
@section('content')
    <!-- main-content closed -->
    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <strong>Errors :</strong>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                @if (session('success'))
                    <div class="alert alert-success  fade show">
                        <button class="close" data-dismiss="alert" aria-label="Close">×</button>
                        {{ session('success') }}
                    </div>
                @endif
                <div class="card-header pb-0">
                    <h5 class="alert alert-md alert-success">
                        اعدادات الموقع
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('supervisor.settings.update')}}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('POST')
                        <div class="row m-t-3 mb-3">
                            <div class="col-md-4 pull-right">
                                <label> اسم المؤسسة <span class="text-danger">*</span></label>
                                <input type="text" value="{{$settings->company_name}}" class="form-control"
                                       name="company_name">
                            </div>
                            <div class="col-md-4 pull-right">
                                <label> اسم المؤسسة English <span class="text-danger">*</span></label>
                                <input type="text" dir="ltr" value="{{$settings->company_name_en}}" class="form-control"
                                       name="company_name_en">
                            </div>
                            <div class="col-md-4 pull-right">
                                <label> العنوان <span class="text-danger">*</span></label>
                                <input type="text" value="{{$settings->address}}" class="form-control" name="address">
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="row m-t-3 mb-3">
                            <div class="col-md-4 pull-right">
                                <label> الرقم الضريبى <span class="text-danger">*</span></label>
                                <input type="number" dir="ltr" value="{{$settings->tax_number}}" class="form-control"
                                       name="tax_number">
                            </div>
                            <div class="col-md-4 pull-right">
                                <label> السجل التجارى <span class="text-danger">*</span></label>
                                <input type="number" dir="ltr" value="{{$settings->commercial_record}}"
                                       class="form-control"
                                       name="commercial_record">
                            </div>
                            <div class="col-md-4 pull-right">
                                <label> رقم الهاتف <span class="text-danger">*</span></label>
                                <input type="number" dir="ltr" value="{{$settings->phone_number}}" class="form-control"
                                       name="phone_number">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                            <button class="btn btn-info pd-x-20" type="submit">تحديث</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
