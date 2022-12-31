@extends('supervisor.layouts.master')
<style>
    tfoot input {
        width: 100%;
        padding: 3px;
        box-sizing: border-box;
    }

    .btn-md {
        height: 40px !important;
        min-width: 100px !important;
        padding: 10px !important;
        text-align: center !important;
    }

    table tbody tr td {
        padding: 20px !important;
    }
</style>
@section('content')
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header bg-primary pb-0">
                    <h5 class="p-1 text-center text-white">
                        عرض كل سندات القبض
                    </h5>
                </div>
                <form action="{{route('select.receipts')}}" method="post">
                    @csrf
                    @method('POST')
                    <div class="row mt-3 p-3 mb-3">
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
                        <div class="col-md-4 text-center" style="padding-top: 30px!important;">
                            <button class="btn btn-primary pd-x-20" type="submit">
                                عرض التقرير
                            </button>
                        </div>
                    </div>

                </form>

                <div class="row mt-3 mb-1 text-center justify-content-center align-content-center">
                    <form class="col-3" method="GET" action="{{route('print.selected.receipts')}}">
                        <button type="submit" class="btn btn-md btn-light-warning m-1 print_selected">
                            <i class="fa fa-print"></i>
                            طباعة الكل
                        </button>
                    </form>

                    <form class="col-3" method="POST" action="{{route('print.posted.receipts')}}">
                        @csrf
                        <input type="hidden" name="from_date" @if(isset($_POST['from_date'])) value="{{$_POST['from_date']}}" @endif id="from_date" />
                        <input type="hidden" name="to_date" @if(isset($_POST['to_date'])) value="{{$_POST['to_date']}}" @endif id="to_date" />
                        <button type="submit" class="btn btn-md btn-light-danger m-1 print_selected">
                            <i class="fa fa-print"></i>
                            طباعة المحدد
                        </button>
                    </form>

                    <form class="col-3" method="POST" action="{{route('export.receipts.excel')}}">
                        @csrf
                        @method('POST')
                        <button type="submit" class="btn btn-md btn-light-success m-1">
                            <i class="fa fa-file-excel-o"></i>
                            تصدير الكل EXCEL
                        </button>
                    </form>
                    <div class="col-3">
                        <a href="{{route('supervisor.receipts.create')}}" role="button"
                           class="btn btn-md btn-light-info">
                            <i class="fa fa-plus"></i>
                            اضافة
                        </a>
                    </div>
                </div>

                <div class="card-body p-1 m-1">
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

                            @foreach ($data as $key => $receipt)
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
                    <div class="mt-4 mb-4 text-center bg-info text-white p-2 fw-bold" style="font-size: 20px!important;">
                        الاجمالى :
                        <?php
                        $total = 0;
                        if (!$data->isEmpty()){
                            foreach ($data as $receipt){
                                $total = $total + $receipt->amount;
                            }
                        }
                        ?>
                        {{$total}}
                    </div>
                </div>
            </div>
        </div>
        <!--/div-->

    </div>

@endsection
<script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
<script>
    $(document).ready(function () {
        $('#example-table tfoot tr th:nth-child(2)').html('<input class="form-control" type="text" placeholder="الشركة" />');
        $('#example-table tfoot tr th:nth-child(3)').html('<input class="form-control" type="text" placeholder="الخزنة" />');
        $('#example-table tfoot tr th:nth-child(4)').html('<input class="form-control" type="number" placeholder="المبلغ" />');
        $('#example-table tfoot tr th:nth-child(5)').html('<input class="form-control" type="text" placeholder="ملاحظات" />');
        $('#example-table tfoot tr th:nth-child(6)').html('<input class="form-control" type="date" placeholder="التاريخ" />');
        $('#example-table').DataTable({
            "order": [[0, "desc"]],
            initComplete: function () {
                this.api().columns().every(function () {
                    var that = this;
                    $('input[type="text"],input[type="number"],input[type="date"]', this.footer()).on('keyup change clear', function () {
                        if (that.search() !== this.value) {
                            that.search(this.value).draw();
                        }
                    });
                    $('select', this.footer()).on('change', function () {
                        if (that.search() !== this.value) {
                            that.search(this.value).draw();
                        }
                    });
                });
            }
        });
    });
</script>
