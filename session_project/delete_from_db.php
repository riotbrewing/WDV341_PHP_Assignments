<?php

session_start(['cookie_lifetime' => 120]);  // joins an existing session if it exits or creates one if it does not (in that order)
if($_SESSION['valid_user'])
{
    //true branch show page
    echo "valid";
}
else
{
    //kick them to the homepage/login page
    header("Location:/WDV341/session_project/login.php");
}

//1- connect to the database
global $conn, $connection;
require "dbConnect.php";

$get_id = $_GET['events_id'];

//2- create SQL command
$sql_delete = "DELETE FROM wdv341_events WHERE events_id = :getid";

//3- Prepare your Statement PDO Prepared Statements
$stmt_delete = $conn->prepare($sql_delete);
$stmt_delete->bindParam(':getid', $get_id);
//4- Bind any parameters as needed

$stmt_delete->execute();
//5- Execute your SQL command/prepared statement
$stmt_delete->fetch();

//6- Process your result-set/object

header("Location:/WDV341/session_project/delete_event.php");