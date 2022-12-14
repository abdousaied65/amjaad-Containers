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
                <div class="card-header bg-primary pb-0">
                    <h5 class="text-center text-white p-1">
                        اضافة شركة جديدة
                    </h5>
                </div>

                <div class="card-body p-1 m-1">
                    <form action="{{route('supervisor.companies.store','test')}}" method="post"
                          enctype="multipart/form-data">
                        {{csrf_field()}}
                        <div class="row mt-3 mb-3">
                            <div class="col-md-3">
                                <label> اسم الشركة <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" name="company_name" required="" type="text">
                            </div>
                            <div class="col-md-3">
                                <label> اسم مالك الشركة <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" name="company_owner" type="text">
                            </div>
                            <div class="col-md-3">
                                <label> رقم الهاتف <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20 " dir="ltr" name="phone_number" type="number">
                            </div>
                            <div class="col-md-3">
                                <label> رقم الجوال <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" dir="ltr" name="mobile_number" type="number">
                            </div>
                        </div>
                        <div class="row mt-3 mb-3">
                            <div class="col-md-3">
                                <label> العنوان <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" name="address" type="text">
                            </div>
                            <div class="col-md-3">
                                <label> الرقم الضريبى <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" dir="ltr" name="tax_number" type="number">
                            </div>
                            <div class="col-md-3">
                                <label> السجل التجارى <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" dir="ltr" name="commercial_record" type="number">
                            </div>
                            <div class="col-md-3">
                                <label> مديونية الشركة <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" dir="ltr" name="debts" value="0" type="number">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                            <button class="btn btn-primary pd-x-20" type="submit">
                                اضافة
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
@endsection
