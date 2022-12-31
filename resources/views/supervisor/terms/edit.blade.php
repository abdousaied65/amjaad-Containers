@extends('supervisor.layouts.master')
<style>
</style>
@section('content')
    <!-- row -->
    <div class="row">
        <div class="col-lg-12 col-md-12">

            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <strong>الاخطاء :</strong>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <div class="card">
                <div class="card-header bg-primary">
                    <h5 class="text-center text-white p-1">
                        تعديل بيانات الشرط
                    </h5>
                </div>
                <div class="card-body">
                    {!! Form::model($term, ['method' => 'PATCH','enctype' => 'multipart/form-data','route' => ['supervisor.terms.update', $term->id]]) !!}
                    <div class="row m-t-3 mb-3">
                        <div class="col-md-12">
                            <label> الشرط  <span class="text-danger">*</span></label>
                            <textarea name="term" class="form-control mg-b-20" style="resize: none;width: 100%; height: 250px!important;">{{$term->term}}</textarea>
                        </div>
                    </div>

                    <div class="col-lg-12 text-center mt-3 mb-3">
                        <button class="btn btn-primary btn-md" type="submit"> تحديث</button>
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
    <!-- main-content closed -->

    <script src="{{asset('admin-assets/js/jquery.min.js')}}"></script>
@endsection
