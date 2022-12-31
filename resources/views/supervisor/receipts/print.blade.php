<!DOCTYPE html>
<html>
<head>
    <title> طباعة سندات القبض </title>
    <meta charset="utf-8"/>
    <link href="{{asset('/admin-assets/css/bootstrap.min.css')}}" rel="stylesheet"/>
    <style type="text/css" media="screen">
        @font-face {
            font-family: 'Almarai';
            src: url({{asset('fonts/Almarai.ttf')}});
        }

        span.badge {
            padding: 10px !important;
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
<table class="table table-bordered table-container">
    <tbody>
    <tr>
        <td class="text-center">
            <img style="width: 100px!important; height: 100px!important;" src="{{asset('assets/img/logo.png')}}"
                 alt="">
        </td>
    </tr>
    <tr>
        <td>
            <h4 class="text-center mt-2 mb-4">طباعة كل سندات القبض </h4>
            <table dir="rtl" class="table table-condensed display table-bordered text-center">
                <thead>
                <tr>
                    <th class="border-bottom-0 text-center">#</th>
                    <th class="border-bottom-0 text-center"> الشركة</th>
                    <th class="border-bottom-0 text-center"> الخزنة</th>
                    <th class="border-bottom-0 text-center"> المبلغ</th>
                    <th class="border-bottom-0 text-center"> ملاحظات</th>
                    <th class="border-bottom-0 text-center"> تاريخ الدفع </th>
                </tr>
                </thead>
                <tbody>
                @php
                    $i = 0;
                @endphp
                @foreach ($receipts as $receipt)
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
                        <td>{{ $receipt->notes }}</td>
                        <td>{{ date('Y-m-d',strtotime($receipt->created_at)) }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
<button onclick="window.print();" class="no-print btn btn-md btn-success text-white">اضغط للطباعة</button>
<script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
</body>
</html>
