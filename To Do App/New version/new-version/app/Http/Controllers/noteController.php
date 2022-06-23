<?php

namespace App\Http\Controllers;

use App\Models\note;
use Illuminate\Http\Request;

class noteController extends Controller
{
    public function add()
    {
        $attributes = request()->validate([
            'text' => ['required', 'min:5']
        ]);
        $attributes['user_id'] = 1;
        note::create($attributes);
        return redirect('/');
    }
}
