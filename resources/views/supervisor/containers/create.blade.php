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
                        اضافة حاوية جديدة
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('supervisor.containers.store','test')}}" method="post"
                          enctype="multipart/form-data">
                        {{csrf_field()}}
                        <div class="row mt-3 mb-3">
                            <div class="col-md-3">
                                <label> اسم الحاوية <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" name="name" required="" type="text">
                            </div>
                            <div class="col-md-3">
                                <label> مقاس الحاوية <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" name="measure" required="" type="text">
                            </div>
                            <div class="col-md-3">
                                <label> مبلغ الايجار غير شامل الضريبة <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" name="rent_amount" required="" type="text">
                            </div>
                            <div class="col-md-3">
                                <label> الحالة <span class="text-danger">*</span></label>
                                <select name="status" required class="form-control data-table w-100">
                                    <option value=""> اختر الحالة</option>
                                    <option value="مؤجرة">مؤجرة</option>
                                    <option selected value="فارغة">فارغة</option>
                                </select>
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
