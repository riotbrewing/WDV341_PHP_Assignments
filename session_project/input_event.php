<?php
global $conn;
require 'dbConnect.php';

//session variable to restrict this page to only valid users

session_start(['cookie_lifetime' => 120]);  // joins an existing session if it exits or creates one if it does not (in that order)
if($_SESSION['valid_user'])
{
    //true branch show page
    echo "";
}
else
{
    //kick them to the homepage/login page
    header("Location:/WDV341/session_project/login.php");
}

//default values for error messages
$test = false;
$events_name_message= "";
$events_date_message="";
$events_time_message="";
$events_presenter_message="";
$events_description_message="";

//default values for html values
$events_name = "";
$events_date = "";
$events_time="";
$events_presenter = "";
$events_description = "";

// colors for highlighting the missing fields
$color_name = "white";
$color_description = "white";
$color_presenter = "white";
$color_date= "white";
$color_time = "white";

//I choose to only evaluate if empty for the names and description as you peoples names
//, descriptions can events can all have symbols I set the max values for the fields in the
//HTML
function validate_name($input)
{
    global $events_name_message, $color_name;
    if($input == "")
    {   $color_name = "red";
        $events_name_message = "Enter A Name In the Field";
        return false;
    }
    else
    {
        return true;
    }
}
function validate_description($input)
{
    global $events_description_message, $color_description;
    if($input == "")
    {
        $color_description = "red";
        $events_description_message = "Enter A Description In the Field";
        return false;
    }
    else
    {
        return true;
    }
}

function validate_presenter($input)
{
    global $events_presenter_message, $color_presenter;
    if($input == "")
    {
        $color_presenter = "red";
        $events_presenter_message= "Enter A Presenter In the Field";
        return false;
    }
    else
    {
        return true;
    }
}
// checks the string to make sure the inputted date is a valid date
function validate_date($input)
{
    global $events_date_message, $color_date;

    $length = strlen($input);
    $year = "";
    $month = "";
    $day = "";

    $checkDate = false;
    if($length > 0)
    {
        for($i = 0; $i < $length; $i++)
        {
            if($i < 3)
            {
                $year .= $input[$i];
            }
            elseif($i > 4 && $i < 7)
            {
                $month .= $input[$i];
            }
            elseif($i > 7)
            {
                $day .= $input[$i];
            }
        }

        $checkDate = checkdate($month, $day, $year);
    }


    if($input == "" || !$checkDate)
    {
        $color_date = "red";
        $events_date_message = "Enter A Date In the Field";
        return false;
    }
    else
    {
        return true;
    }
}

function validate_time($input)
{
    global $events_time_message, $color_time;
    if($input == "")
    {
        $color_time = "red";
        $events_time_message = "Enter A Time In the Field";
        return false;
    }
    else
    {
        return true;
    }
}

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

        function validateAllData($inName, $inDescription, $inPresenter, $inDate, $inTime)
        {
            global  $test;
            if(!validate_name($inName) || !validate_description($inDescription) || !validate_presenter($inPresenter) ||
                !validate_date($inDate) || !validate_time($inTime))
            {
                $test = false;
                return false;
            }
            else
            {
                return true;
            }
        }

        if(validateAllData($events_name, $events_description, $events_presenter, $events_date, $events_time)) {

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

}

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


<?php if($test) {?>


    <div class="container">
        <div class="text-center">
            <h1>Your Event Has Been Added</h1>
        </div>
        <form class="row g-3" method="post" action="input_event.php">
            <div class="col-md-6">
                <label for="events_name" class="form-label">Event Name</label>
                <input type="text" class="form-control" id="events_name" name = "events_name" maxlength="50">
            </div>
            <div class="col-md-6">
                <label for="events_presenter" class="form-label">Presenter Name</label>
                <input type="text" class="form-control" id="events_presenter" name = "events_presenter" maxlength="50">
            </div>
            <div class="col-12">
                <label for="events_description" class="form-label">Event Description</label>
                <input type="text" class="form-control" id="events_description" name = "events_description" maxlength="550">
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
                <button type="submit" class="btn btn-primary" name="submit">SUBMIT</button>
            </div>
        </form>

    </div>
<?php }

else{ ?>
    <div class="container">
        <form class="row g-3" method="post" action="input_event.php">
            <div class="col-md-6">
                <label for="events_name" class="form-label">Event Name</label>
                <input type="text" class="form-control" id="events_name" name = "events_name" style="background-color: <?php echo $color_name?>;" value="<?php echo $events_name?>" maxlength="50">
                <span><?php echo $events_name_message ?></span>
            </div>
            <div class="col-md-6">
                <label for="events_presenter" class="form-label">Presenter Name</label>
                <input type="text" class="form-control" id="events_presenter" name = "events_presenter" style="background-color: <?php echo $color_presenter?>;" value="<?php echo $events_presenter?>" maxlength="50">
                <span><?php echo $events_presenter_message ?></span>
            </div>
            <div class="col-12">
                <label for="events_description" class="form-label">Event Description</label>
                <input type="text" class="form-control" id="events_description" name = "events_description" style="background-color: <?php echo $color_description?>;" value="<?php echo $events_description?>" maxlength="500">
                <span><?php echo $events_description_message?></span>
            </div>
            <div class="col-6">
                <label for="events_date" class="form-label">Event Date</label>
                <input type="date" class="form-control" id="events_date" name = "events_date" style="background-color: <?php echo $color_date?>;" value="<?php echo $events_date?>">
                <span><?php echo $events_date_message ?></span>
            </div>
            <div class="col-6">
                <label for="events_time" class="form-label">Event Time</label>
                <input type="time" class="form-control" id="events_time" name = "events_time" style="background-color: <?php echo $color_time?>;" value="<?php echo $events_time?>">
                <span><?php echo $events_time_message ?></span>
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
                <button type="submit" class="btn btn-primary" name="submit">SUBMIT</button>
            </div>
        </form>

    </div>

<?php } ?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script>


    </body>
    </html>