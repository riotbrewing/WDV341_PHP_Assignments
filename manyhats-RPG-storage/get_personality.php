<?php
global $conn;
require 'dbConnect.php';

session_start();

$name = $_GET['name'];

$sql = "SELECT * FROM personality WHERE background_name = :name";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':name', $name);

$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);