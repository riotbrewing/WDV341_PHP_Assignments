<?php
global $conn;
require 'dbConnect.php';

session_start();

$race_name = $_GET['race_name'];
$race_description = $_GET['race_description'];
$race_speed = $_GET['race_speed'];
$str = $_GET['str'];
$dex = $_GET['dex'];
$con = $_GET['con'];
$int = $_GET['int'];
$wis = $_GET['wis'];
$chr = $_GET['chr'];


$sql_race = "INSERT INTO race (race_name, race_description, race_speed, strength, dexterity, constitution, intelligence, wisdom, charisma) 
VALUES (:race_name, :race_description, :race_speed, :str, :dex, :con, :int, :wis, :chr)";

$race_stmt = $conn->prepare($sql_race);

$race_stmt->bindParam(':race_name', $race_name);
$race_stmt->bindParam(':race_description', $race_description);
$race_stmt->bindParam(':race_speed', $race_speed);
$race_stmt->bindParam(':str', $str);
$race_stmt->bindParam(':dex', $dex);
$race_stmt->bindParam(':con', $con);
$race_stmt->bindParam(':int', $int);
$race_stmt->bindParam(':wis', $wis);
$race_stmt->bindParam(':chr', $chr);

$race_stmt->execute();

$response = $race_stmt->fetchAll();