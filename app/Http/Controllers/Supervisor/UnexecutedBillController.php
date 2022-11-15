<?php

namespace App\Http\Controllers\Supervisor;

use App\Http\Controllers\Controller;
use App\Models\Bill;
use App\Models\BillContainer;
use App\Models\Company;
use App\Models\Container;
use App\Models\Contract;
use App\Models\Payment;
use App\Models\Safe;
use App\Models\Setting;
use Illuminate\Http\Request;

class UnexecutedBillController extends Controller
{
    public function create($container_id = null)
    {
        $companies = Company::all();
        $safes = Safe::all();
        return view('supervisor.unexecuted.create', compact('safes', 'companies'));
    }

    public function save(Request $request)
    {
        $containers_number = $request->containers_number;
        $total = 0;
        $i = 1;
        while ($i <= $containers_number) {
            $container = Container::First();
            $container_amount = round($container->rent_amount, 2);
            $total = $total + $container_amount;
            $i++;
        }

        $total_before_discount = $total;

        $data = $request->all();
        $contract = Contract::create($data);
        $data['contract_id'] = $contract->id;

        $discount_percent = $request->discount_percent;
        $discount_total = $discount_percent / 100 * $total_before_discount;
        $discount_total = round($discount_total, 2);

        $total_after_discount = $total_before_discount - $discount_total;
        $total_after_discount = round($total_after_discount, 2);

        $vat_percent = $request->vat_percent;

        $vat_total = $vat_percent / 100 * $total_after_discount;
        $vat_total = round($vat_total, 2);
        $final_total = $total_after_discount + $vat_total;
        $final_total = round($final_total, 2);
        $paid = $request->paid;
        $rest = $final_total - $paid;
        $rest = round($rest, 2);

        $data['total_before_discount'] = $total_before_discount;
        $data['discount_percent'] = $discount_percent;
        $data['discount_total'] = $discount_total;
        $data['total_after_discount'] = $total_after_discount;
        $data['vat_percent'] = $vat_percent;
        $data['vat_total'] = $vat_total;
        $data['final_total'] = $final_total;
        $data['paid'] = $paid;
        $data['rest'] = $rest;
        $data['amount'] = $paid;

        $bill = Bill::create($data);
        $data['bill_id'] = $bill->id;


        if ($paid > 0) {
            $payment = Payment::create($data);
        }

        if ($paid == "" || $paid == 0) {
            $bill->update([
                'payment_status' => 'unpaid'
            ]);
        } elseif ($paid == $final_total) {
            $bill->update([
                'payment_status' => 'totally paid'
            ]);
        } elseif ($paid < $final_total) {
            $bill->update([
                'payment_status' => 'partially paid'
            ]);
        } else {
            $bill->update([
                'payment_status' => 'totally paid'
            ]);
        }

        $safe_id = $request->safe_id;
        $safe = Safe::FindOrFail($safe_id);
        $old_balance = $safe->balance;
        $new_balance = $old_balance + $paid;
        $new_balance = round($new_balance, 2);
        $safe->update([
            'balance' => $new_balance
        ]);

        $company_id = $request->company_id;
        $company = Company::FindOrFail($company_id);
        $old_debts = $company->debts;
        $new_debts = $old_debts + $rest;
        $new_debts = round($new_debts, 2);
        $company->update([
            'debts' => $new_debts
        ]);

        return redirect()->route('create.unexecuted.contract.bill')->with('success', 'تم انشاء عقد غير منفذ بنجاح');
    }

    public function getTotal(Request $request)
    {
        $containers_number = $request->containers_number;
        $total = 0;
        $i = 1;
        while ($i <= $containers_number) {
            $container = Container::First();
            $container_amount = round($container->rent_amount, 2);
            $total = $total + $container_amount;
            $i++;
        }

        $total_before_discount = $total;
        $discount_percent = $request->discount_percent;
        $discount_total = $discount_percent / 100 * $total_before_discount;
        $discount_total = round($discount_total, 2);

        $total_after_discount = $total_before_discount - $discount_total;
        $total_after_discount = round($total_after_discount, 2);

        $vat_percent = $request->vat_percent;

        $vat_total = $vat_percent / 100 * $total_after_discount;
        $vat_total = round($vat_total, 2);
        $final_total = $total_after_discount + $vat_total;
        $final_total = round($final_total, 2);

        return response()->json([
            'total_amount' => $final_total
        ]);
    }

    public function contracts_bills()
    {
        $data = Bill::where('type','unexecuted')->get();
        $containers = Container::where('status', 'فارغة')->get();
        $companies = Company::all();
        return view('supervisor.unexecuted.index', compact('data','companies','containers'));
    }

