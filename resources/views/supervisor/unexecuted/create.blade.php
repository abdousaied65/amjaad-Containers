@extends('supervisor.layouts.master')
<link rel="stylesheet" href="{{asset('admin-assets/css/bootstrap.min.css')}}">
<style>
    .bootstrap-select {
        width: 80% !important;
    }
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

    @if (session('success'))
        <div class="alert alert-success  fade show">
            <button class="close" data-dismiss="alert" aria-label="Close">×</button>
            {{ session('success') }}
        </div>
    @endif

    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header pb-0">
                    <h5 class="alert alert-md alert-success text-center">
                        اضافة عقد غير منفذ
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('save.unexecuted.contract.bill')}}" method="post"
                          enctype="multipart/form-data">
                        @csrf
                        @method('POST')
                        <input type="hidden" name="supervisor_id" value="{{Auth::user()->id}}"/>
                        <input type="hidden" name="type" value="unexecuted"/>
                        <h5 class="mt-4 mb-4">
                            البيانات الخاصة بالعقد
                        </h5>
                        <hr>
                        <div class="row mt-4 mb-4">

                            <div class="col-md-4">
                                <label class="d-block">
                                    اختر الشركة
                                </label>

                                <select required class="form-control selectpicker show-tick"
                                        data-live-search="true" data-title="اختر الشركة"
                                        data-style="btn-secondary"
                                        name="company_id" id="company_id">
                                    @foreach($companies as $company)
                                        <option value="{{$company->id}}">{{$company->company_name}}</option>
                                    @endforeach
                                </select>
                                <a role="button"
                                   style="width: 15%!important;height:40px!important;display: inline;float:left!important; border-radius: 0;"
                                   class="modal-effect btn btn-md btn-secondary p-2 pt-3 "
                                   data-toggle="modal" href="#modaldemo9">
                                    <i class="fas text-white fa-plus"></i>
                                </a>

                            </div>

                            <div class="col-md-4">
                                <label class="d-block">
                                    عدد الحاويات
                                </label>
        
                                <input min="1" class="form-control" type="number" dir="ltr"
                                       name="containers_number" id="containers_number" />
                                
                            </div>

                            <div class="col-md-4">
                                <label class="d-block">
                                    تاريخ بداية العقد
                                </label>
                                <input required class="form-control" type="date" value="{{date('Y-m-d')}}"
                                       name="contract_start_date"/>
                            </div>

                        </div>
                        <hr>

                        <div class="details">


                        </div>

                        <hr>
                        <div class="row mt-4 mb-4">
                            <div class="col-md-3">
                                <label class="d-block">
                                    تاريخ نهاية العقد
                                </label>
                                <input required class="form-control" type="date"
                                       value="{{date('Y-m-d',strtotime('+1 year'))}}"
                                       name="contract_end_date"/>
                            </div>
                            <div class="col-md-3">
                                <label class="d-block">
                                    المدينة
                                </label>
                                <input class="form-control" type="text" name="city"/>
                            </div>
                            <div class="col-md-3">
                                <label class="d-block">
                                    الحى
                                </label>
                                <input class="form-control" type="text" name="district"/>
                            </div>
                            <div class="col-md-3">
                                <label class="d-block">
                                    الشارع
                                </label>
                                <input class="form-control" type="text" name="street"/>
                            </div>
                        </div>
                        <div class="row mt-4 mb-4">
                            <div class="col-md-3">
                                <label class="d-block">
                                    قطعة رقم
                                </label>
                                <input class="form-control" type="number" dir="ltr" name="plot_number"/>
                            </div>
                            <div class="col-md-3">
                                <label class="d-block">
                                    رقم المخطط
                                </label>
                                <input class="form-control" type="number" dir="ltr" name="chart_number"/>
                            </div>

                            <div class="col-md-3">
                                <label class="d-block">
                                    مسطح البناء
                                </label>
                                <input class="form-control" type="number" dir="ltr" name="flat_construction"/>
                            </div>

                            <div class="col-md-3">
                                <label class="d-block">
                                    عدد الردود
                                </label>
                                <input value="1" min="1" class="form-control" type="number" dir="ltr"
                                       name="responses_number"/>
                            </div>
                        </div>
                        <h5 class="mt-4 mb-4">
                            البيانات الخاصة بالفاتورة
                        </h5>
                        <hr>
                        <div class="row mt-4 mb-4">
                            <div class="col-md-4">
                                <label class="d-block">
                                    التاريخ
                                </label>
                                <input required class="form-control" type="date" name="date" value="{{date('Y-m-d')}}"/>
                            </div>
                            <div class="col-md-4">
                                <label class="d-block">
                                    الوقت
                                </label>
                                <input required class="form-control" type="time" name="time" value="{{date('H:i:s')}}"/>
                            </div>
                            <div class="col-md-4">
                                <label class="d-block">
                                    ملاحظات الفاتورة
                                </label>
                                <input class="form-control" type="text" name="notes"/>
                            </div>
                        </div>
                        <div class="row mt-4 mb-4">
                            <div class="col-lg-4">
                                <label for="discount_percent" class="d-block">
                                    نسبة الخصم
                                </label>
                                <div class="input-group" dir="ltr">
                                    <span class="input-group-addon"
                                          style="font-size: 18px;font-weight: bold;">%</span>
                                    <input required type="number" class="form-control input-spec"
                                           name="discount_percent" value="0"
                                           id="discount_percent"/>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <label for="vat_percent" class="d-block">
                                    ضريبة القيمة المضافة
                                </label>
                                <div class="input-group" dir="ltr">
                                    <span class="input-group-addon"
                                          style="font-size: 18px;font-weight: bold;">%</span>
                                    <input required type="number" class="form-control input-spec"
                                           name="vat_percent" value="15"
                                           id="vat_percent"/>
                                </div>
                            </div>
                        </div>

                        <h5 class="mt-4 mb-4">
                            البيانات الخاصة بتسجيل الدفع
                        </h5>
                        <hr>
                        <div class="row mt-4 mb-4">
                            <div class="col-lg-4">
                                <label for="paid" class="d-block">
                                    اجمالى الفاتورة
                                </label>

                                <input type="number" required min="0" value="0" class="form-control" dir="ltr"
                                       name="total_amount" id="total_amount"/>

                            </div>
                            <div class="col-lg-4">
                                <label for="paid" class="d-block">
                                    المبلغ المدفوع
                                </label>
                                <input type="number" required min="0" value="0" class="form-control" dir="ltr"
                                       name="paid" id="paid"/>
                            </div>
                            <div class="col-lg-4">
                                <label for="safe_id" class="d-block">
                                    اختر الخزنة
                                </label>
                                <select required class="form-control w-100 js-example-basic-single"
                                        name="safe_id" id="safe_id">
                                    <option value="">اختر الخزنة</option>
                                    @foreach($safes as $safe)
                                        <option value="{{$safe->id}}">{{$safe->safe_name}}</option>
                                    @endforeach
                                </select>

                            </div>
                        </div>

                        <div class="row mt-5 mb-5">
                            <div class="col-lg-12 text-center">
                                <button type="submit" class="btn btn-md btn-success">
                                    <i class="fa fa-save"></i>
                                    حفظ
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" id="modaldemo9">
        <div class="modal-dialog modal-lg modal-dialog-centered" capital="document">
            <div class="modal-content modal-content-demo">
                <div class="modal-header text-center">
                    <h6 class="modal-title w-100" style="font-family: 'Almarai'; ">اضافة شركة جديدة</h6>
                    <button aria-label="Close" class="close"
                            data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <div class="row m-t-3 mb-3">
                        <div class="col-md-3">
                            <label> اسم الشركة <span class="text-danger">*</span></label>
                            <input class="form-control mg-b-20" name="company_name" id="company_name" required=""
                                   type="text">
                        </div>
                        <div class="col-md-3">
                            <label> اسم مالك الشركة <span class="text-danger">*</span></label>
                            <input class="form-control mg-b-20" name="company_owner" id="company_owner" required=""
                                   type="text">
                        </div>
                        <div class="col-md-3">
                            <label> رقم الهاتف <span class="text-danger">*</span></label>
                            <input class="form-control mg-b-20 " dir="ltr" name="phone_number" id="phone_number"
                                   required="" type="number">
                        </div>
                        <div class="col-md-3">
                            <label> رقم الجوال <span class="text-danger">*</span></label>
                            <input class="form-control mg-b-20" dir="ltr" name="mobile_number" id="mobile_number"
                                   required="" type="number">
                        </div>
                    </div>
                    <div class="row m-t-3 mb-3">
                        <div class="col-md-3">
                            <label> العنوان <span class="text-danger">*</span></label>
                            <input class="form-control mg-b-20" name="address" id="address" required="" type="text">
                        </div>
                        <div class="col-md-3">
                            <label> الرقم الضريبى <span class="text-danger">*</span></label>
                            <input class="form-control mg-b-20" dir="ltr" name="tax_number" id="tax_number" required=""
                                   type="number">
                        </div>
                        <div class="col-md-3">
                            <label> السجل التجارى <span class="text-danger">*</span></label>
                            <input class="form-control mg-b-20" dir="ltr" name="commercial_record"
                                   id="commercial_record" type="number">
                        </div>
                        <div class="col-md-3">
                            <label> مديونية الشركة <span class="text-danger">*</span></label>
                            <input class="form-control mg-b-20" dir="ltr" name="debts" id="debts" value="0"
                                   type="number">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
                    <button type="button" class="btn btn-success add_company">اضافة</button>
                </div>
            </div>
        </div>
    </div>

    <script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
    <script>
        $('#containers_number').on('keyup blur change', function () {

            let containers_number = $(this).val();
            let discount_percent = $('#discount_percent').val();
            let vat_percent = $('#vat_percent').val();

            $.post("{{route('unexecuted.containers.getDetails')}}", {
                containers_number: containers_number,
                "_token": "{{ csrf_token() }}"
            }, function (data) {
                $('.details').html(data);
                $.post("{{route('bill.unexecuted.total')}}", {
                    containers_number: containers_number,
                    discount_percent: discount_percent,
                    vat_percent: vat_percent,
                    "_token": "{{ csrf_token() }}"
                }, function (data) {
                    $('#total_amount').val(data.total_amount);
                });
            });
        });

        $('#discount_percent , #vat_percent').on('change keyup blur', function () {
            let containers_number = $('#containers_number').val();
            let discount_percent = $('#discount_percent').val();
            let vat_percent = $('#vat_percent').val();
            $.post("{{route('bill.unexecuted.total')}}", {
                containers_number: containers_number,
                discount_percent: discount_percent,
                vat_percent: vat_percent,
                "_token": "{{ csrf_token() }}"
            }, function (data) {
                $('#total_amount').val(data.total_amount);
            });
        });

        $('.add_company').on('click', function () {
            let company_name = $('#company_name').val();
            let company_owner = $('#company_owner').val();
            let phone_number = $('#phone_number').val();
            let mobile_number = $('#mobile_number').val();
            let address = $('#address').val();
            let tax_number = $('#tax_number').val();
            let commercial_record = $('#commercial_record').val();
            let debts = $('#debts').val();
            if (company_name == "") {
                alert('حقل اسم الشركة فارغ');
            } else {
                $.post("{{route('supervisor.companies.storeCon')}}", {
                    company_name: company_name,
                    company_owner: company_owner,
                    phone_number: phone_number,
                    mobile_number: mobile_number,
                    address: address,
                    tax_number: tax_number,
                    commercial_record: commercial_record,
                    debts: debts,
                    "_token": "{{ csrf_token() }}"
                }, function (data) {
                    let company_id = data.company_id;
                    let company_name = data.company_name;
                    $('#company_name').val('');
                    $('#company_owner').val('');
                    $('#phone_number').val('');
                    $('#mobile_number').val('');
                    $('#address').val('');
                    $('#tax_number').val('');
                    $('#commercial_record').val('');
                    $('#debts').val('');

                    $('#modaldemo9').modal('toggle');
                    $('select#company_id').append('<option selected value="' + company_id + '">' + company_name + '</option>');
                    $('select#company_id').selectpicker('refresh');
                });
            }
        });
    </script>
@endsection
