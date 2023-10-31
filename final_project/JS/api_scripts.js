// urls for fetch calls
let api_url = 'https://www.dnd5eapi.co/api/';
let race_url = 'races';

//ability score variables
let ability_url = 'ability-scores'
let charisma_url = 'cha';
let constitution_url = 'con';
let dexterity_url = 'dex';
let intelligence_url = 'int';
let strength_url = 'str';
let wisdom_url = 'wis';

//

async function getRaces()
{
    let get_races = await fetch(race_url);
    return await get_races.json();
}

async function raceDescription(input)
{
    let temp_url = api_url+ race_url + '/' + input;
    let get_race_description = await fetch(temp_url);
    return await get_race_description.json();
}

async function getEquipment()
{
    let get_All_equipment = await fetch(api_url+'criminal')
    return await get_All_equipment.json();
}

function testParse()
{
    let test = getEquipment()

    test.then(test =>
    {
       console.log(test);
    });
}