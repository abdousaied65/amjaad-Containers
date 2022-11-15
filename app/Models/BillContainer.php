<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillContainer extends Model
{
    protected $table = "bill_containers";
    protected $guard = 'supervisor-web';
    protected $guard_name = 'supervisor-web';
    protected $fillable = [
        'bill_id', 'contract_id', 'container_id', 'amount', 'tax', 'total_amount','delivery_date'
    ];

    public function bill()
    {
        return $this->belongsTo('\App\Models\Bill', 'bill_id', 'id');
    }

    public function contract()
    {
        return $this->belongsTo('\App\Models\Contract', 'contract_id', 'id');
    }

    public function container()
    {
        return $this->belongsTo('\App\Models\Container', 'container_id', 'id');
    }


}
