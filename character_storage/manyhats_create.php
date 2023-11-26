<?php
global $conn;
require 'dbConnect.php';

session_start();
if(!$_SESSION['valid_user'])
{
    header("Location:/WDV341/character_storage/manyhats_home.php");
}

$show_form_one = false;

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
    $show_form_one = true;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/character_form.css">
    <link rel="stylesheet" href="styles/setup.css">
    <link rel="stylesheet" href="styles/utility.css">
    <title>Manyhats</title>
</head>
<body>
<?php
    if($show_form_one)
    {
?>
    <div class="container">
        <div class="character-form">
            <div class="character-form-header">
                <div class="character-name">
                    <label for="character-name">CHARACTER NAME</label>
                    <input type="text" id="character-name" name="character-name">
                </div>
                <div class="character-summary">
                    <div>
                        <label for="class">CLASS</label>
                        <input type="text" id="character-class" name="character-class">
                    </div>
                    <div>
                        <label for="background">BACKGROUND</label>
                        <input type="text" id="background" name="background">
                    </div>
                    <div>
                        <label for="level">LEVEL</label>
                        <input type="text" id="level" name="level">
                    </div>
                    <div>
                        <label for="race">RACE</label>
                        <input type="text" id="race" name="race">
                    </div>
                    <div>
                        <label for="alignment">ALIGNMENT</label>
                        <input type="text" id="alignment" name="alignment">
                    </div>
                    <div>
                        <label for="xp">XP</label>
                        <input type="text" id="xp" name="xp">
                    </div>
                </div>
            </div>
            <div class="character-form-left">
                <div class="character-form-ability">
                    <div class="ability">
                        <div class="ability-number">
                            <div>STRENGTH</div>
                            <input type="text" name="strength" id="strength" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="strength-bonus" id="strength-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>DEXTERITY</div>
                            <input type="text" name="dex" id="dex" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="dex-bonus" id="dex-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>CONSTITUTION</div>
                            <input type="text" name="const" id="const" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="const-bonus" id="const-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>INTELLIGENCE</div>
                            <input type="text" name="intel" id="intel" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="intel-bonus" id="intel-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>WISDOM</div>
                            <input type="text" name="wisdom" id="wisdom" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="wisdom-bonus" id="wisdom-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>CHARISMA</div>
                            <input type="text" name="charisma" id="charisma" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="charisma-bonus" id="charisma-bonus" aria-label="">
                        </div>
                    </div>
                </div>
                <div class="character-form-saves-skills">
                    <div class="inspiration-prof">
                        <div class="insp-prof-text">
                            <input type="text" name="inspiration" id="inspiration" aria-label="">
                        </div>
                        <div class="insp-prof-label">
                            <h3>INSPIRATION</h3>
                        </div>
                    </div>
                    <div class="inspiration-prof">
                        <div class="insp-prof-text">
                            <input type="text" name="proficiency-bonus" id="proficiency-bonus" aria-label="">
                        </div>
                        <div class="insp-prof-label">
                            <h3>PROFICIENCY BONUS</h3>
                        </div>
                    </div>
                    <div class="saving">
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="strength-save" name="strength-save" aria-label="strength-save">
                            <p>STRENGTH</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="dexterity-save" name="dexterity-save" aria-label="dexterity-save">
                            <p>DEXTERITY</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="constitution-save" name="constitution-save" aria-label="constitution-save">
                            <p>CONSTITUTION</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="intelligence-save" name="intelligence-save" aria-label="intelligence-save">
                            <p>INTELLIGENCE</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="wisdom-save" name="wisdom-save" aria-label="wisdom-save">
                            <p>WISDOM</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="charisma-save" name="charisma-save" aria-label="charisma-save">
                            <p>CHARISMA</p>
                        </div>
                    </div>
                    <div class="skills">
                        <div class="radio-container">
                            <span class="my-radio" id="acrobatics-radio"></span>
                            <input type="text" id="Acrobatics" name="Acrobatics" aria-label="Acrobatics">
                            <p>ACROBATICS</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="animal-handling-radio"></span>
                            <input type="text" id="Animal-Handling" name="Animal-Handling" aria-label="Animal-Handling">
                            <p>ANIMAL-HANDLING</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="arcana-radio"></span>
                            <input type="text" id="Arcana" name="Arcana" aria-label="Arcana">
                            <p>ARCANA</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="survival-athletics"></span>
                            <input type="text" id="Athletics" name="Athletics" aria-label="Athletics">
                            <p>ATHLETICS</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="deception-radio"></span>
                            <input type="text" id="Deception" name="Deception" aria-label="Deception">
                            <p>DECEPTION</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="history-radio"></span>
                            <input type="text" id="History" name="History" aria-label="History">
                            <p>HISTORY</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="insight-radio"></span>
                            <input type="text" id="Insight" name="Insight" aria-label="Insight">
                            <p>INSIGHT</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="intimidation-radio"></span>
                            <input type="text" id="Intimidation" name="Intimidation" aria-label="Intimidation">
                            <p>INTIMIDATION</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="investigation-radio"></span>
                            <input type="text" id="Investigation" name="Investigation" aria-label="Investigation">
                            <p>INVESTIGATION</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="medical-radio"></span>
                            <input type="text" id="Medicine" name="Medicine" aria-label="Medicine">
                            <p>MEDICINE</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="nature-radio"></span>
                            <input type="text" id="Nature" name="Nature" aria-label="Nature">
                            <p>NATURE</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="perception-radio"></span>
                            <input type="text" id="Perception" name="Perception" aria-label="Perception">
                            <p>PERCEPTION</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="performance-radio"></span>
                            <input type="text" id="Performance" name="Performance" aria-label="Performance">
                            <p>PERFORMANCE</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="persuasion-radio"></span>
                            <input type="text" id="Persuasion" name="Persuasion" aria-label="Persuasion">
                            <p>PERSUASION</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="religion-radio"></span>
                            <input type="text" id="Religion" name="Religion" aria-label="Religion">
                            <p>RELIGION</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="slight-of-hand-radio"></span>
                            <input type="text" id="Slight-of-Hand" name="Slight-of-Hand" aria-label="Slight-of-Hand">
                            <p>SLIGHT-OF-HAND</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="stealth-radio"></span>
                            <input type="text" id="Stealth" name="Stealth" aria-label="Stealth">
                            <p>STEALTH</p>
                        </div>
                        <div class="radio-container">
                            <span class="my-radio" id="survival-radio"></span>
                            <input type="text" id="Survival" name="Survival" aria-label="Survival">
                            <p>SURVIVAL</p>
                        </div>
                    </div>
                </div>
                <div class="character-form-passive-prof">
                    <div class="passive-container">
                        <div class="passive-container-text">
                            <input type="text" name="passive-wisdom" id="passive-wisdom" aria-label="passive-wisdom">
                        </div>
                        <div class="passive-container-label">
                            <p>PASSIVE WISDOM</p>
                        </div>
                    </div>
                </div>

                <div class="language">

                    <h3>LANGUAGES & PROFICIENCIES</h3>
                    <div class="show-language" id="language-form">
                        <div id="insert-lang-prof"></div>
                    </div>

                    <div class="add-item-container"><button class="add-item" id="add-lang">+</button></div>
                </div>

            </div>
            <div class="character-form-middle">

                <div class="character-form-hit-death">
                    <div class="armor-class">
                        <p>ARMOR<br> CLASS</p>

                        <input type="text" name="armor-class" id="armor-class" aria-label="armor-class">
                    </div>
                    <div class="initiative">
                        <p>INITIATIVE</p>
                        <input type="text" name="initiative" id="initiative" aria-label="initiative">
                    </div>
                    <div class="speed">
                        <p>SPEED</p>
                        <input type="text" name="speed" id="speed" aria-label="speed">
                    </div>
                    <div class="hit-points">
                        <div class="hp-max">
                            <p>HIT POINT MAX: </p>
                            <input type="text" name="hit-point-max" id="hit-point-max" aria-label="hit-point-max">
                        </div>
                        <input type="text" name="hit-points" id="hit-points" aria-label="hit-points">
                        <p>CURRENT HIT POINTS</p>
                    </div>
                    <div class="temp-points">
                        <input type="text" name="temp-hit-points" id="temp-hit-points" aria-label="temp-hit-points">
                        <p>TEMPORARY HIT POINTS</p>
                    </div>
                    <div class="hit-dice">
                        <input type="text" name="hit-dice-content" id="hit-dice-content" aria-label="hit-dice-content">
                        <p>HIT DICE</p>
                    </div>
                    <div class="death-save">
                        <input type="text" name="death-save-content" id="death-save-content" aria-label="death-save-content">
                        <p>DEATH SAVE</p>
                    </div>
                </div>

                <div class="character-form-attacks">

                    <div class="misc-table">
                        <h3>WEAPONS</h3>

                        <div class="show-misc" id="weapon-form">
                            <div class="misc-header"><h4>NAME</h4><h4>DAMAGE</h4><h4>TYPE</h4></div>

                            <div class="insert-misc" id="insert-weapon"></div>
                        </div>
                        <div class="add-item-container"><button class="add-item" id="add-weapon">+</button></div>
                    </div>

                    <div class="misc-table">
                        <h3>SPELLS</h3>
                        <div class="show-misc" id="spells-form">
                            <div class="misc-header"><h4>NAME</h4><h4>RANGE</h4><h4>DURATION</h4></div>
                            <div id="insert-spell"></div>
                        </div>
                        <div class="add-item-container"><button class="add-item" id="add-spell">+</button></div>
                    </div>

                </div>

                <div class="misc-table">
                    <h3>EQUIPMENT</h3>
                    <div class="show-misc" id="equip-form">
                        <div class="misc-header"><h4>NAME</h4><h4>COST</h4><h4>QUANTITY</h4></div>
                        <div id="insert-equip"></div>
                    </div>
                    <div class="add-item-container"><button class="add-item" id="add-equip">+</button></div>
                </div>

            </div>
            <div class="character-form-right">
                <div class="character-form-personality">
                    <div class="personality-content">
                        <input type="text" name="personality" id="personality" aria-label="personality">
                        <p>PERSONALITY TRAIT</p>
                    </div>
                    <div class="personality-content">
                        <input type="text" name="ideals" id="ideals" aria-label="ideals">
                        <p>IDEALS</p>
                    </div>
                    <div class="personality-content">
                        <input type="text" name="bonds" id="bonds" aria-label="bonds">
                        <p>BONDS</p>
                    </div>
                    <div class="personality-content">
                        <input type="text" name="flaws" id="flaws" aria-label="flaws">
                        <p>FLAWS</p>
                    </div>
                </div>
                <div class="character-form-features">
                    <div class="features-table">
                        <h3>FEATURES</h3>
                        <div class="show-misc" id="equip-form">
                            <div class="features-header"><h4>NAME</h4></div>
                            <div id="insert-feature"></div>
                        </div>
                        <div class="add-item-container"><button class="add-item" id="add-equip">+</button></div>
                    </div>
                    <div class="misc-table">
                        <h3>TREASURE</h3>
                        <div class="show-misc" id="treasure-form">
                            <div class="misc-header"><h4>NAME</h4><h4>COST</h4><h4>WEIGHT</h4></div>
                            <div id="insert-treasure"></div>
                        </div>
                        <div class="add-item-container"><button class="add-item" id="add-treasure">+</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="create-modal" id="language_modal" >
        <div class="create-modal-content">
            <h1>ADD A LANGUAGE OR PROFICIENCY</h1>
            <select id="lang-select" aria-label="lang-select">
                <option>WHAT ARE YOU ADDING</option>
                <option value="language">LANGUAGE</option>
                <option value="proficiency">PROFICIENCY</option>
            </select>
            <div id="lang_option" style="display: none">
                <label for="new_lang">ENTER LANGUAGE</label>
                <input type="text" id="new_lang">
            </div>
            <div id="prof_option" style="display: none">
                <label for="new_prof">ENTER PROFICIENCY</label>
                <input type="text" id="new_prof">
            </div>
            <button id="lang_modal_button" class="modal-button">ADD</button>
        </div>
    </div>

    <div class="create-modal" id="weapons_modal" >
        <div class="create-modal-content">
            <h1>ADD A WEAPON</h1>

            <label for="weapon-type">WEAPON TYPE</label>
            <input type="text" id="weapon-type" class="weapons_check">
            <label for="weapon-name">WEAPON NAME</label>
            <input type="text" id="weapon-name" class="weapons_check">
            <label for="weapon-cost">WEAPON COST</label>
            <input type="text" id="weapon-cost" class="weapons_check">
            <label for="weapon-damage">WEAPON DAMAGE</label>
            <input type="text" id="weapon-damage" class="weapons_check">
            <label for="weapon-weight">WEAPON WEIGHT</label>
            <input type="text" id="weapon-weight" class="weapons_check">
            <label for="weapon-properties">WEAPON PROPERTIES</label>
            <input type="text" id="weapon-properties" placeholder="Separate properties with a comma" class="weapons_check">

            <button id="weapon_modal_button" class="modal-button">ADD</button>
        </div>
    </div>
    <div class="create-modal" id="equip_spell_modal" >
        <div class="create-modal-content">
            <h1>EQUIP A SPELL</h1>
            <label for="spell-type">SPELL TYPE</label>
            <input type="text" id="spell-type">
            <label for="spell-name">SPELL NAME</label>
            <input type="text" id="spell-name">
            <label for="casting-time">CASTING TIME</label>
            <input type="text" id="casting-time">
            <label for="duration">DURATION</label>
            <input type="text" id="duration">
            <label for="components">COMPONENTS</label>
            <input type="text" id="components">
            <label for="description">DESCRIPTION</label>
            <textarea id="description"></textarea>
            <button id="equip_spell_modal_button" class="modal-button">ADD</button>
        </div>
    </div>
    <div class="create-modal" id="add_spell_modal" >
        <div class="create-modal-content">
            <h1>EQUIP A SPELL</h1>
            <label for="add-spell-type">SPELL TYPE</label>
            <input type="text" id="add-spell-type">
            <label for="add-spell-name">SPELL NAME</label>
            <input type="text" id="add-spell-name">
            <label for="add-casting-time">CASTING TIME</label>
            <input type="text" id="add-casting-time">
            <label for="add-duration">DURATION</label>
            <input type="text" id="add-duration">
            <label for="add-components">COMPONENTS</label>
            <input type="text" id="add-components">
            <label for="add-description">DESCRIPTION</label>
            <textarea id="description"></textarea>
            <button id="add_spell_modal_button" class="modal-button">ADD</button>
        </div>
    </div>

<?php
// END IF
}
//START ELSE
else{ ?>

    <div class="container">
        <div class="character-form">
            <div class="character-form-header">
                <div class="character-name">
                    <label for="character-name">CHARACTER NAME</label>
                    <input type="text" id="character-name" name="character-name">
                </div>
                <div class="character-summary">
                    <div>
                        <label for="class">CLASS</label>
                        <input type="text" id="class" name="class">
                    </div>
                    <div>
                        <label for="background">BACKGROUND</label>
                        <input type="text" id="background" name="background">
                    </div>
                    <div>
                        <label for="level">LEVEL</label>
                        <input type="text" id="level" name="level">
                    </div>
                    <div>
                        <label for="race">RACE</label>
                        <input type="text" id="race" name="race">
                    </div>
                    <div>
                        <label for="alignment">ALIGNMENT</label>
                        <input type="text" id="alignment" name="alignment">
                    </div>
                    <div>
                        <label for="xp">XP</label>
                        <input type="text" id="xp" name="xp">
                    </div>
                </div>
            </div>
            <div class="character-form-left">
                <div class="character-form-ability">
                    <div class="ability">
                        <div class="ability-number">
                            <div>STRENGTH</div>
                            <input type="text" name="strength" id="strength" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="strength-bonus" id="strength-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>DEXTERITY</div>
                            <input type="text" name="dex" id="dex" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="dex-bonus" id="dex-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>CONSTITUTION</div>
                            <input type="text" name="const" id="const" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="const-bonus" id="const-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>INTELLIGENCE</div>
                            <input type="text" name="intel" id="intel" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="intel-bonus" id="intel-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>WISDOM</div>
                            <input type="text" name="wisdom" id="wisdom" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="wisdom-bonus" id="wisdom-bonus" aria-label="">
                        </div>
                    </div>
                    <div class="ability">
                        <div class="ability-number">
                            <div>CHARISMA</div>
                            <input type="text" name="charisma" id="charisma" aria-label="">
                        </div>
                        <div class="ability-bonus">
                            <input type="text" name="charisma-bonus" id="charisma-bonus" aria-label="">
                        </div>
                    </div>
                </div>
                <div class="character-form-saves-skills">
                    <div class="inspiration-prof">
                        <div class="insp-prof-text">
                            <input type="text" name="inspiration" id="inspiration" aria-label="">
                        </div>
                        <div class="insp-prof-label">
                            <h3>INSPIRATION</h3>
                        </div>
                    </div>
                    <div class="inspiration-prof">
                        <div class="insp-prof-text">
                            <input type="text" name="proficiency-bonus" id="proficiency-bonus" aria-label="">
                        </div>
                        <div class="insp-prof-label">
                            <h3>PROFICIENCY BONUS</h3>
                        </div>
                    </div>
                    <div class="saving">
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="strength-save" name="strength-save" aria-label="strength-save">
                            <p>STRENGTH</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="dexterity-save" name="dexterity-save" aria-label="dexterity-save">
                            <p>DEXTERITY</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="constitution-save" name="constitution-save" aria-label="constitution-save">
                            <p>CONSTITUTION</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="intelligence-save" name="intelligence-save" aria-label="intelligence-save">
                            <p>INTELLIGENCE</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="wisdom-save" name="wisdom-save" aria-label="wisdom-save">
                            <p>WISDOM</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="charisma-save" name="charisma-save" aria-label="charisma-save">
                            <p>CHARISMA</p>
                        </div>
                    </div>
                    <div class="skills">
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Acrobatics" name="Acrobatics" aria-label="Acrobatics">
                            <p>ACROBATICS</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Animal-Handling" name="Animal-Handling" aria-label="Animal-Handling">
                            <p>ANIMAL-HANDLING</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Arcana" name="Arcana" aria-label="Arcana">
                            <p>ARCANA</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Athletics" name="Athletics" aria-label="Athletics">
                            <p>ATHLETICS</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Deception" name="Deception" aria-label="Deception">
                            <p>DECEPTION</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="History" name="History" aria-label="History">
                            <p>HISTORY</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Insight" name="Insight" aria-label="Insight">
                            <p>INSIGHT</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Intimidation" name="Intimidation" aria-label="Intimidation">
                            <p>INTIMIDATION</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Investigation" name="Investigation" aria-label="Investigation">
                            <p>INVESTIGATION</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Medicine" name="Medicine" aria-label="Medicine">
                            <p>MEDICINE</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Nature" name="Nature" aria-label="Nature">
                            <p>NATURE</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Perception" name="Perception" aria-label="Perception">
                            <p>PERCEPTION</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Performance" name="Performance" aria-label="Performance">
                            <p>PERFORMANCE</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Persuasion" name="Persuasion" aria-label="Persuasion">
                            <p>PERSUASION</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Religion" name="Religion" aria-label="Religion">
                            <p>RELIGION</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Slight-of-Hand" name="Slight-of-Hand" aria-label="Slight-of-Hand">
                            <p>SLIGHT-OF-HAND</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Stealth" name="Stealth" aria-label="Stealth">
                            <p>STEALTH</p>
                        </div>
                        <div class="radio-container">
                            <div class="my-radio"></div>
                            <input type="text" id="Survival" name="Survival" aria-label="Survival">
                            <p>SURVIVAL</p>
                        </div>
                    </div>
                </div>
                <div class="character-form-passive-prof">
                    <div class="passive-container">
                        <div class="passive-container-text">
                            <input type="text" name="passive-wisdom" id="passive-wisdom" aria-label="passive-wisdom">
                        </div>
                        <div class="passive-container-label">
                            <p>PASSIVE WISDOM</p>
                        </div>
                    </div>
                </div>

                <div class="language">

                    <h3>LANGUAGES & PROFICIENCIES</h3>

                    <div class="show-language" id="language-form">
                        <div id="insert-lang-prof"></div>
                    </div>

                    <div class="add-item-container"><button class="add-item" id="add-lang">+</button></div>
                </div>
            </div>
            <div class="character-form-middle">

                <div class="character-form-hit-death">
                    <div class="armor-class">
                        <p>ARMOR<br> CLASS</p>

                        <input type="text" name="armor-class" id="armor-class" aria-label="armor-class">
                    </div>
                    <div class="initiative">
                        <p>INITIATIVE</p>
                        <input type="text" name="initiative" id="initiative" aria-label="initiative">
                    </div>
                    <div class="speed">
                        <p>SPEED</p>
                        <input type="text" name="speed" id="speed" aria-label="speed">
                    </div>
                    <div class="hit-points">
                        <div class="hp-max">
                            <p>HIT POINT MAX: </p>
                            <input type="text" name="hit-point-max" id="hit-point-max" aria-label="hit-point-max">
                        </div>
                        <input type="text" name="hit-points" id="hit-points" aria-label="hit-points">
                        <p>CURRENT HIT POINTS</p>
                    </div>
                    <div class="temp-points">
                        <input type="text" name="temp-hit-points" id="temp-hit-points" aria-label="temp-hit-points">
                        <p>TEMPORARY HIT POINTS</p>
                    </div>
                    <div class="hit-dice">
                        <input type="text" name="hit-dice-content" id="hit-dice-content" aria-label="hit-dice-content">
                        <p>HIT DICE</p>
                    </div>
                    <div class="death-save">
                        <input type="text" name="death-save-content" id="death-save-content" aria-label="death-save-content">
                        <p>DEATH SAVE</p>
                    </div>
                </div>

                <div class="character-form-attacks">
                    <div class="misc-table">
                        <h3>WEAPONS</h3>

                        <div class="show-misc" id="weapon-form">
                            <div class="misc-header"><h4>NAME</h4><h4>DAMAGE</h4><h4>TYPE</h4></div>

                            <div class="insert-misc" id="insert-weapon"></div>
                        </div>
                        <div class="add-item-container"><button class="add-item" id="add-weapon">+</button></div>
                    </div>

                    <div class="misc-table">
                        <h3>SPELLS</h3>
                        <div class="show-misc" id="spells-form">
                            <div class="misc-header"><h4>NAME</h4><h4>RANGE</h4><h4>DURATION</h4></div>
                            <div id="insert-spell"></div>
                        </div>
                        <div class="add-item-container"><button class="add-item" id="add-spell">+</button></div>
                    </div>

                </div>

                <div class="misc-table">
                    <h3>EQUIPMENT</h3>
                    <div class="show-misc" id="equip-form">
                        <div class="misc-header"><h4>NAME</h4><h4>COST</h4><h4>QUANTITY</h4></div>
                        <div id="insert-equip"></div>
                    </div>
                    <div class="add-item-container"><button class="add-item" id="add-equip">+</button></div>
                </div>
            </div>
            <div class="character-form-right">
                <div class="character-form-personality">
                    <div class="personality-content">
                        <input type="text" name="personality" id="personality" aria-label="personality">
                        <p>PERSONALITY TRAIT</p>
                    </div>
                    <div class="personality-content">
                        <input type="text" name="ideals" id="ideals" aria-label="ideals">
                        <p>IDEALS</p>
                    </div>
                    <div class="personality-content">
                        <input type="text" name="bonds" id="bonds" aria-label="bonds">
                        <p>BONDS</p>
                    </div>
                    <div class="personality-content">
                        <input type="text" name="flaws" id="flaws" aria-label="flaws">
                        <p>FLAWS</p>
                    </div>
                </div>
                <div class="character-form-features">
                    <div class="features-content">
                        <div class="features-table">
                            <table>
                                <thead>
                                <th>EQUIPMENT</th>
                                </thead>
                                <tr>
                                    <td>test</td>
                                </tr>
                                <tr>
                                    <td>test</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php


}
?>

</body>
<script src="scripts/functional.js"></script>


</html>
