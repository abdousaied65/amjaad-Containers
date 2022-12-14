@extends('supervisor.layouts.master2')
@section('content')
    <!-- main body area -->
    <div class="main auth-div p-2 py-3 p-xl-5">

        <!-- Body: Body -->
        <div class="body d-flex p-0 p-xl-5">
            <div class="container-fluid">

                <div class="row g-0">
                    <div
                        class="col-lg-12 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                        <div class="w-100 p-4 p-md-5 card border-0" style="max-width: 32rem;">
                            <!-- Form -->
                            <form action="{{ route('supervisor.login') }}" method="POST" class="row g-1 p-0 p-md-4">
                                @csrf
                                @method('POST')
                                <div class="col-12 text-center mb-5">
                                    <img src="{{asset('assets/img/logo.png')}}" class="img-fluid w-25" alt="">
                                    <h1>
                                        تسجيل الدخول
                                    </h1>
                                    <span>
                                        لوحة تحكم الادارة
                                    </span>
                                </div>
                                <div class="col-12">
                                    <div class="mb-2">
                                        <label class="form-label">
                                        البريد الالكترونى
                                        </label>
                                        <input required type="email" dir="ltr" name="email"
                                               class="form-control  @error('email') is-invalid @enderror "
                                               value="{{old('email')}}" autofocus
                                               autocomplete/>
                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-2">
                                        @if (Route::has('supervisor.password.request'))
                                            <div class="form-label">
                                                <span class="d-flex justify-content-between align-items-center">
                                                    كلمة المرور
                                                    <a class="text-primary"
                                                       href="{{route('supervisor.password.request') }}">
                                                        هل نسيت كلمة المرور ؟
                                                    </a>
                                                </span>
                                            </div>
                                        @endif
                                        <input required type="password" dir="ltr"  name="password"
                                               class="form-control  @error('password') is-invalid @enderror "
                                               placeholder="***************">
                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check pull-right"
                                         style="direction: rtl!important;text-align: right!important;">
                                        <input {{ old('remember') ? 'checked' : '' }} type="checkbox"
                                               id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            تذكرنى
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12 text-center mt-4">
                                    <button type="submit" class="btn btn-md btn-block btn-dark lift text-uppercase">
                                        تسجيل الدخول
                                    </button>
                                </div>
                            </form>
                            <!-- End Form -->
                        </div>
                    </div>
                </div> <!-- End Row -->

            </div>
        </div>

        <div class="animate_lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>

    </div>
@endsection
