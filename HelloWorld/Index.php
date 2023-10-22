<?php

/*
        Model - data, variables usually put near top of page
        Controller - the rest of the top of the page, under the page
        View - the html section - keep as much of the PHP code Out of the view as possible

*/
$studentName = "Mary";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

</head>
<script>

    //let studentName = "Dan";
    let studentName = "<?php echo $studentName; ?>";
    let cars = ["Chevy", "Ford"]

</script>
<body>
    <?php $studentName = "Carl"?>
    <h1>WDV341 Intro to PHP</h1>
    <h2>Unit-2 PHP Basics</h2>
    <p>Welcome to Intro PHP! <?php echo $studentName; ?></p>
    <p>JavaScript thinks your name is <script>document.write(studentName)</script></p>
</body>

</html>