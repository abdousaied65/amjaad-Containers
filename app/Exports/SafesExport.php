<?php

namespace App\Exports;
use App\Models\Safe;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class SafesExport implements FromCollection,WithHeadings
{
    public function collection()
    {
        return Safe::select('safe_name','balance','type','created_at')->get();
    }
    public function headings(): array
    {
        return [
            'اسم الخزنة',
            'رصيد الخزنة',
            'نوع الخزنة',
            'تاريخ الاضافة'
        ];
    }

}
