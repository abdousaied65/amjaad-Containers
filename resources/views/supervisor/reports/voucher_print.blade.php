<!DOCTYPE html>
<html>
<head>
    <title> تقرير سندات الصرف </title>
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
            <h4 class="text-center mt-2 mb-4">تقرير سندات الصرف </h4>
            @if(isset($vouchers) && !$vouchers->isEmpty())
                <div class="row mt-3 mb-3">
                    <div class="col-md-12">

                        <p class="alert alert-default alert-md text-center">
                            تقرير سندات الصرف للشركة
                            <?php
                            $company = \App\Models\Company::FindOrFail($_POST['company_id']);
                            echo "[ " . $company->company_name . " ]";
                            ?>
                            للخزنة
                            @if($_POST['safe_id'] == "all" )
                                [ كل الخزن ]
                            @else
                                <?php

                                $safe = \App\Models\Safe::FindOrFail($_POST['safe_id']);
                                echo "[ " . $safe->safe_name . " ]";

                                ?>
                            @endif
                            من تاريخ
                            [{{$_POST['from_date']}}]
                            الى تاريخ
                            [{{$_POST['to_date']}}]
                        </p>

                        <div class="table-responsive table-hover">
                            <table id="example-table"
                                   class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                                <thead>
                                <tr>
                                    <th class="border-bottom-0 text-center">#</th>
                                    <th class="border-bottom-0 text-center"> الشركة</th>
                                    <th class="border-bottom-0 text-center"> الخزنة</th>
                                    <th class="border-bottom-0 text-center"> المبلغ</th>
                                    <th class="border-bottom-0 text-center"> ملاحظات</th>
                                    <th class="border-bottom-0 text-center"> تاريخ الدفع</th>
                                </tr>
                                </thead>
                                <tbody>
                                @php
                                    $i = 0;
                                @endphp

                                @foreach ($vouchers as $voucher)
                                    <tr>
                                        <td>{{ ++$i }}</td>
                                        <td>
                                            <a target="_blank"
                                               href="{{route('supervisor.companies.show',$voucher->company->id)}}">
                                                {{ $voucher->company->company_name}}
                                            </a>
                                        </td>
                                        <td>
                                            <a target="_blank"
                                               href="{{route('supervisor.safes.show',$voucher->safe->id)}}">
                                                {{ $voucher->safe->safe_name }}
                                            </a>
                                        </td>
                                        <td>{{ $voucher->amount }}</td>
                                        <td>{{ $voucher->notes }}</td>
                                        <td>{{ date('Y-m-d',strtotime($voucher->created_at)) }}</td>
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="mt-4 mb-4 text-center alert-default p-2 fw-bold"
                             style="font-size: 20px!important;">
                            الاجمالى :
                            <?php
                            $total = 0;
                            if (!$vouchers->isEmpty()) {
                                foreach ($vouchers as $voucher) {
                                    $total = $total + $voucher->amount;
                                }
                            }
                            ?>
                            {{$total}}
                        </div>

                    </div>
                </div>
                @if(isset($_POST['submit']))
                    <form action="{{route('voucher.print')}}" method="post" class="d-block mt-3 mb-3">
                        @csrf
                        @method('POST')
                        <input type="hidden" name="from_date" value="{{$_POST['from_date']}}"/>
                        <input type="hidden" name="to_date" value="{{$_POST['to_date']}}"/>
                        <input type="hidden" name="company_id" id="companyid" value="{{$_POST['company_id']}}"/>
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
