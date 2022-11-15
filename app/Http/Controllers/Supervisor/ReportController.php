<?php

namespace App\Http\Controllers\Supervisor;

use App\Http\Controllers\Controller;
use App\Models\Bill;
use App\Models\BillContainer;
use App\Models\Company;
use App\Models\Container;
use App\Models\Payment;
use App\Models\Safe;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function container_movement_report()
    {
        $containers = Container::all();
        return view('supervisor.reports.container_movement_report', compact('containers'));
    }

    public function container_movement_report_post(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        $container_id = $request->container_id;
        $container_k = Container::FindOrFail($container_id);
        $bills_containers = BillContainer::where('container_id', $container_id)
            ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])->get();

        $containers = Container::all();
        return view('supervisor.reports.container_movement_report',
            compact('container_k', 'from_date', 'to_date', 'containers', 'bills_containers'));
    }

    public function companies_report()
    {
        $companies = Company::all();
        return view('supervisor.reports.companies_report', compact('companies'));
    }

    public function companies_report_post(Request $request)
    {
        $company_id = $request->company_id;
        $company_k = Company::FindOrFail($company_id);
        $companies = Company::all();
        $bills = Bill::where('company_id', $company_id)->get();
        return view('supervisor.reports.companies_report',
            compact('company_k', 'companies', 'bills'));
    }

    public function safes_report()
    {
        $safes = Safe::all();
        return view('supervisor.reports.safes_report', compact('safes'));
    }

    public function safes_report_post(Request $request)
    {
        $safe_id = $request->safe_id;
        $safe_k = Safe::FindOrFail($safe_id);
        $safes = Safe::all();
        $payments = Payment::where('safe_id', $safe_id)->get();
        return view('supervisor.reports.safes_report',
            compact('safe_k', 'safes', 'payments'));
    }

    public function rental_container_report()
    {
        $containers = Container::where('status', 'مؤجرة')->get();
        return view('supervisor.reports.rental_container_report',compact('containers'));
    }
    public function daily_safe(){
        $date = date('Y-m-d');
        $payments = Payment::whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();
        $executed_bills = Bill::where('type','executed')
            ->whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();
        $unexecuted_bills = Bill::where('type','unexecuted')
            ->whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();
        $bill_containers = BillContainer::whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();

        $amounts = 0;
        foreach ($payments as $payment) {
            $amount = $payment->amount;
            $amounts = $amounts + $amount;
        }

        return view('supervisor.reports.daily_safe',compact('date','payments','amounts','executed_bills','unexecuted_bills','bill_containers'));
    }

}
