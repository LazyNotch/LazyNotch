<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $to = 'lnadmin@lazynotch.com'; // Replace with your email address
  $subject = 'New Contact Form Submission';

  // Fetch form data
  $firstName = $_POST['firstname'];
  $lastName = $_POST['lastname'];
  $email = $_POST['email'];
  $topic = $_POST['topic'];
  $message = $_POST['message'];

  // Create email body
  $body = "First Name: $firstName\n";
  $body .= "Last Name: $lastName\n";
  $body .= "Email: $email\n";
  $body .= "Topic: $topic\n";
  $body .= "Message:\n$message";

  // Set headers
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
    echo '<div class="success-message">Thank you for your submission!</div>';
  } else {
    // Error sending email
    echo '<div class="error-message">Oops! Something went wrong. Please try again later.</div>';
  }
}
?>
