<?php
//Set Access-Control-Allow-Origin with PHP
header('Access-Control-Allow-Origin: http://localhost:4200', false);

require 'vendor/autoload.php'; // If you're using Composer (recommended)
// Comment out the above line if not using Composer
// require("<PATH TO>/sendgrid-php.php");
// If not using Composer, uncomment the above line and
// download sendgrid-php.zip from the latest release here,
// replacing <PATH TO> with the path to the sendgrid-php.php file,
// which is included in the download:
// https://github.com/sendgrid/sendgrid-php/releases


$API_KEY = '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';

$FROM_EMAIL = $_POST['email'];
$FROM_NAME = $_POST['name'];
$FROM_PHONE = $_POST['phone'];
// they dont like when it comes from @gmail, prefers business
// emails

//$TO_EMAIL = 'reachusatmaisonss@gmail.com';
$TO_EMAIL = 'catchme44@yahoo.com';

// Try to be nice. Take a look at the anti spam laws. In most
// cases, you must have an unsubscribe. You also cannot be
// misleading.
$MAIL_SUBJECT = $_POST['subject'];

settype($MAIL_SUBJECT,"string");

$MAIL_CONTENT = $_POST["message"]. "<br/><br/><br/>".'Phone Number:'.$FROM_PHONE;

$from = new \SendGrid\Mail\From($FROM_EMAIL, $FROM_NAME);
$subject = new \SendGrid\Mail\Subject($MAIL_SUBJECT);
$to = new \SendGrid\Mail\To($TO_EMAIL, "Zameer Fouzan");
/*$plainTextContent = new \SendGrid\Mail\PlainTextContent(
    "and easy to do anywhere, even with PHP"
);*/
$htmlContent = new \SendGrid\Mail\HtmlContent($MAIL_CONTENT);
$email = new \SendGrid\Mail\Mail(
    $from,
    $to,
    $subject,
    $htmlContent
);
$sendgrid = new \SendGrid($API_KEY);
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ' . $e->getMessage() . "\n";
}