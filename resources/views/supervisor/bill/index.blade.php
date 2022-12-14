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

    input[type="checkbox"] {
        width: 20px;
        height: 20px;
    }

    .bootstrap-select {
        width: 80% !important;
    }
</style>
@section('content')
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    @if (isset($error))
        <div class="alert alert-danger  fade show">

            {{ $error }}
        </div>
    @endif
    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">

            <div class="card">
                <div class="card-header bg-primary pb-0">
                    <h5 class="text-center text-white p-1">
                        البحث فى العقود المنفذة
                    </h5>
                </div>
                <div class="card-body p-2 mt-3 mb-3">
                    <div class="col-lg-12">
                        <div class="col-lg-4 d-inline float-right pull-right">
                            <form class="p-2" action="{{route('search.executed.by.company')}}" method="post">
                                @csrf
                                @method('POST')
                                <label class="d-block">
                                    البحث باسم العميل
                                </label>
                                <select required class="form-control selectpicker show-tick"
                                        data-live-search="true" data-title="اختر الشركة"
                                        name="company_id" id="company_id">
                                    @foreach($companies as $company)
                                        <option
                                            @if(isset($company_k) && $company_k->id == $company->id)
                                            selected
                                            @endif
                                            value="{{$company->id}}">{{$company->company_name}}</option>
                                    @endforeach
                                </select>
                                <button type="submit"
                                        style="width: 15%!important;height:40px!important;display: inline;float:left!important; border-radius: 0;"
                                        class="btn btn-md btn-secondary">
                                    <i class="fas text-white fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div class="col-lg-4 col-lg-4 d-inline float-right pull-right">
                            <form class="p-2" action="{{route('search.executed.by.phone')}}" method="post">
                                @csrf
                                @method('POST')
                                <label class="d-block">
                                    البحث برقم جوال العميل
                                </label>
                                <input
                                    @if(isset($phone_number)) value="{{$phone_number}}" @endif
                                required style="width: 80%!important;float: right;" type="number" name="phone_number"
                                    dir="ltr" class="form-control" min="1"/>
                                <button type="submit"
                                        style="width: 15%!important;height:40px!important;display: inline;float:left!important; border-radius: 0;"
                                        class="btn btn-md btn-secondary">
                                    <i class="fas text-white fa-search"></i>
                                </button>
                            </form>
                        </div>

                        <div class="col-lg-4 col-lg-4 d-inline float-right pull-right">
                            <form class="p-2" action="{{route('search.executed.by.bill')}}" method="post">
                                @csrf
                                @method('POST')
                                <label class="d-block">
                                    البحث برقم الفاتورة او العقد
                                </label>
                                <input
                                    @if(isset($bill_id)) value="{{$bill_id}}" @endif
                                required style="width: 80%!important;float: right;" type="number" name="bill_id"
                                    dir="ltr" class="form-control" min="1"/>
                                <button type="submit"
                                        style="width: 15%!important;height:40px!important;display: inline;float:left!important; border-radius: 0;"
                                        class="btn btn-md btn-secondary">
                                    <i class="fas text-white fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                        <div class="col-lg-9">
                            <form action="{{route('search.executed.by.date')}}" method="post">
                                @csrf
                                @method('POST')
                                <div class="row mt-1 mb-2">
                                    <div class="col-md-5">
                                        <label> من تاريخ <span class="text-danger">*</span></label>
                                        <input type="date" class="form-control" name="from_date"
                                               @if(isset($from_date)) value="{{$from_date}}"
                                               @else value="{{date('Y-m-d')}}" @endif />
                                    </div>
                                    <div class="col-md-5">
                                        <label> الى تاريخ <span class="text-danger">*</span></label>
                                        <input type="date" class="form-control" name="to_date"
                                               @if(isset($to_date)) value="{{$to_date}}"
                                               @else value="{{date('Y-m-d')}}" @endif />
                                    </div>
                                    <div class="col-md-2">
                                        <button type="submit"
                                                style="width: 100%!important;height:40px!important;display: inline;
                                        float:right!important; border-radius: 0;margin-top: 30px!important;"
                                                class="btn btn-md btn-secondary">
                                            <i class="fas text-white fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-3">
                            @if(isset($_POST))
                                <form id="myForm" action="{{route('print.selected.bills')}}" method="POST">
                                    @csrf
                                    @method('POST')
                                    <button type="submit" style="width: 100%!important;height:40px!important;display: inline;
                                        float:left!important; border-radius: 0;margin-top: 35px!important;"
                                            class="btn btn-md btn-primary">
                                        <i class="fas text-white fa-print"></i>
                                        طباعة
                                    </button>
                                </form>
                            @endif
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header bg-danger pb-0">
                <h5 class="text-center text-white p-1">
                    عرض كل العقود والفواتير المنفذة المسلمة
                </h5>
            </div>
            <div class="card-body p-1 m-1">
                <div class="table-responsive table-hover">
                    <table id="example-table"
                           class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                        <thead>
                        <tr>
                            <th class="border-bottom-0 text-center">
                                <input type="checkbox" id="check_all"/>
                            </th>
                            <th class="border-bottom-0 text-center">رقم الفاتورة</th>
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
                                الحاويات
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
                            <th class="border-bottom-0 text-center">
                                عدد الحاويات
                            </th>
                            <th class="border-bottom-0 text-center">
                                الردود
                            </th>
                            <th class="border-bottom-0 text-center">
                                العنوان
                            </th>
                            <th style="width: 5%!important;" class="border-bottom-0 text-center">
                                خيارات
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($data as $key => $bill)
                            <tr>
                                <td>
                                    <input class="check" name="bills[]" form="myForm"
                                           value="{{$bill->id}}"
                                           type="checkbox">
                                </td>
                                <td>{{ $bill->id }}</td>
                                <td>
                                    <a data-toggle="modal" contract_id="{{$bill->contract->id}}" href="#modaldemo8"
                                       class="view_contract">
                                        تفاصيل
                                    </a>
                                </td>
                                <td>
                                    <a target="_blank"
                                       href="{{route('supervisor.supervisors.show',$bill->supervisor->id)}}">
                                        {{ $bill->supervisor->name }}
                                    </a>
                                </td>
                                <td>
                                    <a target="_blank"
                                       href="{{route('supervisor.companies.show',$bill->company->id)}}">
                                        {{ $bill->company->company_name }}
                                    </a>
                                </td>
                                <td>
                                    @foreach($bill->bill_containers as $container)
                                        <p>
                                            <a target="_blank"
                                               href="{{route('supervisor.containers.show',$container->container->id)}}">
                                                حاوية رقم :
                                                {{$container->container->name}}
                                            </a>
                                        </p>
                                    @endforeach
                                </td>
                                <td>{{$bill->date}}</td>
                                <td>{{$bill->time}}</td>
                                <td>
                                    @if($bill->payment_status == "unpaid")
                                        غير مدفوعة
                                    @elseif($bill->payment_status == "totally paid")
                                        مدفوعة بالكامل
                                    @elseif($bill->payment_status == "partially paid")
                                        مدفوعة جزئيا
                                    @endif
                                </td>
                                <td>{{$bill->discount_total}}</td>
                                <td>{{$bill->vat_total}}</td>
                                <td>{{$bill->final_total}}</td>
                                <td>{{$bill->paid}}</td>
                                <td>{{$bill->rest}}</td>
                                <td>{{$bill->notes}}</td>

                                <td>{{$bill->contract->containers_number}}</td>
                                <td>{{$bill->contract->responses_number}}</td>
                                <td>{{$bill->contract->city}} - {{$bill->contract->district}}
                                    - {{$bill->contract->street}} </td>

                                <td>
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-danger-gradient dropdown-toggle"
                                                data-toggle="dropdown">
                                            <i class="fa fa-list"></i>
                                            خيارات
                                        </button>
                                        <div class="dropdown-menu">
                                            <a target="_blank"
                                               href="{{route('print.contract',$bill->contract->id)}}"
                                               class="dropdown-item">
                                                <i class="fa fa-print"></i>
                                                طباعة العقد
                                            </a>
                                            <a target="_blank" href="{{route('print.bill',$bill->id)}}"
                                               class="dropdown-item">
                                                <i class="fa fa-print"></i>
                                                طباعة الفاتورة
                                            </a>
                                            <a target="_blank" href="{{route('print.both',$bill->id)}}"
                                               class="dropdown-item">
                                                <i class="fa fa-print"></i>
                                                طباعة عقد وفاتورة
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!--/div-->

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
        $('#check_all').click(function () {
            if (this.checked) {
                $('input.check').prop('checked', true);
            } else {
                $('input.check').prop('checked', false);
            }
        });
        $('.remove_selected').on('click', function (e) {
            e.preventDefault();
            let bills = [];
            $("input:checkbox[name*='bills']:checked").each(function () {
                bills.push($(this).val());
            });
            if (bills.length == 0) {
                alert('اختر بعض السجلات للحذف');
            } else {
                $('#myForm').submit();
            }
        });
    });
</script>
