<?php
    // connect to the database
    global $conn;
    require "dbConnect.php";
    // get the count for dynamic selection
    $sql = "SELECT COUNT(*) FROM wdv341_events";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $get_count = $stmt->fetch();
    //get the names for filling in the option dropdown
    $sql2 = "SELECT events_name FROM wdv341_events";
    $stmt2 = $conn->prepare($sql2);
    $stmt2->execute();
    $get_names = $stmt2->fetchAll();
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

<div class="container col-xxl-8 px-4 py-5 title_margin">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 bg-primary">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="images/json_pic.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 h1_text">9-1 PHP-JSON EVENT OBJECT</h1>
            <p class="lead">Create a PHP class, and store data from the database as and instance of the class. Encode the output to JSON and output the JSON object</p>
        </div>
    </div>
</div>
<div class ="container text-center">
    <div class = "row">
        <div class = "col-4">

        </div>
        <div class = "col-4">
            <h2>PLEASE SELECT YOU EVENT!</h2>
        </div>
        <div class = "col-4">

        </div>
    </div>
</div>
<div class="container">
    <form method="post" action="event_form.php">
        <select class="form-select" aria-label="Default select example" id = "select" name = "select" onchange="enable_button()">
            <option value = "-1" selected>Open this select menu</option>
            <?php
            for($i = 0; $i < $get_count[0]; $i++)
            {
                ?>
                <option value="<?php echo $i + 1?>" id="option" name = "option"><?php echo $get_names[$i]['events_name'] ?>  </option>

                <?php
            }
            ?>
        </select>
        <br>
        <div class="text-center" >
            <button class="btn btn-primary" type="submit" id = "submit" disabled="disabled" style="visibility: hidden">SEE EVENT</button>
        </div>
    </form>
</div>

<script>
    function enable_button()
    {
        let select = document.getElementById("select").value;
        let button = document.getElementById("submit");

        if(select !== "-1")
        {
            //console.log(select)
            button.style.visibility= "visible";
            button.disabled = false;
        }
        else if(select === '-1')
        {
            button.style.visibility = "hidden";
            button.disabled = true;
        }

    }
</script>


<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</body>
</html>
