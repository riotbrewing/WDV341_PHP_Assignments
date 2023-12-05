<?php
global $conn;
require 'dbConnect.php';

session_start();

$race_name = $_GET['race_name'];
$sub_race_name =$_GET['sub_race_name'];

$sql = "SELECT * FROM features WHERE race_relation IN (:race_name, :sub_race_name)";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':race_name', $race_name);
$stmt->bindParam(':sub_race_name', $sub_race_name);

$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);