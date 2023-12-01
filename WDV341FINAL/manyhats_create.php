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
                    <h1>START</h1>
                    <label for="race-select">SELECT YOUR RACE</label>
                    <select id="race-select" name="race-select">
                        <option value="0">Make a selection</option>
                        <option value="">Dwarf</option>
                        <option value="">Elf</option>
                        <option value="">Halfling</option>
                        <option value="">Human</option>
                        <option value="">Dragonborn</option>
                        <option value="">Gnome</option>
                        <option value="">Half-Elf</option>
                        <option value="">Half-Orc</option>
                        <option value="">Tiefling</option>
                    </select>
                    <label for="sub-race-select">SELECT YOUR SUB-RACE</label>
                    <select id="sub-race-select" name=" sub-race-select">
                        <option value="0">Make a selection</option>
                    </select>
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
                    <input type="text" aria-label="">
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
                            <h1>17</h1>
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
                            <h1>17</h1>
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
                            <h1>17</h1>
                        </div>
                    </div><div class="ability">
                        Intelligence
                        <div class="ability-bonus">
                            <div class="ability-button-container">
                                <button class="ability-button" id="int-plus-one"> < </button>
                                <button class="ability-button" id="int-minus-one"><span> > </span></button>
                            </div>
                            <h1>+<span id="bonus-mod">0</span></h1>
                        </div>
                        <div class="ability-number">
                            <h1>17</h1>
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
                            <h1>17</h1>
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
                            <h1>17</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="scripts/create-form.js"></script>

</body>
</html>
