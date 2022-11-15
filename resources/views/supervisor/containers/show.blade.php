@extends('supervisor.layouts.master')
<!-- Internal Data table css -->
<style>
    i.la {
        font-size: 15px !important;
    }

    span.badge {
        padding: 10px !important;
    }

</style>
@section('content')
    <div class="row text-center">
        <div class="col-lg-12 mt-5">
            <p class="alert alert-info alert-md text-center"> عرض بيانات الحاوية </p>
        </div>
        <div class="table-responsive hoverable-table">
            <table class="table table-striped table-condensed table-bordered text-center">
                <thead>
                <tr>
                    <th class="border-bottom-0 text-center">اسم الحاوية</th>
                    <th class="border-bottom-0 text-center"> مقاس الحاوية</th>
                    <th class="border-bottom-0 text-center"> مبلغ الايجار  غير شامل الضريبة</th>
                    <th class="border-bottom-0 text-center"> الحالة</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{{ $container->name}}</td>
                    <td>{{ $container->measure }}</td>
                    <td>{{ $container->rent_amount }}</td>
                    <td>
                        @if($container->status == "مؤجرة")
                            <span class="badge badge-info">
                                    مؤجرة
                                </span>
                        @elseif($container->status == "فارغة")
                            <span class="badge badge-success">
                                    فارغة
                                </span>
                        @endif
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
@endsection
