<?php
global $conn;
require 'dbConnect.php';

session_start();

$race = $_GET['race'];

$sql = "SELECT race FROM race_table WHERE race_name = :race_name";

$stmt = $conn->prepare($sql);
$stmt ->bindParam(':race_name', $race);

$stmt->execute();

$results = $stmt->fetch();

echo $results;