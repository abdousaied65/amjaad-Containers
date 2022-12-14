<!-- sidebar -->
<div class="sidebar px-3 py-2 py-md-3">
    <div class="d-flex flex-column h-100">
        <div class="d-flex align-items-center">
            <h4 class="sidebar-title flex-grow-1 text-center justify-content-center">
                <a href="{{route('supervisor.home')}}">
                    <img src="{{asset('assets/img/logo.png')}}" class="w-25 img-fluid" alt="">
                </a>
            </h4>
        </div>

        <!-- Menu: main ul -->
        <ul class="menu-list flex-grow-1">
            <li>
                <a class="m-link {{ Request::is('*/home') ? 'active' : '' }}" href="{{route('supervisor.home')}}">
                    <i class="fa fa-dashboard"></i>
                    <span>
                        لوحة تحكم الادارة
                    </span>
                </a>
            </li>
            @can(['الاعدادات العامة'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*/settings','*/settings/*') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-settings" href="#"><i
                            class="fa fa-cogs"></i> <span>
                        الاعدادات العامة
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*/settings','*/settings/*') ? 'show' : '' }}"
                        id="menu-settings">
                        <li><a class="ms-link {{ Request::is('*/supervisors') ? 'active' : '' }}"
                               href="{{route('supervisor.settings.index')}}">
                                الاعدادات العامة للنظام
                            </a></li>
                    </ul>
                </li>
            @endcan
            @can(['اضافة مشرف','عرض مشرف'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*/supervisors','*/supervisors/*') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-supervisors" href="#"><i
                            class="fa fa-users"></i> <span>
                        ادارة المشرفين
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*/supervisors','*/supervisors/*') ? 'show' : '' }}"
                        id="menu-supervisors">
                        @can('اضافة مشرف')
                            <li><a class="ms-link {{ Request::is('*/supervisors/create') ? 'active' : '' }}"
                                   href="{{route('supervisor.supervisors.create')}}">
                                    اضافة جديد
                                </a></li>
                        @endcan
                        @can('عرض مشرف')
                            <li><a class="ms-link {{ Request::is('*/supervisors') ? 'active' : '' }}"
                                   href="{{route('supervisor.supervisors.index')}}">
                                    عرض الكل
                                </a></li>
                        @endcan
                    </ul>
                </li>
            @endcan
            @can(['اضافة صلاحية','عرض صلاحية'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*/roles','*/roles/*') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-roles" href="#"><i
                            class="fa fa-lock"></i> <span>
                        ادارة الصلاحيات
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*/roles','*/roles/*') ? 'show' : '' }}"
                        id="menu-roles">
                        @can('اضافة صلاحية')
                            <li><a class="ms-link {{ Request::is('*/roles/create') ? 'active' : '' }}"
                                   href="{{route('supervisor.roles.create')}}">
                                    اضافة جديد
                                </a></li>
                        @endcan
                        @can('عرض صلاحية')
                            <li><a class="ms-link {{ Request::is('*/roles') ? 'active' : '' }}"
                                   href="{{route('supervisor.roles.index')}}">
                                    عرض الكل
                                </a></li>
                        @endcan
                    </ul>
                </li>
            @endcan
            @can(['اضافة حاوية','عرض حاوية'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*/containers','*/containers/*') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-containers" href="#"><i
                            class="fa fa-database"></i> <span>
                        ادارة الحاويات
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*/containers','*/containers/*') ? 'show' : '' }}"
                        id="menu-containers">
                        @can('اضافة حاوية')
                            <li><a class="ms-link {{ Request::is('*/containers/create') ? 'active' : '' }}"
                                   href="{{route('supervisor.containers.create')}}">
                                    اضافة جديد
                                </a></li>
                        @endcan
                        @can('عرض حاوية')
                            <li><a class="ms-link {{ Request::is('*/containers') ? 'active' : '' }}"
                                   href="{{route('supervisor.containers.index')}}">
                                    عرض الكل
                                </a></li>
                        @endcan
                    </ul>
                </li>
            @endcan
            @can(['اضافة شركة','عرض شركة'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*/companies','*/companies/*') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-companies" href="#"><i
                            class="fa fa-building"></i> <span>
                        ادارة الشركات
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*/companies','*/companies/*') ? 'show' : '' }}"
                        id="menu-companies">
                        @can('اضافة شركة')
                            <li><a class="ms-link {{ Request::is('*/companies/create') ? 'active' : '' }}"
                                   href="{{route('supervisor.companies.create')}}">
                                    اضافة جديد
                                </a></li>
                        @endcan
                        @can('عرض شركة')
                            <li><a class="ms-link {{ Request::is('*/companies') ? 'active' : '' }}"
                                   href="{{route('supervisor.companies.index')}}">
                                    عرض الكل
                                </a></li>
                        @endcan
                    </ul>
                </li>
            @endcan
            @can(['اضافة خزنة','عرض خزنة'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*/safes','*/safes/*') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-safes" href="#"><i
                            class="fa fa-box"></i> <span>
                        ادارة الخزنات
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*/safes','*/safes/*') ? 'show' : '' }}"
                        id="menu-safes">
                        @can('اضافة خزنة')
                            <li><a class="ms-link {{ Request::is('*/safes/create') ? 'active' : '' }}"
                                   href="{{route('supervisor.safes.create')}}">
                                    اضافة جديد
                                </a></li>
                        @endcan
                        @can('عرض خزنة')
                            <li><a class="ms-link {{ Request::is('*/safes') ? 'active' : '' }}"
                                   href="{{route('supervisor.safes.index')}}">
                                    عرض الكل
                                </a></li>
                        @endcan
                    </ul>
                </li>
            @endcan


            @can(['انشاء عقد + فاتورة'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*/unexecuted*','*/create-unexecuted-contract-bill') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-unexecuted" href="#"><i
                            class="fa fa-copy"></i> <span>
                        ادارة العقود الغير منفذة
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*/unexecuted*','*/create-unexecuted-contract-bill') ? 'show' : '' }}"
                        id="menu-unexecuted">
                        @can('انشاء عقد + فاتورة')
                            <li>
                                <a class="ms-link {{ Request::is('*/create-unexecuted-contract-bill') ? 'active' : '' }}"
                                   href="{{route('create.unexecuted.contract.bill')}}">
                                    اضافة جديد
                                </a></li>
                        @endcan
                        @can('انشاء عقد + فاتورة')
                            <li><a class="ms-link {{ Request::is('*/unexecuted*') ? 'active' : '' }}"
                                   href="{{route('unexecuted.contracts.bills')}}">
                                    عرض الكل
                                </a></li>
                        @endcan
                    </ul>
                </li>
            @endcan

            @can(['انشاء عقد + فاتورة'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*/contract*','*/create-contract-bill') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-contract" href="#"><i
                            class="fa fa-copy"></i> <span>
                        ادارة العقود المسلمة
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*/contract*','*/create-contract-bill') ? 'show' : '' }}"
                        id="menu-contract">
                        @can('انشاء عقد + فاتورة')
                            <li><a class="ms-link {{ Request::is('*/create-contract-bill') ? 'active' : '' }}"
                                   href="{{route('create.contract.bill')}}">
                                    اضافة جديد
                                </a></li>
                        @endcan
                        @can('انشاء عقد + فاتورة')
                            <li><a class="ms-link {{ Request::is('*/contract*') ? 'active' : '' }}"
                                   href="{{route('contracts.bills')}}">
                                    عرض الكل
                                </a></li>
                        @endcan
                    </ul>
                </li>
            @endcan


            @can(['اضافة مدفوعات','عرض مدفوعات'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*/payments','*/payments/*') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-payments" href="#"><i
                            class="fa fa-money-bill"></i> <span>
                        ادارة المدفوعات
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*/payments','*/payments/*') ? 'show' : '' }}"
                        id="menu-payments">
                        @can('اضافة مدفوعات')
                            <li><a class="ms-link {{ Request::is('*/payments/create') ? 'active' : '' }}"
                                   href="{{route('supervisor.payments.create')}}">
                                    اضافة جديد
                                </a></li>
                        @endcan
                        @can('عرض مدفوعات')
                            <li><a class="ms-link {{ Request::is('*/payments') ? 'active' : '' }}"
                                   href="{{route('supervisor.payments.index')}}">
                                    عرض الكل
                                </a></li>
                        @endcan
                    </ul>
                </li>
            @endcan


            @can(['التقارير'])
                <li class="collapsed">
                    <a class="m-link {{ Request::is('*report*,','*daily*') ? 'active' : '' }}"
                       data-bs-toggle="collapse" data-bs-target="#menu-report" href="#"><i
                            class="fa fa-money-bill"></i> <span>
                        التقارير
                    </span> </a>
                    <ul class="sub-menu collapse {{ Request::is('*report*','*daily*') ? 'show' : '' }}"
                        id="menu-report">
                        @can('التقارير')
                            <li>
                                <a class="ms-link {{ Request::is('*/container-movement-report') ? 'active' : '' }}"
                                   href="{{route('container.movement.report')}}">
                                    تقرير حركة الحاويات
                                </a>
                            </li>
                            <li>
                                <a class="ms-link {{ Request::is('*/companies-report') ? 'active' : '' }}"
                                   href="{{ route('companies.report') }}">
                                    تقرير العملاء ( الشركات )
                                </a>
                            </li>
                            <li>
                                <a class="ms-link {{ Request::is('*/safes-report') ? 'active' : '' }}"
                                   href="{{ route('safes.report') }}">
                                    تقرير الخزنات
                                </a>
                            </li>
                            <li>
                                <a class="ms-link {{ Request::is('*/rental-container-report') ? 'active' : '' }}"
                                   href="{{ route('rental.container.report') }}">
                                    تقرير الحاويات المؤجرة
                                </a>
                            </li>
                            <li>
                                <a class="ms-link {{ Request::is('*/daily-safe') ? 'active' : '' }}"
                                   href="{{ route('daily.safe') }}">
                                    اغلاق يومية الصندوق
                                </a>
                            </li>

                        @endcan

                    </ul>
                </li>
            @endcan

            <li>
                <a class="m-link" href="{{ route('supervisor.logout') }}"
                   onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                    <i class="fa fa-power-off"></i>
                    <span>
                    تسجيل الخروج
                    </span>
                </a>
                <form id="logout-form" action="{{ route('supervisor.logout') }}" method="POST"
                      style="display: none;">
                    @csrf
                </form>
            </li>
        </ul>

        <!-- Menu: menu collepce btn -->
        <button type="button" class="btn btn-link sidebar-mini-btn text-light">
            <span><i class="fa fa-bars"></i></span>
        </button>
    </div>
</div>
