<?php
// #1
$yourName = "Andrew Steele";
$assignmentName = "2-1 PHP Basics";
// #4
$number1 = 55;
$number2 = 987;
$total = $number1 + $number2;
$webDevLanguages = array("PHP", "HTML", "Javascript");

$output = array();

foreach($webDevLanguages as $value)
    {
        $output[] = json_encode($value);
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
    <title>PHP Basics</title>

</head>

<body>
<script>
    function fromPhpLoop(input)
    {
        let outputArray = input;
        let div = document.getElementById("here");

        for(let i = 0; i < outputArray.length; i++)
        {
            let outputToDOM = document.createElement("h3");
            outputToDOM.innerHTML = outputArray[i];
            div.append(outputToDOM);
        }

    }
</script>
<div class="format_container text-center">
    <!-- #2 -->
        <?php echo "<h1>" . $assignmentName . "</h1>";?>
</div>
    <div class="container">
    <div class="row">
        <div class="col-sm-6">
            <div class="card format_card">
                <div class="card-body">
                    <!-- #3 -->
                    <h2 class="card-title"><?php echo $yourName; ?></h2>
                    <p class="card-text">My name being outputted to the DOM using the PHP echo command</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card format_card">
                <div class="card-body">
                    <h2 class="card-title">Work With Arrays</h2>
                    <p class="card-text" id = "here">
                        Output from an PHP array passed into JavaScript then appended to this div: <br><br>
                        <!-- #6 -->
                        <script>
                            let output_webdev_array = [];
                            <?php foreach ($webDevLanguages as $key => $value) {?>

                                output_webdev_array.push("<?php echo $value; ?>");
                            <?php }
                            ?>
                            fromPhpLoop(output_webdev_array);
                        </script>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="card format_card">
        <div class="card-header text-center" style="background-color: lightblue">
            <h2>Playing with PHP Variables</h2>
        </div>
        <div class="card-body">
            <!-- #5 -->
            <p class="card-text">First Number= <?php echo $number1?></p>
            <p class="card-text">Second Number= <?php echo $number2?></p>
            <p class="card-text">Total= <?php echo $total?></p>
        </div>
    </div>
</div>

<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


</body>
</html>
