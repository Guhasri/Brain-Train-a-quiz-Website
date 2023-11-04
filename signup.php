<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $con = mysqli_connect('localhost', 'root', '');
    mysqli_select_db($con, 'login');

    $name = $_POST['uname'];
    $pass = $_POST['password'];

    $query = "SELECT * FROM credentials WHERE username ='$name'";
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result) > 0) {
        $error_message = "Username Already Taken!";
    header('Location: SignUppage.html?error_message=' . urlencode($error_message)); 
    exit();
    } else {
        $query = "INSERT INTO credentials (username, password) VALUES ('$name', '$pass')";
        if (mysqli_query($con, $query)) {
            $error_message = "Registration Successfull!";
             header('Location: SignUppage.html?error_message=' . urlencode($error_message)); 
             exit();
        } else {
            header('');
        }
    }

    mysqli_close($con);
}
?>
