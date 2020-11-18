<?php

namespace App\Http\Controllers;

use App\Mail\{MovingQuote, FormOwnerOp};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ApiController extends Controller
{
    public function movingQuote(Request $request)
    {
        $validatedData = $request->validate([
            'fromLocation'   => 'required|string',
            'toLocation'     => 'required|string',
            'customer.name'  => 'required|string',
            'customer.email' => 'required|Email',
            'customer.phone' => 'required|string',
        ]);

        $email = new MovingQuote(
            $validatedData['fromLocation'],
            $validatedData['toLocation'],
            (object) $validatedData['customer']
        );
        Mail::to('devtosha@gmail.com')->send($email);
        if (Mail::failures()) {
            return response()->json([
                'sendMail' => false
            ]);
        }

        return response()->json($request->toArray());
    }

    public function formOwnerOp(Request $request)
    {
        $file = $request->file;

        $email = new FormOwnerOp('Antoxa');
        $email->attach($file->getRealPath(), ['as' => 'ownerop.pdf', 'mime' => 'application/pdf']);

        Mail::to('devtosha@gmail.com')->send($email);
        if (Mail::failures()) {
            return response()->json([
                'sendMail' => false
            ]);
        }

        return response()->json(true);
    }
}
