<?php
//1- connect to the database
global $conn, $connection;
require "dbConnect.php";

//2- create SQL command
$sql = "SELECT * FROM wdv341_events WHERE events_id = :recID";

//3- Prepare your Statement PDO Prepared Statements
$stmt = $conn->prepare($sql);

//4- Bind any parameters as needed
$recID = 2;
$stmt->bindParam(':recID', $recID);
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

    <title>7-2 Create SelectOne Event</title>
</head>
<script src="scripts.js">

</script>
<body>
<br><br>

<div class="container my-5">
    <div class="row flex-lg-row-reverse align-items-center rounded-3 border shadow-lg g-5 py-5 ">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="images/file_images.jpg" class="d-block mx-lg-auto shadow-lg img-fluid" alt="Bootstrap Themes" width="720" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-4 fw-bold lh-1">7-2: SELECT EVENTS</h1>
            <p class="lead">Use SQL SELECT query to pull ONE of the events from the database, and
                display it to the page</p>
        </div>
    </div>
</div>

<div class="container">
    <div class="card mb-3 border shadow" >
        <div class="row g-0">
            <div class="col-md-4">
                <img src="images/convention_panel.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <?php
                //loop through and output to the page
                    $stmt->execute();
                    $output = $stmt->fetchAll();
                    foreach ($output as $outputs)
                    {
                ?>
                <div class="card-body">
                    <h5 class="card-title"><?php echo $outputs['events_name']; ?></h5>
                    <p class="card-text"><?php echo $outputs['events_description']?></p>
                    <p class="card-text"><small class="text-muted"><?php echo 'Presenter: ' . $outputs['events_presenter'];?></small></p>
                    <p class="card-text"><small class="text-muted"><?php echo 'Date: ' . $outputs['events_date'];?></small></p>
                    <p class="card-text"><small class="text-muted"><?php echo 'Time: ' . $outputs['events_time'];?></small></p>
                    <p class="card-text"><small class="text-muted"><?php echo 'Event Created: ' . $outputs['events_date_inserted'] . ' || Last Updated: ' . $outputs['events_date_updated'];?></small></p>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


</body>
</html>
