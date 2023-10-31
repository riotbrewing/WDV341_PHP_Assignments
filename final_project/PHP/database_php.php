<?php
    //1 - connect to the database
    global $conn;
    require 'dbConnect.php';
    //2 - create SQL command

    //3 - Prepare PDO prepared statements

    //4 - Bind any parameters

    //5 - Execute SQL commands / Prepared statements

    //6 - Process results

    $race = [];

    if(isset($_POST)){
        $data = file_get_contents("php://input");

        $user = json_decode($data, true);
        $race = json_encode($user);
    }

