<?php
require 'dbConnect.php';
global $conn;


$name = $_GET['name'];
$description = $_GET['description'];



$sql = "INSERT INTO features (name, description) VALUES (:name, :description)";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':description', $description);


$stmt->execute();

$result = $stmt->fetchAll();

echo json_encode($result);