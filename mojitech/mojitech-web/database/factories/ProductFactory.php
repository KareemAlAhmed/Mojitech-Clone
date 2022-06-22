<?php

namespace Database\Factories;

use App\Models\BigCategory;
use App\Models\category1;
use App\Models\SmallCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'smallcategory_id'=>SmallCategory::factory(),
            'name' => $this ->faker->word(),
            'slug' => $this ->faker->word(),
            'price'=>$this->faker->word(),
            'description'=>$this->faker->paragraph(3)
        ];
    }
}
