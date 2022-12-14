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
                <div class="card-header bg-primary pb-0">
                    <h5 class="text-white text-center p-1">
                        تقرير الخزنات
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('safes.report.post')}}" method="post">
                        @csrf
                        @method('POST')
                        <div class="row m-t-3 mb-3">
                            <div class="col-md-4">
                                <label> اختر الخزنة <span class="text-danger">*</span></label>
                                <select required class="form-control w-100 data-table"
                                        name="safe_id" id="safe_id">
                                    <option value="">اختر الخزنة</option>
                                    @foreach($safes as $safe)
                                        <option
                                            @if(isset($safe_k) && $safe_k->id == $safe->id)
                                            selected
                                            @endif
                                            value="{{$safe->id}}">{{$safe->safe_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label> من تاريخ <span class="text-danger">*</span></label>
                                <input
                                    @if(isset($_POST['from_date']))
                                    value="{{$_POST['from_date']}}"
                                    @else
                                    value="{{date('Y-m-d')}}"
                                    @endif
                                    class="form-control mg-b-20" name="from_date"
                                    required="" type="date">
                            </div>
                            <div class="col-md-4">
                                <label> الى تاريخ <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20"
                                       @if(isset($_POST['to_date']))
                                       value="{{$_POST['to_date']}}"
                                       @else
                                       value="{{date('Y-m-d')}}"
                                       @endif
                                       name="to_date" required=""
                                       type="date">
                            </div>

                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                            <button class="btn btn-primary pd-x-20" type="submit">
                                عرض التقرير
                            </button>
                        </div>
                    </form>
                    @if(isset($payments) && !$payments->isEmpty())
                        <div class="row mt-3 mb-3">
                            <div class="col-md-12">

                                <p class="alert alert-success alert-md text-center">
                                    تقرير الخزنة
                                    [ {{$safe_k->safe_name}} ]
                                    من تاريخ
                                    [{{$_POST['from_date']}}]
                                    الى تاريخ
                                    [{{$_POST['to_date']}}]
                                </p>

                                <div class="col-lg-12 mt-5">
                                    <p class="alert alert-danger alert-md text-center"> عرض بيانات الخزنة </p>
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
                                            <td>{{ $safe_k->safe_name}}</td>
                                            <td>{{ $safe_k->balance }}</td>
                                            <td>{{ $safe_k->type }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="col-lg-12 mt-5">
                                    <p class="alert alert-danger alert-md text-center"> عرض مدفوعات الخزنة </p>
                                </div>
                                <div class="table-responsive table-hover">
                                    <table id="example-table"
                                           class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                                        <thead>
                                        <tr>
                                            <th class="border-bottom-0 text-center">#</th>
                                            <th class="border-bottom-0 text-center"> الشركة (العميل)</th>
                                            <th class="border-bottom-0 text-center"> المبلغ</th>
                                            <th class="border-bottom-0 text-center"> تاريخ الدفع</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @php
                                            $i = 0;$total_paid = 0;
                                        @endphp

                                        @foreach ($payments as $key => $payment)
                                            <tr>
                                                <td>{{ ++$i }}</td>
                                                <td>
                                                    <a target="_blank"
                                                       href="{{route('supervisor.companies.show',$payment->company->id)}}">
                                                        {{ $payment->company->company_name }}
                                                    </a>
                                                </td>
                                                <td>{{ $payment->amount }}</td>
                                                <td>{{ date('Y-m-d',strtotime($payment->created_at)) }}</td>
                                            </tr>
                                            <?php $total_paid = $total_paid + $payment->amount; ?>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                <table class="table table-bordered mt-5 mb-5 text-center">
                                    <thead>
                                    <tr>
                                        <th>اجمالى المبالغ المدفوعة الى الخزنة</th>
                                        <th>رصيد الخزنة الحالى</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{{$total_paid}}</td>
                                        <td>{{$safe_k->balance}}</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    @endif
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

