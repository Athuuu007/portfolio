<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Only POST requests are allowed"]);
    exit;
}

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid JSON data"]);
    exit;
}

// Validate inputs
$name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$subject = isset($data['subject']) ? strip_tags(trim($data['subject'])) : 'New Contact Request';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["success" => false, "message" => "Please fill out all required fields."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email format."]);
    exit;
}

// Set your receiving email address here
$recipient = "atharvaborsutkar7@gmail.com";

// Build the email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// Build the email headers
$email_headers = "From: $name <$email>\r\n";
$email_headers .= "Reply-To: $email\r\n";

// Send the email using PHP's built-in mail function
$success = mail($recipient, $subject, $email_content, $email_headers);

if ($success) {
    echo json_encode(["success" => true, "message" => "Email sent successfully!"]);
} else {
    echo json_encode(["success" => false, "message" => "Oops! Something went wrong, and we couldn't send your email."]);
}
?>
