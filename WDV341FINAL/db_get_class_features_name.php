<?php
global $conn;
require 'dbConnect.php';

session_start();

$class_name = $_GET['class_name'];

$sql = "SELECT * FROM class_features WHERE class_relation = :class_name";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':class_name', $class_name);
$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);