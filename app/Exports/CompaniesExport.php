<?php

namespace App\Exports;
use App\Models\Company;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CompaniesExport implements FromCollection,WithHeadings
{
    public function collection()
    {
        return Company::select('company_name', 'company_owner', 'phone_number', 'mobile_number',
            'address', 'tax_number', 'commercial_record','debts','created_at')->get();
    }
    public function headings(): array
    {
        return [
            'اسم الشركة',
            'اسم مالك الشركة',
            'رقم الهاتف',
            'رقم الجوال',
            'العنوان',
            'الرقم الضريبى',
            'السجل التجارى',
            'مديونية الشركة',
            'تاريخ الاضافة'
        ];
    }
}
