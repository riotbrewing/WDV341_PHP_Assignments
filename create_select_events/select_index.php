<?php
//1- connect to the database
global $conn, $connection;
require "dbConnect.php";

//2- create SQL command
$sql = "SELECT events_name FROM wdv341_events";


//3- Prepare your Statement PDO Prepared Statements
$stmt = $conn->prepare($sql);
$metadata = $stmt->getColumnMeta(1);

//4- Bind any parameters as needed

//5- Execute your SQL command/prepared statement
$stmt->execute();
//6- Process your result-set/object

?>

<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>7-1 Create Select Events</title>
</head>
<body>
<br><br>
<div class="container my-5">
    <div class="row flex-lg-row-reverse align-items-center rounded-3 border shadow-lg g-5 py-5 ">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="Images/file_picture.jpg" class="d-block mx-lg-auto shadow-lg img-fluid" alt="Bootstrap Themes" width="720" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-4 fw-bold lh-1">7-1: CREATE SELECT EVENTS</h1>
            <p class="lead">Use SQL SELECT query to pull all the events from the database, and
                display them to the page</p>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-4">

        </div>
        <div class="col-4">
            <table class="table table-bordered table-dark">
                <thead>
                <tr>
                    <th scope="col">Event Name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <?php
                    if($connection === "There was an error with the data")
                    {
                        echo "<tr><td>"."There was an error processing the data".'</td></tr>';
                    }
                    else
                    {
                        while(($row = $stmt->fetch(PDO::FETCH_ASSOC)) !== false)
                            echo "<tr><td>".$row['events_name'].'</td></tr>';

                    }

                    ?>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

        <div class="col-4">

        </div>
    </div>


</div>

<!-- Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


</body>
</html>
