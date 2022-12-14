<!DOCTYPE html>
<html dir="rtl" style="direction: rtl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="Description" content="{{$settings->company_name}}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="Author" content="{{$settings->company_name}}">
    <link rel="icon" href="{{asset('assets/img/favicon.ico')}}" type="image/ico">
    <meta name="Keywords" content="{{$settings->company_name}}"/>
    <title>
        {{$settings->company_name}}
    </title>
    @include('supervisor.layouts.head')
    <style>
        label{
            display: block!important;
            margin-bottom: 10px!important;
        }
        .select2-selection__rendered {
            line-height: 40px !important;
            border-radius: 0 !important;
        }
        .dataTables_length{
            float: right!important;
        }
        .select2-container .select2-selection--single {
            height: 40px !important;
            border-radius: 0 !important;
        }

        .select2-selection__arrow {
            height: 40px !important;
            border-radius: 0 !important;
        }

        .select2-search__field {
            height: 40px !important;
            line-height: 40px !important;
            outline: 0 !important;
        }

        .select2-container .select2-dropdown .select2-search__field {
            height: 35px !important;
        }

        table tr td {
            font-size: 14px !important;
            padding:5px!important; ;
        }
        .form-control{
            height:40px!important;
            border-radius: 0px!important;
        }
        .btn,.btn-md,.btn-sm,.btn.dropdown-toggle.bs-placeholder, .btn.dropdown-toggle{
            height:40px!important;
            margin: 0!important;
        }
    </style>
</head>
<body dir="rtl" style="direction: rtl">
<div id="layout-a" class="theme-blue">
    <!-- Navigation -->
    @include('supervisor.layouts.main-sidebar')
    <!-- main body area -->
    <div class="main px-xl-5 px-lg-4 px-md-3">
        @include('supervisor.layouts.main-header')
        @yield('content')
    </div>
</div>
@include('supervisor.layouts.footer-scripts')
</body>
</html>
