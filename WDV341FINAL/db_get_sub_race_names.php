<?php
global $conn;
require 'dbConnect.php';

session_start();

$race = $_GET['race'];

$sql = "SELECT * FROM race WHERE name = :race_name";

$stmt = $conn->prepare($sql);
$stmt ->bindParam(':race_name', $race);

$stmt->execute();

$results = $stmt->fetch();

echo json_encode($results);