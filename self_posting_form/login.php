<?php
global $conn;
require 'dbConnect.php';

$in_username= "";
$in_password="";
$displayForm = true;

//default values for error messages
$events_name_message= "";
$events_date_message="";
$events_time_message="";
$events_presenter_message="";
$events_description_message="";
$username_error_message = "";
$password_error_message = "";
$not_valid_error = "";

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

    /*

        if form submitted
            |x|- process data
            |x|- validate data
            if data is valid
                ||- access data base(SELECT AND WHERE)
                    ||- if user/pass found
                        ||- valid user found
                        ||- display admin page/content
                        || - SET SESSION VARIABLES TO SAVE THE STATE, TO GIVE YOU ACCESS BEHIND THE CURTAIN
            else
                ||- invalid user/pass
                ||- display standard page/return home
        else
           ||-  not valid data

     */
if(isset($_POST['submit']))
{
    global $displayForm;
    $displayForm = false;

    $in_username = $_POST['username'];
    $in_password = $_POST['password'];

    $valid_data=true;
    if($in_username == "")
    {
        //display error message
        //put data back in the form
        $username_error_message = "not valid username";
        $valid_data=false;
    }
    if($in_password == "")
    {
        $password_error_message = "not a valid password";
        $valid_data=false;
    }

    if(!$valid_data)
    {

        $displayForm = true;
    }
    else{
        require 'dbConnect.php';

        $sql = "SELECT COUNT(*) FROM event_user WHERE event_user_name = :username AND event_user_password = :password";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $in_username);
        $stmt->bindParam(':password', $in_password);
        $stmt->execute();

        $number =  $stmt->fetchColumn();

        if($number < 1)
        {
            //display form
            //display error messages
            $displayForm = true;
            $not_valid_error = "Username or password not found. Please try again!";
            $in_username = "";
            $in_password = "";
        }
        else
        {
           $displayForm = false;
        }
    }

}
else{
    echo "";
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
<div class="container">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="images/server.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Self Posting Form - insert data to the table + Input Validation + Login Page</h1>
            <p class="lead">Create a self posting form, with a honeypot that displays a message if the data was successfully inserted into the database</p>
            <p class="lead">Add input validation to the self posting form to only allow the data you want into the database</p>
            <p class="lead">Add a login page get validation to be able to manipulate the database</p>
        </div>
    </div>
</div>
<?php

if($displayForm)
    {
        /* if username and password successful show this */
?>
        <div style="color:red; text-align: center">
            <?php echo $not_valid_error?>
        </div>

        <form method="post" action="login.php" style="text-align: center">

            <label for="username">username</label>
            <input type="text" name="username" id="username" value="<?php echo $in_username ?>" placeholder="<?php echo $username_error_message?>">

            <label for="password">password</label>
            <input type="password" name="password" id="password" value="<?php echo $in_password ?>" placeholder="<?php echo $password_error_message?>">
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>

<?php
    }
    else
    {
        /* page that will be shown until valid data has been entered */
?>
        <div>
            <h1>ADMIN SYSTEM</h1>
        </div>
        <div class="container">
            <ul>
                <li>add event</li>
                <li><a href="logout.php">sign out</a></li>
            </ul>
        </div>



<?php
    }
?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script>

</body>
</html>

    /*
    * MAINTAINING STATE - WHAT HAPPENED PREVIOUSLY
    * INTERNET IS STATELESS - NOT DESIGNED TO KEEP TRACK OF ANY PREVIOUS INFORMATION
    *
    * SERVER
    * HTTP - COOKIES (GO BACK AND FORTH)
    * DATABASE
    * SESSION VARIABLES - (ONLY ON THE SERVER, END WHEN THE SERVER ENDS)
    *
    * CLIENT
    * HTTP - COOKIES
    * LOCAL STORAGE
    * BOTH WITH JAVASCRIPT
    * */

    /*
    * session start must be on all pages that need to maintain state
    * */