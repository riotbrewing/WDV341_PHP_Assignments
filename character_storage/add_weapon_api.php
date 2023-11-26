<?php
global $conn;
require 'dbConnect.php';

session_start();

$in_category = $_GET['category'];
$in_weapon_name = $_GET['name'];
$in_cost = $_GET['cost'];
$in_damage = $_GET['damage'];
$in_damage_type = $_GET['damage_type'];
$in_weight = $_GET['weight'];
$in_properties = $_GET['properties'];


$sql = "INSERT INTO weapons (category, weapon_name, cost, damage, damage_type, weight, properties) 
VALUES (:in_category, :in_weapon_name, :in_cost, :in_damage, :in_damage_type, :in_weight, :in_properties)";

$stmt = $conn->prepare($sql);

$stmt ->bindParam(':in_category', $in_category);
$stmt ->bindParam(':in_weapon_name', $in_weapon_name);
$stmt ->bindParam(':in_cost', $in_cost);
$stmt ->bindParam(':in_damage', $in_damage);
$stmt ->bindParam(':in_damage_type', $in_damage_type);
$stmt ->bindParam(':in_weight', $in_weight);
$stmt ->bindParam(':in_properties', $in_properties);

$stmt->execute();

$results = $stmt->fetch();

