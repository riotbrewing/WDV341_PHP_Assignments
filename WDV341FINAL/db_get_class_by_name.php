<?php
global $conn;
require 'dbConnect.php';

session_start();

$class_name = $_GET['class_name'];

$sql = "SELECT * FROM character_class WHERE class_name = :class_name";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':class_name', $class_name);
$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);