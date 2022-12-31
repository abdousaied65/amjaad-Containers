<?php

namespace App\Exports;
use App\Models\Term;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TermsExport implements FromCollection,WithHeadings
{
    public function collection()
    {
        return Term::select('term','created_at')->get();
    }
    public function headings(): array
    {
        return [
            'الشرط',
            'تاريخ الاضافة'
        ];
    }

}
