<?php
global $conn;
require 'dbConnect.php';

session_start();



$sql = "SELECT name FROM instruments";

$stmt = $conn->prepare($sql);

$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);