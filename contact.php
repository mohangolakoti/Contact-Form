<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "registration";

$con = mysqli_connect($host, $user, $pass, $db);
if ($con == false) {
    die("database not connected");
} else {
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {


    $name = $_POST['name'];
    $date = $_POST['date'];
    $address = $_POST['address'];
    $number = $_POST['number'];
    $subject = $_POST['subject'];

    if (!empty($name) && !empty($date) && !empty($address) && !empty($number) && !empty($subject) && !is_numeric($name)) {

        $sql = "INSERT INTO `contact`(`name`,`date`,`address`,`number`,`subject`) VALUES ('$name','$date','$address','$number','$subject')";
        $result = mysqli_query($con, $sql);

        echo "submitted";
    }
}
