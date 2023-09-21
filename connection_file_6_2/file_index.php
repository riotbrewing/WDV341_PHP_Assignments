<?php
    global $connection;
    include "dbConnect.php";
?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>6-2 Create a Connection File</title>
</head>
<body>

<div class="px-4 pt-5 my-5 text-center">
    <h1 class="display-4 fw-bold">6-2 Create A Connection File</h1>
    <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Create a PHP connection file, this file will contain the PHP code needed to make a
            connection to my database and then verify that you have connected to my database. </p>
    </div>
    <div class="overflow-hidden" style="max-height: 30vh;">
        <div class="container px-5">
            <img src="images/file_image.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
        </div>
    </div>
</div>
<div class="container text-center">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title border-bottom" style="padding-bottom: 5px;">CONNECTION STATUS</h5>
            <p class="card-text"><?php  echo "<p>" . $connection . "</p>"?></p>
        </div>
    </div>
<br><br>


</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


</body>
</html>