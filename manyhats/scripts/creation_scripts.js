

// variable for the race select element
let race_select =  document.getElementById("character_sheet_race");
let sub_race_select = document.getElementById("character_sheet_sub_race")

// arrays filled with the sub-races for each race
let dwarf_sub_list = ["Hill Dwarf", "Mountain Dwarf"];
let elf_sub_list = ["High Elf", "Wood Elf"];
let halfling_sub_list = ["Lightfoot", "Stout"];
let human_sub_list = ["Calishite", "Chondathan", "Damaran", "Illuskan", "Mulan", "Rashimi", "Shou", "Tethrayrian", "Turami"];
let gnome_sub_list = ["Forest Gnome", "Rock Gnome"];
let dragonborn_sub_list = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"];

//variables for character height select element
let height_select = document.getElementById("character_sheet_height");
height_select.disabled = true;
document.getElementById('height_label').innerHTML = "HEIGHT: ";

//variables for the character weight element
let weight_select = document.getElementById("character_sheet_weight");
weight_select.disabled = true;
let weight_label = document.getElementById('weight_label');

// arrays with race heights
let average_height_list = [[4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [4, 11], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4],
    [5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [5, 11], [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9], [6, 10],
    [6, 11], [7, 1], [7, 2], [7, 3]];
let medium_height_list = [[3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5],
    [4, 6]];
let small_height_list = [[2, 6], [2, 7], [2, 8], [2, 9], [2, 10], [2, 11], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5],
    [3, 6]];

// abilities
let strength = 0;
let dexterity = 0;
let constitution = 0;
let intelligence = 0;
let wisdom = 0;
let charisma = 0;

let strength_sub = 0;
let dexterity_sub = 0;
let constitution_sub = 0;
let intelligence_sub = 0;
let wisdom_sub = 0;
let charisma_sub = 0;

//languages
let language_list = [];

//speed
let speed = 0;

//features
let feature_list = [];

//special weapons
let special_weapons_list =  [];

//function to clear all nodes from an element
function clear_children(input_element)
{
    while(input_element.hasChildNodes())
    {
        input_element.removeChild(input_element.firstChild)
    }

}// end clear children function

//function to fill the sub select based on the chosen race
function fill_sub_race(chosen_array)
{
    for( let i = 0; i < chosen_array.length; i++)
    {
        let option = document.createElement("option")
        option.value = chosen_array[i];
        option.innerHTML = chosen_array[i];
        sub_race_select.appendChild(option);
    }
}//end fill sub function

//fill no sub-races
function no_sub_race()
{
    let option = document.createElement("option")
    option.value = "0";
    option.innerHTML = "Chosen Race Has No sub-races";
    sub_race_select.classList.add("no-sub");
    sub_race_select.disabled = true;
    sub_race_select.appendChild(option);
}

//function to set the height range
function set_height_range(input_list)
{
    height_select.min = 0;
    height_select.max = input_list.length - 1;
    let current_number = Math.round(input_list.length / 2);
    height_select.value = Math.round(input_list.length / 2);
    document.getElementById('height_label').innerHTML = "HEIGHT: " + input_list[current_number][0].toString() + "' " + input_list[current_number][1].toString() + '" ';
    height_select.oninput = function () {
        let current_feet = input_list[this.value][0].toString() + "' "
        let current_inches = input_list[this.value][1].toString() + '" ';
        document.getElementById('height_label').innerHTML = "HEIGHT: " + current_feet + current_inches;
    }
} //end set height range function

