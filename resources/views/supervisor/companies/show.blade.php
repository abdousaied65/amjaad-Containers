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
            <p class="alert alert-info alert-md text-center"> عرض بيانات الشركة </p>
        </div>
        <div class="table-responsive hoverable-table">
            <table class="table table-striped table-condensed table-bordered text-center">
                <thead>
                <tr>
                    <th class="border-bottom-0 text-center">اسم الشركة</th>
                    <th class="border-bottom-0 text-center"> اسم مالك الشركة</th>
                    <th class="border-bottom-0 text-center">رقم الهاتف</th>
                    <th class="border-bottom-0 text-center">رقم الجوال</th>
                    <th class="border-bottom-0 text-center"> العنوان</th>
                    <th class="border-bottom-0 text-center"> الرقم الضريبى</th>
                    <th class="border-bottom-0 text-center"> السجل التجارى</th>
                    <th class="border-bottom-0 text-center"> مديونية الشركة </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{{ $company->company_name}}</td>
                    <td>{{ $company->company_owner}}</td>
                    <td>{{ $company->phone_number }}</td>
                    <td>{{ $company->mobile_number }}</td>
                    <td>{{ $company->address }}</td>
                    <td>{{ $company->tax_number }}</td>
                    <td>{{ $company->commercial_record }}</td>
                    <td>{{ $company->debts }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
@endsection
