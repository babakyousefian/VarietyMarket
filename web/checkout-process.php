<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $payment_method = $_POST['payment_method'];
    // Add more fields as needed

    // Validate form data (you can add more validation rules)
    if (empty($name) || empty($email) || empty($address) || empty($payment_method)) {
        // Handle empty fields
        echo "Please fill in all required fields.";
    } else {
        // Process the order (you can add your logic here)
        // For demonstration purposes, let's just display the order details
        echo "<h2>Order Summary</h2>";
        echo "<p>Name: $name</p>";
        echo "<p>Email: $email</p>";
        echo "<p>Address: $address</p>";
        echo "<p>Payment Method: $payment_method</p>";
        // Add more order details as needed

        // You can also save the order to a database or send it to an external service
    }
} else {
    // Redirect to the checkout page if the form is not submitted
    header("Location: checkout-page.php");
    exit();
}
?>
