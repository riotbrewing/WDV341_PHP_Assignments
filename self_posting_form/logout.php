<?php

global $conn, $stmt;

//PDO doesn't really need to shut down connections but if you want to set all DB variables to null
$conn = null;
$stmt = null;

session_start();

session_unset();
session_destroy();

header("Location:/WDV341/self_posting_form/login.php");
