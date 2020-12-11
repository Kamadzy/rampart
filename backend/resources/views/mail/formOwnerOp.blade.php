@component('mail::message')

<p><strong>Date:</strong> {{ $agreement_date }}</p>
<p><strong>Lessor name:</strong> {{ $customer_name }}</p>
<p><strong>Address:</strong> {{ $customer_address }}</p>
<p><strong>City:</strong> {{ $customer_city }}</p>
<p><strong>State:</strong> {{ $customer_state }}</p>
<p><strong>Zip:</strong> {{ $customer_zip }}</p>
<p><strong>Truck VIN:</strong> {{ $truck_vin }}</p>
<p><strong>Trailer VIN:</strong> {{ $trailer_vin }}</p>
<p><strong>Signature:</strong> {{ $customer_signature }}</p>

@endcomponent
