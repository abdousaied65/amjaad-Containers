<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Term extends Model
{
    protected $table = "terms";
    protected $guard = 'supervisor-web';
    protected $guard_name = 'supervisor-web';
    protected $fillable = [
        'term'
    ];

}
