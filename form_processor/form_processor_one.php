<?php

    //capture the form data from the request object
    //format and return a confirmation message
/*
 * echo "<table class='container'>";
    echo "<tr><th>Field Name</th><th>Value of Field</th></tr>";
    foreach($_POST as $key => $value)
    {
        echo "<tr>";
        echo "<td>" , $key,"</td>";
        echo "<td>", "= ".$value, "</td>";
        echo "</tr>";
    }
    echo "</table>";
 */


    //array holding different advisors
    $advisors = array("" => "Jen Eral","CIS" => "Igot Chaman", "GD" => "Heel Pewout", "WDV" => "Anne Sewrs");
    $advisors_email = array("" => "jeral@tester.edu", "CIS" => "ichaman@tester.edu", "GD" => "hpewout@tester.edu", "WDV" => "asewrs@tester.edu");
    $majors_array = array("", "CIS", "GD", "WDV");
    $full_majors_array = array("CIS" => "Computer Information Systems", "GD" =>"Graphic Design", "WDV" => "Web Development");
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $school_level = $_POST["radio_school_level"];
    $major = $_POST["major_select"];
    $email = $_POST["email_input"];
    $comments = $_POST["comments"];
    $test_array = array("" => array("Jen Eral", "jeral@tester.edu"), "CIS" => array("Igot Chaman", "ichaman@tester.edu"), "GD" => array("Heel Pewout", "hpewout@tester.edu"),
        "WDV" => array("asewrs@tester.edu", "asewrs@tester.edu"));
    function get_major()
    {
        global $major, $full_majors_array;
        if($major == "")
        {
            return "You did not select a major";
        }
        else
        {
            return "You have declared " . $full_majors_array[$major] . " as your major";
        }
    }

    function advisor_information()
    {
        global $advisors, $majors_array, $major, $advisors_email, $test_array;
        if (isset($_POST['contact_advisor']))
        {
            if ($major == "")
            {
                return "You did not select a major, please contact our admissions counselor " . $test_array[$major][0] . " at " . $test_array[$major][1];
            }
            else
            {
                return $test_array[$major][0] . " is the advisor for the " . $major . " program please contact them at " . $test_array[$major][1];
            }

        }
        else
        {
            return "You choose not to contact an advisor";
        }
    }

    function contact_me()
    {
        global $major;
        if(isset($_POST["contact_me"]))
        {
            if($major == "")
            {
                return "You did not select a major so we will send you information on all of the possible IT programs";
            }
            else
            {
                return "We will email you information about your program";
            }

        }
        else
        {
            return "We will NOT be emailing you contact information";
        }
    }
    function get_date()
    {
        $today = time();
        return date("d/m/Y", $today);
    }

?>


<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="stylesheet.css">
    <title>5-1 HTML Form Processor</title>
</head>
<body class="color_body">

<nav class="navbar navbar-expand-lg navbar-light" style="border: solid 1px #cbcbcb; background-color: #e1e5ef;">
    <div class="container-fluid">
        <a class="navbar-brand" href="form.html">DMACC</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="form.html">Home</a>
            </ul>
        </div>
    </div>
</nav>


<div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">You Did It!</h1>
            <p class="col-lg-10 fs-4">You have taken the first step into a brighter future, all of us at DMACC look
            forward to helping you through your academic journey!
            </p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-light">
                <h1 class="text-center">Thank You!</h1>
                <br><br>
                <h3>Dear <?php echo $first_name . " " . $last_name . "," ?></h3>
                <p>Thank you for your interest in DMACC! </p>
                <ul>
                    <li>We have your current academic standing listed as: <?php echo $school_level . " as of " . get_date() ?></li>
                    <li><?php echo get_major() ?></li>
                </ul>
                <p>Based on your responses we will provide the following to you at <?php echo $email ?></p>
                <ul>
                    <li><?php echo contact_me() ?></li>
                    <li><?php echo advisor_information() ?></li>
                </ul>
                <label for="added_comments" class="form-label">You have shared the following comments which we will review:</label>
                <textarea class="form-control" id="added_comments" rows="3" readonly><?php echo $comments ?></textarea>
            </form>
        </div>
    </div>
</div>

<br><br><br>
<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>


