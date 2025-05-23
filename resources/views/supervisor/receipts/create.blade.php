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
                        اضافة سند قبض جديد
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('supervisor.receipts.store','test')}}" method="post"
                          enctype="multipart/form-data">
                        {{csrf_field()}}
                        <div class="row m-t-3 mb-3">
                            <div class="col-md-3">
                                <label for="safe_id" class="d-block">
                                    اختر الخزنة
                                </label>
                                <select required class="form-control w-100 data-table"
                                        name="safe_id" id="safe_id">
                                    <option value="">اختر الخزنة</option>
                                    @foreach($safes as $safe)
                                        <option value="{{$safe->id}}">{{$safe->safe_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="d-block">
                                    اختر الشركة
                                </label>
                                <select required class="form-control w-100 data-table"
                                        name="company_id" id="company_id">
                                    <option value="">اختر الشركة</option>
                                    @foreach($companies as $company)
                                        <option value="{{$company->id}}">{{$company->company_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="d-block">
                                    المبلغ
                                </label>
                                <input required type="number" dir="ltr" class="form-control" name="amount"/>
                            </div>
                            <div class="col-md-3">
                                <label class="d-block">
                                    ملاحظات
                                </label>
                                <input type="text" class="form-control" name="notes"/>
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
