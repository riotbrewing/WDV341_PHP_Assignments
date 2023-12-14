<?php
global $conn;
require 'dbConnect.php';

session_start();

$user_id = $_GET['user_id'];
$character_number = $_GET['character_number'];

$character_name = $_GET['character_name'];
$character_age = $_GET['character_age'];
$character_height = $_GET['character_height'];
$character_weight = $_GET['character_weight'];
$character_eyes = $_GET['character_eyes'];
$character_skin = $_GET['character_skin'];
$character_hair = $_GET['character_hair'];
$character_race = $_GET['character_race'];
$character_description = $_GET['character_description'];

$strength = $_GET['strength'];
$dexterity = $_GET['dexterity'];
$constitution = $_GET['constitution'];
$intelligence = $_GET['intelligence'];
$wisdom =$_GET['wisdom'];
$charisma = $_GET['charisma'];
$strength_save = $_GET['strength_save'];
$dexterity_save = $_GET['dexterity_save'];
$constitution_save = $_GET['constitution_save'];
$intelligence_save = $_GET['intelligence_save'];
$wisdom_save =$_GET['wisdom_save'];
$charisma_save = $_GET['charisma_save'];
$proficiency_bonus = $_GET['proficiency_bonus'];

$features = $_GET['features'];

$class_name = $_GET['class_name'];
$class_features = $_GET['class_features'];
$hit_dice = $_GET['hit_dice'];
$hit_points = $_GET['hit_points'];

$acrobatics = $_GET['acrobatics'];
$animal_handling = $_GET['animal_handling'];
$arcana = $_GET['arcana'];
$athletics = $_GET['athletics'];
$deception = $_GET['deception'];
$history = $_GET['history'];
$insight = $_GET['insight'];
$intimidation = $_GET['intimidation'];
$investigation = $_GET['investigation'];
$medicine = $_GET['medicine'];
$nature = $_GET['nature'];
$perception = $_GET['perception'];
$performance = $_GET['performance'];
$persuasion = $_GET['persuasion'];
$religion = $_GET['religion'];
$slight_of_hand = $_GET['slight_of_hand'];
$stealth = $_GET['stealth'];
$survival = $_GET['survival'];

$personality_traits = $_GET['personality_traits'];
$ideals = $_GET['ideals'];
$bonds = $_GET['bonds'];
$flaws = $_GET['flaws'];

$languages = $_GET['languages'];

$proficiencies = $_GET['proficiencies'];

$backstory = $_GET['backstory'];
$backstory_feature = $_GET['backstory_feature'];
$backstory_special = $_GET['backstory_special'];
$backstory_allies = $_GET['backstory_allies'];

$cantrips = $_GET['cantrips'];
$spells = $_GET['spells'];
$spell_save = $_GET['spell_save'];
$spell_attack_bonus = $_GET['spell_attack_bonus'];
$spell_casting_ability = $_GET['spell_casting_ability'];

$weapons = $_GET['weapons'];
$armor = $_GET['armor'];
$tools = $_GET['tools'];
$equipment = $_GET['equipment'];
$misc = $_GET['misc'];

function add_to_character_table()
{
    global $conn, $user_id, $character_name, $character_age,$character_height, $character_weight, $character_eyes, $character_skin, $character_hair,
    $character_race, $character_description, $strength, $dexterity, $constitution, $intelligence, $wisdom, $charisma, $strength_save, $dexterity_save,
    $constitution_save, $intelligence_save, $wisdom_save, $charisma_save, $proficiency_bonus;

    $sql = "INSERT INTO character_table(user_id, character_name, character_age, character_height, character_weight, 
                            character_eyes, character_skin, character_hair, character_race, character_description, strength, dexterity, constitution, intelligence,
                            wisdom, charisma, strength_save, dexterity_save, constitution_save, intelligence_save, wisdom_save,
                            charisma_save, proficiency_bonus) VALUES(:user_id, :character_name, :character_age, :character_height, :character_weight, 
                            :character_eyes, :character_skin, :character_hair, :character_race, :character_description, :strength, :dexterity, :constitution, :intelligence,
                            :wisdom, :charisma, :strength_save, :dexterity_save, :constitution_save, :intelligence_save, :wisdom_save,
                            :charisma_save, :proficiency_bonus)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':character_name', $character_name);
    $stmt->bindParam(':character_age', $character_age);
    $stmt->bindParam(':character_height', $character_height);
    $stmt->bindParam(':character_weight', $character_weight);
    $stmt->bindParam(':character_eyes', $character_eyes);
    $stmt->bindParam(':character_skin', $character_skin);
    $stmt->bindParam(':character_hair', $character_hair);
    $stmt->bindParam(':character_race', $character_race);
    $stmt->bindParam(':character_description', $character_description);
    $stmt->bindParam(':strength', $strength);
    $stmt->bindParam(':dexterity', $dexterity);
    $stmt->bindParam(':constitution', $constitution);
    $stmt->bindParam(':intelligence', $intelligence);
    $stmt->bindParam(':wisdom', $wisdom);
    $stmt->bindParam(':charisma', $charisma);
    $stmt->bindParam(':strength_save', $strength_save);
    $stmt->bindParam(':dexterity_save', $dexterity_save);
    $stmt->bindParam(':constitution_save', $constitution_save);
    $stmt->bindParam(':intelligence_save', $intelligence_save);
    $stmt->bindParam(':wisdom_save', $wisdom_save);
    $stmt->bindParam(':charisma_save', $charisma_save);
    $stmt->bindParam(':proficiency_bonus', $proficiency_bonus);

    $stmt->execute();

    $stmt->fetchAll();
}

function add_to_features()
{
    global $conn, $character_number, $features, $class_features;

    $sql = "INSERT INTO features_join (character_id, feature_name, feature_description) VALUES (:character_number, :features, :class_features)";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':character_number', $character_number);
    $stmt->bindParam(':features', $features);
    $stmt->bindParam(':class_features', $class_features);

    $stmt->execute();

    $stmt->fetchAll();

}


function add_to_class()
{
    global $conn, $character_number, $class_name, $hit_dice, $hit_points;

    $sql = "INSERT INTO character_class_join (character_id, class_name, hit_dice, hit_points) VALUES (:character_number, :class_name, :hit_dice, :hit_points)";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':character_number', $character_number);
    $stmt->bindParam(':class_name', $class_name);
    $stmt->bindParam(':hit_dice', $hit_dice);
    $stmt->bindParam(':hit_points', $hit_points);

    $stmt->execute();

    $stmt->fetchAll();
}