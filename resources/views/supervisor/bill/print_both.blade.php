<!DOCTYPE html>
<html>
<head>
    <title>
        فاتورة ضريبية مبسطة
    </title>
    <meta charset="utf-8"/>
    <link href="{{asset('/admin-assets/css/bootstrap.min.css')}}" rel="stylesheet"/>
    <style type="text/css" media="screen">
        @font-face {
            font-family: 'Almarai';
            src: url({{asset('fonts/Almarai.ttf')}});
        }

        ol li {
            margin-top: 10px !important;
        }

        * {
            color: #000 !important;
            font-size: 13px !important;
            font-weight: bold !important;
        }

        .img-footer {
            width: 100% !important;
            height: 100px !important;
            max-height: 100px !important;
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
            font-size: 12px !important;
        }

        a.no-print {
            bottom: 35px !important;
        }

        table.no-border {
            border: none !important;
        }
    </style>
    <style type="text/css" media="print">
        body, html {
            font-family: 'Almarai' !important;
        }

        * {
            font-size: 12px !important;
            color: #000 !important;
            font-weight: bold !important;
        }

        .img-footer {
            width: 100% !important;
            height: 100px !important;
            max-height: 100px !important;
        }

        .no-print, .noprint {
            display: none;
        }
    </style>
</head>
<body style="background: #fff">
<table class="table table-bordered table-container">
    <thead class="header">
    <tr>
        <td class="text-center">
            <table class="no-border text-center w-100" dir="rtl" border="0" style="border: none!important">
                <tbody>
                <tr>
                    <td class="text-right" style="width: 30%!important;">
                        {{$settings->company_name}}
                        <br>
                        س . ت :
                        {{$settings->commercial_record}}
                        <br>
                        جوال :
                        {{$settings->phone_number}}
                        <br>
                        الرقم الضريبى :
                        {{$settings->tax_number}}
                    </td>
                    <td class="text-center" style="width: 40%!important;">
                        <img src="{{asset('assets/img/logo.png')}}" style="width: 100px; height: 100px;" alt="">
                        <br>
                        <h1>
                            فاتورة ضريبية مبسطة
                        </h1>
                    </td>
                    <td class="text-left" style="width: 30%!important;">
                        {{$settings->company_name_en}}
                        <br>
                        <br>
                        L . C :
                        {{$settings->commercial_record}}
                        <br>
                        Mobile :
                        {{$settings->phone_number}}
                        <br>
                        VAT No :
                        {{$settings->tax_number}}
                        <br>
                        <div style="text-align: right!important;">
                            رقم الفاتورة :
                            {{$bill->id}}
                            <br>
                            الموافق :
                            {{$bill->date}}
                        </div>

                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>
            <div class="row" dir="rtl">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin:10px auto;">
                    <table class="table  table-bordered text-right" dir="rtl" style="font-size:12px;">
                        <tr>
                            <td> الاسم :
                                {{$bill->company->company_name}}
                            </td>
                            <td> الجوال:
                                {{$bill->company->phone_number}}
                            </td>
                            <td> الحى :
                                {{$bill->contract->district}}
                            </td>
                            <td> رقم المخطط :
                                {{$bill->contract->chart_number}}
                            </td>
                        </tr>
                        <tr>
                            <td> رقم القطعة :
                                {{$bill->contract->plot_number}}
                            </td>
                            <td> مسطح البناء :
                                {{$bill->contract->flat_construction}}
                            </td>
                            <td> عدد الحاويات :
                                {{$bill->contract->containers_number}}
                            </td>
                            <td> النوع : 20 ياردة</td>
                        </tr>
                    </table>
                </div>
                <div class="col-lg-12 text-center">
                    <table class="table table-bordered text-center" dir="rtl" style="font-size:12px;">
                        <thead>
                        <tr class="text-center">
                            <th class="text-center">المادة</th>
                            <th class="text-center">سعر مفرد</th>
                            <th class="text-center">الكمية</th>
                            <th class="text-center">اجمالى بدون ضريبة</th>
                            <th class="text-center">نسبة القيمة المضافة %</th>
                            <th class="text-center">القيمة المضافة</th>
                            <th class="text-center">المجموع بعد الضريبة</th>
                        </tr>

                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                حاويات
                            </td>
                            <td>
                                {{$bill->unit_price}}
                            </td>
                            <td>
                                {{$bill->contract->containers_number}}
                            </td>
                            <td>
                                {{$bill->total_before_discount}}
                            </td>
                            <td>
                                15 %
                            </td>
                            <td>
                                {{$bill->vat_total}}
                            </td>
                            <td>
                                {{$bill->final_total}}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="no-border w-50 text-center" dir="rtl" style="font-size:12px;">
                        <tbody>
                        <tr>
                            <td>
                                الاجمالى بدون الضريبة
                            </td>
                            <td>
                                {{$bill->total_before_discount}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                الضريبة
                            </td>
                            <td>
                                {{$bill->vat_total}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                الاجمالى شامل الضريبة
                            </td>
                            <td>
                                {{$bill->final_total}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                المبلغ المدفوع
                            </td>
                            <td>
                                {{$bill->paid}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                المبلغ المتبقى
                            </td>
                            <td>
                                {{$bill->rest}}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="mt-3 alert alert-md alert-success text-center">
                شروط عـقـد الحاوية
            </div>
            <div dir="rtl" class="text-right">
                <ol>
                    <li>
                        مدة بقاء الحاوية في الموقع أربع أيام وذلك من نزولها سواء امتلأت أو لم تمتلئ .
                    </li>
                    <li>
                        في حالة امتلائها الاتصال على الرقم :
                        {{$settings->phone_number}}
                        .
                    </li>
                    <li>
                        المبلغ المدفوع يعتبر لكل رد واحد للحاوية الواحدة
                    </li>
                    <li>
                        الحمولة تكون مستوى الحاوية من أعلى وعدم زيادة الحمولة
                    </li>
                    <li>
                        في حالة إتلاف أو ضرر الحاوية من الطرف الثاني يقوم بإصالحها
                    </li>
                    <li>
                        نزول الحاوية في موقع واحد فقط وعدم نقلها إلى موقع أخر
                    </li>
                    <li>
                        المبلغ المدفوع لا يسترد بعد استخراج الترخيص
                    </li>
                    <li>
                        على الطرف الثاني سداد رسوم المكب قبل طلب الحاوية
                    </li>
                </ol>
            </div>

            <table class="no-border text-center w-100" dir="rtl" style="border: none!important">
                <tbody>
                <tr>
                    <td style="width: 30%!important;">
                        الطرف الاول :
                        <br>
                        {{$settings->company_name}}
                    </td>
                    <td style="width: 40%!important;">
                        <?php
                        use Salla\ZATCA\GenerateQrCode;
                        use Salla\ZATCA\Tags\InvoiceDate;
                        use Salla\ZATCA\Tags\InvoiceTaxAmount;
                        use Salla\ZATCA\Tags\InvoiceTotalAmount;
                        use Salla\ZATCA\Tags\Seller;
                        use Salla\ZATCA\Tags\TaxNumber;
                        $displayQRCodeAsBase64 = GenerateQrCode::fromArray([
                            new Seller($settings->company_name), // seller name
                            new TaxNumber($settings->tax_number), // seller tax number
                            new InvoiceDate($bill->date . " " . $bill->time), // invoice date as Zulu ISO8601 @see https://en.wikipedia.org/wiki/ISO_8601
                            new InvoiceTotalAmount(round($bill->final_total, 2)), // invoice total amount
                            new InvoiceTaxAmount(round($bill->vat_total, 2)) // invoice tax amount
                            // TODO :: Support others tags
                        ])->render();
                        ?>
                        <img src="{{$displayQRCodeAsBase64}}" style="width: 100px; height: 100px;" alt="QR Code"/>
                    </td>
                    <td style="width: 30%!important;">
                        الطرف الثانى :
                        <br>
                        {{$contract->company->company_name}}
                    </td>
                </tr>
                </tbody>
            </table>

        </td>
    </tr>
    </tbody>
    <tr>
        <td>
            <table class="no-border text-center w-100" dir="rtl" border="0" style="border: none!important">
                <tbody>
                <tr>
                    <td style="width: 50%!important;">
                        حائل – طريق الملك فيصل – حي العزيزية شرق إشارة سماح – رقم حساب الراجحي / 258608016109315
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
</table>
<button onclick="window.print();" class="no-print btn btn-md btn-success text-white">اضغط للطباعة</button>
<script src="{{asset('app-assets/js/jquery.min.js')}}"></script>
</body>
</html>