//function to fill the weight select
function fill_weight(input_race)
{

    weight_select.disabled = false;
    if(input_race === 'Dragonborn')
    {
        weight_select.min = 175;
        weight_select.max = 300;
        weight_select.value = 238;
        weight_label.innerHTML = "WEIGHT: " + weight_select.value.toString() + " lbs.";

        weight_select.oninput = function(){
            weight_label.innerHTML = "WEIGHT: " + this.value.toString() + " lbs.";
        }
    }
    else if(input_race === "Halfling" || input_race === "Gnome")
    {
        weight_select.min = 35;
        weight_select.max = 70;
        weight_select.value = 40;
        weight_label.innerHTML = "WEIGHT: " + weight_select.value.toString() + " lbs.";

        weight_select.oninput = function(){
            weight_label.innerHTML = "WEIGHT: " + this.value.toString() + " lbs.";
        }
    }
    else if(input_race === "Dwarf")
    {
        weight_select.min = 115;
        weight_select.max = 250;
        weight_select.value = 150;
        weight_label.innerHTML = "WEIGHT: " + weight_select.value.toString() + " lbs.";

        weight_select.oninput = function(){
            weight_label.innerHTML = "WEIGHT: " + this.value.toString() + " lbs.";
        }
    }
    else if(input_race === "Elf")
    {
        weight_select.min = 90;
        weight_select.max = 225;
        weight_select.value = 119;
        weight_label.innerHTML = "WEIGHT: " + weight_select.value.toString() + " lbs.";

        weight_select.oninput = function(){
            weight_label.innerHTML = "WEIGHT: " + this.value.toString() + " lbs.";
        }
    }
    else if(input_race === "Human" || input_race === "Half-Elf" || input_race === "Tiefling")
    {
        weight_select.min = 110;
        weight_select.max = 300;
        weight_select.value = 165;
        weight_label.innerHTML = "WEIGHT: " + weight_select.value.toString() + " lbs.";

        weight_select.oninput = function(){
            weight_label.innerHTML = "WEIGHT: " + this.value.toString() + " lbs.";
        }
    }
    else
    {
        weight_select.min = 140;
        weight_select.max = 325;
        weight_select.value = 217;
        weight_label.innerHTML = "WEIGHT: " + weight_select.value.toString() + " lbs.";

        weight_select.oninput = function(){
            weight_label.innerHTML = "WEIGHT: " + this.value.toString() + " lbs.";
        }
    }
}//end fill weight

//reset the language array
function language_reset()
{
    language_list = []
}//end language reset

//reset abilities
function ability_reset()
{
    strength = 0;
    dexterity = 0;
    constitution = 0;
    intelligence = 0;
    wisdom = 0;
    charisma = 0;
}//end ability reset

//reset abilities sub
function sub_ability_reset()
{
    strength_sub = 0;
    dexterity_sub = 0;
    constitution_sub = 0;
    intelligence_sub = 0;
    wisdom_sub = 0;
    charisma_sub = 0;
}//end reset abilities sub

//reset feature list
function feature_list_reset()
{
    feature_list = []
}//end feature reset

//delete from feature list based on parameters
function delete_from_feature_list(input_feature) {

    for (let i = 0; i < feature_list.length; i++) {
        if (feature_list[i].name === input_feature) {
            feature_list.splice(i, 1);
        }
    }
}//end delete from feature list

//delete from special weapons list based on parameters
function delete_from_special_weapons_list(input_special)
{
    for (let i = 0; i < special_weapons_list.length; i++) {
        if (special_weapons_list[i].name === input_special) {
            special_weapons_list.splice(i, 1);
        }
    }
}//end delete from special weapons list


/*
-----function to check the sub-race that was selected and autopopulate form based on values-----
    clear created sub-race select
    activate sub-race select
    disable the default select text
    set the weight range
    set the height range
    check selected race then
        reset languages
        reset abilites
        fill sub-race select
        add languages - if extra language add extra language to features
        add ability modifiers
        add features
        call sub_race populate to load the default(1st) sub-race [for races with subraces]
 */
