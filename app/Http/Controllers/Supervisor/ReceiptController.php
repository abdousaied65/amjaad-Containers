<?php

namespace App\Http\Controllers\Supervisor;

use App\Exports\ReceiptsExport;
use App\Models\Company;
use App\Models\Receipt;
use App\Http\Controllers\Controller;
use App\Models\Safe;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class ReceiptController extends Controller
{
    public function index(Request $request)
    {
        $data = Receipt::all();
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.receipts.index', compact('data','safes','companies'));
    }

    public function create()
    {
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.receipts.create', compact('safes', 'companies'));
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'safe_id' => 'required',
            'amount' => 'required',
            'company_id' => 'required',
        ]);

        $input = $request->all();
        $receipt = Receipt::create($input);

        $safe_id = $request->safe_id;
        $safe = Safe::FindOrFail($safe_id);
        $old_balance = $safe->balance;
        $new_balance = $old_balance + $request->amount;
        $new_balance = round($new_balance, 2);
        $safe->update([
            'balance' => $new_balance
        ]);

        $company_id = $request->company_id;
        $company = Company::FindOrFail($company_id);
        $old_debts = $company->debts;
        $new_debts = $old_debts - $request->amount;
        $new_debts = round($new_debts, 2);
        $company->update([
            'debts' => $new_debts
        ]);

        return redirect()->route('supervisor.receipts.index')
            ->with('success', 'تم اضافة سند قبض بنجاح');
    }

    public function print_selected()
    {
        $receipts = Receipt::all();
        return view('supervisor.receipts.print', compact('receipts'));
    }

    public function export_receipts_excel()
    {
        return Excel::download(new ReceiptsExport(), 'كل سندات القبض.xlsx');
    }


    public function select_receipts(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        $data = Receipt::whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
            ->get();
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.receipts.index', compact('data','safes','companies'));
    }

    public function print_posted(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        if (!empty($from_date) && !empty($from_date)){
            $receipts = Receipt::whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }
        else{
            $receipts = Receipt::all();
        }
        return view('supervisor.receipts.print', compact('receipts'));
    }
}
