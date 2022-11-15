<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    protected $table = "contracts";
    protected $guard = 'supervisor-web';
    protected $guard_name = 'supervisor-web';
    protected $fillable = [
        'company_id','containers_number','type', 'city', 'district', 'street', 'plot_number', 'chart_number',
        'flat_construction', 'responses_number', 'contract_start_date', 'contract_end_date', 'status',
    ];
    public function company(){
        return $this->belongsTo('\App\Models\Company','company_id','id');
    }

    public function bill_containers(){
        return $this->hasMany('\App\Models\BillContainer','contract_id','id');
    }
}
