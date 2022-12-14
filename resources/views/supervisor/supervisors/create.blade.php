@extends('supervisor.layouts.master')
<style>

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
                        اضافة مشرف جديد
                    </h5>
                </div>
                <div class="card-body p-1 m-1">
                    <form action="{{route('supervisor.supervisors.store','test')}}" method="post"
                          enctype="multipart/form-data">
                        {{csrf_field()}}

                        <div class="row m-t-3 mb-3">
                            <div class="parsley-input col-md-4" id="fnWrapper">
                                <label> اسم المشرف <span class="text-danger">*</span></label>
                                <input class="form-control mg-b-20"
                                       data-parsley-class-handler="#lnWrapper" name="name" required=""
                                       type="text">
                            </div>
                            <div class="parsley-input col-md-4 mg-t-20 mg-md-t-0" id="lnWrapper">
                                <label> البريد الالكترونى : <span class="text-danger">*</span></label>
                                <input class="form-control  mg-b-20" style="text-align: left;direction:ltr;"
                                       data-parsley-class-handler="#lnWrapper" name="email" required=""
                                       type="email">
                            </div>
                            <div class="parsley-input col-md-4 mg-t-20 mg-md-t-0" id="lnWrapper">
                                <label class="form-label"> مجموعة المشرفين </label>
                                <select class="form-control data-table w-100" required name="role_name">
                                    <option value=""></option>
                                    @foreach($roles as $role)
                                        <option value="{{$role}}">{{$role}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="row m-t-3 mb-3">

                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <label class="form-label">
                                    كلمة المرور
                                </label>
                                <fieldset class="form-icon-group left-icon position-relative">
                                    <input required dir="ltr" type="password" name="password"
                                           class="form-control ">
                                    <div class="form-icon position-absolute">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                </fieldset>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <label class="form-label">
                                    تأكيد كلمة المرور
                                </label>
                                <fieldset class="form-icon-group left-icon position-relative">
                                    <input required dir="ltr" type="password" name="confirm-password"
                                           class="form-control ">
                                    <div class="form-icon position-absolute">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                </fieldset>
                            </div>

                            <div class="col-lg-4 mb-2">
                                <label for=""> الصورة الشخصية </label>
                                <input accept="image/*" type="file"
                                       oninput="pic.src=window.URL.createObjectURL(this.files[0])" id="file"
                                       name="profile_pic" class="form-control">
                                <label for="" class="d-block"> معاينة الصورة </label>
                                <img id="pic" src=""
                                     style="width: 100px; height:100px;"/>
                            </div>

                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                            <button class="btn btn-primary pd-x-20" type="submit">تأكيد</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
