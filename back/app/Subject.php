<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    public $timestamps = false;

    public $table = 'subject';

    protected $primaryKey = 'sb_code';

    protected $fillable = [
        'sb_name'
    ];
}
