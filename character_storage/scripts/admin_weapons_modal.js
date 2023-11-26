
let admin_weapons_modal =  document.querySelector("#admin-weapons-modal");
let button = document.querySelector('#admin-weapon-modal-button');

let main =document.querySelector("#admin-main-modal");
main.style.display='grid';
function add_new_weapon()
{
   main.style.display='none';
   admin_weapons_modal.style.display = "grid";
   admin_weapons_modal.style.height='calc(100vh - 100px)';
   console.log('clicked');
   button.style.display ='grid';
}

function check_weapon_input()
{

    let weapons_input_array = document.querySelectorAll(".admin_weapons_check");

    let type =weapons_input_array[0].value;
    let name = weapons_input_array[1].value;
    let cost = weapons_input_array[2].value;
    let damage = weapons_input_array[3].value;
    let damage_type = weapons_input_array[4].value;
    let weight = weapons_input_array[5].value;
    let properties = weapons_input_array[6].value;

    let url = "add_weapon_api.php?category=" + type + "&name=" + name + '&cost=' + cost + '&damage='
        + damage + "&damage_type=" + damage_type + "&weight=" + weight + "&properties=" + properties;

    let request = new XMLHttpRequest();

    request.open('Post', url, true);

    request.onload = function()
    {
        console.log(this.response)
    }

    request.send();
    admin_weapons_modal.style.display='none';
    reset_weapon();
}

function reset_weapon()
{
    document.querySelector('#weapon-type').innerHTML="";
    document.querySelector('#weapon-type').value="";

    document.querySelector('#weapon-name').innerHTML="";
    document.querySelector('#weapon-name').value="";

    document.querySelector('#weapon-cost').innerHTML="";
    document.querySelector('#weapon-cost').value="";

    document.querySelector('#weapon-damage').innerHTML="";
    document.querySelector('#weapon-damage').value="";

    document.querySelector('#weapon-weight').innerHTML="";
    document.querySelector('#weapon-weight').value="";

    document.querySelector('#weapon-properties').innerHTML="";
    document.querySelector('#weapon-properties').value="";
}

document.querySelector("#admin-add-weapon").addEventListener("click", add_new_weapon);

document.querySelector("#admin-weapon-modal-button").addEventListener("click", check_weapon_input);


