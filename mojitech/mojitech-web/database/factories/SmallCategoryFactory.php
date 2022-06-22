<?php

namespace Database\Factories;

use App\Models\BigCategory;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SmallCategory>
 */
class SmallCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [

            'name' => $this ->faker->word(),
            'slug' => $this ->faker->word(),
        ];
    }

}
