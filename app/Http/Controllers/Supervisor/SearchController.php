<?php

namespace App\Http\Controllers\Supervisor;

use App\Http\Controllers\Controller;
use App\Models\Bill;
use App\Models\Company;
use App\Models\Container;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search_executed_by_company(Request $request)
    {
        $company_id = $request->company_id;
        $companies = Company::all();
        $company_k = Company::FindOrFail($company_id);
        $data = Bill::where('type', 'executed')->where('company_id', $company_id)->get();
        if ($data->isEmpty()) {
            return view('supervisor.bill.index', compact('data', 'company_k', 'companies'))
                ->with('error', 'لا يوجد فواتير وعقود منفذة تخص اسم العميل هذا');
        } else {
            return view('supervisor.bill.index', compact('data', 'company_k', 'companies'));
        }
    }

    public function search_executed_by_phone(Request $request)
    {
        $phone_number = $request->phone_number;
        $companies = Company::all();
        $company = Company::where('phone_number', 'LIKE', '%' . $phone_number . '%')->first();
        if (!empty($company)) {
            $company_id = $company->id;
            $data = Bill::where('type', 'executed')->where('company_id', $company_id)->get();
            return view('supervisor.bill.index', compact('data', 'phone_number', 'companies'));
        } else {
            $data = new Collection;
            return view('supervisor.bill.index', compact('data', 'phone_number', 'companies'))
                ->with('error', 'لا يوجد فواتير وعقود منفذة تخص رقم الجوال هذا');
        }
    }

    public function search_executed_by_bill(Request $request)
    {
        $bill_id = $request->bill_id;
        $companies = Company::all();
        $data = Bill::where('type', 'executed')->where('id', $bill_id)->get();
        if ($data->isEmpty()) {
            return view('supervisor.bill.index', compact('data', 'bill_id', 'companies'))
                ->with('error', 'لا يوجد فواتير وعقود منفذة تخص رقم الفاتورة هذه');
        } else {
            return view('supervisor.bill.index', compact('data', 'bill_id', 'companies'));
        }
    }

    public function search_unexecuted_by_company(Request $request)
    {
        $company_id = $request->company_id;
        $companies = Company::all();
        $containers = Container::where('status', 'فارغة')->get();

        $company_k = Company::FindOrFail($company_id);
        $data = Bill::where('type', 'unexecuted')->where('company_id', $company_id)->get();
        if ($data->isEmpty()) {
            return view('supervisor.unexecuted.index', compact('data', 'containers', 'company_k', 'companies'))
                ->with('error', 'لا يوجد فواتير وعقود غير منفذة تخص اسم العميل هذا');
        } else {
            return view('supervisor.unexecuted.index', compact('data', 'containers', 'company_k', 'companies'));
        }
    }

    public function search_unexecuted_by_phone(Request $request)
    {
        $phone_number = $request->phone_number;
        $companies = Company::all();
        $containers = Container::where('status', 'فارغة')->get();
        $company = Company::where('phone_number', 'LIKE', '%' . $phone_number . '%')->first();
        if (!empty($company)) {
            $company_id = $company->id;
            $data = Bill::where('type', 'unexecuted')->where('company_id', $company_id)->get();
            return view('supervisor.unexecuted.index', compact('data', 'containers', 'phone_number', 'companies'));
        } else {
            $data = new Collection;
            return view('supervisor.unexecuted.index', compact('data', 'containers', 'phone_number', 'companies'))
                ->with('error', 'لا يوجد فواتير وعقود غير منفذة تخص رقم الجوال هذا');
        }
    }

    public function search_unexecuted_by_bill(Request $request)
    {
        $bill_id = $request->bill_id;
        $companies = Company::all();
        $containers = Container::where('status', 'فارغة')->get();
        $data = Bill::where('type', 'unexecuted')->where('id', $bill_id)->get();
        if ($data->isEmpty()) {
            return view('supervisor.unexecuted.index', compact('data', 'containers', 'bill_id', 'companies'))
                ->with('error', 'لا يوجد فواتير وعقود غير منفذة تخص رقم الفاتورة هذه');
        } else {
            return view('supervisor.unexecuted.index', compact('data', 'containers', 'bill_id', 'companies'));
        }
    }


}
