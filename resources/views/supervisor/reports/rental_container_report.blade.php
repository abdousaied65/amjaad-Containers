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
                        تقرير الحاويات المؤجرة
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('rental.container.report.post')}}" method="post">
                        @csrf
                        @method('POST')
                        <div class="row m-t-3 mb-3">
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
                            <button class="btn btn-primary pd-x-20" type="submit" name="submit">
                                عرض التقرير
                            </button>
                        </div>
                    </form>
                    @if(isset($_POST['submit']))
                        <div class="table-responsive table-hover">
                            <table id="example-table"
                                   class="table table-bordered table-condensed text-center justify-content-center w-100 display dataTable">
                                <thead>
                                <tr>
                                    <th class="border-bottom-0 text-center">
                                        رقم الفاتورة
                                    </th>
                                    <th class="border-bottom-0 text-center">
                                        رقم الحاوية
                                    </th>
                                    <th class="border-bottom-0 text-center">
                                        اسم الحاوية
                                    </th>

                                    <th class="border-bottom-0 text-center">
                                        اسم الشركة
                                    </th>

                                    <th class="border-bottom-0 text-center">
                                        تاريخ التاجير
                                    </th>

                                    <th class="border-bottom-0 text-center">
                                        انتهاء العقد
                                    </th>

                                    <th class="border-bottom-0 text-center">
                                        عدد الحاويات
                                    </th>

                                    <th class="border-bottom-0 text-center">
                                        الردود
                                    </th>

                                    <th class="border-bottom-0 text-center">
                                        الموقع او العنوان
                                    </th>

                                    <th class="border-bottom-0 text-center">
                                        حالة الحاوية
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php
                                $from_date = $_POST['from_date'];
                                $to_date = $_POST['to_date'];
                                $bill_containers = \App\Models\BillContainer::whereBetween('created_at', [$from_date, $to_date])
                                    ->get();
                                ?>
                                @foreach ($bill_containers as $bill_container)
                                    <?php
                                    $bill = $bill_container->bill;
                                    $container = $bill_container->container;
                                    ?>

                                    <tr>
                                        <td>{{ $bill->id }}</td>
                                        <td>
                                            {{$container->id}}
                                        </td>
                                        <td>
                                            <a target="_blank"
                                               href="{{route('supervisor.containers.show',$container->id)}}">
                                                {{$container->name}}
                                            </a>
                                        </td>
                                        <td>
                                            <a target="_blank"
                                               href="{{route('supervisor.companies.show',$bill->company->id)}}">
                                                {{$bill->company->company_name}}
                                            </a>
                                        </td>

                                        <td>
                                            {{$bill->contract->contract_start_date}}
                                        </td>

                                        <td>
                                            {{$bill->contract->contract_end_date}}
                                        </td>

                                        <td>
                                            {{$bill->contract->containers_number}}
                                        </td>

                                        <td>
                                            {{$bill->contract->responses_number}}
                                        </td>

                                        <td>
                                            {{$bill->contract->city}} -
                                            {{$bill->contract->district}} -
                                            {{$bill->contract->street}}
                                        </td>

                                        <td>
                                            @if($container->status == "مؤجرة")
                                                مؤجرة
                                            @elseif($container->status == "فارغة")
                                                فارغة
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                        <form action="{{route('rental.container.print')}}" method="post" class="d-block mt-3 mb-4">
                            @csrf
                            @method('POST')
                            <input type="hidden" name="from_date" value="{{$_POST['from_date']}}"/>
                            <input type="hidden" name="to_date" value="{{$_POST['to_date']}}"/>
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

