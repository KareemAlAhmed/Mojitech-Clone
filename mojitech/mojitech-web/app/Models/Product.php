<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded=[];
    // public function category1(){
    //     return $this->belongsTo(category1::class);
    // }
    public function Small(){
        return $this->belongsTo(SmallCategory::class,'smallcategory_id');
    }
    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? false,function($query,$search){
            $query->where('name','like', '%' . $search .'%');
        });
    }
}
