<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MovingQuote extends Mailable
{
    use Queueable, SerializesModels;

    public $from_location = '';
    public $to_location = '';
    public $customer = '';

    public function __construct(string $from_location, string $to_location, object $customer)
    {
        $this->from_location = $from_location;
        $this->to_location = $to_location;
        $this->customer = $customer;
    }

    /**
     * Build the message.
     */
    public function build(): self
    {
        return $this
            ->subject('New moving quote!')
            ->markdown('mail.movingQuote');
    }
}
