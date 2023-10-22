<?php
// function to format time stamp into mm/dd/yyyy format
function month_day_year($input): string
{
    return date("m/d/Y",$input);
}
// function to format time stamp into dd/mm/yyyy format
function day_month_year($input): string
{
    return date("d/m/Y",$input);
}
//function to return the number of characters in a string
function characters_in_string($input): string
{
    return strval(strlen($input));
}
//function to trim any whitespace from a string
function trim_whitespace_from_string($input): array|string
{
    return str_replace(" ", "", $input);
}
//function to return the string in all lower case
function convert_to_lowercase($input): string
{
    return strtolower($input);
}
//function to check if a string contains DMACC (case-insensitive) and return true or false
function contains_DMACC($input): string
{
    //test variable
    $dmacc = "dmacc";
    //convert to lowercase for testing
    $lowercase_input = convert_to_lowercase($input);
    //return a message based on if the input matched the test variable
    if (str_contains($lowercase_input, $dmacc))
    {
        return "DMACC was found in the string";
    }
    else
    {
        return "DMACC was NOT found in the string";
    }
}
//function to take a number and display it as a phone number
function convert_to_phone_number($input) :string
{
    if(strlen($input) == 10)
    {
        return sprintf("%s-%s-%s", substr($input, 0, 3), substr($input, 3, 3), substr($input, 6));
    }
    else
    {
        return "NOT A VALID NUMBER!";
    }


}
//function that takes a number and returns it as US currency

function convert_to_USD($input) : string
{
    $user_input = floatval($input);

    return "$".number_format($user_input, 2);
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

    <title>4-1 PHP Functions</title>
  </head>
  <body>
  <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
              <img src="Images/hero_image.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Assignment 4-1</h1>
              <p class="lead">PHP Functions, an intro to functions in PHP. Use functions to manipulate strings as outlined in the assignment parameters.</p>
          </div>
      </div>
  </div>

  <br><br>

  <div class ="container">
      <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card">
                  <div class="card-header text-center"><h5>Formatting Month Day Year</h5><h5>Into MM/DD/YYYY</h5></div>
                  <div class="card-body">
                      <p class="card-text text-center"><?php $test = time(); echo(month_day_year($test));  ?></p>
                  </div>
              </div>
          </div>
          <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="card">
                  <div class="card-header text-center"><h5>Formatting Month Day Year</h5><h5>Into DD/MM/YYYY</h5></div>
                  <div class="card-body">
                      <p class="card-text text-center"><?php $test = time(); echo(day_month_year($test)) ?></p>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <br><br>
  <div class="container">
      <div class="row">
          <div class="col-sm-3  pt-2 pb-2">
              <div class="card">
                  <div class="card-header text-center"><h5>Formatting Strings</h5><h5>Number Of Characters</h5></div>
                  <div class="card-body ">
                      <p class="card-text text-center"><?php  $test = "Hello How Are You From DmAcC!"; echo(characters_in_string($test));?></p>
                  </div>
              </div>
          </div>
          <div class="col-sm-3 pt-2 pb-2">
              <div class="card">
                  <div class="card-header text-center"><h5>Formatting Strings</h5><h5>All Lowercase</h5></div>
                  <div class="card-body">
                      <p class="card-text text-center"><?php echo(convert_to_lowercase($test));?></p>
                  </div>
              </div>
          </div>
          <div class="col-sm-3 pt-2 pb-2">
              <div class="card">
                  <div class="card-header text-center"><h5>Formatting Strings</h5><h5>Remove String Whitespace</h5></div>
                  <div class="card-body">
                      <p class="card-text text-center"><?php  echo(trim_whitespace_from_string($test));?></p>
                  </div>
              </div>
          </div>
          <div class="col-sm-3 pt-2 pb-2">
              <div class="card">
                  <div class="card-header text-center"><h5>Formatting Strings</h5><h5>String Contain DMACC?</h5></div>
                  <div class="card-body">
                      <p class="card-text text-center"><?php echo(contains_DMACC($test));?></p>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <br><br>
  
  <div class = "container pb-5">
      <div class="row">
          <div class="col-sm-6">
              <div class="card">
                  <h5 class="card-header text-center">Format Input To A Phone Number</h5>
                      <div class="card-body">
                          <p class="card-text text-center"><?php  $test = "1234567890"; echo(convert_to_phone_number($test));?></p>
                      </div>
              </div>
          </div>
          <br><br>
          <div class="col-sm-6">
              <div class="card">
                  <h5 class="card-header text-center">Convert Input To US Dollars</h5>
                      <div class="card-body">
                          <p class="card-text text-center"><?php  $test = "123456"; echo(convert_to_USD($test));?></p>
                      </div>
              </div>
          </div>
      </div>
  </div>

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

  </body>
</html>
