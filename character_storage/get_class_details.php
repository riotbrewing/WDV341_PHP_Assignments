<?php
global $conn;
require 'dbConnect.php';

session_start();

$class_name = $_GET['class_name'];

$sql = "SELECT * FROM class WHERE name=:class";

$stmt = $conn->prepare($sql);
$stmt->bindParam(":class", $class_name);
$stmt->execute();

$response = $stmt->fetchAll();

echo json_encode($response);

