<?php
    session_start();  // joins an existing session if it exits or creates one if it does not (in that order)
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

    //2- create SQL command
    $sql_select_all = "SELECT * FROM wdv341_events";

    //3- Prepare your Statement PDO Prepared Statements
    $stmt_select = $conn->prepare($sql_select_all);

    //4- Bind any parameters as needed
    $recID = 2;

    //5- Execute your SQL command/prepared statement


    //6- Process your result-set/object

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Self Posting Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
<div class="container">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="images/server.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Self Posting Form - insert data to the table + Input Validation</h1>
            <p class="lead">Create a self posting form, with a honeypot that displays a message if the data was successfully inserted into the database</p>
            <p class="lead">Add input validation to the self posting form to only allow the data you want into the database</p>
        </div>
    </div>
</div>
<div class="container">
    <div class="col-12">
        <table class="table table-bordered table-dark">
            <thead>
            <tr>
                <th scope="col">Event Name</th>
                <th scope="col">Event Description</th>
                <th scope="col">REMOVE?</th>
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
                    $stmt_select->execute();
                    $output = $stmt_select->fetchAll();
                    foreach ($output as $outputs)
                    {
                        $value = "delete_from_db.php?events_id=".$outputs['events_id'];
                        echo "<tr><td>".$outputs['events_name'].'</td>';
                        echo "<td>".$outputs['events_description']."</td>";
                        echo  "<td><button type='button' id= $value class='btn alert'>DELETE</button></td></tr>";
                    }


                }

                ?>
            </tr>
            </tbody>
        </table>
    </div>
</div>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src='scripts.js'></script>
</body>
</html>