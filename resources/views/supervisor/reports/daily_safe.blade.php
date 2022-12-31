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

    .box {
        width: 100%;
        height: auto;
        padding-top: 30px !important;
        border: 1px solid #ddd;
    }

    h5 {
        font-size: 16px !important;
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
                        اغلاق يومية الصندوق
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('daily.safe.post')}}" method="post">
                        @csrf
                        @method('POST')
                        <div class="row m-t-3 mb-3">
                            <div class="col-md-4">
                                <label> اختر اليوم <span class="text-danger">*</span></label>
                                <input
                                    @if(isset($_POST['date']))
                                    value="{{$_POST['date']}}"
                                    @else
                                    value="{{date('Y-m-d')}}"
                                    @endif
                                    class="form-control mg-b-20" name="date"
                                    required="" type="date">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                            <button class="btn btn-primary pd-x-20" type="submit" name="submit">
                                عرض التقرير
                            </button>
                        </div>
                    </form>

                    @if(isset($_POST['submit']))
                        <div class="card-body p-2 m-1">
                            <div class="row mt-3 mb-3 text-center">
                                <div class="col-lg-4 box">
                                    <h5>
                                        عدد العقود المنفذة
                                    </h5>
                                    <h6>
                                        {{$executed_bills->count()}}
                                    </h6>
                                </div>
                                <div class="col-lg-4 box">
                                    <h5>
                                        عدد العقود غير المنفذة
                                    </h5>
                                    <h6>
                                        {{$unexecuted_bills->count()}}
                                    </h6>
                                </div>
                                <div class="col-lg-4 box">
                                    <h5>
                                        عدد الحاويات التي تم تسليمها - استلامها
                                    </h5>
                                    <h6>
                                        {{$bill_containers->count()}}
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-2 m-1">
                            <h6 class="alert alert-md alert-danger text-center">
                                المبالغ المقبوضة ضمن اليوم
                                [
                                {{$amounts}}
                                ]
                            </h6>
                            <div class="table-responsive table-hover">
                                <table id="example-table"
                                       class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
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

                                    @foreach ($receipts as $key => $receipt)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            <td>
                                                <a target="_blank"
                                                   href="{{route('supervisor.companies.show',$receipt->company->id)}}">
                                                    {{ $receipt->company->company_name}}
                                                </a>
                                            </td>
                                            <td>
                                                <a target="_blank"
                                                   href="{{route('supervisor.safes.show',$receipt->safe->id)}}">
                                                    {{ $receipt->safe->safe_name }}
                                                </a>
                                            </td>
                                            <td>{{ $receipt->amount }}</td>
                                            <td>{{ $receipt->safe->type }}</td>
                                            <td>{{ date('Y-m-d',strtotime($receipt->created_at)) }}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>


                        </div>
                        <form action="{{route('daily.safe.print')}}" method="post" class="d-block mt-3 mb-4">
                            @csrf
                            @method('POST')
                            <input type="hidden" name="date" value="{{$_POST['date']}}"/>
                            <button type="submit" name="submit" class="btn btn-primary pd-x-20">
                                <i class="fa fa-print"></i>
                                طباعة التقرير
                            </button>
                        </form>
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

