<?php
global $conn;
require 'dbConnect.php';

session_start();

$race = $_GET['race'];

        $input_race = json_decode($race);
        $features = json_encode($input_race->features);
        $proficiencies = json_encode($input_race->proficiencies);
        $languages= json_encode($input_race->languages);
        $sub_races = json_encode($input_race->sub_races);

        $sql = "INSERT INTO race (race_name, strength, dexterity, constitution, intelligence, wisdom, charisma, strength_save, dexterity_save, constitution_save, 
                  intelligence_save, wisdom_save, charisma_save, acrobatics, animal_handling, arcana, athletics, deception, 
                  history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, 
                  slight_of_hand, stealth, survival, speed, features, proficiency, languages, sub_races, hit_points) 
                VALUES (:name, :strength, :dexterity, :constitution, :intelligence, :wisdom, :charisma, 
                        :strength_save, :dexterity_save, :constitution_save, :intelligence_save, :wisdom_save, 
                        :charisma_save, :acrobatics, :animal_handling, :arcana, :athletics, :deception, :history, 
                        :insight, :intimidation, :investigation, :medicine, :nature, :perception, :performance, 
                        :persuasion, :religion, :slight_of_hand, :stealth, :survival, :speed, :features, :proficiencies, 
                        :languages, :sub_races, :hit_points)";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":name", $input_race->name);
        $stmt->bindParam(":strength", $input_race->strength);
        $stmt->bindParam(":dexterity", $input_race->dexterity);
        $stmt->bindParam(":constitution", $input_race->constitution);
        $stmt->bindParam(":intelligence", $input_race->intelligence);
        $stmt->bindParam(":wisdom", $input_race->wisdom);
        $stmt->bindParam(":charisma", $input_race->charisma);
        $stmt->bindParam(":strength_save", $input_race->strength_save);
        $stmt->bindParam(":dexterity_save", $input_race->dexterity_save);
        $stmt->bindParam(":constitution_save", $input_race->constitution_save);
        $stmt->bindParam(":intelligence_save", $input_race->intelligence_save);
        $stmt->bindParam(":wisdom_save", $input_race->wisdom_save);
        $stmt->bindParam(":charisma_save", $input_race->charisma_save);
        $stmt->bindParam(":acrobatics", $input_race->acrobatics);
        $stmt->bindParam(":animal_handling", $input_race->animal_handling);
        $stmt->bindParam(":arcana", $input_race->arcana);
        $stmt->bindParam(":athletics", $input_race->athletics);
        $stmt->bindParam(":deception", $input_race->deception);
        $stmt->bindParam(":history", $input_race->history);
        $stmt->bindParam(":insight", $input_race->insight);
        $stmt->bindParam(":intimidation", $input_race->intimidation);
        $stmt->bindParam(":investigation", $input_race->investigation);
        $stmt->bindParam(":medicine", $input_race->medicine);
        $stmt->bindParam(":nature", $input_race->nature);
        $stmt->bindParam(":perception", $input_race->perception);
        $stmt->bindParam(":performance", $input_race->performance);
        $stmt->bindParam(":persuasion", $input_race->persuasion);
        $stmt->bindParam(":religion", $input_race->religion);
        $stmt->bindParam(":slight_of_hand", $input_race->slight_of_hand);
        $stmt->bindParam(":stealth", $input_race->stealth);
        $stmt->bindParam(":survival", $input_race->survival);
        $stmt->bindParam(":speed", $input_race->speed);
        $stmt->bindParam(":features", $features);
        $stmt->bindParam(":proficiencies", $proficiencies);
        $stmt->bindParam(":languages", $languages);
        $stmt->bindParam(":sub_races", $sub_races);
        $stmt->bindParam(":hit_points", $hit_points);


        $stmt->execute();

        $results = $stmt->fetch();
