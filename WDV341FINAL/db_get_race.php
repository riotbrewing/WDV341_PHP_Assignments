<?php
global $conn;
require 'dbConnect.php';

session_start();

$race_name = $_GET['race_name'];


$sql = "SELECT * FROM race WHERE race_name = :race_name";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':race_name', $race_name);

$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);