<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/setup.css">
    <link rel="stylesheet" href="styles/create-form.css">
    <title>ManyHats-Character Creation</title>
</head>

<script src="scripts/feature.js"></script>
<script src="scripts/race.js"></script>
<script src="scripts/sub_race.js"></script>
<body>
    <div class="container-create">
        <ul class="nav-bar">
            <li class="nav-active" id="start-button">
                <a href="#">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                </a>
            </li>
            <li id="class-button">
                <a href="#">
                    <span class="icon"><ion-icon name="git-network-outline"></ion-icon></span>
                </a>
            </li>
            <li id="back-button">
                <a href="#">
                    <span class="icon"><ion-icon name="information-circle-outline"></ion-icon></span>
                </a>
            </li>
            <li id="equip-button">
                <a href="#">
                    <span class="icon"><ion-icon name="briefcase-outline"></ion-icon></span>
                </a>
            </li>
            <li id="final-button">
                <a href="#">
                    <span class="icon"><ion-icon name="newspaper-outline"></ion-icon></span>
                </a>
            </li>
        </ul>
        <div class="form-one ">
            <div class="form-content">
                <div class="show-form active-form" id="start-form">
                    <div>
                        <label for="race-select">SELECT YOUR RACE</label>
                        <select id="race-select" name="race-select">
                            <option value="0">Make a selection</option>
                        </select>
                    </div>
                    <div>
                        <label for="sub-race-select">SELECT YOUR SUB-RACE</label>
                        <select id="sub-race-select" name=" sub-race-select">
                            <option value="0">Make a selection</option>
                        </select>
                    </div>
                    <div>
                        <label for="class-select">SELECT YOUR CLASS</label>
                        <select id="class-select" name=" class-select">
                            <option value="0">Make a selection</option>
                        </select>
                    </div>
                    <div class="">

                    </div>

                </div>
                <div class="show-form" id="class-form">
                    class
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                </div>
                <div class="show-form" id="back-form">
                    background
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                </div>
                <div class="show-form" id="equip-form">
                    equipment
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                </div>
                <div class="show-form" id="final-form">
                    final
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                </div>

                <div class="throws">
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="strength_throw" id="strength_throw">
                        STRENGTH THROW
                    </div>
                    <div class="radio-content">
                        <span class="prof-radio"></span>
                        <input type="text" aria-label="" name="dexterity_throw" id="dexterity_throw">
                        DEXTERITY THROW
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="constitution_throw" id="constitution_throw">
                        CONSTITUTION THROW
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="intelligence_throw" id="intelligence_throw">
                        INTELLIGENCE
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="wisdom_throw" id="wisdom_throw">
                        WISDOM THROW
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="charisma_throw" id="charisma_throw">
                        CHARISMA THROW
                    </div>
                </div>

                <div class="ability-container" id="start-form">

                    <div class="ability">
                        Strength
                        <div class="ability-bonus">
                            <div class="ability-button-container">
                                <button class="ability-button" id="str-plus-one"> < </button>
                                <button class="ability-button" id="str-minus-one"><span> > </span></button>
                            </div>
                            <h1>+<span id="bonus-mod">0</span></h1>
                        </div>
                        <div class="ability-number">
                            <input type="text" aria-label="" value="0">
                        </div>
                    </div>
                    <div class="ability">
                        Dexterity
                        <div class="ability-bonus">
                            <div class="ability-button-container">
                                <button class="ability-button" id="dex-plus-one"> < </button>
                                <button class="ability-button" id="dex-minus-one"><span> > </span></button>
                            </div>
                            <h1>+<span id="bonus-mod">0</span></h1>
                        </div>
                        <div class="ability-number">
                            <input type="text" aria-label="" value="0">
                        </div>
                    </div>
                    <div class="ability">
                        Constitution
                        <div class="ability-bonus">
                            <div class="ability-button-container">
                                <button class="ability-button" id="con-plus-one"> < </button>
                                <button class="ability-button" id="con-minus-one"><span> > </span></button>
                            </div>
                            <h1>+<span id="bonus-mod">0</span></h1>
                        </div>
                        <div class="ability-number">
                            <input type="text" aria-label="" value="0">
                        </div>
                    </div>
                    <div class="ability">
                        Intelligence
                        <div class="ability-bonus">
                            <div class="ability-button-container">
                                <button class="ability-button" id="int-plus-one"> < </button>
                                <button class="ability-button" id="int-minus-one"><span> > </span></button>
                            </div>
                            <h1>+<span id="bonus-mod">0</span></h1>
                        </div>
                        <div class="ability-number">
                            <input type="text" aria-label="" value="0">
                        </div>
                    </div>
                    <div class="ability">
                        Wisdom
                        <div class="ability-bonus">
                            <div class="ability-button-container">
                                <button class="ability-button" id="wis-plus-one"> < </button>
                                <button class="ability-button" id="wis-minus-one"><span> > </span></button>
                            </div>
                            <h1>+<span id="bonus-mod">0</span></h1>
                        </div>
                        <div class="ability-number">
                            <input type="text" aria-label="" value="0">
                        </div>
                    </div>
                    <div class="ability">
                        Charisma
                        <div class="ability-bonus">
                            <div class="ability-button-container">
                                <button class="ability-button" id="chr-plus-one"> < </button>
                                <button class="ability-button" id="chr-minus-one"><span> > </span></button>
                            </div>
                            <h1>+<span id="bonus-mod">0</span></h1>
                        </div>
                        <div class="ability-number">
                            <input type="text" aria-label="" value="0">
                        </div>
                    </div>
                </div>
                <div class="proficiencies">
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="acrobatics" id="acrobatics">
                        ACROBATICS
                    </div>
                    <div class="radio-content">
                        <span class="prof-radio"></span>
                        <input type="text" aria-label="" name="animal-handling" id="animal-handling">
                        ANIMAL HANDLING
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="arcana" id="arcana">
                        ARCANA
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="athletics" id="athletics">
                        ATHLETICS
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="deception" id="deception">
                        DECEPTION
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="history" id="history">
                        HISTORY
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="insight" id="insight">
                        INSIGHT
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="intimidation" id="intimidation">
                        INTIMIDATION
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="investigation" id="investigation">
                        INVESTIGATION
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="medicine" id="medicine">
                        MEDICINE
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="nature" id="nature">
                        NATURE
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="perception" id="perception">
                        PERCEPTION
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="performance" id="performance">
                        PERFORMANCE
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="persuasion" id="persuasion">
                        PERSUASION
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="religion" id="religion">
                        RELIGION
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="slight-of-hand" id="slight-of-hand">
                        SLIGHT-OF-HAND
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="stealth" id="stealth">
                        STEALTH
                    </div>
                    <div class="radio-content">
                        <div class="prof-radio"></div>
                        <input type="text" aria-label="" name="survival" id="survival">
                        SURVIVAL
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="scripts/create-form.js"></script>
    <script>set_race_select()</script>

</body>
</html>
