<?php
global $conn;
require 'dbConnect.php';

session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/character_form.css">
    <link rel="stylesheet" href="styles/setup.css">
    <link rel="stylesheet" href="styles/utility.css">
    <link rel="stylesheet" href="styles/admin.css">

    <title>Manyhats</title>
    <style>
        body
        {
            background-color: red;

        }
    </style>
</head>
<body>
<div class="admin-card-carousel">
    <div class="admin-card">
        <h1>ADD WEAPON</h1>
        asdfa sdfasdfsad fsadfsad fsad fsadfsadfsdafasdf
        <div class="add-item-container"><button class="add-item" id="admin-add-weapon">+</button></div>
    </div>
    <div class="admin-card">
        <h1>ADD SPELL</h1>
        asdfa sdfasdf sadfsadfsa dfsadfsa dfsad fsdafasdf
        <div class="add-item-container"><button class="add-item" id="admin-add-spell">+</button></div>
    </div>
    <div class="admin-card">
        <h1>ADD FEATURE</h1>
        asdfas dfasd fsadfsad sadfsadfs dfsadfsdaf asdf
        <div class="add-item-container"><button class="add-item" id="admin-add-feature">+</button></div>
    </div>
    <div class="admin-card">
        <h1>ADD RACE</h1>
        asdf asdfa dfsad sadfsad sadfsa dfs adfsdafasdf
        <div class="add-item-container"><button class="add-item" id="admin-add-race">+</button></div>
    </div>
    <div class="admin-card">
        <h1>ADD CLASS</h1>
        asdfasdf asdfsad fsad fsadfsad fsad fsadfs dafasdf
        <div class="add-item-container"><button class="add-item" id="admin-add-class">+</button></div>
    </div>
    <div class="admin-card">
        <h1>ADD GEAR</h1>
        asdfas dfa sdf sadf adfsadfs adfsadf sadfsdafasdf
        <div class="add-item-container"><button class="add-item" id="admin-add-gear">+</button></div>
    </div>
    <div class="admin-card">
        <h1>VIEW ALL CHARACTERS</h1>
        asdfas dfa sdfsadfs adfsadfsa dfsadfsa dfsda fasdf
        <div class="add-item-container"><button class="add-item" id="admin-view-all">+</button></div>
    </div>
    <div class="admin-card">
        <h1>ADD USER</h1>
        asd fasd fasdfsadf sadfs adfsadf sadfsa dfsdaf asdf
        <div class="add-item-container"><button class="add-item" id="admin-add-user">+</button></div>
    </div>
    <button id="next"> > </button>
    <button id="prev"> < </button>
</div>

<div class="admin-create-modal" id="admin-main-modal">
    <div class="admin-create-modal-content">




    </div>
</div>


<div class="admin-create-modal" id="admin-weapons-modal" >
    <div class="admin-create-modal-content">
        <h1>ADD A WEAPON</h1>

        <label for="admin-weapon-type">WEAPON TYPE</label>
        <input type="text" id="admin-weapon-type" class="admin_weapons_check">
        <label for="admin-weapon-name">WEAPON NAME</label>
        <input type="text" id="admin-weapon-name" class="admin_weapons_check">
        <label for="admin-weapon-cost">WEAPON COST</label>
        <input type="text" id="admin-weapon-cost" class="admin_weapons_check">
        <label for="admin-weapon-damage">WEAPON DAMAGE</label>
        <input type="text" id="admin-weapon-damage" class="admin_weapons_check">
        <label for="admin-weapon-damage-type">WEAPON DAMAGE TYPE</label>
        <input type="text" id="admin-weapon-damage-type" class="admin_weapons_check">
        <label for="admin-weapon-weight">WEAPON WEIGHT</label>
        <input type="text" id="admin-weapon-weight" class="admin_weapons_check">
        <label for="admin-weapon-properties">WEAPON PROPERTIES</label>
        <input type="text" id="admin-weapon-properties" placeholder="Separate properties with a comma" class="admin_weapons_check">

        <button id="admin-weapon-modal-button" class="admin-modal-button">ADD</button>
    </div>
</div>

<div class="admin-create-modal" id="admin-features-modal" >
    <div class="admin-create-modal-content">
        <h1>ADD A FEATURE</h1>

        <label for="admin-feature-class">CLASS NAME</label>
        <input type="text" id="admin-feature-class" class="admin_feature_check" placeholder="LEAVE BLANK IF NOT CLASS SPECIFIC">
        <label for="admin-feature-name">FEATURE NAME</label>
        <input type="text" id="admin-feature-name" class="admin_feature_check">
        <label for="admin-feature-description">FEATURE DESCRIPTION</label>
        <input type="text" id="admin-feature-description" class="admin_feature_check">

        <button id="admin-feature-modal-button" class="admin-modal-button">ADD</button>
    </div>
</div>


<script src="scripts/admin_carousal.js"></script>
<script src="scripts/admin_weapons_modal.js"></script>
<script src="scripts/admin_features_modal.js"></script>
</body>
</html>
