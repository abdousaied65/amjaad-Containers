<!DOCTYPE html>
<html>
<head>
    <title> تقرير العملاء الشركات </title>
    <meta charset="utf-8"/>
    <link href="{{asset('admin-assets/css/bootstrap.min.css')}}" rel="stylesheet"/>
    <style type="text/css" media="screen">
        @font-face {
            font-family: 'Almarai';
            src: url({{asset('fonts/Almarai.ttf')}});
        }

        span.badge {
            padding: 10px !important;
        }

        .alert-default {
            border: 1px solid #aaa !important;
            color: #000 !important;
            box-shadow: 1px 1px 8px #ddd;
        }

        body, html {
            font-family: 'Almarai' !important;
        }

        .table-container {
            width: 70%;
            margin: 10px auto;
        }

        .no-print {
            position: fixed;
            bottom: 0;
            right: 10px;
            border-radius: 0;
            z-index: 9999;
        }
    </style>
    <style type="text/css" media="print">
        body, html {
            font-family: 'Almarai' !important;
        }

        * {
            font-size: 14px !important;
            color: #000 !important;
            font-weight: bold !important;
            page-break-before: avoid;
            page-break-after: avoid;
            page-break-inside: avoid;
        }

        html, body {
            margin: 0 !important;
            padding: 0 !important;
            page-break-before: avoid;
            page-break-after: avoid;
            page-break-inside: avoid;
        }

        .img-footer {

            width: 100% !important;
            height: 120px !important;
            max-height: 120px !important;

        }

        .no-print, .noprint {
            display: none;
        }

        .alert-default {
            border: 1px solid #aaa !important;
            color: #000 !important;
            box-shadow: 1px 1px 8px #ddd;
        }

        span.badge {
            padding: 10px !important;
        }

        * {
            font-size: 14px !important;
            color: #000 !important;
            font-weight: bold !important;
        }

        .no-print, .noprint {
            display: none;
        }
    </style>
</head>
<body style="background: #fff">
<table dir="rtl" class="table table-bordered table-container">
    <tbody>
    <tr>
        <td class="text-center">
            <img style="width: 100px!important; height: 100px!important;" src="{{asset('assets/img/logo.png')}}"
                 alt="">
        </td>
    </tr>
    <tr>
        <td>
            <h4 class="text-center mt-2 mb-4">تقرير العملاء الشركات </h4>

            @if(isset($bills) && !$bills->isEmpty())
                <div class="row mt-3 mb-3">
                    <div class="col-md-12">
                        <p class="alert alert-default alert-md text-center">
                            تقرير الشركة
                            [ {{$company_k->company_name}} ]
                            من تاريخ
                            [{{$_POST['from_date']}}]
                            الى تاريخ
                            [{{$_POST['to_date']}}]
                        </p>
                        <div class="col-lg-12 mt-5">
                            <p class="alert alert-default alert-md text-center"> عرض بيانات الشركة </p>
                        </div>

                        <table class="table table-condensed table-bordered text-center">
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

                        <div class="col-lg-12 mt-5">
                            <p class="alert alert-default alert-md text-center">
                                عرض فواتير الشركة
                                من تاريخ
                                [{{$_POST['from_date']}}]
                                الى تاريخ
                                [{{$_POST['to_date']}}]
                            </p>
                        </div>

                        <table id="example-table"
                               class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                            <thead>
                            <tr>
                                <th class="border-bottom-0 text-center">#</th>
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
                        <div class="clearfix"></div>

                        <div class="col-lg-12 mt-5">
                            <p class="alert alert-default alert-md text-center">
                                عرض احصائيات فواتير الشركة
                                من تاريخ
                                [{{$_POST['from_date']}}]
                                الى تاريخ
                                [{{$_POST['to_date']}}]
                            </p>
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
                            <p class="alert alert-default alert-md text-center">
                                عرض سندات قبض الشركة
                                من تاريخ
                                [{{$_POST['from_date']}}]
                                الى تاريخ
                                [{{$_POST['to_date']}}]
                            </p>
                        </div>

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

                            @foreach ($receipts as $key => $receipt)
                                <tr>
                                    <td>{{ ++$i }}</td>
                                    <td>
                                        <a target="_blank"
                                           href="{{route('supervisor.safes.show',$receipt->safe->id)}}">
                                            {{ $receipt->safe->safe_name }}
                                        </a>
                                    </td>
                                    <td>{{ $receipt->amount }}</td>
                                    <td>{{ date('Y-m-d',strtotime($receipt->created_at)) }}</td>
                                </tr>
                                <?php $total_paid = $total_paid + $receipt->amount; ?>
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
                </div>
                @if(isset($_POST['submit']))
                    <form action="{{route('companies.print')}}" method="post" class="d-inline">
                        @csrf
                        @method('POST')
                        <input type="hidden" name="from_date" value="{{$_POST['from_date']}}"/>
                        <input type="hidden" name="to_date" value="{{$_POST['to_date']}}"/>
                        <input type="hidden" name="company_id" id="companyid" value="{{$_POST['company_id']}}"/>
                        <button type="submit" class="btn btn-primary pd-x-20">
                            <i class="fa fa-print"></i>
                            طباعة التقرير
                        </button>
                    </form>
                @endif
            @endif
        </td>
    </tr>
    </tbody>
</table>
<button onclick="window.print();" class="no-print btn btn-md btn-success text-white">اضغط للطباعة</button>
<script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
</body>
</html>
