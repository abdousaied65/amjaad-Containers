@extends('supervisor.layouts.master')
<style>
    span.float-right > i.fa {
        font-size: 40px !important;
    }
</style>
@section('page-header')
    <!-- breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
        <div class="left-content">
            <div>
                <h2 class="main-content-title tx-24 mg-b-1 mg-b-lg-1">مرحبًا بكم مرة أخرى!</h2>
                <p class="mg-b-0">
                    لوحة تحكم المشرفين (الادارة)
                </p>
            </div>
        </div>
    </div>
    <!-- /breadcrumb -->
@endsection
@section('content')
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif
    <!-- row -->
    <div class="row">
        @can('انشاء عقد + فاتورة')
            <div class="col-lg-12">
                <a role="button" class="btn btn-lg btn-danger pull-left float-left"
                   href="{{ route('create.contract.bill') }}">
                    <i class="fa fa-copy"></i>
                    <span> انشاء عقد + فاتورة </span>
                </a>
            </div>
        @endcan
        <div class="col-lg-12">
            <h3>
                الحاويات المؤجرة
            </h3>
        </div>
        <div class="col-lg-12">
            <div class="card p-3 mt-3">
                @if(isset($rented_containers) && !$rented_containers->isEmpty())
                    <div class="row">
                        @foreach($rented_containers as $container)
                            <div class="col-lg-2 pull-right d-inline mt-3">
                                <a data-toggle="modal" container_id="{{$container->id}}" href="#modaldemo8"
                                   class="btn btn-success btn-md view_container"
                                   role="button">
                                    {{$container->name}}
                                </a>
                            </div>
                        @endforeach
                    </div>
                @else
                    <h4>
                        لا يوجد حاويات مؤجرة
                    </h4>
                @endif
            </div>
        </div>
    </div>
    <!-- row -->
    <div class="row">
        <div class="col-lg-12">
            <h3>
                الحاويات الفارغة
            </h3>
        </div>
        <div class="col-lg-12">
            <div class="card p-3 mt-3">
                @if(isset($empty_containers) && !$empty_containers->isEmpty())
                    <div class="row">
                        @foreach($empty_containers as $container)
                            <div class="col-lg-2 pull-right d-inline mt-3">
                                <a href="{{route('create.contract.bill',$container->id)}}">
                                    <button class="btn btn-primary btn-md" type="button">
                                        {{$container->name}}
                                    </button>
                                </a>
                            </div>
                        @endforeach
                    </div>
                @else
                    <h4>
                        لا يوجد حاويات فارغة
                    </h4>
                @endif
            </div>
        </div>
    </div>
    <!-- row closed -->
    <!-- Modal effects -->
    <div class="modal" id="modaldemo8">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content modal-content-demo">
                <div class="modal-header text-center">
                    <h6 class="modal-title w-100" style="font-family: 'Almarai'; ">
                        عرض بيانات ايجار الحاوية
                    </h6>

                </div>
                <div class="modal-body container_details">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
                </div>
            </div>
        </div>
    </div>

    <script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
    <script>
        $(document).ready(function () {
            $('.view_container').click(function () {
                let container_id = $(this).attr('container_id');
                $.ajax({
                    type: 'post',
                    url: "{{route('view.container.details')}}",
                    data: {
                        "_token": "{{csrf_token()}}",
                        'container_id': container_id,
                    },
                    success: function (data) {
                        $('.container_details').html(data)
                    }
                });

            });
        });
    </script>
@endsection


