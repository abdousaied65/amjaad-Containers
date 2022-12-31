<?php

namespace App\Exports;

use App\Models\Company;
use App\Models\Receipt;
use App\Models\Safe;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ReceiptsExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        $receipts = Receipt::select('bill_id', 'safe_id', 'contract_id','company_id', 'amount', 'created_at')->get();
        $receipts->transform(function ($i) {
            $i->safe_id = Safe::FindOrFail($i->safe_id)->safe_name;
            $i->company_id = Company::FindOrFail($i->company_id)->company_name;
            return $i;
        });
        return $receipts;
    }

    public function headings(): array
    {
        return [
            'رقم الفاتورة',
            'الخزنة',
            'رقم العقد',
            'الشركة',
            'المبلغ',
            'تاريخ الاضافة'
        ];
    }

}
