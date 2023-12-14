<?php
require 'dbConnect.php';
global $conn;


$in_user_id = $_GET['userid'];


$sql = "SELECT username FROM user WHERE user_id = :userid";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':userid', $in_user_id);

$stmt->execute();

$result = $stmt->fetchAll();

echo json_encode($result);