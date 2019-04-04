<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$to = "ktaggart12@gmail.com";
$name = $_POST['name'];
$email = $_POST['email'];
$subject = "Portfolio Site Inquiry";
$message = $_POST['message'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/plain; charset=UTF-8' . "\r\n";
$headers .= 'From: '. $email . "\r\n";
$headers .= 'Reply-To: '.$email ."\r\n";


$msg = 'Name: '. $name .'

Email: '. $email .'

Message:

'. $message;

$success = mail($to, $subject, $msg, $headers);

if ($success)
  echo 'Email successfully sent.';

?>
