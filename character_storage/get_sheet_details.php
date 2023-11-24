<?php
global $conn;
require 'dbConnect.php';

session_start();

$race = $_GET['race'];
$sub = $_GET['sub'];
$class = $_GET['class'];

$sql = "SELECT a.*, b.*, c.* FROM race a JOIN sub_race b JOIN class c";

$stmt = $conn->prepare($sql);



$stmt->execute();

$results = $stmt->fetch();

echo json_encode($results);