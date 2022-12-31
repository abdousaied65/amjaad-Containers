<!DOCTYPE html>
<html>
<head>
    <title> تقرير حركة الحاويات </title>
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
            <h4 class="text-center mt-2 mb-4">تقرير حركة الحاويات</h4>

            @if(isset($bills_containers) && !$bills_containers->isEmpty())
                <div class="row mt-3 mb-3">
                    <div class="col-md-12">
                        <p class="alert alert-default alert-md text-center">
                            تقرير حركة الحاوية
                            [ {{$container_k->name}} ]
                            من تاريخ
                            [{{$_POST['from_date']}}]
                            الى تاريخ
                            [{{$_POST['to_date']}}]
                        </p>
                        <div class="col-lg-12 mt-5">
                            <p class="alert alert-default alert-md text-center"> عرض بيانات الحاوية </p>
                        </div>
                        <table dir="rtl" class="table table-condensed table-bordered text-center">
                            <thead>
                            <tr>
                                <th class="border-bottom-0 text-center">اسم الحاوية</th>
                                <th class="border-bottom-0 text-center"> مقاس الحاوية</th>
                                <th class="border-bottom-0 text-center"> مبلغ الايجار غير شامل الضريبة</th>
                                <th class="border-bottom-0 text-center"> الحالة</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $container_k->name}}</td>
                                <td>{{ $container_k->measure }}</td>
                                <td>{{ $container_k->rent_amount }}</td>
                                <td>
                                    {{$container_k->status}}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="col-lg-12 mt-5">
                            <p class="alert alert-default alert-md text-center"> عرض فواتير الحاوية

                                من تاريخ
                                [{{$_POST['from_date']}}]
                                الى تاريخ
                                [{{$_POST['to_date']}}]
                            </p>
                        </div>
                        <table dir="rtl" id="example-table"
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
                                    الحاوية
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
                            @foreach ($bills_containers as $bill_container)
                                <tr>
                                    <td>{{ ++$i }}</td>
                                    <td>
                                        <a target="_blank"
                                           href="{{route('supervisor.supervisors.show',$bill_container->bill->supervisor->id)}}">
                                            {{ $bill_container->bill->supervisor->name }}
                                        </a>
                                    </td>
                                    <td>
                                        <a target="_blank"
                                           href="{{route('supervisor.companies.show',$bill_container->bill->company->id)}}">
                                            {{ $bill_container->bill->company->company_name }}
                                        </a>
                                    </td>
                                    <td>
                                        <a target="_blank"
                                           href="{{route('supervisor.containers.show',$bill_container->container->id)}}">
                                            {{ $bill_container->container->name }}
                                        </a>
                                    </td>
                                    <td>{{$bill_container->bill->date}}</td>
                                    <td>{{$bill_container->bill->time}}</td>
                                    <td>
                                        @if($bill_container->bill->payment_status == "unpaid")
                                            <span class="badge badge-danger pd-10">
                                                            غير مدفوعة
                                                        </span>
                                        @elseif($bill_container->bill->payment_status == "totally paid")
                                            <span class="badge badge-success pd-10">
                                                             مدفوعة بالكامل
                                                        </span>
                                        @elseif($bill_container->bill->payment_status == "partially paid")
                                            <span class="badge badge-info pd-10">
                                                             مدفوعة جزئيا
                                                        </span>
                                        @endif
                                    </td>
                                    <td>{{$bill_container->bill->discount_total}}</td>
                                    <td>{{$bill_container->bill->vat_total}}</td>
                                    <td>{{$bill_container->bill->final_total}}</td>
                                    <td>{{$bill_container->bill->paid}}</td>
                                    <td>{{$bill_container->bill->rest}}</td>
                                    <td>{{$bill_container->bill->notes}}</td>
                                </tr>
                                <?php
                                $discount_sum = $discount_sum + $bill_container->bill->discount_total;
                                $vat_sum = $vat_sum + $bill_container->bill->vat_total;
                                $total_sum = $total_sum + $bill_container->bill->final_total;
                                $paid_sum = $paid_sum + $bill_container->bill->paid;
                                $rest_sum = $rest_sum + $bill_container->bill->rest;
                                ?>
                            @endforeach
                            </tbody>
                        </table>
                        <div class="clearfix"></div>
                        <div class="col-lg-12 mt-5">
                            <p class="alert alert-default alert-md text-center"> عرض احصائيات فواتير الحاوية

                                من تاريخ
                                [{{$_POST['from_date']}}]
                                الى تاريخ
                                [{{$_POST['to_date']}}]
                            </p>
                        </div>
                        <table dir="rtl" class="table table-bordered mt-5 mb-5 text-center">
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
                    </div>
                </div>
            @endif

        </td>
    </tr>
    </tbody>
</table>
<button onclick="window.print();" class="no-print btn btn-md btn-success text-white">اضغط للطباعة</button>
<script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
</body>
</html>
