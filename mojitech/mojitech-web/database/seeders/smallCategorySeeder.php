<?php

namespace Database\Seeders;

use App\Models\SmallCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class smallCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SmallCategory::factory(3)->create();
    }
}
