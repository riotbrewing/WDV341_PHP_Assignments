<?php
    $servername = "localhost";
    $username = "root";
    $password = "";


    try
    {
        $conn = new PDO("mysql:host=$servername;dbname=wdv341", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $connection = "Connected successfully";
    }
    catch(PDOException $e)
    {
        $connection = "Connection failed " . $e->getMessage();
    }



