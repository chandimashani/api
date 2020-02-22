<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    public $timestamps = false;

    public $table = 'students';

    protected $primaryKey = 'st_Number';

    protected $fillable = [
        'st_name','st_DOB','st_Sex'
    ];
}
