<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Mail\{MovingQuote, FormOwnerOp};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ApiController extends Controller
{
    public function movingQuote(Request $request): JsonResponse
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
        Mail::to(env('MAIL_TO'))->send($email);
        if (Mail::failures()) {
            return response()->json([
                'sendMail' => false
            ]);
        }

        return response()->json($request->toArray());
    }

    public function formOwnerOp(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'document'          => 'required|file',
            'agreementDate'     => 'required|string',
            'customerName'      => 'required|string',
            'customerAddress'   => 'required|string',
            'customerCity'      => 'required|string',
            'customerState'     => 'required|string',
            'customerZip'       => 'required|string',
            'truckVin'          => 'required|string',
            'trailerVin'        => 'required|string',
            'customerSignature' => 'required|string',
        ]);

        $form_document = $validatedData['document'];

        $email = new FormOwnerOp($validatedData);
        $email->attach($form_document->getRealPath(), ['as' => 'ownerop.pdf', 'mime' => 'application/pdf']);

        Mail::to(env('MAIL_TO'))->send($email);
        if (Mail::failures()) {
            return response()->json([
                'sendMail' => false
            ]);
        }

        return response()->json($request->toArray());
    }
}
