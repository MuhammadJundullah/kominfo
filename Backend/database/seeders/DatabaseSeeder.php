<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Staff;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users = [
            ['nama' => 'Rizky Khapidsyah', 'jabatan' => 'Staff Kominfo'],
            ['nama' => 'Andi Wijaya', 'jabatan' => 'Staff Kominfo'],
            ['nama' => 'Budi Santoso', 'jabatan' => 'Staff Kominfo'],
            ['nama' => 'Citra Dewi', 'jabatan' => 'Staff Kominfo'],
        ];

        foreach ($users as $staff) {
            Staff::create($staff);
        }
    }
}