    public function view_contract(Request $request)
    {
        $contract_id = $request->contract_id;
        $contract = Contract::FindOrFail($contract_id);

        echo "<table class='table table-bordered table-condensed table-hover table-striped'>";
        echo "<tbody>";

        echo "<tr>";
        echo "<td> المدينة </td>";
        echo "<td>" . $contract->city . "</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> الحى </td>";
        echo "<td>" . $contract->district . "</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> الشارع </td>";
        echo "<td>" . $contract->company->company_name . "</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> قطعة رقم </td>";
        echo "<td>" . $contract->street . "</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> رقم المخطط </td>";
        echo "<td>" . $contract->plot_number . "</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> مسطح البناء </td>";
        echo "<td>" . $contract->flat_construction . "</td>";
        echo "</tr>";

        echo "<tr>";
        echo "<td> عدد الردود </td>";
        echo "<td>" . $contract->responses_number . "</td>";
        echo "</tr>";
        echo "<tr>";

        echo "<td> بداية العقد </td>";
        echo "<td>" . $contract->contract_start_date . "</td>";
        echo "</tr>";
        echo "<tr>";

        echo "<td> نهاية العقد </td>";
        echo "<td>" . $contract->contract_end_date . "</td>";
        echo "</tr>";

        echo "<td> حالة العقد </td>";
        echo "<td>" . $contract->status . "</td>";
        echo "</tr>";

        echo "</tbody>";
        echo "</table>";
    }

    public function print_contract($id)
    {
        $contract = Contract::FindOrFail($id);
        $bill = Bill::where('contract_id', $contract->id)->first();
        $settings = Setting::first();
        $container = Container::First();
        $measure = $container->measure;
        return view('supervisor.unexecuted.print_contract', compact('contract','container','measure', 'bill', 'settings'));
    }

    public function print_bill($id)
    {
        $bill = Bill::FindOrFail($id);
        $contract = $bill->contract;
        $settings = Setting::first();
        $container = Container::First();
        $measure = $container->measure;
        return view('supervisor.unexecuted.print_bill', compact('contract', 'container','measure','bill', 'settings'));
    }

    public function print_both($id)
    {
        $bill = Bill::FindOrFail($id);
        $contract = $bill->contract;
        $settings = Setting::first();
        return view('supervisor.unexecuted.print_both', compact('contract', 'bill', 'settings'));
    }

    public function getDetails(Request $request)
    {
        $containers_number = $request->containers_number;
        $i = 1;
        while ($i <= $containers_number) {
            $container = Container::First();
            $container_amount = round($container->rent_amount, 2);
            $container_tax = round((15 / 100 * $container->rent_amount), 2);
            $container_total = round(($container_amount + $container_tax), 2);
            echo
                '
            <div class="row mb-2">
                <div class="col-md-4">
                    <label class="d-block">
                        المبلغ بدون الضريبة
                    </label>
                    <input readonly class="form-control" type="number" dir="ltr" value="' . $container_amount . '"/>
                </div>
                <div class="col-md-4">
                    <label class="d-block">
                        الضريبة
                    </label>
                    <input readonly class="form-control" dir="ltr" value="' . $container_tax . '" type="number"/>
                </div>
                <div class="col-md-4">
                    <label class="d-block">
                        الصافى مع الضريبة
                    </label>
                    <input readonly class="form-control" dir="ltr" value="' . $container_total . '" type="number"/>
                </div>
            </div>
            ';
            $i++;
        }
    }
    public function save_unexecuted(Request $request){

        $containers_ids = $request->container_id;
        $delivery_dates = $request->delivery_date;

        $bill_id = $request->bill_id;
        $bill = Bill::FindOrFail($bill_id);
        $contract = $bill->contract;
        $contract_id = $contract->id;

        foreach ($containers_ids as $containers_id) {
            $container = Container::FindOrFail($containers_id);
            $container_id = $container->id;
            $container_amount = round($container->rent_amount, 2);
            $container_tax = round((15 / 100 * $container->rent_amount), 2);
            $container_total = round(($container_amount + $container_tax), 2);

            $bill_container = BillContainer::create([
                'bill_id' => $bill_id,
                'contract_id' => $contract_id,
                'container_id' => $container_id,
                'amount' => $container_amount,
                'tax' => $container_tax,
                'total_amount' => $container_total,
                'delivery_date' => $delivery_dates[0],
            ]);
            $container->update([
                'status' => 'مؤجرة'
            ]);
        }


        $bill->update([
            'type' => 'executed'
        ]);
        return redirect()->route('contracts.bills')->with('success', 'تم تسليم الحاويات بنجاح');
    }

    public function getUnexecutedDetails(Request $request)
    {
        $containers_ids = $request->container_id;
        foreach ($containers_ids as $containers_id) {
            $container = Container::FindOrFail($containers_id);
            $container_name = $container->name;
            echo
                '
            <div class="row mb-2">
                <div class="col-md-3">
                    <label class="d-block">
                        رقم الحاوية
                    </label>
                    <input readonly class="form-control" type="text" dir="ltr" value="' . $container_name . '" />
                </div>
                <div class="col-md-3">
                    <label class="d-block">
                       تاريخ تسليم الحاوية
                    </label>
                    <input class="form-control" name="delivery_date[]" type="date" dir="ltr" value="'.date('Y-m-d').'" />
                </div>
            </div>
            ';
        }
    }


}



















