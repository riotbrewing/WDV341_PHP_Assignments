let user_id = get_user_id('user_id');

//----CLEAR ALL/ANY CHILDREN FROM AN ELEMENT
function clear_children(input_element)
{
    while(input_element.hasChildNodes())
    {
        input_element.removeChild(input_element.firstChild)
    }

}// END CLEAR CHILDREN

//API CALL TO DYNAMICALLY FILL THE RACE SELECT FROM THE DATABASE
function fill_race_select()
{
    let select = document.getElementById("character-sheet-race");

    let url = "fill_race_names.php";

    let request = new XMLHttpRequest();

    request.open('GET', url, true)

    request.onload = function(){
        if(request.status === 200)
        {
            let race_names = JSON.parse(this.response);
            for(let i = 0; i < race_names.length; i++)
            {
                let option = document.createElement('option');
                option.name = race_names[i]['name'];
                option.value = race_names[i]['name'];
                option.innerHTML = race_names[i]['name'];
                select.appendChild(option);
            }
        }
    }
    request.send();

}//END FILL RACE SELECT

//API TO DYNAMICALLY FILL THE SUB-RACE SELECT FROM THE DATABASE - BASED OFF OF RACE SELECTION
function fill_sub_race_select()
{
    console.log("here");
    let disable_option = document.getElementById("character-sheet-race");
    disable_option.options[0].disabled = true;
    let select = document.getElementById("character-sheet-race").value;

    let url = "get_race.php?race=" + select;

    let request = new XMLHttpRequest();

    request.open('GET', url, true)

    request.onload = function(){
        if(request.status === 200)
        {
            let new_race = JSON.parse(this.response);
            let race = new_race[12];
            let sub_select = document.getElementById("character-sheet-sub-race-select");
            sub_select.disabled = false;
            sub_select.style.backgroundColor = 'white';
            sub_select.style.color = 'black';
            clear_children(sub_select);

            if(race != null)
            {
                let sub_race = race.split(",")
                for(let i = 0; i < sub_race.length; i++)
                {
                    let option = document.createElement('option');
                    option.name = sub_race[i];
                    option.value = sub_race[i];
                    option.innerHTML = sub_race[i];
                    sub_select.appendChild(option);
                }
            }
            else
            {
                sub_select.style.backgroundColor = 'green';
                sub_select.style.color = 'white';
                let option = document.createElement("option")
                option.name="0";
                option.value = "0";
                option.innerHTML = "Chosen Race Has No Sub-Race";
                sub_select.appendChild(option);

                sub_select.disabled = true;
            }

        }
    }
    request.send();

}//END FILL-SUB-RACE FUNCTION
/*
name - 1

--abilities--
strength - 2,15
dexterity - 3/16
constitution - 4/17
intelligence - 5/18
wisdom - 6/19
charisma - 7/20

speed - 8
languages - 9
race-features - 10 / 21
prof - 11
--DON'T NEED 12 / 13--
sub-race -14
sub-features - 21

class-name - 23
class-description -24
hit_dice - 25
hit-points - 26
armor-prof - 27
weapon-prof - 28
tool-prof -29
save-throws - 30
skills - 31
prof-bonus - 32
class-feature -33
cantrips_known - 34
spells_known - 35
spell_slots - 36
martial-arts - 37
ki-points - 38
unarmed-movement - 39
sneak-attack - 40
slot_level - 41

 */
function autofill()
{
    console.log("auto fill");

    let race_select = document.getElementById("character-sheet-race").value;
    let sub_select = document.getElementById("character-sheet-sub-race-select").value;
    let class_select = document.getElementById("character-sheet-class-select").value;

    let name = document.getElementById("name");
    let sub_name = document.getElementById("sub_name");
    let speed = document.getElementById("speed");
    let race_name = document.getElementById("race_name");
    let languages = document.getElementById("languages");
    let s = document.getElementById("s");
    let d = document.getElementById("d");
    let c = document.getElementById("c");
    let i = document.getElementById("i");
    let w = document.getElementById("w");
    let ch = document.getElementById("ch");
    let features = document.getElementById("features");
    let proficiency = document.getElementById("proficiency");

    if(race_select !== "0" && class_select !== "0" && sub_select !== "0")
    {
        let url = "get_sheet_details.php?race=" + race_select + "&sub=" + sub_select + "&class=" + class_select;
        console.log(url);
        let request = new XMLHttpRequest();

        request.open("Get", url, true);
        request.onload = function(){
            if(request.status === 200)
            {
                let response = JSON.parse(this.response);
                name.innerHTML = response[1];
                sub_name.innerHTML = response[14];
                speed.innerHTML = response[8];
                languages.innerHTML = response[9];
                s.innerHTML = (response[2] + response[15]).toString();
                d.innerHTML = (response[3] + response[16]).toString();
                c.innerHTML = (response[4] + response[17]).toString();
                i.innerHTML = (response[5] + response[18]).toString();
                w.innerHTML = (response[6] + response[19]).toString();
                ch.innerHTML = (response[7] + response[20]).toString();
                features.innerHTML = response[10] + ', ' + response[21];
                proficiency.innerHTML = response[11] + ', ' + response[27] + ', ' + response[28] + ', ' + response[29];
                console.log(response);
            }
        }
        request.send();
    }
    else
    {
        console.log("not filled in");
    }
}

//EVENT LISTENERS
document.getElementById("character-sheet-race").addEventListener('change', fill_sub_race_select);

document.getElementById("next_one").addEventListener('click',autofill);




//FUNCTION TO GET THE VALUE OF THE USER ID COOKIE
function get_user_id(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}//END GET USER ID

function change_tabs(tab_name, button_name)
{
    let tabs = document.getElementsByClassName("tabs");
    document.getElementById('button_one').style.backgroundColor = 'lightgrey';
    document.getElementById('button_two').style.backgroundColor = 'lightgrey';
    document.getElementById('button_three').style.backgroundColor = 'lightgrey';
    document.getElementById(button_name).style.backgroundColor = 'darkgrey';
    for(let i = 0; i < tabs.length; i++)
    {
        tabs[i].style.display = "none";
    }
    console.log(tab_name);
    document.getElementById(tab_name).style.display='block';
}
