let check_array = ["name", "description", "hit_dice", "hit_points", "armor", "weapons", "tools", "saving_throws",
"skills", "proficiency_bonus", "class_feature", "cantrips_known", "spells_known", "spell_slots", "martial_arts", "ki_points",
"unarmed_movement", "sneak_attack", "slot_level"];
let character;
class CharacterClass
{
    constructor(name, description, hit_dice, hit_points, armor_prof, weapon_prof, tools_prof, saving_throws, skills, prof_bonus, class_feature,
                spells_known, cantrips_known, spell_slots, martial_arts, ki_points, unarmed_movement, sneak_attack, slot_level) {
        this.name = name;
        this.description = description
        this.hit_dice = hit_dice;
        this.hit_points = hit_points;
        this.armor_prof = armor_prof;
        this.weapon_prof = weapon_prof;
        this.tools_prof = tools_prof;
        this.saving_throws = saving_throws;
        this.skills = skills;
        this.prof_bonus = prof_bonus;
        this.class_feature = class_feature;
        this.spells_known = spells_known;
        this.cantrips_known = cantrips_known;
        this.spell_slots = spell_slots;
        this.martial_arts = martial_arts;
        this.ki_points = ki_points;
        this.unarmed_movement = unarmed_movement;
        this.sneak_attack = sneak_attack;
        this.slot_level = slot_level;
    }
}

//FUNCTION TO CHECK PASSED VALUE IF NULL SET TO 0 AND RETURN
function check_null(check)
{
    if(check === null)
    {
        check = "0"
        return check;
    }
    else
    {
        return check;
    }
} // END CHECK NULL



//API CALL TO DYNAMICALLY FILL THE CLASS SELECT
function fill_class_select()
{

    let select = document.getElementById("character-sheet-class-select");

    let url = "fill_class_names.php";

    let request = new XMLHttpRequest();

    request.open('GET', url, true);

    request.onload = function(){
        if(request.status === 200)
        {
            let response = JSON.parse(this.response)
            for(let i = 0; i < response.length; i++)
            {
                let option = document.createElement('option');
                option.name = response[i]['name'];
                option.value = response[i]['name'];
                option.innerHTML = response[i]['name'];
                select.appendChild(option);
            }
        }
    }

    request.send();
}// END FILL CLASS SELECT

//API CALL TO GET CLASS DETAILS
function class_details()
{
    console.log("here");
    let select = document.getElementById("character-sheet-class-select").value;

    let url = "get_class_details.php?class_name=" + select;

    let request = new XMLHttpRequest();

    request.open('Get', url, true);

    request.onload = function ()
    {
        if(request.status === 200)
        {
            let response = JSON.parse(this.response);

            let temp = [];
            for(let i = 0; i < 20; i++)
            {
                temp.push(check_null(response[0][check_array[i]]))
            }
            character = new CharacterClass(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[9],
                temp[10],temp[11], temp[12], temp[13], temp[14], temp[15], temp[16], temp[17], temp[18], temp[19])
            console.log(character);
        }
    }

    request.send();
}

//DISABLE OPTION[0] AFTER CHANGE
document.getElementById("character-sheet-class-select").addEventListener('change', function(){
    let disable_option = document.getElementById("character-sheet-class-select");
    disable_option.options[0].disabled = true;
    class_details();
})//END DISABLE











/*
AJAX-START

get value for url
set url to the right php page + value
create request object
set request methods - open()
what to do with request - .onload
    if connection is good set response variable and do all functions you need to do
send request

AJAX-END
 */