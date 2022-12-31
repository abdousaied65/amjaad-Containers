<?php

namespace App\Http\Controllers\Supervisor;

use App\Http\Controllers\Controller;
use App\Models\Bill;
use App\Models\BillContainer;
use App\Models\Company;
use App\Models\Container;
use App\Models\Receipt;
use App\Models\Safe;
use App\Models\Voucher;
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

    public function container_movement_print(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        $container_id = $request->container_id;
        $container_k = Container::FindOrFail($container_id);
        $bills_containers = BillContainer::where('container_id', $container_id)
            ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])->get();

        $containers = Container::all();
        return view('supervisor.reports.container_movement_print',
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
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        $bills = Bill::where('company_id', $company_id)
            ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
            ->get();
        $receipts = Receipt::where('company_id', $company_id)
            ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
            ->get();
        return view('supervisor.reports.companies_report',
            compact('company_k', 'companies', 'receipts', 'bills'));
    }

    public function companies_print(Request $request)
    {
        $company_id = $request->company_id;
        $company_k = Company::FindOrFail($company_id);
        $companies = Company::all();
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        $bills = Bill::where('company_id', $company_id)
            ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
            ->get();
        $receipts = Receipt::where('company_id', $company_id)
            ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
            ->get();
        return view('supervisor.reports.companies_print',
            compact('company_k', 'companies', 'receipts', 'bills'));
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

        $from_date = $request->from_date;
        $to_date = $request->to_date;

        $receipts = Receipt::where('safe_id', $safe_id)
            ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
            ->get();


        return view('supervisor.reports.safes_report',
            compact('safe_k', 'safes', 'receipts'));
    }

    public function safes_print(Request $request)
    {
        $safe_id = $request->safe_id;
        $safe_k = Safe::FindOrFail($safe_id);
        $safes = Safe::all();

        $from_date = $request->from_date;
        $to_date = $request->to_date;

        $receipts = Receipt::where('safe_id', $safe_id)
            ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
            ->get();


        return view('supervisor.reports.safes_print',
            compact('safe_k', 'safes', 'receipts'));
    }


    public function rental_container_report()
    {
        return view('supervisor.reports.rental_container_report');
    }

    public function rental_container_report_post(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        return view('supervisor.reports.rental_container_report',compact('from_date','to_date'));
    }

    public function rental_container_print(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        return view('supervisor.reports.rental_container_print',compact('from_date','to_date'));
    }

    public function daily_safe()
    {
        return view('supervisor.reports.daily_safe');
    }

    public function daily_safe_post(Request $request)
    {
        $date = $request->date;
        $receipts = Receipt::whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();
        $executed_bills = Bill::where('type', 'executed')
            ->whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();
        $unexecuted_bills = Bill::where('type', 'unexecuted')
            ->whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();
        $bill_containers = BillContainer::whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();

        $amounts = 0;
        foreach ($receipts as $receipt) {
            $amount = $receipt->amount;
            $amounts = $amounts + $amount;
        }

        return view('supervisor.reports.daily_safe', compact('date', 'receipts', 'amounts', 'executed_bills', 'unexecuted_bills', 'bill_containers'));
    }

    public function daily_safe_print(Request $request)
    {
        $date = $request->date;
        $receipts = Receipt::whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();
        $executed_bills = Bill::where('type', 'executed')
            ->whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();
        $unexecuted_bills = Bill::where('type', 'unexecuted')
            ->whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();
        $bill_containers = BillContainer::whereBetween('created_at', [$date, date('Y-m-d', strtotime($date . ' +1 day'))])->get();

        $amounts = 0;
        foreach ($receipts as $receipt) {
            $amount = $receipt->amount;
            $amounts = $amounts + $amount;
        }

        return view('supervisor.reports.daily_safe_print', compact('date', 'receipts', 'amounts', 'executed_bills', 'unexecuted_bills', 'bill_containers'));
    }

    public function receipt_report()
    {
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.reports.receipt_report', compact('safes','companies'));
    }

    public function receipt_report_post(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;

        $safe_id = $request->safe_id;
        $company_id = $request->company_id;

        if ($safe_id == "all"){
            $receipts = Receipt::where('company_id', $company_id)
                ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }
        else{
            $receipts = Receipt::where('company_id', $company_id)
                ->where('safe_id',$safe_id)
                ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }

        $safes = Safe::all();
        $companies = Company::all();

        return view('supervisor.reports.receipt_report',
            compact('safe_id','company_id', 'from_date', 'to_date', 'safes','companies', 'receipts'));
    }
    public function receipt_print(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;

        $safe_id = $request->safe_id;
        $company_id = $request->company_id;

        if ($safe_id == "all"){
            $receipts = Receipt::where('company_id', $company_id)
                ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }
        else{
            $receipts = Receipt::where('company_id', $company_id)
                ->where('safe_id',$safe_id)
                ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }

        $safes = Safe::all();
        $companies = Company::all();

        return view('supervisor.reports.receipt_print',
            compact('safe_id','company_id', 'from_date', 'to_date', 'safes','companies', 'receipts'));
    }


    public function voucher_report()
    {
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.reports.voucher_report', compact('safes','companies'));
    }

    public function voucher_report_post(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;

        $safe_id = $request->safe_id;
        $company_id = $request->company_id;

        if ($safe_id == "all"){
            $vouchers = Voucher::where('company_id', $company_id)
                ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }
        else{
            $vouchers = Voucher::where('company_id', $company_id)
                ->where('safe_id',$safe_id)
                ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }

        $safes = Safe::all();
        $companies = Company::all();

        return view('supervisor.reports.voucher_report',
            compact('safe_id','company_id', 'from_date', 'to_date', 'safes','companies', 'vouchers'));
    }
    public function voucher_print(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;

        $safe_id = $request->safe_id;
        $company_id = $request->company_id;

        if ($safe_id == "all"){
            $vouchers = Voucher::where('company_id', $company_id)
                ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }
        else{
            $vouchers = Voucher::where('company_id', $company_id)
                ->where('safe_id',$safe_id)
                ->whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }

        $safes = Safe::all();
        $companies = Company::all();

        return view('supervisor.reports.voucher_print',
            compact('safe_id','company_id', 'from_date', 'to_date', 'safes','companies', 'vouchers'));
    }




}
