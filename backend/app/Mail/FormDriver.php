<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FormDriver extends Mailable
{
    use Queueable, SerializesModels;

    public $driver_name = '';
    public $application_date = '';

    public function __construct(array $data)
    {
        $this->driver_name = $data['driverName'];
        $this->application_date = $data['applicationDate'];
    }

    /**
     * Build the message.
     */
    public function build(): self
    {
        return $this
            ->subject('New driver application!')
            ->markdown('mail.fromDriver');
    }
}
