<style>

</style>
<!-- main-sidebar -->
<div class="app-sidebar__overlay" data-toggle="sidebar"></div>
<aside class="app-sidebar sidebar-scroll">

    <div class="main-sidebar-header active">
        <a class="desktop-logo logo-light active" href="{{ url('/supervisor/' . $page='home') }}"><img
                src="{{URL::asset('admin-assets/img/logo.png')}}" class="main-logo" alt="logo"></a>
        <a class="logo-icon mobile-logo icon-light active" href="{{ url('/supervisor/' . $page='home') }}"><img
                src="{{URL::asset('admin-assets/img/favicon.png')}}" class="logo-icon" alt="logo"></a>
    </div>

    <div class="main-sidemenu" style="overflow: auto!important;">
        <div class="app-sidebar__user clearfix">
            <div class="dropdown user-pro-body">
                <a href="{{route('supervisor.home')}}">
                    <div class="">
                        <img alt="user-img" class="avatar avatar-xl brround"
                             src="{{URL::asset('admin-assets/img/logo.png')}}">
                        <span class="avatar-status profile-status bg-green"></span>
                    </div>
                    <div class="user-info">
                        <h4 style="color: #000!important;" class="mt-3 pt-0 pb-0 pr-4 pl-4 mb-0">
                            {{$settings->company_name}}
                        </h4>
                    </div>
                </a>

            </div>
        </div>
        <ul class="side-menu" style="padding-bottom: 50px !important;" id="main-menu-navigation"
            data-menu="menu-navigation">
            <li class="slide {{ Request::is('home*') ? 'active' : '' }}">
                <a class="side-menu__item" href="{{ url('/supervisor/' . $page='home') }}">
                    <i class="fa fa-home side-menu__icon"></i>
                    <span class="side-menu__label"> الرئيسية </span></a>
            </li>
            @can('الاعدادات العامة')
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <i class="fa fa-wrench side-menu__icon"></i>
                        <span class="side-menu__label">
                        الاعدادات العامة
                    </span><i class="angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="slide-menu">
                        <li>
                            <a class="slide-item" href="{{ route('supervisor.settings.index') }}">
                                الاعدادات العامة للنظام
                            </a>
                        </li>
                    </ul>
                </li>
            @endcan
            @can('اضافة مشرف','عرض مشرف','اضافة صلاحية','عرض صلاحية')
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <i class="fa fa-users side-menu__icon"></i>
                        <span class="side-menu__label">
                        المشرفين والصلاحيات
                    </span><i class="angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="slide-menu">
                        @can('اضافة مشرف')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.supervisors.create') }}">
                                    اضافة مشرف جديد
                                </a>
                            </li>
                        @endcan
                        @can('عرض مشرف')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.supervisors.index') }}">
                                    قائمة المشرفين
                                </a>
                            </li>
                        @endcan
                        @can('اضافة صلاحية')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.roles.create') }}">
                                    اضافة صلاحية جديد
                                </a>
                            </li>
                        @endcan
                        @can('عرض صلاحية')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.roles.index') }}">
                                    قائمة صلاحيات المشرفين
                                </a>
                            </li>
                        @endcan
                    </ul>
                </li>
            @endcan
            @can('اضافة حاوية','عرض حاوية')
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <i class="fa fa-store side-menu__icon"></i>
                        <span class="side-menu__label">
                         ادارة الحاويات
                    </span><i class="angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="slide-menu">
                        @can('اضافة حاوية')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.containers.create') }}">
                                    اضافة حاوية جديدة
                                </a>
                            </li>
                        @endcan
                        @can('عرض حاوية')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.containers.index') }}">
                                    قائمة الحاويات
                                </a>
                            </li>
                        @endcan
                    </ul>
                </li>
            @endcan
            @can('اضافة شركة','عرض شركة')
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <i class="fa fa-building side-menu__icon"></i>
                        <span class="side-menu__label">
                         ادارة الشركات
                    </span><i class="angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="slide-menu">
                        @can('اضافة شركة')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.companies.create') }}">
                                    اضافة شركة جديدة
                                </a>
                            </li>
                        @endcan
                        @can('عرض شركة')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.companies.index') }}">
                                    قائمة الشركات
                                </a>
                            </li>
                        @endcan
                    </ul>
                </li>
            @endcan
            @can('اضافة خزنة','عرض خزنة')
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <i class="fa fa-money-bill side-menu__icon"></i>
                        <span class="side-menu__label">
                         ادارة الخزنات
                    </span><i class="angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="slide-menu">
                        @can('اضافة خزنة')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.safes.create') }}">
                                    اضافة خزنة جديدة
                                </a>
                            </li>
                        @endcan
                        @can('عرض خزنة')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.safes.index') }}">
                                    قائمة الخزنات
                                </a>
                            </li>
                        @endcan
                    </ul>
                </li>
            @endcan

            @can('انشاء عقد + فاتورة')
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <i class="fa fa-copy side-menu__icon"></i>
                        <span class="side-menu__label">
                         ادارة العقود الغير منفذة
                    </span><i class="angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="slide-menu">
                        <li>
                            <a class="slide-item" href="{{ route('create.unexecuted.contract.bill') }}">
                                انشاء عقد غير منفذ
                            </a>
                        </li>
                        <li>
                            <a class="slide-item" href="{{ route('unexecuted.contracts.bills') }}">
                                قائمة العقود الغير منفذة
                            </a>
                        </li>
                    </ul>
                </li>
            @endcan
            @can('انشاء عقد + فاتورة')
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <i class="fa fa-copy side-menu__icon"></i>
                        <span class="side-menu__label">
                         ادارة العقود المسلمة
                    </span><i class="angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="slide-menu">
                        <li>
                            <a class="slide-item" href="{{ route('create.contract.bill') }}">
                                انشاء عقد + فاتورة
                            </a>
                        </li>
                        <li>
                            <a class="slide-item" href="{{ route('contracts.bills') }}">
                                عرض الفواتير والعقود
                            </a>
                        </li>
                    </ul>
                </li>
            @endcan

            @can('اضافة مدفوعات','عرض مدفوعات')
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <i class="fa fa-money-bill side-menu__icon"></i>
                        <span class="side-menu__label">
                         ادارة المدفوعات
                    </span><i class="angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="slide-menu">
                        @can('اضافة مدفوعات')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.payments.create') }}">
                                    اضافة مدفوعات جديدة
                                </a>
                            </li>
                        @endcan
                        @can('عرض مدفوعات')
                            <li>
                                <a class="slide-item" href="{{ route('supervisor.payments.index') }}">
                                    قائمة المدفوعات
                                </a>
                            </li>
                        @endcan
                    </ul>
                </li>
            @endcan

            @can('التقارير')
                <li class="slide">
                    <a class="side-menu__item" data-toggle="slide" href="#">
                        <i class="fa fa-copy side-menu__icon"></i>
                        <span class="side-menu__label">
                         التقارير
                    </span><i class="angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="slide-menu">
                        @can('التقارير')
                            <li>
                                <a class="slide-item" href="{{ route('container.movement.report') }}">
                                    تقرير حركة الحاويات
                                </a>
                            </li>
                            <li>
                                <a class="slide-item" href="{{ route('companies.report') }}">
                                    تقرير العملاء ( الشركات )
                                </a>
                            </li>
                            <li>
                                <a class="slide-item" href="{{ route('safes.report') }}">
                                    تقرير الخزنات
                                </a>
                            </li>
                            <li>
                                <a class="slide-item" href="{{ route('rental.container.report') }}">
                                    تقرير الحاويات المؤجرة
                                </a>
                            </li>
                            <li>
                                <a class="slide-item" href="{{ route('daily.safe') }}">
                                    اغلاق يومية الصندوق
                                </a>
                            </li>
                        @endcan
                    </ul>
                </li>
            @endcan


        </ul>
    </div>
</aside>
<!-- main-sidebar -->
