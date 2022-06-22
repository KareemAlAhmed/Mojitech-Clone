<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmallCategory extends Model
{
    use HasFactory;
    protected $guarded=[];
    // public function Big(){
    //     return $this->belongsTo(BigCategory::class,'bigcategory_id');
    // }
    public function product(){
        return $this->hasMany(product::class);
    }
}
