<?php

namespace App\Exports;
use App\Models\Supervisor;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class SupervisorsExport implements FromCollection,WithHeadings
{
    public function collection()
    {
        return Supervisor::select('name','email','phone_number','role_name','created_at')->get();
    }
    public function headings(): array
    {
        return [
            'الاسم',
            'البريد الالكترونى',
            'رقم الجوال',
            'مجموعة المشرفين',
            'تاريخ الاضافة'
        ];
    }

}
