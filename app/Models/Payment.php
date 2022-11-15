<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table = "payments";
    protected $guard = 'supervisor-web';
    protected $guard_name = 'supervisor-web';
    protected $fillable = [
        'bill_id', 'safe_id', 'contract_id', 'amount', 'company_id'
    ];

    public function bill()
    {
        return $this->belongsTo('\App\Models\Bill', 'bill_id', 'id');
    }

    public function company()
    {
        return $this->belongsTo('\App\Models\Company', 'company_id', 'id');
    }

    public function safe()
    {
        return $this->belongsTo('\App\Models\Safe', 'safe_id', 'id');
    }

    public function contract()
    {
        return $this->belongsTo('\App\Models\Contract', 'contract_id', 'id');
    }
}
