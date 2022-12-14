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
                    <h5 class="text-center text-white">
                        تقرير حركة الحاويات
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('container.movement.report.post')}}" method="post">
                        @csrf
                        @method('POST')
                        <div class="row m-t-3 mb-3">
                            <div class="col-md-4">
                                <label> اختر الحاوية <span class="text-danger">*</span></label>
                                <select required class="form-control w-100 data-table"
                                        name="container_id" id="container_id">
                                    <option value="">اختر الحاوية</option>
                                    @foreach($containers as $container)
                                        <option
                                            @if(isset($container_k) && $container_k->id == $container->id)
                                            selected
                                            @endif
                                            value="{{$container->id}}">{{$container->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label> من تاريخ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" name="from_date"
                                       @if(isset($from_date)) value="{{$from_date}}"
                                       @else value="{{date('Y-m-d')}}" @endif />
                            </div>
                            <div class="col-md-4">
                                <label> الى تاريخ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" name="to_date"
                                       @if(isset($to_date)) value="{{$to_date}}"
                                       @else value="{{date('Y-m-d')}}" @endif />
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                            <button class="btn btn-primary pd-x-20" type="submit">
                                عرض التقرير
                            </button>
                        </div>
                    </form>
                    @if(isset($bills_containers) && !$bills_containers->isEmpty())
                        <div class="row mt-3 mb-3">
                            <div class="col-md-12">
                                <p class="alert alert-success alert-md text-center">
                                    تقرير حركة الحاوية
                                    [ {{$container_k->name}} ]
                                </p>
                                <div class="col-lg-12 mt-5">
                                    <p class="alert alert-danger alert-md text-center"> عرض بيانات الحاوية </p>
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
                                            <td>{{ $container_k->name}}</td>
                                            <td>{{ $container_k->measure }}</td>
                                            <td>{{ $container_k->rent_amount }}</td>
                                            <td>
                                                {{$container_k->status}}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-lg-12 mt-5">
                                    <p class="alert alert-danger alert-md text-center"> عرض فواتير الحاوية </p>
                                </div>
                                <div class="table-responsive table-hover">
                        <table id="example-table"
                               class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                            <thead>
                                        <tr>
                                            <th class="border-bottom-0 text-center">#</th>
                                            <th class="border-bottom-0 text-center">
                                                العقد
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                المسؤول
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الشركة
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الحاوية
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                تاريخ
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                وقت
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                حالة الدفع
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الخصم
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الضريبة
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                الاجمالى
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                المدفوع
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                المتبقى
                                            </th>
                                            <th class="border-bottom-0 text-center">
                                                ملاحظات
                                            </th>
                                            <th style="width: 5%!important;" class="border-bottom-0 text-center">
                                                خيارات
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @php
                                            $i = 0; $discount_sum = 0; $vat_sum = 0; $total_sum = 0;
                                            $paid_sum = 0; $rest_sum = 0;
                                        @endphp
                                        @foreach ($bills_containers as $bill_container)
                                            <tr>
                                                <td>{{ ++$i }}</td>
                                                <td>
                                                    <a data-toggle="modal" contract_id="{{$bill_container->contract->id}}"
                                                       href="#modaldemo8"
                                                       class="view_contract">
                                                        تفاصيل
                                                    </a>
                                                </td>
                                                <td>
                                                    <a target="_blank"
                                                       href="{{route('supervisor.supervisors.show',$bill_container->bill->supervisor->id)}}">
                                                        {{ $bill_container->bill->supervisor->name }}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a target="_blank"
                                                       href="{{route('supervisor.companies.show',$bill_container->bill->company->id)}}">
                                                        {{ $bill_container->bill->company->company_name }}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a target="_blank"
                                                       href="{{route('supervisor.containers.show',$bill_container->container->id)}}">
                                                        {{ $bill_container->container->name }}
                                                    </a>
                                                </td>
                                                <td>{{$bill_container->bill->date}}</td>
                                                <td>{{$bill_container->bill->time}}</td>
                                                <td>
                                                    @if($bill_container->bill->payment_status == "unpaid")
                                                        <span class="badge badge-danger pd-10">
                                                            غير مدفوعة
                                                        </span>
                                                    @elseif($bill_container->bill->payment_status == "totally paid")
                                                        <span class="badge badge-success pd-10">
                                                             مدفوعة بالكامل
                                                        </span>
                                                    @elseif($bill_container->bill->payment_status == "partially paid")
                                                        <span class="badge badge-info pd-10">
                                                             مدفوعة جزئيا
                                                        </span>
                                                    @endif
                                                </td>
                                                <td>{{$bill_container->bill->discount_total}}</td>
                                                <td>{{$bill_container->bill->vat_total}}</td>
                                                <td>{{$bill_container->bill->final_total}}</td>
                                                <td>{{$bill_container->bill->paid}}</td>
                                                <td>{{$bill_container->bill->rest}}</td>
                                                <td>{{$bill_container->bill->notes}}</td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button type="button"
                                                                class="btn btn-danger-gradient dropdown-toggle"
                                                                data-toggle="dropdown">
                                                            <i class="fa fa-list"></i>
                                                            خيارات
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a target="_blank"
                                                               href="{{route('print.contract',$bill_container->contract->id)}}"
                                                               class="dropdown-item">
                                                                <i class="fa fa-print"></i>
                                                                طباعة العقد
                                                            </a>
                                                            <a target="_blank" href="{{route('print.bill',$bill_container->bill->id)}}"
                                                               class="dropdown-item">
                                                                <i class="fa fa-print"></i>
                                                                طباعة الفاتورة
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <?php
                                            $discount_sum = $discount_sum + $bill_container->bill->discount_total;
                                            $vat_sum = $vat_sum + $bill_container->bill->vat_total;
                                            $total_sum = $total_sum + $bill_container->bill->final_total;
                                            $paid_sum = $paid_sum + $bill_container->bill->paid;
                                            $rest_sum = $rest_sum + $bill_container->bill->rest;
                                            ?>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                <div class="clearfix"></div>
                                <div class="col-lg-12 mt-5">
                                    <p class="alert alert-danger alert-md text-center"> عرض احصائيات فواتير الحاوية </p>
                                </div>
                                <table class="table table-bordered mt-5 mb-5 text-center">
                                    <thead>
                                    <tr>
                                        <th>
                                            مجموع الخصم
                                        </th>
                                        <th>
                                            مجموع الضريبة
                                        </th>
                                        <th>
                                            مجموع الاجمالى النهائى
                                        </th>
                                        <th>
                                            مجموع المبالغ المدفوعة
                                        </th>
                                        <th>
                                            مجموع المبالغ المتبقية
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            {{$discount_sum}}
                                        </td>
                                        <td>
                                            {{$vat_sum}}
                                        </td>
                                        <td>
                                            {{$total_sum}}
                                        </td>
                                        <td>
                                            {{$paid_sum}}
                                        </td>
                                        <td>
                                            {{$rest_sum}}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                {{--                                <a class="btn btn-md btn-primary" href="javascript:;" onclick="window.print();">--}}
                                {{--                                    <i class="fa fa-print"></i>--}}
                                {{--                                    طباعة التقرير--}}
                                {{--                                </a>--}}
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <!-- Modal effects -->
    <div class="modal" id="modaldemo8">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content modal-content-demo">
                <div class="modal-header text-center">
                    <h6 class="modal-title w-100" style="font-family: 'Almarai'; ">
                        عرض تفاصيل العقد
                    </h6>

                </div>
                <div class="modal-body view_contract_details">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
                </div>
            </div>
        </div>
    </div>
@endsection

<script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
<script>
    $(document).ready(function () {
        $('.view_contract').on('click', function () {
            let contract_id = $(this).attr('contract_id');
            $.ajax({
                type: 'post',
                url: "{{route('view.contract')}}",
                data: {
                    "_token": "{{csrf_token()}}",
                    'contract_id': contract_id,
                },
                success: function (data) {
                    $('.view_contract_details').html(data)
                }
            });
        });
        $('#example-table').DataTable({
            "columnDefs": [
                {"orderable": false, "targets": [14]}
            ],
            "order": [[0, "desc"]]
        });
    });
</script>

