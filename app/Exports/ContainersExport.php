<?php

namespace App\Exports;
use App\Models\Container;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ContainersExport implements FromCollection,WithHeadings
{
    public function collection()
    {
        return Container::select('name','measure','rent_amount','status','created_at')->get();
    }
    public function headings(): array
    {
        return [
            'الاسم',
            'مقاس',
            'مبلغ الايجار غير شامل الضريبة',
            'الحالة',
            'تاريخ الاضافة'
        ];
    }

}
