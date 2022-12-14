@extends('supervisor.layouts.master')
<style>
    span.badge {
        padding: 10px !important;
    }

    table.display thead tr th {
        padding: 20px !important;
    }

    table.display tbody tr td {
        padding: 20px !important;
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

    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header bg-primary pb-0">
                    <h5 class="p-1 text-center text-white">
                        تقرير العملاء (الشركات)
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('companies.report.post')}}" method="post">
                        @csrf
                        @method('POST')
                        <div class="row m-t-3 mb-3">
                            <div class="col-md-4">
                                <label> اختر الشركة <span class="text-danger">*</span></label>
                                <select required class="form-control w-100 data-table"
                                        name="company_id" id="company_id">
                                    <option value="">اختر الشركة</option>
                                    @foreach($companies as $company)
                                        <option
                                            @if(isset($company_k) && $company_k->id == $company->id)
                                            selected
                                            @endif
                                            value="{{$company->id}}">{{$company->company_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                            <button class="btn btn-primary pd-x-20" type="submit">
                                عرض التقرير
                            </button>
                        </div>
                    </form>
                    @if(isset($bills) && !$bills->isEmpty())
                        <div class="row mt-3 mb-3">
                            <div class="col-md-12">
                                <p class="alert alert-success alert-md text-center">
                                    تقرير الشركة
                                    [ {{$company_k->company_name}} ]
                                </p>
                                <div class="col-lg-12 mt-5">
                                    <p class="alert alert-danger alert-md text-center"> عرض بيانات الشركة </p>
                                </div>

                                <div class="table-responsive hoverable-table">
                                    <table class="table table-striped table-condensed table-bordered text-center">
                                        <thead>
                                        <tr>
                                            <th class="border-bottom-0 text-center">اسم الشركة</th>
                                            <th class="border-bottom-0 text-center"> اسم مالك الشركة</th>
                                            <th class="border-bottom-0 text-center">رقم الهاتف</th>
                                            <th class="border-bottom-0 text-center">رقم الجوال</th>
                                            <th class="border-bottom-0 text-center"> العنوان</th>
                                            <th class="border-bottom-0 text-center"> الرقم الضريبى</th>
                                            <th class="border-bottom-0 text-center"> السجل التجارى</th>
                                            <th class="border-bottom-0 text-center"> مديونية الشركة</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{{ $company_k->company_name}}</td>
                                            <td>{{ $company_k->company_owner}}</td>
                                            <td>{{ $company_k->phone_number }}</td>
                                            <td>{{ $company_k->mobile_number }}</td>
                                            <td>{{ $company_k->address }}</td>
                                            <td>{{ $company_k->tax_number }}</td>
                                            <td>{{ $company_k->commercial_record }}</td>
                                            <td>{{ $company_k->debts }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <div class="col-lg-12 mt-5">
                                    <p class="alert alert-danger alert-md text-center"> عرض فواتير الشركة </p>
                                </div>
                                <div class="table-responsive table-hover">
                        <table id="example-table"
                               class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                            <thead>
                                        <tr>
                                            <th class="border-bottom-0 text-center">#</th>
                                            <th class="border-bottom-0 text-center">
                                                العقد
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                المسؤول
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الشركة
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الحاويات
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                تاريخ
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                وقت
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                حالة الدفع
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الخصم
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الضريبة
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الاجمالى
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                المدفوع
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                المتبقى
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                ملاحظات
                                            </th>
                                            <th style="width: 5%!important;" class="border-bottom-0 text-center">
                                                خيارات
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @php
                                            $i = 0; $discount_sum = 0; $vat_sum = 0; $total_sum = 0;
                                            $paid_sum = 0; $rest_sum = 0;
                                        @endphp
                                        @foreach ($bills as $key => $bill)
                                            <tr>
                                                <td>{{ ++$i }}</td>
                                                <td>
                                                    <a data-toggle="modal" contract_id="{{$bill->contract->id}}"
                                                       href="#modaldemo8"
                                                       class="view_contract">
                                                        تفاصيل
                                                    </a>
                                                </td>
                                                <td>
                                                    <a target="_blank"
                                                       href="{{route('supervisor.supervisors.show',$bill->supervisor->id)}}">
                                                        {{ $bill->supervisor->name }}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a target="_blank"
                                                       href="{{route('supervisor.companies.show',$bill->company->id)}}">
                                                        {{ $bill->company->company_name }}
                                                    </a>
                                                </td>
                                                <td>
                                                    @foreach($bill->bill_containers as $container)
                                                        <p>
                                                            <a target="_blank"
                                                               href="{{route('supervisor.containers.show',$container->container->id)}}">
                                                                حاوية رقم :
                                                                {{$container->container->name}}
                                                            </a>
                                                        </p>
                                                    @endforeach
                                                </td>
                                                <td>{{$bill->date}}</td>
                                                <td>{{$bill->time}}</td>
                                                <td>
                                                    @if($bill->payment_status == "unpaid")
                                                        <span class="badge badge-danger pd-10">
                                                            غير مدفوعة
                                                        </span>
                                                    @elseif($bill->payment_status == "totally paid")
                                                        <span class="badge badge-success pd-10">
                                                             مدفوعة بالكامل
                                                        </span>
                                                    @elseif($bill->payment_status == "partially paid")
                                                        <span class="badge badge-info pd-10">
                                                             مدفوعة جزئيا
                                                        </span>
                                                    @endif
                                                </td>
                                                <td>{{$bill->discount_total}}</td>
                                                <td>{{$bill->vat_total}}</td>
                                                <td>{{$bill->final_total}}</td>
                                                <td>{{$bill->paid}}</td>
                                                <td>{{$bill->rest}}</td>
                                                <td>{{$bill->notes}}</td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button type="button"
                                                                class="btn btn-danger-gradient dropdown-toggle"
                                                                data-toggle="dropdown">
                                                            <i class="fa fa-list"></i>
                                                            خيارات
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a target="_blank"
                                                               href="{{route('print.contract',$bill->contract->id)}}"
                                                               class="dropdown-item">
                                                                <i class="fa fa-print"></i>
                                                                طباعة العقد
                                                            </a>
                                                            <a target="_blank" href="{{route('print.bill',$bill->id)}}"
                                                               class="dropdown-item">
                                                                <i class="fa fa-print"></i>
                                                                طباعة الفاتورة
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <?php
                                            $discount_sum = $discount_sum + $bill->discount_total;
                                            $vat_sum = $vat_sum + $bill->vat_total;
                                            $total_sum = $total_sum + $bill->final_total;
                                            $paid_sum = $paid_sum + $bill->paid;
                                            $rest_sum = $rest_sum + $bill->rest;
                                            ?>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                <div class="clearfix"></div>

                                <div class="col-lg-12 mt-5">
                                    <p class="alert alert-danger alert-md text-center"> عرض احصائيات فواتير الشركة </p>
                                </div>
                                <table class="table table-bordered mt-5 mb-5 text-center">
                                    <thead>
                                    <tr>
                                        <th>
                                            مجموع الخصم
                                        </th>
                                        <th>
                                            مجموع الضريبة
                                        </th>
                                        <th>
                                            مجموع الاجمالى النهائى
                                        </th>
                                        <th>
                                            مجموع المبالغ المدفوعة
                                        </th>
                                        <th>
                                            مجموع المبالغ المتبقية
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            {{$discount_sum}}
                                        </td>
                                        <td>
                                            {{$vat_sum}}
                                        </td>
                                        <td>
                                            {{$total_sum}}
                                        </td>
                                        <td>
                                            {{$paid_sum}}
                                        </td>
                                        <td>
                                            {{$rest_sum}}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div class="col-lg-12 mt-5">
                                    <p class="alert alert-danger alert-md text-center"> عرض مدفوعات الشركة </p>
                                </div>
                                <div class="table-responsive table-hover">
                        <table id="example-table"
                               class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                            <thead>
                                        <tr>
                                            <th class="border-bottom-0 text-center">#</th>
                                            <th class="border-bottom-0 text-center"> الخزنة</th>
                                            <th class="border-bottom-0 text-center"> المبلغ</th>
                                            <th class="border-bottom-0 text-center"> تاريخ الدفع</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @php
                                            $i = 0;$total_paid = 0;
                                        @endphp

                                        @foreach ($company_k->payments as $key => $payment)
                                            <tr>
                                                <td>{{ ++$i }}</td>
                                                <td>
                                                    <a target="_blank"
                                                       href="{{route('supervisor.safes.show',$payment->safe->id)}}">
                                                        {{ $payment->safe->safe_name }}
                                                    </a>
                                                </td>
                                                <td>{{ $payment->amount }}</td>
                                                <td>{{ date('Y-m-d',strtotime($payment->created_at)) }}</td>
                                            </tr>
                                            <?php $total_paid = $total_paid + $payment->amount; ?>
                                        @endforeach
                                        <tr>
                                            <td colspan="2">
                                                اجمالى المبالغ المدفوعة من الشركة :
                                                {{$total_paid}}
                                            </td>
                                            <td colspan="2">
                                                مديونية الشركة الحالية :
                                                {{$company_k->debts}}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {{--                                <a class="btn btn-md btn-primary" href="javascript:;" onclick="window.print();">--}}
                                {{--                                    <i class="fa fa-print"></i>--}}
                                {{--                                    طباعة التقرير--}}
                                {{--                                </a>--}}
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <!-- Modal effects -->
    <div class="modal" id="modaldemo8">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content modal-content-demo">
                <div class="modal-header text-center">
                    <h6 class="modal-title w-100" style="font-family: 'Almarai'; ">
                        عرض تفاصيل العقد
                    </h6>

                </div>
                <div class="modal-body view_contract_details">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
                </div>
            </div>
        </div>
    </div>
@endsection

<script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
<script>
    $(document).ready(function () {
        $('.view_contract').on('click', function () {
            let contract_id = $(this).attr('contract_id');
            $.ajax({
                type: 'post',
                url: "{{route('view.contract')}}",
                data: {
                    "_token": "{{csrf_token()}}",
                    'contract_id': contract_id,
                },
                success: function (data) {
                    $('.view_contract_details').html(data)
                }
            });
        });
        $('#example-table').DataTable({
            "columnDefs": [
                {"orderable": false, "targets": [14]}
            ],
            "order": [[0, "desc"]]
        });
    });
</script>

