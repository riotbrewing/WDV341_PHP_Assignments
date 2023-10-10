<?php
// connect to the database
    global $conn;
    require "dbConnect.php";

    // create  sql command / prepared statement
    $stmt = $conn->prepare("SELECT events_id, events_name, events_description, events_presenter, events_date, events_time, events_date_inserted, events_date_updated FROM wdv341_events WHERE events_id = :entered_date");

    // bind parameter for insertion
    $stmt->bindParam('entered_date', $entered_amount, PDO::PARAM_INT);
    $option = $_POST["select"];
    $entered_amount = (int)$option;
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    // execute
    $stmt->execute();

    // create class events
    class Events
    {

        private $id, $name, $description, $presenter, $date, $time, $inserted, $updated;
        // setters
        function set_id($input)
        {
            $this->id = $input;
        }
        function set_name($input)
        {
            $this->name = $input;
        }
        function set_description($input)
        {
            $this->description = $input;
        }
        function set_presenter($input)
        {
            $this->presenter = $input;
        }
        function set_date($input)
        {
            $this->date = $input;
        }
        function set_time($input)
        {
            $this->time = $input;
        }
        function set_inserted($input)
        {
            $this->inserted = $input;
        }
        function set_updated($input)
        {
            $this->updated = $input;
        }
        // getters
        public function get_id()
        {
            return $this->id;
        }
        public function getName()
        {
            return $this->name;
        }
        public function getDescription()
        {
            return $this->description;
        }
        public function getPresenter()
        {
            return $this->presenter;
        }
        public function getDate()
        {
            return $this->date;
        }
        public function getTime()
        {
            return $this->time;
        }
        public function getInserted()
        {
            return $this->inserted;
        }
        public function getUpdated()
        {
            return $this->updated;
        }

        //function to return the values of all the object variables
        public function test()
        {
            return get_object_vars($this);
        }

    }

    // create instance of the Events class
    $outputObj = new Events();

    // fetch the array from the database
    $data =  $stmt->fetch();

    //assign values to the class
    $outputObj->set_id($data['events_id']);
    $outputObj->set_name($data['events_name']);
    $outputObj->set_description($data['events_description']);
    $outputObj->set_presenter($data['events_presenter']);
    $outputObj->set_date($data['events_date']);
    $outputObj->set_time($data['events_time']);
    $outputObj->set_inserted($data['events_date_inserted']);
    $outputObj->set_updated($data['events_date_updated']);

    //encode to a JSON object
    $json_object = json_encode($outputObj->test());

    //decode the JSON obj to and associative array
    $new_output_object = json_decode($json_object, true);

?>

<!doctype html>
<html lang="en" data-bs-theme="dark">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <title>9-1 PHP-JSON EVENT</title>
</head>
<body>
<!-- outputted the json object to the console to meet the assignment parameters but formatted the output below -->
<script>console.log(<?php echo $json_object ?>)</script>
<div class="container col-xxl-8 px-4 py-5 title_margin">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 bg-primary">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="images/json_pic.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 h1_text">9-1 PHP-JSON EVENT OBJECT</h1>
            <p class="lead">Create a PHP class, and store data from the database as and instance of the class. Encode the output to JSON and output the JSON object.</p>
            <small class="text-muted">I outputted the encoded object to the console and formatted the output to display below </small>
        </div>
    </div>
</div>
<div class ="container text-center">
    <div class = "row">
        <div class = "col-4">

        </div>
        <div class = "col-4">
            <h2> DETAILS FOR YOUR EVENT</h2>
        </div>
        <div class = "col-4">

        </div>
    </div>
</div>
<div class="container">
    <div class="card mb-3 " >
        <div class="row g-0">
            <div class="col-md-4">
                <img src="images/convention_panel.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body bg-primary">
                    <h5 class="card-title"><?php echo $new_output_object["name"]; ?></h5>
                    <p class="card-text"><?php echo $new_output_object["description"];?></p>
                    <p class="card-text"><small class="text-muted"><?php echo 'Presenter: ' . $new_output_object["presenter"];?></small></p>
                    <p class="card-text"><small class="text-muted"><?php echo 'Date: ' . $new_output_object["date"];?></small></p>
                    <p class="card-text"><small class="text-muted"><?php echo 'Time: ' . $new_output_object["time"];?></small></p>
                    <p class="card-text"><small class="text-muted"><?php echo 'Event Created: ' . $new_output_object["inserted"] . ' || Last Updated: ' . $new_output_object["updated"];?></small></p>
                    <div class="text-center" >
                        <button class="btn btn-primary" type="button" onclick="go_home()">RETURN HOME</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<script>
    function go_home()
    {
        window.location= "event_index.php";
    }
</script>
<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</body>
</html>
