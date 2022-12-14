<?php
use ArPHP\I18N\Arabic;
$Arabic = new Arabic();
?>
    <!DOCTYPE html>
<html>
<head>
    <title> طباعة العقد </title>
    <meta charset="utf-8"/>
    <link href="{{asset('/admin-assets/css/bootstrap.min.css')}}" rel="stylesheet"/>
    <style type="text/css" media="screen">
        @font-face {
            font-family: 'Almarai';
            src: url({{asset('fonts/Almarai.ttf')}});
        }

        table.no-border tr td {
            border: 0 !important;
        }

        span.badge {
            padding: 10px !important;
        }

        body, html {
            font-family: 'Almarai' !important;
        }

        .table-container {
            width: 80%;
            margin: 10px auto;
        }

        .no-print {
            position: fixed;
            bottom: 0;
            right: 10px;
            border-radius: 0;
            z-index: 9999;
        }

        * {
            font-size: 14px !important;
            color: #000 !important;
        }
    </style>
    <style type="text/css" media="print">
        body, html {
            font-family: 'Almarai' !important;
        }

        table.no-border tr td {
            border: 0 !important;
        }

        span.badge {
            padding: 10px !important;
        }

        * {
            line-height: 1.8 !important;
            font-size: 13px !important;
            color: #000 !important;
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
            <table class="no-border text-center w-100" dir="rtl" border="0" style="border: none!important">
                <tbody>
                <tr>
                    <td class="text-right" style="width: 30%!important;font-size: 18px!important;">
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
                        <h1 style="font-size: 30px!important;">
                            اتفاقية تأجير حاوية ونقل مخلفات
                        </h1>
                    </td>
                    <td class="text-left" style="width: 30%!important;font-size: 18px!important;">
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
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td dir="rtl">
            <h6 class="text-center">
                رقم الاتفاقية
                ( {{$contract->id}} )
            </h6>
            <div>
                <span style="margin-left: 100px;">
                انه فى يوم :
                  <?php
                    $contract_start_date = strtotime($contract->contract_start_date);
                    $start_date_hijri = $Arabic->date('d/m/Y', $contract_start_date);
                    echo $start_date_hijri;
                    ?>
                </span>
                <span style="margin-left: 100px;">
                    الموافق :
                    {{date('d/m/Y',strtotime($contract->contract_start_date))}}
                </span>
                <span class="">
                    تم الاتفاق بين كل من
                </span>
            </div>
            <div>
                <span style="margin-left: 100px;">
                    مؤسسة :
                    {{$settings->company_name}}
                </span>
                <span style="margin-left: 100px;">
                    ويمثلها :
                    ماجد سعود الشمرى
                </span>
                <span>
                    طرف اول
                </span>
            </div>
            <div>
                <span style="margin-left: 100px;">
                    السيد /مؤسسة /شركة :
                    {{$contract->company->company_name}}
                </span>
                <span style="margin-left: 100px;">
                    ويمثلها :
                    {{$contract->company->company_name}}
                </span>
                <span>
                    طرف ثانى
                </span>
            </div>
            <div>
                <span style="margin-left: 100px;">
                    العنوان :
                    {{$contract->company->address}}
                </span>
                <span style="margin-left: 150px;">
                    هاتف :
                    {{$contract->company->phone_number}}
                </span>
                <span>
                    جوال :
                    {{$contract->company->mobile_number}}
                </span>
            </div>
            <div>
                <span>
                    موقع تنفيذ العمل لدى الطرف الثانى :
                </span>
            </div>
            <div>
                <span style="margin-left: 40px;">
                    المدينة :
                    {{$contract->city}}
                </span>
                <span style="margin-left: 40px;">
                    الحى :
                    {{$contract->district}}
                </span>
                <span style="margin-left: 40px;">
                    الشارع :
                    {{$contract->street}}
                </span>
                <span style="margin-left: 40px;">
                    قطعة رقم :
                    {{$contract->plot_number}}
                </span>
                <span>
                    رقم المخطط :
                    {{$contract->chart_number}}
                </span>
            </div>
            <div>
                <div class="d-inline float-right pull-right">
                    مسطح البناء :
                    {{$contract->flat_construction}}
                </div>
                <div class="d-inline float-right pull-right" style="padding-right: 50px;" dir="rtl">
                    <span>
                        عدد الردود =
                    </span>
                </div>
                <div class="d-inline float-right pull-right text-center" style="padding-right: 20px;" dir="rtl">
                    <span dir="rtl">
                        اجمالى مسطح البناء
                        &nbsp;&nbsp;&nbsp;
                        &#88;
                    </span>
                    <span>
                        0.6
                    </span>
                    <hr style="width: 180px!important; border-top: 1px solid #333;">
                    <span>
                        3
                    </span>
                </div>
                <div class="d-inline float-right text-center pull-right" style="padding-right: 40px;" dir="rtl">
                    <span dir="rtl">
                        {{$contract->flat_construction}}
                        &nbsp;&nbsp;&nbsp;
                        &#88;
                    </span>
                    <span class="mr-2">
                        0.6
                    </span>
                    <hr style="width: 180px!important; border-top: 1px solid #333;">
                    <span>
                        3
                    </span>
                </div>
                <div class="d-inline float-right text-center pull-right mr-4" dir="rtl">
                    <span dir="rtl">
                        =
                        {{$contract->responses_number}}
                    </span>
                </div>
            </div>
            <div class="clearfix"></div>
            <div>
                حيث تم الاتفاق بين الطرفين على الاتى :
            </div>
            <div>
                1- تقوم مؤسسة
                {{$settings->company_name}}
                بتاجير عدد
                ( {{$bill->contract->containers_number}} )
                حاوية مقاس

                ( {{$measure}} )
                ياردة لنقل المخلفات .
            </div>
            <div class="d-inline float-right text-center pull-right" dir="rtl">
                وذلك لقاء مبلغ وقدره
                ( {{$bill->final_total}} )
                <span style="margin-right: 30px;">
                    شامل قيمة الضريبة المضافة 15 % قيمة الضريبة :
                </span>
            </div>
            <div class="d-inline float-right text-center pull-right" style="margin-right: 20px" dir="rtl">
                <span>
                    15
                </span>
                <hr style="width: 180px!important; border-top: 1px solid #333;">
                <span>
                    للحاوية الواحدة
                </span>
            </div>
            <div class="clearfix"></div>
            <div>
                فقط
                <?php
                $f = new NumberFormatter("ar", NumberFormatter::SPELLOUT);
                echo $f->format($bill->final_total);
                ?>
            </div>
            <div style="line-height: 2">
                <div>
                    2 - مدة بقاء الحاوية للرد الواحد بموقع العمل لدى الطرف الثاني خمس ايام من تاريخ بداية العمل أو في
                    حالة امتلائها أيهما أقرب
                    <br>
                    3 - في حالة بقاء الحاوية مدة تزيد عن خمس أيام بناء على طلب الطرف الثاني يضاف مبلغ وقدره 20
                    فقط عشرون فقط
                    <br>
                    4 - يقوم الطرف الثاني بدفع كامل المبلغ مقدماً
                    <br>
                    5 - في حالة وجود حمولة زائدة بالحاوية على الطرف الثاني تفريغ الزالد من الحمولة بموقع العمل
                    <br>
                    6 - في حالة استخدام الطرف الثاني للحاوية فيما يتنافى مع العقد وبدون علم الطرف الأول, يقوم الطرف
                    الأول بسحب الحاوية دون الرجوع للطرف الثاني
                    <br>
                    7 - حررت تلك الاتفاقين من نسخيتين بيد كل طرف نسخة للعمل عليها
                    <br>
                    8 - في حالة طلب الطرف الثاني الحاوية إلى الموقع يتم اشعار الطرف الاول بوجود مخلفات قبل اخراجها بمدة
                    لا تقل عن اسبوع
                    <br>
                    9 - مدة الحاوية خمس ايام من تاريخ وصول الحاوية للموقع منواء لمات أو لم تمتلئ أو لم تستخدم وفي حالة
                    امتلاء الحاوية يتم نقلها
                    <br>
                    10 - الحاوية مخصصة لمخالفات البناء وغير مخصة لنفايات مواد كيميانية أو أتربة أو أحجار أو مواد تحتمل
                    خطر على البيئة والأمن والسلامة
                    <br>
                    11 - تم الإتفاق بين الطرفين على شروط الإتفاقية وبعلم تام وكامل بشروط العقد
                    <br>
                </div>
            </div>
            <table class="no-border text-center w-100" border="0" style="border: none!important">
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
    <tr>
        <td>
            <table class="no-border text-center w-100" dir="rtl" border="0" style="border: none!important">
                <tbody>
                <tr>
                    <td style="width: 50%!important;">
                        {{$settings->company_name}}
                        <br>
                        <br>
                        سجل تجارى :
                        {{$settings->tax_number}}
                    </td>
                    <td style="width: 50%!important;">
                        الرقم الضريبى
                        <br>
                        <br>
                        {{$settings->commercial_record}}
                    </td>
                </tr>
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
