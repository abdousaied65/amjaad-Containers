@extends('supervisor.layouts.master2')

@section('content')
    <!-- main body area -->
    <div class="main auth-div p-2 py-3 p-xl-5">
        <!-- Body: Body -->
        <div class="body d-flex p-0 p-xl-5">
            <div class="container-fluid">
                <div class="row g-0">
                    <div class="col-lg-12 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                        <div class="w-100 p-4 p-md-5 card border-0" style="max-width: 40rem;">
                            <!-- Form -->
                            <form action="{{ route('supervisor.password.update') }}" class="row g-1 p-0 p-md-4" method="post">
                                @csrf
                                <div class="col-12 text-center mb-2">
                                    <img src="{{asset('assets/img/logo.png')}}" class="w-25 mb-4" alt="" />
                                    <h1>
                                        اعادة تعيين كلمة المرور
                                    </h1>
                                </div>
                                @if (session('status'))
                                    <div class="alert alert-success text-center" role="alert">
                                        {{ session('status') }}
                                    </div>
                                @endif
                                <input type="hidden" name="token" value="{{ $token }}">

                                <div class="col-12">
                                    <div class="mb-2">
                                        <label for="email" class="form-label">
                                            البريد الالكترونى
                                        </label>
                                        <input id="email" type="email" dir="ltr" class="form-control  text-left @error('email') is-invalid @enderror"
                                               name="email" value="{{$email}}"
                                               required autofocus>
                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="mb-2">
                                        <label for="password"  class="form-label">كلمة المرور</label>
                                        <input id="password" dir="ltr" type="password" class="form-control  @error('password') is-invalid @enderror"
                                               name="password" required autocomplete="new-password">
                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>


                                <div class="col-12">
                                    <div class="mb-2">
                                        <label for="password-confirm"  class="form-label">
                                        تأكيد كلمة المرور
                                        </label>
                                        <input id="password-confirm" dir="ltr" type="password" class="form-control " name="password_confirmation" required autocomplete="new-password">
                                    </div>
                                </div>

                                <div class="col-12 text-center mt-4">
                                    <button type="submit" class="btn btn-md btn-block btn-dark lift text-uppercase">
                                        اعادة تعيين كلمة المرور
                                    </button>
                                </div>
                                <div class="col-12 text-center mt-4">
                                <span class="text-muted"><a href="{{route('supervisor.login')}}">
                                        العودة الى تسجيل الدخول
                                    </a></span>
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
