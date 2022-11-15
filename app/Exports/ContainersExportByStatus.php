<?php

namespace App\Exports;

use App\Models\Container;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ContainersExportByStatus implements FromCollection, WithHeadings
{
    protected $statuses;

    public function __construct(array $statuses)
    {
        $this->statuses = $statuses;
    }

    public function array(): array
    {
        return $this->statuses;
    }

    public function collection()
    {
        return Container::select('name', 'measure', 'rent_amount', 'status', 'created_at')
            ->whereIn('Status', $this->statuses)->get();
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
