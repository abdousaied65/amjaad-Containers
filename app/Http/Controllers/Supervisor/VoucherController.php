<?php

namespace App\Http\Controllers\Supervisor;

use App\Exports\VouchersExport;
use App\Models\Company;
use App\Models\Voucher;
use App\Http\Controllers\Controller;
use App\Models\Safe;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class VoucherController extends Controller
{
    public function index(Request $request)
    {
        $data = Voucher::all();
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.vouchers.index', compact('data','safes','companies'));
    }

    public function create()
    {
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.vouchers.create', compact('safes', 'companies'));
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'safe_id' => 'required',
            'amount' => 'required',
            'company_id' => 'required',
        ]);

        $input = $request->all();
        $voucher = Voucher::create($input);

        $safe_id = $request->safe_id;
        $safe = Safe::FindOrFail($safe_id);
        $old_balance = $safe->balance;
        $new_balance = $old_balance - $request->amount;
        $new_balance = round($new_balance, 2);
        $safe->update([
            'balance' => $new_balance
        ]);

        $company_id = $request->company_id;
        $company = Company::FindOrFail($company_id);
        $old_debts = $company->debts;
        $new_debts = $old_debts + $request->amount;
        $new_debts = round($new_debts, 2);
        $company->update([
            'debts' => $new_debts
        ]);

        return redirect()->route('supervisor.vouchers.index')
            ->with('success', 'تم اضافة سند صرف بنجاح');
    }

    public function print_selected()
    {
        $vouchers = Voucher::all();
        return view('supervisor.vouchers.print', compact('vouchers'));
    }

    public function export_vouchers_excel()
    {
        return Excel::download(new VouchersExport(), 'كل سندات الصرف.xlsx');
    }


    public function select_vouchers(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        $data = Voucher::whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
            ->get();
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.vouchers.index', compact('data','safes','companies'));
    }

    public function print_posted(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        if (!empty($from_date) && !empty($from_date)){
            $vouchers = Voucher::whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }
        else{
            $vouchers = Voucher::all();
        }
        return view('supervisor.vouchers.print', compact('vouchers'));
    }
}
