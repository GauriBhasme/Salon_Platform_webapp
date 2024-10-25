<?php
// Database connection parameters
$servername = "localhost";
$username = "root";  // Your MySQL username
$password = "";  // Your MySQL password
$dbname = "test";  // Your MySQL database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$salon_name = $_POST['salon_name'];
$owner_name = $_POST['owner_name'];
$services = implode(", ", $_POST['services_offer']);  // Convert array to string
$working_time_start = $_POST['start_time'];
$working_time_end = $_POST['end_time'];
$address = $_POST['address'];

// SQL query to insert data into the salon table
$sql = "INSERT INTO salon (salon_name, owner_name, services_offer,start_time, end_time, address) 
        VALUES ('$salon_name', '$owner_name', '$services_offer', '$start_time', '$end_time', '$address')";

if ($conn->query($sql) === TRUE) {
    echo "Salon data inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>