<!DOCTYPE html>
<html>
<head>
    <title> اغلاق يومية الصندوق </title>
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
        span.badge {
            padding: 10px !important;
        }

        table.display thead tr th {
            padding: 20px !important;
        }

        table.display tbody tr td {
            padding: 20px !important;
        }

        .box {
            width: 100%;
            height: auto;
            padding-top: 30px !important;
            border: 1px solid #ddd;
        }

        h5 {
            font-size: 16px !important;
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
        span.badge {
            padding: 10px !important;
        }

        table.display thead tr th {
            padding: 20px !important;
        }

        table.display tbody tr td {
            padding: 20px !important;
        }

        .box {
            width: 100%;
            height: auto;
            padding-top: 30px !important;
            border: 1px solid #ddd;
        }

        h5 {
            font-size: 16px !important;
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
            <h4 class="text-center mt-2 mb-4">اغلاق يومية الصندوق </h4>

            @if(isset($_POST['submit']))
                <div class="card-body p-2 m-1">
                    <div class="row mt-3 mb-3 text-center">
                        <div class="col-4 box">
                            <h5>
                                عدد العقود المنفذة
                            </h5>
                            <h6>
                                {{$executed_bills->count()}}
                            </h6>
                        </div>
                        <div class="col-4 box">
                            <h5>
                                عدد العقود غير المنفذة
                            </h5>
                            <h6>
                                {{$unexecuted_bills->count()}}
                            </h6>
                        </div>
                        <div class="col-4 box">
                            <h5>
                                عدد الحاويات التي تم تسليمها - استلامها
                            </h5>
                            <h6>
                                {{$bill_containers->count()}}
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="card-body p-2 m-1">
                    <h6 class="alert alert-md alert-danger text-center">
                        المبالغ المقبوضة ضمن اليوم
                        [
                        {{$amounts}}
                        ]
                    </h6>
                    <div class="table-responsive table-hover">
                        <table id="example-table"
                               class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                            <thead>
                            <tr>
                                <th class="border-bottom-0 text-center">#</th>
                                <th class="border-bottom-0 text-center"> الشركة</th>
                                <th class="border-bottom-0 text-center"> الخزنة</th>
                                <th class="border-bottom-0 text-center"> المبلغ</th>
                                <th class="border-bottom-0 text-center"> نوع الدفع </th>
                                <th class="border-bottom-0 text-center"> تاريخ الدفع </th>
                            </tr>
                            </thead>
                            <tbody>
                            @php
                                $i = 0;
                            @endphp

                            @foreach ($receipts as $key => $receipt)
                                <tr>
                                    <td>{{ ++$i }}</td>
                                    <td>
                                        <a target="_blank"
                                           href="{{route('supervisor.companies.show',$receipt->company->id)}}">
                                            {{ $receipt->company->company_name}}
                                        </a>
                                    </td>
                                    <td>
                                        <a target="_blank"
                                           href="{{route('supervisor.safes.show',$receipt->safe->id)}}">
                                            {{ $receipt->safe->safe_name }}
                                        </a>
                                    </td>
                                    <td>{{ $receipt->amount }}</td>
                                    <td>{{ $receipt->safe->type }}</td>
                                    <td>{{ date('Y-m-d',strtotime($receipt->created_at)) }}</td>
                                </tr>
                            @endforeach
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
