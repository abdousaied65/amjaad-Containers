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
                        عرض كل المدفوعات
                    </h5>
                </div>
                <div class="row mt-3 mb-1 text-center justify-content-center align-content-center">
                    <form class="col-4" method="GET" action="{{route('print.selected.payments')}}">
                        <button type="submit" class="btn btn-md btn-light-warning m-1 print_selected">
                            <i class="fa fa-print"></i>
                            طباعة
                        </button>
                    </form>
                    <form class="col-4" method="POST" action="{{route('export.payments.excel')}}">
                        @csrf
                        @method('POST')
                        <button type="submit" class="btn btn-md btn-light-success m-1">
                            <i class="fa fa-file-excel-o"></i>
                            تصدير الكل EXCEL
                        </button>
                    </form>
                    <div class="col-4">
                        <a href="{{route('supervisor.payments.create')}}" role="button"
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
                                <th class="border-bottom-0 text-center"> تاريخ الدفع</th>
                            </tr>
                            </thead>
                            <tbody>
                            @php
                                $i = 0;
                            @endphp

                            @foreach ($data as $key => $payment)
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
                                    <td>{{ date('Y-m-d',strtotime($payment->created_at)) }}</td>
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
                            </tr>
                            </tfoot>
                        </table>
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
        $('#example-table tfoot tr th:nth-child(5)').html('<input class="form-control" type="date" placeholder="التاريخ" />');
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
