<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@webmentr.com"; // change later
    $headers = "From: $email";

    $fullMessage = "Name: $name\nEmail: $email\n\n$message";

    mail($to, $subject, $fullMessage, $headers);

    header("Location: contact.php?success=1");
}
