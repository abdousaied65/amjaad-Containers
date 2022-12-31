<a class="nav-link ml d-block d-xl-none menu-toggle mt-3 float-right pull-right text-right no-print" href="#">
    <i class="fa fa-bars"></i>
</a>

<!-- Body: Header -->
<div class="body-header border-bottom d-flex py-3 no-print">
    <div class="container-fluid">
        <!-- header rightbar icon -->
        <div class="h-right flex-grow-1 justify-content-end d-flex align-items-center">
            <div class="d-flex">
                <a class="nav-link text-primary" style="color: #333!important;" href="{{route('supervisor.profile.edit',Auth::user()->id)}}">
                    <i class="fa fa-user"></i>
                </a>
                <a class="nav-link text-primary" style="color: #333!important;" href="{{route('supervisor.lock.screen')}}">
                    <i class="fa fa-lock"></i>
                </a>
                <a class="nav-link" style="color: #333!important;" href="{{route('supervisor.logout')}}"
                   onclick="event.preventDefault();document.getElementById('logout-form-2').submit();"
                   title="Menu collapse"><i class="fa fa-power-off"></i>
                </a>
                <form id="logout-form-2" action="{{ route('supervisor.logout') }}" method="POST"
                      style="display: none;">
                    @csrf
                </form>
            </div>

            <div class="dropdown user-profile ms-2 ms-sm-3">
                <a class="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown">
                    <img class="avatar rounded-circle img-thumbnail" src="{{asset('assets/img/logo.png')}}" alt="">
                </a>
                <div class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                    <div class="card border-0 w240">
                        <div class="card-body border-bottom">
                            <div class="d-flex py-1">
                                <img class="avatar rounded-circle" src="{{asset('assets/img/logo.png')}}" alt="">
                                <div class="flex-fill ms-3">
                                    <p class="mb-0 text-muted">
                                        <span class="fw-bold">
                                            {{Auth::user()->name_ar}}
                                        </span>
                                    </p>
                                    <small class="text-muted">{{Auth::user()->email}}</small>
                                    <div>
                                        Admin
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-group m-2" style="direction: rtl !important;text-align: right!important;" >
                            <a class="list-group-item list-group-item-action border-0" style="color: #333!important;" href="{{route('supervisor.logout')}}"
                               onclick="event.preventDefault();document.getElementById('logout-form-2').submit();"
                               title="Menu collapse"><i class="w30 fa fa-power-off"></i>
                               تسجيل الخروج
                            </a>
                            <form id="logout-form-2" action="{{ route('supervisor.logout') }}" method="POST"
                                  style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
