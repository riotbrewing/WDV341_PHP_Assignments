<?php
require 'dbConnect.php';
global $conn;

$in_username = $_GET['username'];
$in_password = $_GET['password'];

$sql = "SELECT COUNT(*) FROM user WHERE username = :username AND password = :password";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':username', $in_username);
$stmt->bindParam(':password', $in_password);
$stmt->execute();

$number =  $stmt->fetchColumn();

echo json_encode($number);