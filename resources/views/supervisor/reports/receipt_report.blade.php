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
                    <h5 class="p-1 text-center text-white">
                        تقرير سندات القبض
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('receipt.report.post')}}" method="post">
                        @csrf
                        @method('POST')
                        <div class="row m-t-3 mb-3">
                            <div class="col-md-3">
                                <label> اختر الشركة <span class="text-danger">*</span></label>
                                <select required class="form-control w-100 data-table"
                                        name="company_id" id="company_id">
                                    <option value="">اختر الشركة</option>
                                    @foreach($companies as $company)
                                        <option
                                            @if(isset($_POST['company_id']) && $_POST['company_id'] == $company->id)
                                            selected
                                            @endif
                                            value="{{$company->id}}">{{$company->company_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label> اختر الخزنة <span class="text-danger">*</span></label>
                                <select required class="form-control w-100 data-table"
                                        name="safe_id" id="safe_id">
                                    <option value="all"> كل الخزن</option>
                                    @foreach($safes as $safe)
                                        <option
                                            @if(isset($_POST['safe_id']) && $_POST['safe_id'] == $safe->id)
                                            selected
                                            @endif
                                            value="{{$safe->id}}">{{$safe->safe_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-3">
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
                            <div class="col-md-3">
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
                            <button class="btn btn-primary pd-x-20" type="submit" name="submit">
                                عرض التقرير
                            </button>
                        </div>
                    </form>
                    @if(isset($receipts) && !$receipts->isEmpty())
                        <div class="row mt-3 mb-3">
                            <div class="col-md-12">

                                <p class="alert alert-default alert-md text-center">
                                    تقرير سندات القبض للشركة
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

                                        @foreach ($receipts as $receipt)
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
                                                <td>{{ $receipt->notes }}</td>
                                                <td>{{ date('Y-m-d',strtotime($receipt->created_at)) }}</td>
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
                                <div class="mt-4 mb-4 text-center bg-info text-white p-2 fw-bold"
                                     style="font-size: 20px!important;">
                                    الاجمالى :
                                    <?php
                                    $total = 0;
                                    if (!$receipts->isEmpty()) {
                                        foreach ($receipts as $receipt) {
                                            $total = $total + $receipt->amount;
                                        }
                                    }
                                    ?>
                                    {{$total}}
                                </div>

                            </div>
                        </div>
                        @if(isset($_POST['submit']))
                            <form action="{{route('receipt.print')}}" method="post" class="d-block mt-3 mb-3">
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
                </div>
            </div>
        </div>
    </div>

@endsection

<script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
<script>
    $(document).ready(function () {
        $('#example-table').DataTable({
            "columnDefs": [
                {"orderable": false, "targets": [14]}
            ],
            "order": [[0, "desc"]]
        });
    });
</script>

