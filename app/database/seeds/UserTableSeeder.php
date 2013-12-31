<?php

class UserTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->delete();

        User::create(
            array(
                'email' => 'hwawoon@163.com',
                'name' => 'hwawoon',
                'password' => '123456'
            )
        );

        User::create(
            array(
                'email' => 'kimhwawoon@gmail.com',
                'name' => 'kimhwawoon',
                'password' => '123456'
            )
        );

    }
} 