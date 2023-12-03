<?php
global $conn;
require 'dbConnect.php';

session_start();

$feature_name = $_GET['feature_name'];
$feature_description = $_GET['feature_description'];
$race_name = $_GET['race_name'];

$name = json_decode($feature_name);
$description = json_decode($feature_description);

for($i = 0; $i < count($name); $i++) {

    $sql = "INSERT INTO features (feature_name, race_relation, feature_description) VALUES (:feature_name, :race_relation, :feature_description)";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":feature_name", $name[$i]);
    $stmt->bindParam(":race_relation", $race_name);
    $stmt->bindParam(":feature_description", $description[$i]);

    $stmt->execute();

}




