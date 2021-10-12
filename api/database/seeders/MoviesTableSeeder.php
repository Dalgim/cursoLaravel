<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // limpiamos el seeder si esta ocupado
        Movie::truncate();

        $faker = \Faker\Factory::create();

        for($i = 0; $i < 10; $i++){
            Movie::create([
                'title' => $faker->sentence,
                'synopsis' => $faker->paragraph,
                'year' => $faker->randomDigit,
                'cover' => $faker->sentence,
            ]);
        }
    }
}
