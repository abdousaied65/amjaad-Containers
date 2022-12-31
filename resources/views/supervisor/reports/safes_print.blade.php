<!DOCTYPE html>
<html>
<head>
    <title> تقرير الخزنات </title>
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
            <h4 class="text-center mt-2 mb-4">تقرير الخزنات </h4>
            @if(isset($receipts) && !$receipts->isEmpty())
                <div class="row mt-3 mb-3">
                    <div class="col-md-12">

                        <p class="alert alert-default alert-md text-center">
                            تقرير الخزنة
                            [ {{$safe_k->safe_name}} ]
                            من تاريخ
                            [{{$_POST['from_date']}}]
                            الى تاريخ
                            [{{$_POST['to_date']}}]
                        </p>

                        <div class="col-lg-12 mt-5">
                            <p class="alert alert-default alert-md text-center"> عرض بيانات الخزنة </p>
                        </div>

                        <table class="table table-condensed table-bordered text-center">
                            <thead>
                            <tr>
                                <th class="border-bottom-0 text-center">اسم الخزنة</th>
                                <th class="border-bottom-0 text-center"> رصيد الخزنة</th>
                                <th class="border-bottom-0 text-center"> نوع الخزنة</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $safe_k->safe_name}}</td>
                                <td>{{ $safe_k->balance }}</td>
                                <td>{{ $safe_k->type }}</td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="col-lg-12 mt-5">
                            <p class="alert alert-default alert-md text-center"> عرض سندات قبض الخزنة </p>
                        </div>
                        <table id="example-table"
                               class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                            <thead>
                            <tr>
                                <th class="border-bottom-0 text-center">#</th>
                                <th class="border-bottom-0 text-center"> الشركة (العميل)</th>
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
                                           href="{{route('supervisor.companies.show',$receipt->company->id)}}">
                                            {{ $receipt->company->company_name }}
                                        </a>
                                    </td>
                                    <td>{{ $receipt->amount }}</td>
                                    <td>{{ date('Y-m-d',strtotime($receipt->created_at)) }}</td>
                                </tr>
                                <?php $total_paid = $total_paid + $receipt->amount; ?>
                            @endforeach
                            </tbody>
                        </table>
                        <table class="table table-bordered mt-5 mb-5 text-center">
                            <thead>
                            <tr>
                                <th>اجمالى المبالغ المدفوعة الى الخزنة</th>
                                <th>رصيد الخزنة الحالى</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{$total_paid}}</td>
                                <td>{{$safe_k->balance}}</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                @if(isset($_POST['submit']))
                    <form action="{{route('safes.print')}}" method="post" class="d-inline">
                        @csrf
                        @method('POST')
                        <input type="hidden" name="from_date" value="{{$_POST['from_date']}}"/>
                        <input type="hidden" name="to_date" value="{{$_POST['to_date']}}"/>
                        <input type="hidden" name="safe_id" id="safeid" value="{{$_POST['safe_id']}}"/>
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
