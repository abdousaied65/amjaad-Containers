<!DOCTYPE html>
<html>
<head>
    <title> طباعة العقود والفواتير المنفذة المسلمة </title>
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
            <h4 class="text-center mt-2 mb-4">طباعة العقود والفواتير المنفذة المسلمة </h4>
            <table dir="rtl" class="table table-condensed display table-bordered text-center">
                <thead>
                <tr>
                    <th class="border-bottom-0 text-center">رقم الفاتورة</th>
                    <th class="border-bottom-0 text-center">
                        الشركة
                    </th>
                    <th class="border-bottom-0 text-center">
                        عدد الحاويات
                    </th>
                    <th class="border-bottom-0 text-center">
                        تاريخ
                    </th>
                    <th class="border-bottom-0 text-center">
                        حالة الدفع
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
                </tr>
                </thead>
                <tbody>
                @foreach ($bills as $bill)
                    <tr>
                        <td>{{ $bill->id }}</td>
                        <td>
                            {{ $bill->company->company_name }}
                        </td>
                        <td>{{$bill->contract->containers_number}}</td>

                        <td>{{$bill->date}}</td>
                        <td>
                            @if($bill->payment_status == "unpaid")
                                غير مدفوعة
                            @elseif($bill->payment_status == "totally paid")
                                مدفوعة بالكامل
                            @elseif($bill->payment_status == "partially paid")
                                مدفوعة جزئيا
                            @endif
                        </td>
                        <td>{{$bill->vat_total}}</td>
                        <td>{{$bill->final_total}}</td>
                        <td>{{$bill->paid}}</td>
                        <td>{{$bill->rest}}</td>
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
