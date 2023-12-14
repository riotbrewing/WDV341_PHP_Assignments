<?php
global $conn;
require 'dbConnect.php';

session_start();

$race_name = $_GET['race_name'];
$race_details = $_GET['race_details'];

$sql = "INSERT INTO race (race_name, race_details) VALUES (:race_name, :race_details)";

$stmt = $conn->prepare($sql);
$stmt->bindParam('race_name', $race_name);
$stmt->bindParam('race_details', $race_details);

$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);