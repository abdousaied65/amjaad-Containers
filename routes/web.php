<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('supervisor.auth.login');
})->name('index');

// *********  Supervisor Routes ******** //
Route::group(
    [
        'namespace' => 'Supervisor'
    ], function () {
    Auth::routes(
        [
            'verify' => false,
            'register' => false,
        ]
    );
    Route::GET('supervisor/login', 'Auth\LoginController@showLoginForm')->name('supervisor.login');
    Route::POST('supervisor/login', 'Auth\LoginController@login');
    Route::POST('supervisor/logout', 'Auth\LoginController@logout')->name('supervisor.logout');
    Route::GET('supervisor/password/confirm', 'Auth\ConfirmPasswordController@showConfirmForm')->name('supervisor.password.confirm');
    Route::POST('supervisor/password/confirm', 'Auth\ConfirmPasswordController@confirm');
    Route::POST('supervisor/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('supervisor.password.email');
    Route::GET('supervisor/password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('supervisor.password.request');
    Route::POST('supervisor/password/reset', 'Auth\ResetPasswordController@reset')->name('supervisor.password.update');
    Route::GET('supervisor/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('supervisor.password.reset');
});

Route::group(
    ['middleware' => ['auth:supervisor-web'],
        'prefix' => 'supervisor',
        'namespace' => 'Supervisor'
    ], function () {
    Route::get('/', 'Auth\LoginController@showLoginForm');
    Route::get('/home', 'HomeController@index')->name('supervisor.home');
    Route::get('/lock-screen', 'HomeController@lock_screen')->name('supervisor.lock.screen');

    Route::get('/settings', 'SettingController@index')->name('supervisor.settings.index');
    Route::post('/settings-update', 'SettingController@update')->name('supervisor.settings.update');

    // Supervisors Routes
    Route::resource('supervisors', 'SupervisorController')->names([
        'index' => 'supervisor.supervisors.index',
        'create' => 'supervisor.supervisors.create',
        'update' => 'supervisor.supervisors.update',
        'destroy' => 'supervisor.supervisors.destroy',
        'edit' => 'supervisor.supervisors.edit',
        'store' => 'supervisor.supervisors.store',
        'show' => 'supervisor.supervisors.show',
    ]);
    Route::post('/remove-selected-supervisors', 'SupervisorController@remove_selected')->name('remove.selected.supervisors');
    Route::get('/print-selected-supervisors', 'SupervisorController@print_selected')->name('print.selected.supervisors');
    Route::post('/export-supervisors-excel', 'SupervisorController@export_supervisors_excel')->name('export.supervisors.excel');

    // SupervisorProfile Routes
    Route::get('profile/edit/{id}', 'SupervisorController@edit_profile')->name('supervisor.profile.edit');
    Route::patch('profile/update/{id}', 'SupervisorController@update_profile')->name('supervisor.profile.update');

    // Roles Routes
    Route::resource('roles', 'RoleController')->names([
        'index' => 'supervisor.roles.index',
        'create' => 'supervisor.roles.create',
        'update' => 'supervisor.roles.update',
        'destroy' => 'supervisor.roles.destroy',
        'edit' => 'supervisor.roles.edit',
        'store' => 'supervisor.roles.store',
    ]);

    // containers Routes
    Route::resource('containers', 'ContainerController')->names([
        'index' => 'supervisor.containers.index',
        'create' => 'supervisor.containers.create',
        'update' => 'supervisor.containers.update',
        'destroy' => 'supervisor.containers.destroy',
        'edit' => 'supervisor.containers.edit',
        'store' => 'supervisor.containers.store',
        'show' => 'supervisor.containers.show',
    ]);
    Route::post('/remove-selected-containers', 'ContainerController@remove_selected')->name('remove.selected.containers');
    Route::get('/print-selected-containers', 'ContainerController@print_selected')->name('print.selected.containers');
    Route::post('/export-containers-excel', 'ContainerController@export_containers_excel')->name('export.containers.excel');

    Route::post('/export-containers-by-status-excel', 'ContainerController@export_containers_by_status_excel')
        ->name('export.containers.by.status.excel');

    Route::post('/export-containers-by-end-excel', 'ContainerController@export_containers_by_end_excel')
        ->name('export.containers.by.end.excel');


    // companies Routes
    Route::resource('companies', 'CompanyController')->names([
        'index' => 'supervisor.companies.index',
        'create' => 'supervisor.companies.create',
        'update' => 'supervisor.companies.update',
        'destroy' => 'supervisor.companies.destroy',
        'edit' => 'supervisor.companies.edit',
        'store' => 'supervisor.companies.store',
        'show' => 'supervisor.companies.show',
    ]);
    Route::post('/remove-selected-companies', 'CompanyController@remove_selected')->name('remove.selected.companies');
    Route::get('/print-selected-companies', 'CompanyController@print_selected')->name('print.selected.companies');
    Route::post('/export-companies-excel', 'CompanyController@export_companies_excel')->name('export.companies.excel');

    Route::post('store-company-details', 'CompanyController@storeCon')->name('supervisor.companies.storeCon');

    Route::post('get-container-details', 'BillController@getDetails')->name('containers.getDetails');
    Route::post('get-container-details2', 'BillController@getDetails2')->name('containers.getDetails2');
    Route::post('get-bill-total', 'BillController@getTotal')->name('bill.total');
    Route::post('get-bill-total2', 'BillController@getTotal2')->name('bill.total2');

    // safes Routes
    Route::resource('safes', 'SafeController')->names([
        'index' => 'supervisor.safes.index',
        'create' => 'supervisor.safes.create',
        'update' => 'supervisor.safes.update',
        'destroy' => 'supervisor.safes.destroy',
        'edit' => 'supervisor.safes.edit',
        'store' => 'supervisor.safes.store',
        'show' => 'supervisor.safes.show',
    ]);
    Route::post('/remove-selected-safes', 'SafeController@remove_selected')->name('remove.selected.safes');
    Route::get('/print-selected-safes', 'SafeController@print_selected')->name('print.selected.safes');
    Route::post('/export-safes-excel', 'SafeController@export_safes_excel')->name('export.safes.excel');

    Route::get('create-contract-bill/{id?}', 'BillController@create')->name('create.contract.bill');
    Route::post('save-contract-bill', 'BillController@save')->name('save.contract.bill');

    Route::post('view-container-details', 'HomeController@view_container_details')->name('view.container.details');

    Route::get('contracts-bills', 'BillController@contracts_bills')->name('contracts.bills');
    Route::post('/print-selected-bills', 'SearchController@print_selected')
        ->name('print.selected.bills');

    Route::post('view-contract', 'BillController@view_contract')->name('view.contract');

    Route::get('print-contract/{id?}', 'BillController@print_contract')->name('print.contract');
    Route::get('print-bill/{id?}', 'BillController@print_bill')->name('print.bill');
    Route::get('print-both/{id?}', 'BillController@print_both')->name('print.both');

    // Reports
    Route::get('container-movement-report', 'ReportController@container_movement_report')->name('container.movement.report');
    Route::post('container-movement-report', 'ReportController@container_movement_report_post')->name('container.movement.report.post');

    Route::get('companies-report', 'ReportController@companies_report')->name('companies.report');
    Route::post('companies-report', 'ReportController@companies_report_post')->name('companies.report.post');

    Route::get('safes-report', 'ReportController@safes_report')->name('safes.report');
    Route::post('safes-report', 'ReportController@safes_report_post')->name('safes.report.post');

    Route::get('rental-container-report', 'ReportController@rental_container_report')->name('rental.container.report');

    Route::get('daily-safe', 'ReportController@daily_safe')->name('daily.safe');

    // payments Routes
    Route::resource('payments', 'PaymentController')->names([
        'index' => 'supervisor.payments.index',
        'create' => 'supervisor.payments.create',
        'store' => 'supervisor.payments.store',
    ]);
    Route::get('/print-selected-payments', 'PaymentController@print_selected')->name('print.selected.payments');
    Route::post('/export-payments-excel', 'PaymentController@export_payments_excel')->name('export.payments.excel');
    Route::post('/select-payments', 'PaymentController@select_payments')->name('select.payments');

    Route::post('/print-posted-payments', 'PaymentController@print_posted')->name('print.posted.payments');


    // unexecuted

    Route::get('create-unexecuted-contract-bill/{id?}', 'UnexecutedBillController@create')->name('create.unexecuted.contract.bill');
    Route::post('save-unexecuted-contract-bill', 'UnexecutedBillController@save')->name('save.unexecuted.contract.bill');

    Route::get('unexecuted-contracts-bills', 'UnexecutedBillController@contracts_bills')->name('unexecuted.contracts.bills');
    Route::post('get-unexecuted-bill-total', 'UnexecutedBillController@getTotal')->name('bill.unexecuted.total');
    Route::post('get-unexecuted-bill-total2', 'UnexecutedBillController@getTotal2')
        ->name('bill.unexecuted.total2');
    Route::post('get-unexecuted-container-details', 'UnexecutedBillController@getDetails')->name('unexecuted.containers.getDetails');
    Route::post('get-unexecuted-container-details-2', 'UnexecutedBillController@getDetails2')
        ->name('unexecuted.containers.getDetails2');

    Route::get('print-unexecuted-contract/{id?}', 'UnexecutedBillController@print_contract')->name('print.unexecuted.contract');
    Route::get('print-unexecuted-bill/{id?}', 'UnexecutedBillController@print_bill')->name('print.unexecuted.bill');
    Route::get('print-unexecuted-both/{id?}', 'UnexecutedBillController@print_both')->name('print.unexecuted.both');

    Route::post('get-details', 'UnexecutedBillController@getUnexecutedDetails')->name('getDetails');

    Route::post('save-unexecuted', 'UnexecutedBillController@save_unexecuted')->name('save.unexecuted');


    // search

    Route::post('search-executed-by-company', 'SearchController@search_executed_by_company')->name('search.executed.by.company');
    Route::post('search-executed-by-phone', 'SearchController@search_executed_by_phone')->name('search.executed.by.phone');
    Route::post('search-executed-by-bill', 'SearchController@search_executed_by_bill')->name('search.executed.by.bill');
    Route::post('search-executed-by-date', 'SearchController@search_executed_by_date')->name('search.executed.by.date');

    Route::post('search-unexecuted-by-company', 'SearchController@search_unexecuted_by_company')->name('search.unexecuted.by.company');
    Route::post('search-unexecuted-by-phone', 'SearchController@search_unexecuted_by_phone')->name('search.unexecuted.by.phone');
    Route::post('search-unexecuted-by-bill', 'SearchController@search_unexecuted_by_bill')->name('search.unexecuted.by.bill');


});
?>
