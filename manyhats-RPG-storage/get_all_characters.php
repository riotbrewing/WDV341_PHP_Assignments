<?php
global $conn;
require 'dbConnect.php';

session_start();


$sql = "SELECT * FROM user_characters";

$stmt = $conn->prepare($sql);

$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);