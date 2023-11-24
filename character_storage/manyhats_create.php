<?php
global $conn;
require 'dbConnect.php';

session_start();
if(!$_SESSION['valid_user'])
{
    header("Location:/WDV341/character_storage/manyhats_home.php");
}

$user_id = $_SESSION['user_id'];
setcookie("user_id", strval($user_id));
try{
    $sql_check = "SELECT COUNT(*) FROM character";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->execute();

    $check = $stmt_check->fetch();

}
catch(Exception $e)
{
    echo "table empty";
}




?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manyhats</title>
</head>
<body>
    <h1>HELLO FROM CREATE PAGE</h1>
    <form>
        <div class="button-group">
            <button>Tab1</button>
            <button>Tab2</button>
            <button>Tab3</button>
        </div>
        <div class = "tab1">
            <div>
                <label for="character-sheet-name">NAME:</label>
                <input type="text" name="character-sheet-name" id="character-sheet-name">
            </div>
            <div>
                <label for="character-sheet-race">RACE:</label>
                <select name="character-sheet-race" id="character-sheet-race">
                    <option value = "0">Select Your Characters Race</option>
                </select>
            </div>
            <div>
                <label for="character-sheet-sub-race-select">SUB-RACE</label>
                <select name="character-sheet-sub-race-select" id="character-sheet-sub-race-select">

                </select>
            </div>
            <div>
                <label for="character-sheet-class-select">CLASS</label>
                <select name="character-sheet-class-select" id="character-sheet-class-select">
                    <option value = "0">Select Your Characters Class</option>

                </select>
            </div>
            <div>
                <label for="character-sheet-background-select">BACKGROUND</label>
                <select name="character-sheet-background-select" id="character-sheet-background-select">
                    <option value = "0">Select Your Background</option>
                </select>
            </div>
        </div>

        <div class="tab2">
            <div>
                <label for="Strength">Strength</label>
                <input type="text" id="Strength" name="Strength">
            </div>
            <div>
                <label for="dexterity">Dexterity</label>
                <input type="text" id="dexterity" name="dexterity">
            </div>
            <div>
                <label for="constitution">Constitution</label>
                <input type="text" id="constitution" name="constitution">
            </div>
            <div>
                <label for="intelligence">Intelligence</label>
                <input type="text" id="intelligence" name="intelligence">
            </div>
            <div>
                <label for="wisdom">Wisdom</label>
                <input type="text" id="wisdom" name="wisdom">
            </div>
            <div>
                <label for="charisma">charisma</label>
                <input type="text" id="charisma" name="charisma">
            </div>
        </div>

        <div class="tab3">
            <div>
                <input type="radio" id="Acrobatics" name="Acrobatics">
                <label for="Acrobatics">Acrobatics</label>
            </div>
            <div>
                <input type="radio" id="Animal-Handling" name="Animal-Handling">
                <label for="Animal-Handling">Animal-Handling</label>
            </div>
            <div>
                <input type="radio" id="Arcana" name="Arcana">
                <label for="Arcana">Arcana</label>
            </div>
            <div>
                <input type="radio" id="Athletics" name="Athletics">
                <label for="Athletics">Athletics</label>
            </div>
            <div>
                <input type="radio" id="Deception" name="Deception">
                <label for="Deception">Deception</label>
            </div>
            <div>
                <input type="radio" id="History" name="History">
                <label for="History">History</label>
            </div>
            <div>
                <input type="radio" id="Insight" name="Insight">
                <label for="Insight">Insight</label>
            </div>
            <div>
                <input type="radio" id="Intimidation" name="Intimidation">
                <label for="Intimidation">Intimidation</label>
            </div>
            <div>
                <input type="radio" id="Investigation" name="Investigation">
                <label for="Investigation">Investigation</label>
            </div>
            <div>
                <input type="radio" id="Medicine" name="Medicine">
                <label for="Medicine">Medicine</label>
            </div>
            <div>
                <input type="radio" id="Nature" name="Nature">
                <label for="Nature">Nature</label>
            </div>
            <div>
                <input type="radio" id="Perception" name="Perception">
                <label for="Perception">Perception</label>
            </div>
            <div>
                <input type="radio" id="Performance" name="Performance">
                <label for="Performance">Performance</label>
            </div>
            <div>
                <input type="radio" id="Persuasion" name="Persuasion">
                <label for="Persuasion">Persuasion</label>
            </div>
            <div>
                <input type="radio" id="Religion" name="Religion">
                <label for="Religion">Religion</label>
            </div>
            <div>
                <input type="radio" id="Sleight-of-Hand" name="Sleight-of-Hand">
                <label for="Sleight-of-Hand">Sleight-of-Hand</label>
            </div>
            <div>
                <input type="radio" id="Stealth" name="Stealth">
                <label for="Stealth">Stealth</label>
            </div>
            <div>
                <input type="radio" id="Survival" name="Survival">
                <label for="Survival">Survival</label>
            </div>
        </div>


    </form>
    <button type="button" id="next_one">SHOW DEETS</button>
    <button type="button" id="next_sub">SHOW SUB</button>
    <div id="name"></div>
    <div id="sub_name"></div>
    <div id="speed"></div>
    <div id="race_name"></div>
    <div id="languages"></div>
    <div id="s"></div>
    <div id="d"></div>
    <div id="c"></div>
    <div id="i"></div>
    <div id="w"></div>
    <div id="ch"></div>
    <div id="features">


    </div>

    <div id="proficiency">


    </div>

</body>

<script src="scripts/race.js"></script>
<script src="scripts/class.js"></script>
<script>
    fill_race_select();
    fill_class_select();
</script>
</html>
