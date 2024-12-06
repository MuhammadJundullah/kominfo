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
            ['nama' => 'Rizky Khapidsyah', 'jabatan' => 'Staff Kominfo', 'foto' => 'staff.png'],
            ['nama' => 'Andi Wijaya', 'jabatan' => 'Staff Kominfo', 'foto' => 'staff.png'],
            ['nama' => 'Budi Santoso', 'jabatan' => 'Staff Kominfo', 'foto' => 'staff.png'],
            ['nama' => 'Citra Dewi', 'jabatan' => 'Staff Kominfo', 'foto' => 'staff.png'],
        ];

        foreach ($users as $staff) {
            Staff::create($staff);
        }
    }
}
