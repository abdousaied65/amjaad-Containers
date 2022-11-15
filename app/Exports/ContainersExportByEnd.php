<?php

namespace App\Exports;

use App\Models\Container;
use App\Models\Contract;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ContainersExportByEnd implements FromCollection, WithHeadings
{
    public function collection()
    {
        $today = date('Y-m-d');
        $contracts = Contract::whereBetween('contract_end_date', [$today, date('Y-m-d', strtotime($today . '+1 month'))])->get();

        $ids = array();
        foreach ($contracts as $contract){
            array_push($ids,$contract->container_id);
        }

        $Containers = Container::select('name', 'measure', 'rent_amount', 'status', 'created_at')
            ->whereIn('id',$ids)
            ->get();

        return $Containers;
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
