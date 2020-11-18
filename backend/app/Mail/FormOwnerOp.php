<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FormOwnerOp extends Mailable
{
    use Queueable, SerializesModels;

    public $customer_name = '';

    public function __construct(string $customer_name)
    {
        $this->customer_name = $customer_name;
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
