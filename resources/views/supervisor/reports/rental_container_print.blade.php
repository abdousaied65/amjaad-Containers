<!DOCTYPE html>
<html>
<head>
    <title> تقرير الحاويات المؤجرة </title>
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
            <h4 class="text-center mt-2 mb-4">تقرير الحاويات المؤجرة </h4>

            @if(isset($_POST['submit']))
                <div class="table-responsive table-hover">
                    <table id="example-table"
                           class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                        <thead>
                        <tr>
                            <th class="border-bottom-0 text-center">
                                رقم الفاتورة
                            </th>
                            <th class="border-bottom-0 text-center">
                                رقم الحاوية
                            </th>
                            <th class="border-bottom-0 text-center">
                                اسم الحاوية
                            </th>

                            <th class="border-bottom-0 text-center">
                                اسم الشركة
                            </th>

                            <th class="border-bottom-0 text-center">
                                تاريخ التاجير
                            </th>

                            <th class="border-bottom-0 text-center">
                                انتهاء العقد
                            </th>

                            <th class="border-bottom-0 text-center">
                                عدد الحاويات
                            </th>

                            <th class="border-bottom-0 text-center">
                                الردود
                            </th>

                            <th class="border-bottom-0 text-center">
                                الموقع او العنوان
                            </th>

                            <th class="border-bottom-0 text-center">
                                حالة الحاوية
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php
                        $from_date = $_POST['from_date'];
                        $to_date = $_POST['to_date'];
                        $bill_containers = \App\Models\BillContainer::whereBetween('created_at', [$from_date, $to_date])
                            ->get();
                        ?>
                        @foreach ($bill_containers as $bill_container)
                            <?php
                            $bill = $bill_container->bill;
                            $container = $bill_container->container;
                            ?>

                            <tr>
                                <td>{{ $bill->id }}</td>
                                <td>
                                    {{$container->id}}
                                </td>
                                <td>
                                    <a target="_blank"
                                       href="{{route('supervisor.containers.show',$container->id)}}">
                                        {{$container->name}}
                                    </a>
                                </td>
                                <td>
                                    <a target="_blank"
                                       href="{{route('supervisor.companies.show',$bill->company->id)}}">
                                        {{$bill->company->company_name}}
                                    </a>
                                </td>

                                <td>
                                    {{$bill->contract->contract_start_date}}
                                </td>

                                <td>
                                    {{$bill->contract->contract_end_date}}
                                </td>

                                <td>
                                    {{$bill->contract->containers_number}}
                                </td>

                                <td>
                                    {{$bill->contract->responses_number}}
                                </td>

                                <td>
                                    {{$bill->contract->city}} -
                                    {{$bill->contract->district}} -
                                    {{$bill->contract->street}}
                                </td>

                                <td>
                                    @if($container->status == "مؤجرة")
                                        مؤجرة
                                    @elseif($container->status == "فارغة")
                                        فارغة
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
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
