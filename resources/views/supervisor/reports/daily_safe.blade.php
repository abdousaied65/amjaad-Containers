@extends('supervisor.layouts.master')
<style>
    span.badge {
        padding: 10px !important;
    }

    table.display thead tr th {
        padding: 20px !important;
    }

    table.display tbody tr td {
        padding: 20px !important;
    }
    .box{
        width: 100%;
        height: auto;
        border: 1p
    }
</style>
@section('content')
    <!-- main-content closed -->
    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <strong>Errors :</strong>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header pb-0">
                    <h5 class="alert alert-md alert-dark text-center">
                        اغلاق يومية الصندوق
                    </h5>
                </div>
                <div class="card-body p-2 m-1">
                    <div class="row mt-3 mb-3 text-center">
                        <div class="alert alert-danger alert-sm col-lg-4">
                            <h5>
                                عدد العقود المنفذة
                            </h5>
                            <p>
                                {{$executed_bills->count()}}
                            </p>
                        </div>
                        <div class="alert alert-success alert-sm col-lg-4">
                            <h5>
                                عدد العقود غير المنفذة
                            </h5>
                            <p>
                                {{$unexecuted_bills->count()}}
                            </p>
                        </div>

                        <div class="alert alert-primary alert-sm col-lg-4">
                            <h5>
                                عدد الحاويات التي تم تسليمها - استلامها
                            </h5>
                            <p>
                                {{$bill_containers->count()}}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card-body p-2 m-1">
                    <h3 class="alert alert-md alert-danger text-center">
                        المبالغ المقبوضة ضمن اليوم
                        [
                        {{$amounts}}
                        ]
                    </h3>
                    <div class="table-responsive hoverable-table">
                        <table class="display w-100  text-nowrap table-bordered" id="example-table"
                               style="text-align: center;">
                            <thead>
                            <tr>
                                <th class="border-bottom-0 text-center">#</th>
                                <th class="border-bottom-0 text-center"> الشركة</th>
                                <th class="border-bottom-0 text-center"> الخزنة</th>
                                <th class="border-bottom-0 text-center"> المبلغ</th>
                                <th class="border-bottom-0 text-center"> نوع الدفع </th>
                                <th class="border-bottom-0 text-center"> تاريخ الدفع </th>
                            </tr>
                            </thead>
                            <tbody>
                            @php
                                $i = 0;
                            @endphp

                            @foreach ($payments as $key => $payment)
                                <tr>
                                    <td>{{ ++$i }}</td>
                                    <td>
                                        <a target="_blank"
                                           href="{{route('supervisor.companies.show',$payment->company->id)}}">
                                            {{ $payment->company->company_name}}
                                        </a>
                                    </td>
                                    <td>
                                        <a target="_blank"
                                           href="{{route('supervisor.safes.show',$payment->safe->id)}}">
                                            {{ $payment->safe->safe_name }}
                                        </a>
                                    </td>
                                    <td>{{ $payment->amount }}</td>
                                    <td>{{ $payment->safe->type }}</td>
                                    <td>{{ date('Y-m-d',strtotime($payment->created_at)) }}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    </div>

@endsection

<script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
<script>
    $(document).ready(function () {
        $('#example-table').DataTable({
            "order": [[0, "desc"]]
        });
    });
</script>

