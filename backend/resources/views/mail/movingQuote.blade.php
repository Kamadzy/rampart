@component('mail::message')

<p><strong>From location:</strong> {{ $from_location }}</p>
<p><strong>To location:</strong> {{ $to_location }}</p>
<p><strong>Customer name:</strong> {{ $customer->name }}</p>
<p><strong>Customer email:</strong> {{ $customer->email }}</p>
<p><strong>Customer phone:</strong> {{ $customer->phone }}</p>

@endcomponent
