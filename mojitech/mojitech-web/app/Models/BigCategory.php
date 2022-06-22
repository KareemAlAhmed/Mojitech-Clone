<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BigCategory extends Model
{
    use HasFactory;
    protected $guarded=[];
    // public function SmallCategory(){
    //     return $this->hasMany(SmallCategory::class);
    // }
    // public function product(){
    //     return $this->hasMany(product::class);
    // }
}
