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
                <div class="card-body p-1 m-1">
                    <div class="row mb-3">
                        <div class="col-md-12">

                            <div class="col-lg-12 mt-2">
                                <p class="alert alert-danger alert-md text-center">
                                    تقرير الحاويات المؤجرة
                                </p>
                            </div>
                            <div class="table-responsive hoverable-table">
                                <table class="display w-100  text-nowrap table-bordered" id="example-table"
                                       style="text-align: center;">
                                    <thead>
                                    <tr>
                                        <th class="border-bottom-0 text-center">#</th>
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
                                    @php
                                        $i = 0;
                                    @endphp

                                    @foreach ($containers as $key => $container)
                                        <?php
                                        $bill_container = \App\Models\BillContainer::where('container_id', $container->id)->latest()->first();
                                        $bill = $bill_container->bill;

                                        ?>
                                        <tr>
                                            <td>{{ ++$i }}</td>
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
                                                    <span class="badge badge-info">
                                                        مؤجرة
                                                    </span>
                                                @elseif($container->status == "فارغة")
                                                    <span class="badge badge-success">
                                                        فارغة
                                                    </span>
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
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

