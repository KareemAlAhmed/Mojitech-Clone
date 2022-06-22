<?php

namespace Database\Seeders;

use App\Models\BigCategory;
use App\Models\category1;
use App\Models\Product;
use App\Models\SmallCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Product::factory(10)->create(['price'=>'600']);
        // category1::factory(3)->create();
        SmallCategory::factory(3)->create();
        $this->call(productSeeder::class);
    }
}
