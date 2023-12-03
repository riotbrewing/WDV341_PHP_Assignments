
/***************************************ADD BACKSTORY MODAL************************************************/



/*****************************************ADD RACE MODAL**************************************************/
//variables
let race_modal = document.querySelector("#add-race-modal");
let ability_list = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]


let add_race_btn = document.querySelector("#add-race-btn");
let close_add_race_btn = document.querySelector("#close-race-modal-btn");

let feature_count = 1;

let race_name = document.querySelector("#add-race-name");
let race_description = document.querySelector("#add-race-description");
let race_speed = document.querySelector('#add-race-speed');
let str =document.querySelector("#add-strength-modifier");
let dex =document.querySelector("#add-dexterity-modifier");
let cons =document.querySelector("#add-constitution-modifier");
let int =document.querySelector("#add-intelligence-modifier");
let wis =document.querySelector("#add-wisdom-modifier");
let chr =document.querySelector("#add-charisma-modifier");

add_race_btn.addEventListener('click', function(){
    reset_race_modal();
    race_modal.style.display = "grid";
    document.querySelector(".modal-content").scrollTo(0,0);
})

function reset_race_modal()
{
    race_name.value = "";
    race_name.placeholder = "";
    race_description.value = "";
    race_description.placeholder = "";
    race_speed.value = "";
    race_speed.placeholder = "";
    str.value = "0";
    str.placeholder = "";
    dex.value = "0";
    dex.placeholder = "";
    cons.value = "0";
    cons.placeholder = "";
    int.value = "0";
    int.placeholder = "";
    wis.value = "0";
    wis.placeholder = "";
    chr.value = "0";
    chr.placeholder = "";

    feature_count = 1;
}


close_add_race_btn.addEventListener('click', function()
{
    reset_race_modal();
    race_modal.style.display = "none";

})

window.onclick = function(event){
    if(event.target === race_modal)
    {
        reset_race_modal();
        race_modal.style.display = "none";
    }
}

function close_race_modal()
{
    race_modal.style.display = "none";
}

function valid_string(input)
{
    if(input === "")
    {
        input.placeholder = "NOT VALID"
        return false;
    }
    else
    {
        return true;
    }
}

function valid_number(input)
{
    if(isNaN(parseInt(input)))
    {
        input.placeholder = "NOT VALID"
        return false;
    }
    else
    {
        return true;
    }
}

function validate_add_race()
{
    if(valid_string(race_name.value) && valid_string(race_description.value) && valid_number(race_speed) && valid_number(str.value) &&
    valid_number(dex.value) && valid_number(cons.value) && valid_number(int.value) && valid_number(wis.value) && valid_number(chr.value))
    {
        add_race_to_database();
        close_race_modal();
    }
}

document.querySelector("#add-race-to-db-btn").addEventListener('click', validate_add_race);

function add_race_to_database()
{
    let url = "db_add_race.php?race_name=" + race_name.value + "&race_description=" + race_description.value + "&race_speed=" + race_speed.value
        + "&str=" + str.value + "&dex=" + dex.value + "&con=" + cons.value + "&int=" + int.value + "&wis=" + wis.value + "&chr=" + chr.value;
    let request = new XMLHttpRequest();
    request.open('Get', url, true);
    request.onload = function()
    {
        console.log(this.response);
    }
    request.send();

}

/*****************************************END RACE MODAL**************************************************/