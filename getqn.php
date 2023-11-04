<?php
// Database configuration
$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'questions';

// Create database connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve questions from the database
$sql = "SELECT * FROM qns";
$result = $conn->query($sql);
$questions = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $question = array(
            "question" => $row["questions"],
            "answers" => array(
                array("text" => $row["option1"], "correct" => $row["answer"] == 1),
                array("text" => $row["option2"], "correct" => $row["answer"] == 2),
                array("text" => $row["option3"], "correct" => $row["answer"] == 3),
                array("text" => $row["option4"], "correct" => $row["answer"] == 4),
            ),
        );
        array_push($questions, $question);
    }
}

header('Content-Type: application/json');
echo json_encode($questions);

// Close database connection
$conn->close();
?>
