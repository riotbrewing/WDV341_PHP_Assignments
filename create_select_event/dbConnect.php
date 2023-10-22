<?php
/*
     * Make a server specific version for your host account
     * Add this file to gitignore
     */
$servername = "localhost";
$username = "root";
$password = "";
$database_name = "wdv341"; // will be different on local and host account

try
{
    $conn = new PDO("mysql:host=$servername;dbname=$database_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connection = "Connected successfully";
}
catch(PDOException $e)
{
    $connection = "Connection failed " . $e->getMessage();
}
