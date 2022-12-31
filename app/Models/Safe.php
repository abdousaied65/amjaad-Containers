<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Safe extends Model
{
    protected $table = "safes";
    protected $guard = 'supervisor-web';
    protected $guard_name = 'supervisor-web';
    protected $fillable = [
        'safe_name','balance','type'
    ];

    public function receipts()
    {
        return $this->hasMany('\App\Models\Receipt', 'safe_id', 'id');
    }


}
