<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Marks extends Model
{
    public $timestamps = false;

    public $table = 'marks';

    protected $primaryKey = 'mark_id';

    protected $fillable = [
        'st_Number','sb_code','Term_no','mark','year'
    ];
}
