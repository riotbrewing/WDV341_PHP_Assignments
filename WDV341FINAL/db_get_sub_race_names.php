<?php
global $conn;
require 'dbConnect.php';

session_start();



$sql = "SELECT race_name, sub_race_name FROM sub_race";

$stmt = $conn->prepare($sql);

$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);