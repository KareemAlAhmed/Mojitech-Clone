<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class apiReourc extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'slug'=>$this->slug,
            'price'=>$this->price,
            'description'=>$this->description,
            'category'=>$this->Small->name
            
        ];
    }
}
