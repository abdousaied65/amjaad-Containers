<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static First()
 */
class Container extends Model
{
    protected $table = "containers";
    protected $guard = 'supervisor-web';
    protected $guard_name = 'supervisor-web';
    protected $fillable = [
        'name','measure','rent_amount','status'
    ];

    public function bill_containers(){
        return $this->hasMany('\App\Models\BillContainer','container_id','id');
    }

}
