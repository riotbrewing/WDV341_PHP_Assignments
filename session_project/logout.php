<?php

global $conn, $stmt_select;

//PDO doesn't really need to shut down connections but if you want to set all DB variables to null
$conn = null;
$stmt_select = null;

session_start();

session_unset();
session_destroy();

header("Location:/WDV341/session_project/login.php");
