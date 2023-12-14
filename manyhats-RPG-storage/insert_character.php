<?php
global $conn;
require 'dbConnect.php';

session_start();

$character_name = $_GET['character_name'];
$character_details = $_GET['character_details'];
$user_id = $_GET['user_id'];

$sql = "INSERT INTO user_characters (user_number, character_name, character_details) VALUES (:user_id, :character_name, :character_details)";

$stmt = $conn->prepare($sql);
$stmt->bindParam('user_id', $user_id);
$stmt->bindParam('character_name', $character_name);
$stmt->bindParam('character_details', $character_details);

$stmt->execute();

$results = $stmt->fetchAll();

echo json_encode($results);