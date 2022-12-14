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
                    <h5 class="text-white text-center p-1">
                        اضافة خزنة جديدة
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('supervisor.safes.store','test')}}" method="post"
                          enctype="multipart/form-data">
                        {{csrf_field()}}
                        <div class="row m-t-3 mb-3">
                            <div class="col-md-4">
                                <label> اسم الخزنة <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" name="safe_name" required="" type="text">
                            </div>
                            <div class="col-md-4">
                                <label> رصيد الخزنة <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20" dir="ltr" name="balance" required="" type="number">
                            </div>
                            <div class="col-md-4">
                                <label> نوع الخزنة <span class="text-danger">*</span></label>
                                <select name="type" required class="form-control">
                                    <option value=""> اختر نوع الخزنة</option>
                                    <option value="بنك">بنك</option>
                                    <option selected value="خزنة">خزنة</option>
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
