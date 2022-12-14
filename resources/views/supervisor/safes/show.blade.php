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
            <p class="alert alert-primary alert-md text-center"> عرض بيانات الخزنة </p>
        </div>
        <div class="table-responsive hoverable-table">
            <table class="table table-striped table-condensed table-bordered text-center">
                <thead>
                <tr>
                    <th class="border-bottom-0 text-center">اسم الخزنة</th>
                    <th class="border-bottom-0 text-center"> رصيد الخزنة</th>
                    <th class="border-bottom-0 text-center"> نوع الخزنة</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{{ $safe->safe_name}}</td>
                    <td>{{ $safe->balance }}</td>
                    <td>{{ $safe->type }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
@endsection
