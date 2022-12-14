<?php

namespace App\Http\Controllers\Supervisor;

use App\Exports\PaymentsExport;
use App\Models\Company;
use App\Models\Payment;
use App\Http\Controllers\Controller;
use App\Models\Safe;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $data = Payment::all();
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.payments.index', compact('data','safes','companies'));
    }

    public function create()
    {
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.payments.create', compact('safes', 'companies'));
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'safe_id' => 'required',
            'amount' => 'required',
            'company_id' => 'required',
        ]);

        $input = $request->all();
        $payment = Payment::create($input);

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

        return redirect()->route('supervisor.payments.index')
            ->with('success', 'تم اضافة مدفوعات بنجاح');
    }

    public function print_selected()
    {
        $payments = Payment::all();
        return view('supervisor.payments.print', compact('payments'));
    }

    public function export_payments_excel()
    {
        return Excel::download(new PaymentsExport(), 'كل المدفوعات.xlsx');
    }


    public function select_payments(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        $data = Payment::whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
            ->get();
        $safes = Safe::all();
        $companies = Company::all();
        return view('supervisor.payments.index', compact('data','safes','companies'));
    }

    public function print_posted(Request $request)
    {
        $from_date = $request->from_date;
        $to_date = $request->to_date;
        if (!empty($from_date) && !empty($from_date)){
            $payments = Payment::whereBetween('created_at', [$from_date, date('Y-m-d', strtotime($to_date . ' +1 day'))])
                ->get();
        }
        else{
            $payments = Payment::all();
        }
        return view('supervisor.payments.print', compact('payments'));
    }
}
