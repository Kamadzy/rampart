<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\Request;

class RampartController extends Controller
{
    public function movingQuote(Request $request)
    {
        return response()->json($request->body());
    }
}
