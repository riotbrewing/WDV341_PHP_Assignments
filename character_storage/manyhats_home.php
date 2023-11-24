<?php
global $conn;
require 'dbConnect.php';

session_start();
$username_in = "";
$password_in = "";
$access = "";
$username_message = "";
$password_message = "";
$not_found = "";
$valid_data = false;
if(isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == "") {
        $username_message = "Please enter a username";
    }
    if ($password == "") {
        $password_message = "Please enter a password";
    } else {
        $sql = "SELECT COUNT(*) FROM users WHERE username = :username AND password = :password";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":username", $username);
        $stmt->bindParam(":password", $password);

        $stmt->execute();

        $column_number = $stmt->fetchColumn();

        if ($column_number < 1) {
            $username_in = "";
            $password_in = "";
            $not_found = "Username Or Password Not Found";
        } else {
            $sql_user_id = "SELECT user_id FROM users WHERE username = :username AND password = :password";
            $stmt_user = $conn->prepare($sql_user_id);
            $stmt_user->bindParam(":username", $username);
            $stmt_user->bindParam(":password", $password);
            $stmt_user->execute();
            $id = $stmt_user->fetch();
            $valid_data = True;
            $_SESSION['valid_user'] = true;
            $_SESSION['user_id'] = $id[0];
        }
    }
}
if(!$valid_data){
?>

<!-- SHOW PAGE UNLESS LOGIN-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manyhats</title>
</head>
<body>
    <span><?php echo $not_found?></span>
    <form method="post" action="manyhats_home.php">
        <label for="username">USERNAME</label>
        <input id="username" name="username" type="text" placeholder="<?php echo $username_message?>">
        <label for="password">PASSWORD</label>
        <input id="password" name="password" type="password" placeholder="<?php echo $password_message?>">
        <button name="login" id="login" type="submit">LOGIN</button>
    </form>

<?php
}
//END NOT LOGGED IN

else
{
    header("Location:/WDV341/character_storage/manyhats_create.php");
}
?>
</body>


</html>
