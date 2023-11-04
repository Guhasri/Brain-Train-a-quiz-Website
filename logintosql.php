<?php
session_start();

$con = mysqli_connect('localhost', 'root', '');
mysqli_select_db($con, 'login');
$name = $_POST['uname'];
$pass = $_POST['password'];

$s = "SELECT * FROM credentials WHERE username = '$name' && password = '$pass'"; 
$result = mysqli_query($con, $s);

if (!$result) {
    die("Error: " . mysqli_error($con));
}

$num = mysqli_num_rows($result);

if ($num == 1) {
    header('Location: home page.html'); 
    exit();
} else {
    $error_message = "Wrong username or password!";
    header('Location: LoginPage.html?error_message=' . urlencode($error_message)); 
    exit();
}
?>