function populate_form_race()
{
    clear_children(sub_race_select);
    sub_race_select.classList.remove("no-sub");
    sub_race_select.disabled = false;
    race_select.options[0].disabled = true;

    fill_weight(race_select.value);

    height_select.disabled = sub_race_select.value === "0";

    if(race_select.value === "Dwarf")
    {
        language_reset();
        ability_reset();
        feature_list_reset();
        fill_sub_race(dwarf_sub_list);
        set_height_range(medium_height_list);
        language_list.push("Common");
        language_list.push("Dwarvish");
        constitution += 2;
        speed = 25;
        feature_list.push(darkvision);
        feature_list.push(dwarven_resilience);
        feature_list.push(dwarven_combat_training);
        feature_list.push(tool_proficiency);
        feature_list.push(stonecunning);
        populate_form_sub_race();

    }
    if(race_select.value === "Elf")
    {
        language_reset();
        ability_reset();
        feature_list_reset();
        fill_sub_race(elf_sub_list);
        set_height_range(average_height_list);
        language_list.push("Common");
        language_list.push("Elvish");
        dexterity += 2;
        speed = 30;
        feature_list.push(darkvision);
        feature_list.push(keen_senses);
        feature_list.push(fey_ancestry);
        feature_list.push(trance);
        populate_form_sub_race();
    }
    if(race_select.value === "Halfling")
    {
        language_reset();
        ability_reset();
        feature_list_reset();
        fill_sub_race(halfling_sub_list);
        set_height_range(small_height_list);
        language_list.push("Common");
        language_list.push("Halfling");
        dexterity += 2;
        speed = 25;
        feature_list.push(lucky);
        feature_list.push(brave);
        feature_list.push(halfling_nimbleness);
        populate_form_sub_race();
    }
    if(race_select.value === "Human")
    {
        language_reset();
        ability_reset();
        feature_list_reset();
        fill_sub_race(human_sub_list);
        set_height_range(average_height_list);
        language_list.push("Common");
        strength += 1;
        dexterity += 1;
        constitution += 1;
        intelligence += 1;
        wisdom += 1;
        charisma += 1;
        speed = 30;
        feature_list.push(extra_language);
    }
    if(race_select.value === "Gnome")
    {
        language_reset();
        ability_reset();
        feature_list_reset();
        fill_sub_race(gnome_sub_list)
        set_height_range(small_height_list);
        language_list.push("Common");
        language_list.push("Gnomish");
        intelligence += 2;
        speed = 25;
        feature_list.push(gnome_cunning);
        populate_form_sub_race();
    }
    if(race_select.value === "Dragonborn")
    {
        language_reset();
        fill_sub_race(dragonborn_sub_list);
        ability_reset();
        feature_list_reset();
        set_height_range(average_height_list);
        language_list.push("Common");
        strength += 2;
        charisma += 1;
        speed = 30;
        feature_list.push(extra_language);
        populate_form_sub_race();
    }
    if(race_select.value === "Half-Elf")
    {
        language_reset();
        no_sub_race();
        ability_reset();
        feature_list_reset();
        set_height_range(average_height_list);
        language_list.push("Common");
        language_list.push("Elvish");
        charisma += 2;
        speed = 30;
        feature_list.push(extra_language);
        feature_list.push(ability_score_bonus_two);
        feature_list.push(darkvision);
        feature_list.push(fey_ancestry);
        feature_list.push(skill_versatility_two);
        console.log(feature_list);
    }
    if(race_select.value === "Half-Orc")
    {
        language_reset();
        no_sub_race();
        ability_reset();
        feature_list_reset();
        set_height_range(average_height_list);
        language_list.push("Common");
        language_list.push("Orc");
        strength += 2;
        constitution += 2;
        speed = 30;
        feature_list.push(darkvision);
        feature_list.push(menacing);
        feature_list.push(relentless_endurance);
        feature_list.push(savage_attacks);
        console.log(feature_list);
    }
    if(race_select.value === "Tiefling")
    {
        language_reset();
        no_sub_race();
        ability_reset();
        feature_list_reset();
        set_height_range(average_height_list);
        language_list.push("Common");
        language_list.push("Infernal");
        intelligence += 1;
        charisma += 2;
        speed = 30;
        feature_list.push(darkvision);
        feature_list.push(hellish_resistance);
        feature_list.push(infernal_legacy);
        console.log(feature_list);
    }

}//end populate form race


/*
-----function to autopopulate form based on sub-race-----
    check sub-race
    delete any previous sub-race features
    reset all sub-race abilities
    add sub-race abilities
    add sub-race features
 */
