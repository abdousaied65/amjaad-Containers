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
                            اتفاقية تأجير حاوية ونقل مخلفات
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
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="thisTD">
            <center style="margin:5px auto;">
                <div style="font-weight:bold;border:1px dashed #333; padding: 5px 30px;">
                    <h1>
                        فاتورة ضريبية مبسطة
                    </h1>
                    <h1>
                        عقد حاويات
                    </h1>
                </div>
            </center>

            <div class="row" dir="rtl">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin:10px auto;">
                    <table class="table  table-bordered text-right" dir="rtl" style="font-size:12px;">
                        <tr>
                            <td style="width:40%;"> تاريخ الفاتورة</td>
                            <td>{{$bill->date}}</td>
                            <td style="width:40%;"> الرقم الضريبى</td>
                            <td>{{$settings->tax_number}}</td>
                        </tr>
                        <tr>
                            <td style="width:40%;">رقم الفاتورة</td>
                            <td>{{ $bill->id }}</td>
                            <td style="width:40%;">السجل التجارى</td>
                            <td>{{$settings->commercial_record}}</td>
                        </tr>
                        <tr>
                            <td style="width:15%;">اسم المؤسسة</td>
                            <td style="width:35%;">{{$settings->company_name}}</td>
                            <td style="width:15%;">عنوان المؤسسة</td>
                            <td style="width:35%;">{{$settings->address}}</td>
                        </tr>
                        <tr>
                            <td style="width:15%;">رقم التليفون</td>
                            <td style="width:35%;">{{$settings->phone_number}}</td>
                            <td style="width:15%;"> اسم البائع</td>
                            <td style="width:35%;">{{$bill->supervisor->name}}</td>
                        </tr>
                    </table>
                </div>
                <div class="col-lg-12">
                    <table class="table table-bordered text-right" dir="rtl" style="font-size:12px;">
                        <tr class="text-center">
                            <td colspan="6">بيانات العميل</td>
                        </tr>
                        <tr>
                            <td style="width:15%;">اسم العميل</td>
                            <td style="width:35%;">{{$bill->company->company_name}}</td>
                            <td style="width:15%;"> ينوب عنها</td>
                            <td style="width:35%;" colspan="3">{{$bill->company->company_name}}</td>
                        </tr>
                        <tr>
                            <td style="width:15%;">رقم التليفون</td>
                            <td style="width:20%;direction:ltr;">{{$bill->company->phone_number}}</td>
                            <td style="width:15%;">الرقم الضريبى</td>
                            <td style="width:20%;">{{$bill->company->tax_number}}</td>
                            <td style="width:15%;">
                                العنوان
                            </td>
                            <td style="width:15%;" colspan="3">
                                {{$bill->company->address}}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <?php
            echo '<h6 class="alert alert-sm alert-primary text-center">
                        <i class="fa fa-info-circle"></i>
                    بيانات عناصر الفاتورة  رقم
                        ' . $bill->id . '
                </h6>';
            $i = 0;
            echo "<div class='table-responsive'>";
            echo "<table style='width:100%;text-align:center' dir='rtl' class='table table-bordered text-right'>";
            echo "<thead dir='rtl' class='text-center bg-primary' style='text-align:center;'>";
            echo "<td style='border:1px solid #ddd;font-family:Almarai !important;'>م</td>";
            echo "<td style='border:1px solid #ddd;font-family:Almarai !important;'>بيانات المنتج</td>";
            echo "<td style='border:1px solid #ddd;font-family:Almarai !important;'>العدد</td>";
            echo "<td style='border:1px solid #ddd;font-family:Almarai !important;'> سعر الوحدة </td>";
            echo "<td style='border:1px solid #ddd;font-family:Almarai !important;'> سعر الاجمالى</td>";
            echo "</thead>";
            echo "<tbody>";

            echo "<tr>";
            echo "<td>" . ++$i . "</td>";
            echo "<td> حاوية </td>";
            echo "<td> ".$bill->contract->containers_number." </td>";
            echo "<td>" . $bill->unit_price . "</td>";
            echo "<td>" . round(($bill->unit_price * $bill->contract->containers_number),2) . "</td>";
            echo "</tr>";

            echo "</tbody>";
            echo "</table>";
            echo "</div>";

            echo "<table class='table table-bordered text-right' dir='rtl' style='font-size:12px;'>
                <tr>
                    <td>الاجمالى قبل الخصم والضريبة : " . round($bill->total_before_discount, 2) . "</td>";
            echo "<td colspan='2'>";
            echo "<span style='margin-left: 50px;'> نسبة الخصم : (" . $bill->discount_percent . " % )</span>";
            echo "قيمة الخصم : " . $bill->discount_total;
            echo "</td></tr>";
            echo "<tr>
                    <td>ضريبة القيمة المضافة : ( " . round(15, 2) . "% ) </td>
                    <td colspan='2'>قيمة ضريبة القيمة المضافة    : " . round($bill->vat_total, 2) . " </td>
                </tr>";
            echo "<tr>
                <td>اجمالى  الفاتورة بعد الخصم والضريبة :  " . round($bill->final_total, 2) . "</td>";

            echo "<td>المبلغ المدفوع :  " . $bill->paid . "</td>";
            echo " <td style='text-align:center;' colspan='2'> المبلغ المتبقى : " . $bill->rest . " </td>
                </tr>";
            echo "</table>";
            ?>
            <div class="text-center">
            <!--{!! SimpleSoftwareIO\QrCode\Facades\QrCode::size(80)->generate(Request::url()); !!}-->
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
            </div>
        </td>
    </tr>
    </tbody>
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
                        {{$settings->commercial_record}}
                    </td>
                    <td style="width: 50%!important;">
                        الرقم الضريبى
                        <br>
                        <br>
                        {{$settings->tax_number}}
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
