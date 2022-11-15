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

    public function payments()
    {
        return $this->hasMany('\App\Models\Payment', 'safe_id', 'id');
    }


}