function populate_form_sub_race()
{
    if(sub_race_select.value === "Hill Dwarf")
    {

        delete_from_feature_list("Dwarven Toughness");
        delete_from_feature_list("Dwarven Armor Training");
        sub_ability_reset();
        wisdom_sub += 1;
        feature_list.push(dwarven_toughness);
    }
    if(sub_race_select.value === "Mountain Dwarf")
    {

        delete_from_feature_list("Dwarven Toughness");
        delete_from_feature_list("Dwarven Armor Training");
        sub_ability_reset()
        strength_sub += 2;
        feature_list.push(dwarven_armor_training);
    }
    if(sub_race_select.value === "High Elf")
    {
        delete_from_feature_list("Elf Weapon Training");
        delete_from_feature_list("Cantrip");
        delete_from_feature_list("Extra Language");
        delete_from_feature_list("Fleet of Foot");
        delete_from_feature_list("Mask of the Wild");
        sub_ability_reset();
        intelligence_sub += 1;
        feature_list.push(elf_weapon_training);
        feature_list.push(cantrip);
        feature_list.push(extra_language);
    }

    if(sub_race_select.value === "Wood Elf")
    {
        delete_from_feature_list("Elf Weapon Training");
        delete_from_feature_list("Cantrip");
        delete_from_feature_list("Extra Language");
        delete_from_feature_list("Fleet of Foot");
        delete_from_feature_list("Mask of the Wild");
        sub_ability_reset();
        wisdom_sub += 1;
        feature_list.push(elf_weapon_training);
        feature_list.push(fleet_of_foot);
        feature_list.push(mask_of_the_wild);
    }

    if(sub_race_select.value === "Lightfoot")
    {
        delete_from_feature_list("Naturally Stealthy");
        delete_from_feature_list("Stout Resilience");
        sub_ability_reset();
        charisma_sub += 1;
        feature_list.push(naturally_stealthy);
    }
    if(sub_race_select.value === "Stout")
    {
        delete_from_feature_list("Naturally Stealthy");
        delete_from_feature_list("Stout Resilience");
        sub_ability_reset();
        constitution_sub += 1;
        feature_list.push(stout_resilience);
    }
    if(sub_race_select.value === "Black")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_acid);
        special_weapons_list.push(breath_weapon_black);
        console.log(feature_list);
        console.log(special_weapons_list);
    }
    if(sub_race_select.value === "Blue")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_lightning);
        special_weapons_list.push(breath_weapon_blue);
        console.log(feature_list);
        console.log(special_weapons_list);
    }
    if(sub_race_select.value === "Brass")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_fire);
        special_weapons_list.push(breath_weapon_brass);
        console.log(feature_list);
        console.log(special_weapons_list);
    }
    if(sub_race_select.value === "Bronze")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_lightning);
        special_weapons_list.push(breath_weapon_bronze);
        console.log(feature_list);
        console.log(special_weapons_list);
    }
    if(sub_race_select.value === "Copper")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_acid);
        special_weapons_list.push(breath_weapon_copper);
        console.log(feature_list);
        console.log(special_weapons_list);
    }
    if(sub_race_select.value === "Gold")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_fire);
        special_weapons_list.push(breath_weapon_gold);
        console.log(feature_list);
        console.log(special_weapons_list);
    }
    if(sub_race_select.value === "Green")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_poison);
        special_weapons_list.push(breath_weapon_green);
        console.log(feature_list);
        console.log(special_weapons_list);
    }
    if(sub_race_select.value === "Red")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_fire);
        special_weapons_list.push(breath_weapon_red);
        console.log(feature_list);
        console.log(special_weapons_list);
    }
    if(sub_race_select.value === "Silver")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_cold);
        special_weapons_list.push(breath_weapon_silver);
    }
    if(sub_race_select.value === "White")
    {
        delete_from_feature_list("Damage Resistance");
        delete_from_special_weapons_list("Breath Weapon");
        feature_list.push(damage_resistance_cold);
        special_weapons_list.push(breath_weapon_white);
    }
    if(sub_race_select.value === "Forest Gnome")
    {
        delete_from_feature_list("Natural Illusionist")
        delete_from_feature_list("Speak with Small Beasts")
        delete_from_feature_list("Artificer’s Lore")
        delete_from_feature_list("Tinker")
        sub_ability_reset();
        feature_list.push(natural_illusionist);
        feature_list.push(speak_with_small_beasts);
        dexterity_sub += 1;
    }
    if(sub_race_select.value === "Rock Gnome")
    {
        delete_from_feature_list("Natural Illusionist")
        delete_from_feature_list("Speak with Small Beasts")
        delete_from_feature_list("Artificer’s Lore")
        delete_from_feature_list("Tinker")
        sub_ability_reset();
        feature_list.push(artificers_lore);
        feature_list.push(tinker);
        constitution_sub += 1;
    }

}

//assign and event listener that will execute the populate_form_race() function
race_select.addEventListener('change', populate_form_race);

//assign and event listener that will execute the populate_form_sub_race() function
sub_race_select.addEventListener('change', populate_form_sub_race);

/*                   END RACE AUTO FILL FUNCTIONS                                       */

/*                   BEGIN CLASS AUTO FILL FUNCTIONS                                    */
