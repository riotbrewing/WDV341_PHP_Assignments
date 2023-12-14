<?php
global $conn;
require 'dbConnect.php';

session_start();

$user_id = $_GET['user_id'];

$sql = "SELECT * FROM user_characters WHERE user_number = :user_id";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);

$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);