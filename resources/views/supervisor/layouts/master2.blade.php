<!DOCTYPE html>
<html dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="Description" content="{{$settings->company_name}}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="Author" content="{{$settings->company_name}}">
    <link rel="icon" href="{{asset('assets/img/favicon.ico')}}" type="image/png">
    <meta name="Keywords" content="{{$settings->company_name}}"/>
    <title>
        {{$settings->company_name}}
    </title>
    <style>
        .form-control{
            height:40px!important;
            border-radius: 0px!important;
        }
    </style>
    @include('supervisor.layouts.head')
</head>
<body direction="rtl" dir="rtl" style="direction: rtl">
<div id="layout-a" class="theme-blue">
    @yield('content')
</div>
@include('supervisor.layouts.footer-scripts')
</body>
</html>
