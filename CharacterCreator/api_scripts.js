// urls for fetch calls
let url_race = 'https://www.dnd5eapi.co/api/races';
let url_race_dwarf = 'https://www.dnd5eapi.co/api/races/dwarf';
let url_race_elf = 'https://www.dnd5eapi.co/api/races/elf';
let url_race_gnome = 'https://www.dnd5eapi.co/api/races/gnome';
let url_race_half_elf = 'https://www.dnd5eapi.co/api/races/half-elf';
let url_race_half_orc = 'https://www.dnd5eapi.co/api/races/half-ork';
let url_race_halfling = 'https://www.dnd5eapi.co/api/races/halfling';
let url_race_human = 'https://www.dnd5eapi.co/api/races/human';
let url_race_tiefling = 'https://www.dnd5eapi.co/api/races/tiefling';

// arrays for storing data from the fetch calls
let dragonborn = {};

/* fetch race names */
async function get_race()
{
    let get = await fetch(url_race);
    return await get.json();
} //end get race

function fill_select()
{
    //console.log("here");
    get_race().then(response => {
        let select = document.getElementById("race_select_menu");

        for(let i = 0; i < response['results'].length; i++)
        {
            let option = document.createElement('option')
            option.value = response['results'][i]['index'];
            option.innerHTML = response['results'][i]['index'];
            select.appendChild(option);
        }

    });
} //end fill_select

function hover_race_details()
{
    get_race().then(y=> {

    })
}
//get_race().then(y => console.log(y));get_race().then(y => {console.log(y)});
