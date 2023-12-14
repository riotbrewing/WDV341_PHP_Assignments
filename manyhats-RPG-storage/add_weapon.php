<?php
require 'dbConnect.php';
global $conn;


$name = $_GET['name'];
$cost = $_GET['cost'];
$damage = $_GET['damage'];
$weight = $_GET['weight'];
$properties = $_GET['properties'];


$sql = "INSERT INTO weapon (name, cost, damage, weight, properties) VALUES (:name, :cost, :damage, :weight, :properties)";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':cost', $cost);
$stmt->bindParam(':damage', $damage);
$stmt->bindParam(':weight', $weight);
$stmt->bindParam(':properties', $properties);

$stmt->execute();

$result = $stmt->fetchAll();

echo json_encode($result);