<?php
    global $conn;
    require 'dbConnect.php';

    $test = false;

    if(isset($_POST['submit']))
    {
        // if form has been posted do this
        //  will be set if the form has been posted
        $test = true;
        $date = date('Y-m-d');
        if(empty($_POST['event_state']))
        {
            $events_name = $_POST["events_name"];
            $events_description = $_POST['events_description'];
            $events_presenter = $_POST['events_presenter'];
            $events_date = $_POST['events_date'];
            $events_time = $_POST['events_time'];
            $events_date_inserted = $date;
            $events_date_updated = $date;

            $sql = "INSERT INTO wdv341_events";
            $sql .= "(events_name, events_description, events_presenter, events_date, events_time, events_date_inserted, events_date_updated)";
            $sql .= "VALUES ";
            $sql .= "(:eventsName, :eventsDescription, :eventsPresenter, :eventsDate, :eventsTime, :eventsDateInsert, :eventsDateUpdate)";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':eventsName', $events_name);
            $stmt->bindParam(':eventsDescription', $events_description);
            $stmt->bindParam(':eventsPresenter', $events_presenter);
            $stmt->bindParam(':eventsDate', $events_date);
            $stmt->bindParam(':eventsTime', $events_time);
            $stmt->bindParam(':eventsDateInsert', $events_date_inserted);
            $stmt->bindParam(':eventsDateUpdate', $events_date_inserted);

            $stmt->execute();


        }

    }
    

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Self Posting Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<?php if($test) {?>

    <div>
        <h1>confirmed</h1>
    </div>
    <?php }

    else{ ?>

    <div class="container">
        <form class="row g-3" method="post" action="form_processor.php">
            <div class="col-md-6">
                <label for="events_name" class="form-label">Event Name</label>
                <input type="text" class="form-control" id="events_name" name = "events_name">
            </div>
            <div class="col-md-6">
                <label for="events_presenter" class="form-label">Presenter Name</label>
                <input type="text" class="form-control" id="events_presenter" name = "events_presenter">
            </div>
            <div class="col-12">
                <label for="events_description" class="form-label">Event Description</label>
                <input type="text" class="form-control" id="events_description" name = "events_description">
            </div>
            <div class="col-6">
                <label for="events_date" class="form-label">Event Date</label>
                <input type="date" class="form-control" id="events_date" name = "events_date">
            </div>
            <div class="col-6">
                <label for="events_time" class="form-label">Event Time</label>
                <input type="time" class="form-control" id="events_time" name = "events_time">
            </div>
            <div class="col-md-6" style="display: none">
                <label for="events_date_inserted" class="form-label">Date Inserted</label>
                <input type="text" class="form-control" id="events_date_inserted" name = "events_date_inserted">
            </div>
            <div class="col-md-6" style="display: none">
                <label for="events_date_updated" class="form-label">Date Inserted</label>
                <input type="text" class="form-control" id="events_date_updated" name ="events_date_updated">
            </div>
            <div class="col-md-6" style="display: none">
                <label for="events_state" class="form-label">Event State</label>
                <input type="text" class="form-control" id="events_state" name ="events_state">
            </div>
            <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary" name="submit">Sign in</button>
            </div>
        </form>

    </div>

<?php } ?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>

