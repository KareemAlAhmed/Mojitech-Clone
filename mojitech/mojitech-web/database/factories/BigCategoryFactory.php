<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\SmallCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BigCategory>
 */
class BigCategoryFactory extends Factory
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
            'product_id'=>Product::factory(),
            'name' => $this ->faker->word(),
            'slug' => $this ->faker->word(),
        ];
    }
}
