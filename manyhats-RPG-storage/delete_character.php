<?php
require 'dbConnect.php';
global $conn;


$in_user_id = $_GET['userid'];
$character_name = $_GET['character_name'];

$sql = "DELETE FROM user_characters WHERE user_number = :userid AND character_name = :character_name";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':userid', $in_user_id);
$stmt->bindParam(':character_name', $character_name);

$stmt->execute();

$result = $stmt->fetchAll();

echo json_encode($result);