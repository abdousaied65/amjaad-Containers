<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = "companies";
    protected $guard = 'supervisor-web';
    protected $guard_name = 'supervisor-web';
    protected $fillable = [
        'company_name', 'company_owner', 'phone_number', 'mobile_number',
        'address', 'tax_number', 'commercial_record', 'debts'
    ];

    public function payments()
    {
        return $this->hasMany('\App\Models\Payment', 'company_id', 'id');
    }

}
