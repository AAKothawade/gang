<?php
include 'config.php';

$id = $_GET['id'];

$sql = "DELETE FROM employees WHERE id=$id";
if ($conn->query($sql) === TRUE) {
    header("Location: index.php");
} else {
    echo "Error: " . $conn->error;
}
?>
