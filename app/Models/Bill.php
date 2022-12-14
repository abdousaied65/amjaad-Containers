<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    protected $table = "bills";
    protected $guard = 'supervisor-web';
    protected $guard_name = 'supervisor-web';
    protected $fillable = [
        'supervisor_id', 'contract_id','type', 'company_id', 'date', 'time', 'notes', 'status',
        'payment_status', 'discount_percent', 'discount_total', 'total_before_discount', 'total_after_discount',
        'vat_total', 'final_total', 'paid', 'rest','unit_price'
    ];

    public function supervisor()
    {
        return $this->belongsTo('\App\Models\Supervisor', 'supervisor_id', 'id');
    }

    public function contract()
    {
        return $this->belongsTo('\App\Models\Contract', 'contract_id', 'id');
    }

    public function company()
    {
        return $this->belongsTo('\App\Models\Company', 'company_id', 'id');
    }

    public function bill_containers(){
        return $this->hasMany('\App\Models\BillContainer','bill_id','id');
    }



}
