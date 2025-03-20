<?php 
//Database connection details
$serverName = "localhost";
$userName = "root";
$passWord = " ";
$dbName = "user_registration";


//create a connection
$conn = new mysqli($serverName,$userName,$passWord,$dbName);

//check the connection
if($conn->connect_error){
    die("Connection failed::".$conn->connect_error);
}
else{
    echo "Connection Success";
}

$error = " ";

//check if the form is submitted

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $userName = htmlspecialchars(trim($_POST['userName']));
    $age = htmlspecialchars(trim($_POST['age']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phNo = htmlspecialchars(trim($_POST['phNo']));
    $gender = htmlspecialchars(trim($_POST['gender']));
    $address = htmlspecialchars(trim($_POST['address']));
}

//Validation

if(empty($userName)||empty($age)||empty($email)||empty($phNo)||empty($gender)||empty($address)){
    $error = "All fields are required";
}
elseif(empty($age)|| !is_numeric($age)||$age<0 || $age>120){
$error = "Age is required, must be a number and, age must be lies between 0 and 120";
}
elseif(!filter_var($email,FILTER_VALIDATE_EMAIL)){
    $error = "Invalid email format";
}
elseif(empty($phNo)||!preg_match("/^\d{10}$/",$phNo)){
    $error = "Phone number must be 10Digits";
}
else{
    $error = "All rules are approved";
}
?>