<?php
// Check for empty fields
if(empty($_GET['name'])  		||
   empty($_GET['email']) 		||
    //empty($_GET['phone']) 		||
   empty($_GET['message'])	||
   !filter_var($_GET['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_GET['name'];
$email_address = $_GET['email'];
//$phone = $_GET['phone'];
$message = $_GET['message'];

// Create the email and send the message
$to = 'hectorvillarm@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "Has recibido un nuevo mensaje desde su portfolio.\n\n"."Detalles:\n\nNombre: $name\n\nEmail: $email_address\n\nMensaje:\n$message";
$headers = "From: hectorvillarm@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
