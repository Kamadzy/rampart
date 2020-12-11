<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FormOwnerOp extends Mailable
{
    use Queueable, SerializesModels;

    public $agreement_date = '';
    public $customer_name = '';
    public $customer_address = '';
    public $customer_city = '';
    public $customer_state = '';
    public $customer_zip = '';
    public $truck_vin = '';
    public $trailer_vin = '';
    public $customer_signature = '';

    public function __construct(array $data)
    {
        $this->agreement_date = $data['agreementDate'];
        $this->customer_name = $data['customerName'];
        $this->customer_address = $data['customerAddress'];
        $this->customer_city = $data['customerCity'];
        $this->customer_state = $data['customerState'];
        $this->customer_zip = $data['customerZip'];
        $this->truck_vin = $data['truckVin'];
        $this->trailer_vin = $data['trailerVin'];
        $this->customer_signature = $data['customerSignature'];
    }

    /**
     * Build the message.
     */
    public function build(): self
    {
        return $this
            ->subject('New owner op!')
            ->markdown('mail.formOwnerOp');
    }
}
