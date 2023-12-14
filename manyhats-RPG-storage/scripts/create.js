
let create_character = new PlayerCharacter();

function get_race_from_db()
{
    let request = new XMLHttpRequest();

    let url = "get_race.php" ;

    request.open('Get', url, true);
    request.onload = function()
    {
        let response = JSON.parse(this.response);
        create_race_fill(response);

    }
    request.send();
}

function create_race_fill(race_list)
{

    if(race_list) {

        let container_race = document.querySelector('#show-race');


        let race_header = document.createElement('div');
        race_header.classList.add('race-header');
        race_header.innerHTML = "SELECT A RACE";

        container_race.appendChild(race_header);

        for(let i = 0; i < race_list.length; i++) {
            let race = JSON.parse(race_list[i]['race_details'])
            let race_content = document.createElement('div');
            race_content.classList.add('race-content');

            let race_name = document.createElement('div');
            race_name.classList.add('race-name');
            race_name.innerHTML = race.race_name.toString();

            let race_btn_container = document.createElement('div');
            race_btn_container.classList.add('race-btn-container');

            let race_button = document.createElement('race-btn');
            race_button.classList.add("race-btn");

            if (race['sub_races'][0] !== "") {
                race_button.innerHTML = '+';
                race_button.name = race['race_name'].toString();
                race_button.addEventListener('click', race_button_active)
                race_btn_container.appendChild(race_button);

                race_content.appendChild(race_name);
                race_content.appendChild(race_btn_container);

                container_race.appendChild(race_content);

                for (let x = 0; x < race['sub_races'].length; x++) {
                    if(race.race_name === "Dragonborn")
                    {
                        let sub_race_content = document.createElement('div');
                        sub_race_content.classList.add('sub-race-content');
                        sub_race_content.name= race['race_name'].toString();

                        let sub_race_name = document.createElement('div');
                        sub_race_name.classList.add('sub-race-name');
                        sub_race_name.innerHTML = race['sub_races'][x]['color'].toString();

                        let sub_race_btn_container = document.createElement('div');
                        sub_race_btn_container.classList.add('sub-race-btn-container');

                        let sub_race_btn = document.createElement('div');
                        sub_race_btn.classList.add('sub-race-btn');
                        sub_race_btn.innerHTML = '>';
                        sub_race_btn.addEventListener('click', function(){
                            show_dragon(race, race['sub_races'][x]);
                        });
                        sub_race_btn_container.appendChild(sub_race_btn);

                        sub_race_content.appendChild(sub_race_name);
                        sub_race_content.appendChild(sub_race_btn);
                        container_race.appendChild(sub_race_content);
                    }
                    else
                    {
                        let sub_race_content = document.createElement('div');
                        sub_race_content.classList.add('sub-race-content');
                        sub_race_content.name = race['race_name'].toString();

                        let sub_race_name = document.createElement('div');
                        sub_race_name.classList.add('sub-race-name');
                        sub_race_name.innerHTML = race['sub_races'][x]['race_name'].toString();

                        let sub_race_btn_container = document.createElement('div');
                        sub_race_btn_container.classList.add('sub-race-btn-container');

                        let sub_race_btn = document.createElement('div');
                        sub_race_btn.classList.add('sub-race-btn');
                        sub_race_btn.innerHTML = '>';
                        sub_race_btn.id=race['sub_races'][x]['race_name'].toString();
                        sub_race_btn.addEventListener('click', function(){
                            show_details_sub(race, race['sub_races'][x]);
                        });

                        sub_race_btn_container.appendChild(sub_race_btn);

                        sub_race_content.appendChild(sub_race_name);
                        sub_race_content.appendChild(sub_race_btn);
                        container_race.appendChild(sub_race_content);
                    }

                }
            } else {
                race_button.innerHTML = '>';
                race_button.addEventListener('click', function(){
                    show_details(race);
                });

                race_btn_container.appendChild(race_button);

                race_content.appendChild(race_name);
                race_content.appendChild(race_btn_container);

                container_race.appendChild(race_content);
            }
        }
    }

}

let race_check = ""

function race_button_active()
{
    let sub_race_list = document.querySelectorAll('.sub-race-content');
    sub_race_list.forEach((item) => item.classList.remove('sub-race-active'));
    let button_list= document.querySelectorAll('.race-btn');
    button_list.forEach((item) => item.innerHTML = '+');

    if(this.name === race_check)
    {
        race_check = "";
        this.innerHTML = '+';
        sub_race_list.forEach((item) => item.classList.remove('sub-race-active'));
    }
    else
    {
        race_check = this.name;
        for(let i = 0; i < sub_race_list.length; i++)
        {
            if(sub_race_list[i].name === this.name)
            {
                sub_race_list[i].classList.add('sub-race-active');
                this.innerHTML ='-';
            }
        }
    }

}

function clear_children(input_element)
{
    while(input_element.hasChildNodes())
    {
        input_element.removeChild(input_element.firstChild)
    }
}

function show_details(race)
{
    let race_container_show = document.querySelector('#show-race');
    let race_container_details = document.querySelector("#show-race-details");

    race_container_show.classList.remove('active-container');

    race_container_details.classList.add('active-container');

    let container_race = document.querySelector("#show-race-details");

    let show_race_name = document.createElement('div');
    show_race_name.classList.add('show-race-name');
    show_race_name.innerHTML = race.race_name;

    container_race.appendChild(show_race_name);

    let show_race_description = document.createElement('div');
    show_race_description.classList.add('show-race-description');
    show_race_description.innerHTML = race.description;

    container_race.appendChild(show_race_description);

    for(let i = 0; i < race.abilities.length; i++)
    {
        let feature_content = document.createElement('div');
        feature_content.classList.add('feature-content');

        let race_name = document.createElement('div');
        race_name.classList.add('race-name');
        race_name.innerHTML = race.abilities[i].name;

        let race_btn_container = document.createElement('div');

        let race_button = document.createElement('div')
        race_button.classList.add('feature-btn');
        race_button.innerHTML = "+";
        race_button.name = race.abilities[i].name;
        race_button.addEventListener('click', show_hide_features)
        race_btn_container.appendChild(race_button)

        feature_content.appendChild(race_name);
        feature_content.appendChild(race_btn_container);

        let show_features = document.createElement('div');
        show_features.classList.add('show-features');
        show_features.name = race.abilities[i].name;
        show_features.innerHTML = race.abilities[i].description;

        container_race.appendChild(feature_content);
        container_race.appendChild(show_features);
    }

    let display_race_buttons = document.createElement('div');
    display_race_buttons.classList.add('display-race-buttons');

    let show_cancel = document.createElement('div');
    show_cancel.classList.add('show-cancel');
    show_cancel.innerHTML = "CANCEL";
    show_cancel.addEventListener('click', cancel);

    let show_choose = document.createElement('div');
    show_choose.classList.add('show-choose');
    show_choose.innerHTML = 'CHOOSE';
    show_choose.addEventListener('click', function()
    {
        choose(race);
    })
    display_race_buttons.appendChild(show_cancel);
    display_race_buttons.appendChild(show_choose);

    container_race.appendChild(display_race_buttons);



}

function show_details_sub(race, sub_race)
{
    let race_container_show = document.querySelector('#show-race');
    let race_container_details = document.querySelector("#show-race-details");

    race_container_show.classList.remove('active-container');

    race_container_details.classList.add('active-container');

    let container_race = document.querySelector("#show-race-details");

    let show_race_name = document.createElement('div');
    show_race_name.classList.add('show-race-name');
    show_race_name.innerHTML = sub_race.race_name;

    container_race.appendChild(show_race_name);

    let show_race_description = document.createElement('div');
    show_race_description.classList.add('show-race-description');
    show_race_description.innerHTML = race.description + '\n' + sub_race.description;

    container_race.appendChild(show_race_description);

    for(let i = 0; i < race.abilities.length; i++)
    {
        let feature_content = document.createElement('div');
        feature_content.classList.add('feature-content');

        let race_name = document.createElement('div');
        race_name.classList.add('race-name');
        race_name.innerHTML = race.abilities[i].name;

        let race_btn_container = document.createElement('div');

        let race_button = document.createElement('div')
        race_button.classList.add('feature-btn');
        race_button.innerHTML = "+";
        race_button.name = race.abilities[i].name;
        race_button.addEventListener('click', show_hide_features)

        race_btn_container.appendChild(race_button)

        feature_content.appendChild(race_name);
        feature_content.appendChild(race_btn_container);

        let show_features = document.createElement('div');
        show_features.classList.add('show-features');
        show_features.innerHTML = race.abilities[i].description;
        show_features.name=race.abilities[i].name;

        container_race.appendChild(feature_content);
        container_race.appendChild(show_features);
    }

    for(let i = 0; i < sub_race.abilities.length; i++)
    {
        let feature_content = document.createElement('div');
        feature_content.classList.add('feature-content');

        let race_name = document.createElement('div');
        race_name.classList.add('race-name');
        race_name.innerHTML = sub_race.abilities[i].name;

        let race_btn_container = document.createElement('div');

        let race_button = document.createElement('div')
        race_button.classList.add('feature-btn');
        race_button.innerHTML = "+";
        race_button.name = sub_race.abilities[i].name;
        race_button.addEventListener('click', show_hide_features)

        race_btn_container.appendChild(race_button)

        feature_content.appendChild(race_name);
        feature_content.appendChild(race_btn_container);

        let show_features = document.createElement('div');
        show_features.classList.add('show-features');
        show_features.innerHTML = sub_race.abilities[i].description;
        show_features.name = sub_race.abilities[i].name;

        container_race.appendChild(feature_content);
        container_race.appendChild(show_features);
    }

    let display_race_buttons = document.createElement('div');
    display_race_buttons.classList.add('display-race-buttons');

    let show_cancel = document.createElement('div');
    show_cancel.classList.add('show-cancel');
    show_cancel.innerHTML = "CANCEL";
    show_cancel.addEventListener('click', cancel);

    let show_choose = document.createElement('div');
    show_choose.classList.add('show-choose');
    show_choose.innerHTML = 'CHOOSE';
    show_choose.addEventListener('click', function()
    {
        choose_sub(race, sub_race)
    });
    display_race_buttons.appendChild(show_cancel);
    display_race_buttons.appendChild(show_choose);

    container_race.appendChild(display_race_buttons);

}

function show_dragon(race, dragon)
{
    let race_container_show = document.querySelector('#show-race');
    let race_container_details = document.querySelector("#show-race-details");

    race_container_show.classList.remove('active-container');

    race_container_details.classList.add('active-container');

    let container_race = document.querySelector("#show-race-details");

    let show_race_name = document.createElement('div');
    show_race_name.classList.add('show-race-name');
    show_race_name.innerHTML = race.race_name;

    container_race.appendChild(show_race_name);

    let show_race_description = document.createElement('div');
    show_race_description.classList.add('show-race-description');
    show_race_description.innerHTML = race.description;

    container_race.appendChild(show_race_description);

    for(let i = 0; i < race.abilities.length; i++)
    {
        let feature_content = document.createElement('div');
        feature_content.classList.add('feature-content');

        let race_name = document.createElement('div');
        race_name.classList.add('race-name');
        race_name.innerHTML = race.abilities[i].name;

        let race_btn_container = document.createElement('div');

        let race_button = document.createElement('div')
        race_button.classList.add('feature-btn');
        race_button.innerHTML = "+";
        race_button.name = race.abilities[i].name;
        race_button.addEventListener('click', show_hide_features)
        race_btn_container.appendChild(race_button)

        feature_content.appendChild(race_name);
        feature_content.appendChild(race_btn_container);

        let show_features = document.createElement('div');
        show_features.classList.add('show-features');
        show_features.name = race.abilities[i].name;
        show_features.innerHTML = race.abilities[i].description;

        container_race.appendChild(feature_content);
        container_race.appendChild(show_features);
    }
    let feature_content = document.createElement('div');
    feature_content.classList.add('feature-content');

    let race_name = document.createElement('div');
    race_name.classList.add('race-name');
    race_name.innerHTML = dragon.color + "Dragon";

    let race_btn_container = document.createElement('div');

    let race_button = document.createElement('div')
    race_button.classList.add('feature-btn');
    race_button.innerHTML = "+";
    race_button.name = dragon.color;
    race_button.addEventListener('click', show_hide_features)
    race_btn_container.appendChild(race_button)

    feature_content.appendChild(race_name);
    feature_content.appendChild(race_btn_container);

    let show_features = document.createElement('div');
    show_features.classList.add('show-features');
    show_features.name = dragon.color;
    show_features.innerHTML = "Breath Weapon: " + dragon.breath_weapon + '<br>' + "Damage Type/Resistance: " + dragon.damage_type;

    container_race.appendChild(feature_content);
    container_race.appendChild(show_features);

    let display_race_buttons = document.createElement('div');
    display_race_buttons.classList.add('display-race-buttons');

    let show_cancel = document.createElement('div');
    show_cancel.classList.add('show-cancel');
    show_cancel.innerHTML = "CANCEL";
    show_cancel.addEventListener('click', cancel);

    let show_choose = document.createElement('div');
    show_choose.classList.add('show-choose');
    show_choose.innerHTML = 'CHOOSE';
    show_choose.addEventListener('click', function()
    {
        choose_dragon(race, dragon)
    });
    display_race_buttons.appendChild(show_cancel);
    display_race_buttons.appendChild(show_choose);

    container_race.appendChild(display_race_buttons);

}

 function cancel(){

    features_add = []

     strength_add = "";
     dexterity_add = "";
     constitution_add = "";
     intelligence_add = "";
     wisdom_add = "";
     charisma_add = "";
     language_add = "";
     speed_add = "";
     dragon_add = "";
     name_add = "";
     sub_race_add = "";

    let race_container_show = document.querySelector('#show-race');
    let race_container_details = document.querySelector("#show-race-details");

    race_container_show.classList.add('active-container');

    race_container_details.classList.remove('active-container');

    clear_children(race_container_details);
}

function choose(race)
{
    create_character.race = race['race_name'];
    if(race['abilities'].length > 0)
    {
        create_character.features = race['abilities'];
    }
    create_character.strength = race['strength'];
    create_character.dexterity = race['dexterity'];
    create_character.constitution = race['constitution'];
    create_character.intelligence = race['intelligence'];
    create_character.wisdom = race['wisdom'];
    create_character.charisma = race['charisma'];

    create_character.language_prof = race['languages'];

    create_character.speed = race['speed'];

    let class_container = document.querySelector("#show-class")
    let race_container_details = document.querySelector("#show-race-details");
    race_container_details.classList.remove('active-container');

    clear_children(race_container_details);
    class_container.classList.add('active-container');
    get_class_from_db();

}

function choose_sub(race, sub_race)
{
    create_character.race = race['race_name'];
    create_character.sub_race = sub_race['race_name'];
    if(race['abilities'].length > 0)
    {
        create_character.features = race['abilities'];
    }
    if(sub_race['abilities'].length > 0)
    {
        for(let i = 0; i < sub_race['abilities'].length; i++)
        {
            create_character.features.push(sub_race['abilities'][i])
        }
    }

    create_character.strength = race['strength'];
    create_character.dexterity = race['dexterity'];
    create_character.constitution = race['constitution'];
    create_character.intelligence = race['intelligence'];
    create_character.wisdom = race['wisdom'];
    create_character.charisma = race['charisma'];
    create_character.language_prof = race['languages'];
    create_character.speed = race['speed'];

    let class_container = document.querySelector("#show-class")
    let race_container_details = document.querySelector("#show-race-details");
    race_container_details.classList.remove('active-container');

    clear_children(race_container_details);
    class_container.classList.add('active-container');
    get_class_from_db();
}

function choose_dragon(race, dragon)
{
    create_character.race = race['race_name'];
    create_character.sub_race = dragon['color'];
    if(race['abilities'].length > 0)
    {
        create_character.features = race['abilities'];
    }
    create_character.strength = race['strength'];
    create_character.dexterity = race['dexterity'];
    create_character.constitution = race['constitution'];
    create_character.intelligence = race['intelligence'];
    create_character.wisdom = race['wisdom'];
    create_character.charisma = race['charisma'];
    create_character.language_prof = race['languages'];
    create_character.speed = race['speed'];
    create_character.dragon = dragon;

    let class_container = document.querySelector("#show-class")
    let race_container_details = document.querySelector("#show-race-details");
    race_container_details.classList.remove('active-container');

    clear_children(race_container_details);
    class_container.classList.add('active-container');
    get_class_from_db();
}

let feature_check = ""
function show_hide_features()
{
    console.log(this.name)
    let feature_list = document.querySelectorAll('.show-features');
    feature_list.forEach((item) => item.classList.remove('show-features-active'))
    feature_list.forEach((item) => item.classList.remove('feature-margin-none'));
    let buttons_list = document.querySelectorAll('.feature-btn');
    buttons_list.forEach((item) => item.innerHTML = '+');

    if(this.name === feature_check)
    {
        this.innerHTML = "+"
        feature_list.forEach((item) => item.classList.remove('show-features-active'))
        feature_list.forEach((item) => item.classList.remove('feature-margin-none'))
        feature_check = "";
    }
    else
    {
        for(let i = 0; i < feature_list.length; i++)
        {
            if(this.name === feature_list[i].name)
            {
                this.innerHTML = "-";
                feature_list[i].classList.add('show-features-active');
                feature_list[i].classList.add('feature-margin-none')
            }
        }
        feature_check = this.name;
    }

}


function get_class_from_db()
{

    let request = new XMLHttpRequest();
    let url = "get_class.php";

    request.open('Get', url, true);

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        show_class(response);
    }
    request.send();
}

function show_class(class_list)
{

    if(class_list) {

        let container_race = document.querySelector('#show-class');


        let race_header = document.createElement('div');
        race_header.classList.add('race-header');
        race_header.innerHTML = "SELECT A CLASS";

        container_race.appendChild(race_header);

        for(let i = 0; i < class_list.length; i++) {
            let class_name = class_list[i].class_name;
            let race_content = document.createElement('div');
            race_content.classList.add('race-content');

            let race_name = document.createElement('div');
            race_name.classList.add('race-name');
            race_name.innerHTML = class_name.toString();

            let race_btn_container = document.createElement('div');
            race_btn_container.classList.add('race-btn-container');

            let race_button = document.createElement('race-btn');
            race_button.classList.add("race-btn");
            race_button.innerHTML = '>';
            race_button.addEventListener('click', function(){
                let class_container = document.querySelector("#show-class")
                class_container.classList.remove('active-container');
                let show_class_container = document.querySelector("#show-class-details")
                show_class_container.classList.add('active-container');
                create_character.class_name = class_list[i].class_name;
                get_class_extras(class_list[i]);


            });

            race_btn_container.appendChild(race_button);

            race_content.appendChild(race_name);
            race_content.appendChild(race_btn_container);

            container_race.appendChild(race_content);

        }
    }
}

let skills_list_all =
    [   "Acrobatics",
        "Animal Handling",
        "Arcana",
        "Athletics",
        "Deception",
        "History",
        "Insight",
        "Intimidation",
        "Investigation",
        "Medicine",
        "Nature",
        "Perception",
        "Performance",
        "Persuasion",
        "Religion",
        "Sleight of Hand",
        "Stealth",
        "Survival",
    ]

let barbarian_skills_list = ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
let bard_skill_list = skills_list_all;
let cleric_skill_list = ["History", "Insight", "Medicine", "Persuasion", "Religion"];
let druid_skill_list = ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"];
let fighter_skill_list = ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"];
let monk_skill_list = ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"];
let paladin_skill_list = ["Athletics", "Insight", "Intimidation",  "Medicine", "Persuasion", "Religion"];
let ranger_skill_list = ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"];
let rouge_skill_list = ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Survival"];
let sorcerer_skill_list = ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"];
let warlock_skill_list = ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"];
let wizard_skill_list = ["Arcana", "History", "Insight", "Investigation",  "Medicine", "Religion"];

let marital_list = ['Battleaxe', 'Flail', 'Glaive','GreatAxe','Greatsword','Halberd','Lance','Longsword','Maul','Morningstar','Pike','Rapier',
    'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Whip'];
let simple_list =['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear'];
let martial_range_list = ['Blowgun', 'Crossbow, hand', 'Crossbow, heavy', 'Longbow', 'Net'];
let simple_range_list = ['Crossbow, light', 'Dart', 'Shortbow', 'Sling'];

let fighting_styles_list = ['Archery', 'Defense', 'Dueling', 'Great Weapon Fighting', 'Protection', 'Two-Weapon-Fighting'];


function get_class_extras(input_class)
{

    if(input_class[1]=== 'Barbarian')
    {
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();

        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();

        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();

        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);


        let skill_header = document.createElement('div')
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";


        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-add-spells');
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < barbarian_skills_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = barbarian_skills_list[i]
            option.innerHTML = barbarian_skills_list[i]

            skill_one.appendChild(option);
        }

        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-add-spells');
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);


        skill_one.addEventListener('change', function()
        {
            select_check(this);

        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);

        })
        console.log()


        for(let i = 0; i < barbarian_skills_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = barbarian_skills_list[i]
            option.innerHTML = barbarian_skills_list[i]

            skill_two.appendChild(option);
        }

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);

        /************************************************************************************************************/

        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

        /************************************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let div1 = document.createElement('div');
        div1.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.value='0';
        radio_one.id="greataxe"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Greataxe";

        div1.appendChild(radio_one);
        div1.appendChild(radio_one_text);

        equipment_one.appendChild(div1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1)

        let div2 = document.createElement('div');
        div2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.classList.add('equip1');
        radio_two.value ='0';
        radio_two.id= 'select_one';

        let select_one = document.createElement('select');
        select_one.id='choose-martial';
        select_one.disabled = true;

        for(let i = 0; i < marital_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = marital_list[i];
            option.innerHTML = marital_list[i];
            select_one.append(option);
        }

        div2.appendChild(radio_two);
        div2.appendChild(select_one);

        equipment_one.appendChild(div2);

        weapon_choose.appendChild(equipment_one);

        /************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio");

        let div3 = document.createElement('div');
        div3.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.value='0';
        radio_three.id="handaxe"
        radio_three.classList.add('equip1');

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "2 Handaxes";

        div3.appendChild(radio_three);
        div3.appendChild(radio_three_text);

        equipment_two.appendChild(div3);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2)

        let div4 = document.createElement('div');
        div4.classList.add('radio-div');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.classList.add('equip1');
        radio_four.value ='0';
        radio_four.id= 'select_two';

        let select_two = document.createElement('select');
        select_two.id='choose-simple';
        select_two.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];
            select_two.append(option);
        }

        div4.appendChild(radio_four);
        div4.appendChild(select_two);

        equipment_two.appendChild(div4);

        weapon_choose.appendChild(equipment_two);

        /************************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-standard");


        let div5= document.createElement('div');
        div5.innerHTML = 'Explorers Pack'

        let div6= document.createElement('div');
        div6.innerHTML = '4 Javelins'

        equipment_three.appendChild(div5);
        equipment_three.appendChild(div6);

        weapon_choose.appendChild(equipment_three);

        /************************************************************************************************************/

        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();
            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);

            create_character.strength_prof = "1";
            create_character.constitution_prof = '1';

            create_character.backpack += "Explorer's Pack, 4 Javelins ";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
                create_character.push_weapon(radio_one_text.innerHTML);
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + select_one.value;
                create_character.push_weapon(select_one.value);
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_three_text.innerHTML;
                create_character.push_weapon(radio_three_text.innerHTML);
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + select_two.value;
                create_character.push_weapon(select_two.value);
            }

            choose_class();

        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);




        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {
            let axe = document.querySelector('#greataxe');
            let select_btn = document.querySelector('#select_one');
            let select = document.querySelector('#choose-martial');

            let handaxe = document.querySelector("#handaxe")
            let select_btn_2 = document.querySelector("#select_two")
            let select_two = document.querySelector('#choose-simple');


            if(item.id === "greataxe")
            {
                axe.style.backgroundColor = 'var(--clr-red-200)';
                select_btn.style.backgroundColor = 'white';
                axe.value = '1'
                select_btn.value = '0'
                select.disabled = true;
            }
            if(item.id === 'select_one')
            {
                axe.style.backgroundColor = 'white';
                select_btn.style.backgroundColor = 'var(--clr-red-200)';
                axe.value = '0'
                select_btn.value = '1'
                select.disabled = false;
            }
            if(item.id === "handaxe")
            {
                handaxe.style.backgroundColor = 'var(--clr-red-200)';
                select_btn_2.style.backgroundColor = 'white';
                handaxe.value = "1"
                select_btn_2.value= '0';
                select_two.disabled =true;
            }
            if(item.id === "select_two")
            {
                handaxe.style.backgroundColor = 'white';
                select_btn_2.style.backgroundColor = 'var(--clr-red-200)';
                handaxe.value = "0"
                select_btn_2.value= '1';
                select_two.disabled =false;
            }
        }))

    }

    if(input_class[1] === 'Bard')
    {
        let bard_spell_count = 4;
        let bard_cantrip_count = 2
        /*
            show hit points
            show proficiencies
            choose 3 instruments
            choose any 3 skills
            show available features
            add spells (according to class cantrip/spells amount)

            equipment options
        */
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div')
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < bard_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = bard_skill_list[i]
            option.innerHTML = bard_skill_list[i]

            skill_one.appendChild(option);
        }

        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < bard_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = bard_skill_list[i]
            option.innerHTML = bard_skill_list[i]

            skill_two.appendChild(option);
        }


        let skill_three = document.createElement('select');
        skill_three.ariaLabel = "choice1";
        skill_three.classList.add('create-select');
        skill_three.id = "three";

        let option3 = document.createElement('option');
        option3.value = "--"
        option3.innerHTML = "--";

        skill_three.appendChild(option3);

        for(let i = 0; i < bard_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = bard_skill_list[i]
            option.innerHTML = bard_skill_list[i]

            skill_three.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_three.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);
        container_class_details.appendChild(skill_three);

/*********************************************************************************************************************/
        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio-three");

        let rapier_div = document.createElement('div');
        rapier_div.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.value='0';
        radio_one.id="rapier"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Rapier";

        rapier_div.appendChild(radio_one);
        rapier_div.appendChild(radio_one_text);

        equipment_one.appendChild(rapier_div);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1)

        let longsword_div = document.createElement('div');
        longsword_div.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.value='0';
        radio_two.id="longsword"
        radio_two.classList.add('equip1');

        let radio_two_text = document.createElement('div');
        radio_two_text.innerHTML = "Longsword";

        longsword_div.appendChild(radio_two);
        longsword_div.appendChild(radio_two_text);

        equipment_one.appendChild(longsword_div);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_one.appendChild(or2);

        let simple_div = document.createElement('div');
        simple_div.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.classList.add('equip1');
        radio_three.value ='0';
        radio_three.id= 'select_one';

        let select_one = document.createElement('select');
        select_one.id='choose-simple';
        select_one.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];
            select_one.append(option);
        }

        simple_div.appendChild(radio_three);
        simple_div.appendChild(select_one);

        equipment_one.appendChild(simple_div);

        weapon_choose.appendChild(equipment_one);

        /************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio");

        let div4 = document.createElement('div');
        div4.classList.add('radio-div');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.value='0';
        radio_four.id="diplomat"
        radio_four.classList.add('equip1');

        let radio_four_text = document.createElement('div');
        radio_four_text.innerHTML = "Diplomat's Pack";

        div4.appendChild(radio_four);
        div4.appendChild(radio_four_text);

        equipment_two.appendChild(div4);

        let or3 = document.createElement('div');
        or3.innerHTML = "OR";

        equipment_two.appendChild(or3)

        let div5 = document.createElement('div');
        div5.classList.add('radio-div');
        let radio_five = document.createElement('div');
        radio_five.classList.add('create-radio-btn');
        radio_five.classList.add('equip1');
        radio_five.value ='0';
        radio_five.id= 'entertainers_pack';

        let radio_five_text = document.createElement('div');
        radio_five_text.innerHTML = "Entertainers Pack";

        div5.appendChild(radio_five);
        div5.appendChild(radio_five_text);

        equipment_two.appendChild(div5);

        weapon_choose.appendChild(equipment_two);

        let equipment_three  = document.createElement('div');
        equipment_three.classList.add("equipment-radio");

        let div6 =document.createElement('div');
        div6.classList.add('radio-div');

        let radio_six = document.createElement('div');
        radio_six.classList.add('create-radio-btn');
        radio_six.value='0';
        radio_six.id="lute"
        radio_six.classList.add('equip1');

        let radio_six_text = document.createElement('div');
        radio_six_text.innerHTML = "Lute";

        div6.appendChild(radio_six);
        div6.appendChild(radio_six_text);

        equipment_three.appendChild(div6);

        let or4 = document.createElement('div');
        or4.innerHTML = "OR";

        equipment_three.appendChild(or4);

        let div7 = document.createElement('div');
        div7.classList.add('radio-div');
        let radio_seven = document.createElement('div');
        radio_seven.classList.add('create-radio-btn');
        radio_seven.classList.add('equip1');
        radio_seven.value ='0';
        radio_seven.id= 'select_two';

        let select_two = document.createElement('select');
        select_two.id='choose-instrument';
        select_two.disabled = true;

        let request = new XMLHttpRequest()
        let url = 'get_instruments.php';
        request.open('Get', url, true);

        request.onload = function()
        {
            let response = JSON.parse(this.response);
            for(let i = 0; i < simple_list.length; i++)
            {
                let option = document.createElement('option');
                option.value = response[i][0];
                option.innerHTML = response[i][0];
                select_two.append(option);
            }
        }

        request.send();

        div7.appendChild(radio_seven);
        div7.appendChild(select_two);

        equipment_three.appendChild(div7);

        weapon_choose.appendChild(equipment_three);

/**********************************************************************************************************************/

        let equipment_four = document.createElement('div');
        equipment_four.classList.add("equipment-standard");

        let div8= document.createElement('div');
        div8.innerHTML = 'Leather Armor'

        let div9= document.createElement('div');
        div9.innerHTML = 'Dagger'

        equipment_four.appendChild(div8);
        equipment_four.appendChild(div9);

        weapon_choose.appendChild(equipment_four);

        let cantrip_header = document.createElement('div')
        cantrip_header.classList.add('create-header');
        cantrip_header.innerHTML = "CHOOSE CANTRIPS";

        weapon_choose.appendChild(cantrip_header);

        let cantrip = document.createElement('div');
        cantrip.classList.add('create-add-spells');

        for(let i = 0; i < bard_cantrip_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-cantrips');
            select.id = 'cantrip_select_' + i.toString();

            let request = new XMLHttpRequest();
            let url= "get_class_cantrips.php?name=" + "Bard";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                for(let i = 0; i < response.length; i++)
                {
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        cantrip.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(cantrip);


        let spell_header = document.createElement('div')
        spell_header.classList.add('create-header');
        spell_header.innerHTML = "CHOOSE SPELLS";

        weapon_choose.appendChild(spell_header);

        let spells = document.createElement('div');
        spells.classList.add('create-add-spells');

        for(let i = 0; i < bard_spell_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-spells');
            select.id = "spell_select_" + i.toString();
            let request = new XMLHttpRequest();
            let url= "get_class_spells.php?name=" + "Bard";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                for(let i = 0; i < response.length; i++)
                {
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        spells.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(spells);



        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();
            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);
            set_prof(skill_three.value);

            create_character.dexterity_prof = "1";
            create_character.charisma_prof = '1';

            create_character.backpack += "Leather Armor, Dagger";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + radio_two_text.innerHTML;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + select_one.value;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + radio_four_text.innerHTML;
            }
            if(radio_five.value === '1')
            {
                create_character.backpack += ", " + radio_five_text.innerHTML;
            }
            if(radio_six.value === '1')
            {
                create_character.backpack += ", " + radio_six_text.innerHTML;
            }
            if(radio_seven.value === '1')
            {
                create_character.backpack += ", " + select_two.value;
            }

            let cantrip_one = document.querySelector('#cantrip_select_0').value;
            let cantrip_two = document.querySelector('#cantrip_select_1').value;

            let spell_one = document.querySelector('#spell_select_0').value;
            let spell_two = document.querySelector('#spell_select_1').value;
            let spell_three = document.querySelector('#spell_select_2').value;
            let spell_four = document.querySelector('#spell_select_3').value;

            create_character.push_cantrip(cantrip_one);
            create_character.push_cantrip(cantrip_two);

            create_character.push_spell(spell_one);
            create_character.push_spell(spell_two);
            create_character.push_spell(spell_three);
            create_character.push_spell(spell_four);

            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);


        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_two = document.querySelectorAll('.equip1');
        equip_two.forEach((item) => item.addEventListener('click', function()
        {
            console.log('clicked');
            let rapier = document.querySelector('#rapier');
            let longsword = document.querySelector('#longsword');
            let weapon_select = document.querySelector('#select_one');
            let diplomat = document.querySelector('#diplomat');
            let entertainer = document.querySelector('#entertainers_pack');
            let lute = document.querySelector('#lute');
            let instrument_select = document.querySelector('#select_two');

            let select = document.querySelector('#choose-simple');
            let select_two = document.querySelector('#choose-instrument');


            if(item.id === "rapier")
            {
                rapier.style.backgroundColor = 'var(--clr-red-200)';
                longsword.style.backgroundColor = 'white';
                weapon_select.style.backgroundColor = 'white';

                rapier.value = '1';
                longsword.value = '0';
                weapon_select.value = '0';

                select.disabled =true;
            }
            if(item.id === 'longsword')
            {
                rapier.style.backgroundColor = 'white';
                longsword.style.backgroundColor = 'var(--clr-red-200)';
                weapon_select.style.backgroundColor = 'white';

                rapier.value = '0';
                longsword.value = '1';
                weapon_select.value = '0';

                select.disabled =true;
            }
            if(item.id === "select_one")
            {
                rapier.style.backgroundColor = 'white';
                longsword.style.backgroundColor = 'white';
                weapon_select.style.backgroundColor = 'var(--clr-red-200)';

                rapier.value = '0';
                longsword.value = '0';
                weapon_select.value = '1';

                select.disabled =false;
            }
            if(item.id === "diplomat")
            {

                diplomat.style.backgroundColor = 'var(--clr-red-200)';
                entertainer.style.backgroundColor = 'white';

                diplomat.value = '1';
                entertainer.value = '0';
            }
            if(item.id === 'entertainers_pack')
            {
                diplomat.style.backgroundColor = 'white';
                entertainer.style.backgroundColor = 'var(--clr-red-200)';

                diplomat.value = '0';
                entertainer.value = '1';
            }
            if(item.id === "lute")
            {

                lute.style.backgroundColor = 'var(--clr-red-200)';
                instrument_select.style.backgroundColor = 'white';

                lute.value = '1';
                instrument_select.value = '0';
                select_two.disabled =true;
            }
            if(item.id === "select_two")
            {

                lute.style.backgroundColor = 'white';
                instrument_select.style.backgroundColor = 'var(--clr-red-200)';

                lute.value = '0';
                instrument_select.value = '1';

                select_two.disabled =false;
            }
        }))




    }

    if(input_class[1] === 'Cleric')
    {
        /*
            show hit points
            show proficiencies
            choose 2 skills from list
            add spells (according to class cantrip/spells amount)
            choose divine domain

            equipment options
        */
        let cleric_cantrip_count= 3

        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div');
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < cleric_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = cleric_skill_list[i]
            option.innerHTML = cleric_skill_list[i]

            skill_one.appendChild(option);
        }

        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < cleric_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = cleric_skill_list[i]
            option.innerHTML = cleric_skill_list[i]

            skill_two.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);

        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

/*******************************************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let weapon_div_one = document.createElement('div');
        weapon_div_one.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.value='0';
        radio_one.id="mace"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Mace";

        weapon_div_one.appendChild(radio_one);
        weapon_div_one.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_one);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1)

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.classList.add('equip1');
        radio_two.value ='0';
        radio_two.id= 'warhammer';

        let radio_two_text = document.createElement('div');
        radio_two_text.innerHTML = "Warhammer";

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(radio_two_text);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);

        /*******************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio-three");

        let armor_div_1 = document.createElement('div');
        armor_div_1.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.value='0';
        radio_three.id="scale"
        radio_three.classList.add('equip1');

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "Scale Mail";

        armor_div_1.appendChild(radio_three);
        armor_div_1.appendChild(radio_three_text);

        equipment_two.appendChild(armor_div_1);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2)

        let armor_div_2 = document.createElement('div');
        armor_div_2.classList.add('radio-div');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.value='0';
        radio_four.id="leather"
        radio_four.classList.add('equip1');

        let radio_four_text = document.createElement('div');
        radio_four_text.innerHTML = "Leather Armor";

        armor_div_2.appendChild(radio_four);
        armor_div_2.appendChild(radio_four_text);

        equipment_two.appendChild(armor_div_2);

        let or3 = document.createElement('div');
        or3.innerHTML = "OR";

        equipment_two.appendChild(or3)

        let armor_div_3 = document.createElement('div');
        armor_div_3.classList.add('radio-div');
        let radio_five = document.createElement('div');
        radio_five.classList.add('create-radio-btn');
        radio_five.value='0';
        radio_five.id="chain"
        radio_five.classList.add('equip1');

        let radio_five_text = document.createElement('div');
        radio_five_text.innerHTML = "Chain Mail";

        armor_div_3.appendChild(radio_five);
        armor_div_3.appendChild(radio_five_text);

        equipment_two.appendChild(armor_div_3);

        weapon_choose.appendChild(equipment_two);

        /*******************************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-radio");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div');
        let radio_six = document.createElement('div');
        radio_six.classList.add('create-radio-btn');
        radio_six.value='0';
        radio_six.id="crossbow"
        radio_six.classList.add('equip1');

        let radio_six_text = document.createElement('div');
        radio_six_text.innerHTML = "Crossbow";

        weapon2_div_1.appendChild(radio_six);
        weapon2_div_1.appendChild(radio_six_text);

        equipment_three.appendChild(weapon2_div_1);

        let or5 = document.createElement('div');
        or5.innerHTML = "OR";

        equipment_three.appendChild(or5)

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div');
        let radio_seven = document.createElement('div');
        radio_seven.classList.add('create-radio-btn');
        radio_seven.classList.add('equip1');
        radio_seven.value ='0';
        radio_seven.id= 'select_one';

        let select_one = document.createElement('select');
        select_one.id='choose-simple';
        select_one.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];
            select_one.append(option);
        }

        weapon2_div_2.appendChild(radio_seven);
        weapon2_div_2.appendChild(select_one);

        equipment_three.appendChild(weapon2_div_2);

        weapon_choose.appendChild(equipment_three);

        /*******************************************************************************************************************/

        let equipment_four = document.createElement('div');
        equipment_four.classList.add("equipment-radio");

        let misc_div_one = document.createElement('div');
        misc_div_one.classList.add('radio-div');
        let radio_eight = document.createElement('div');
        radio_eight.classList.add('create-radio-btn');
        radio_eight.value='0';
        radio_eight.id="priest"
        radio_eight.classList.add('equip1');

        let radio_eight_text = document.createElement('div');
        radio_eight_text.innerHTML = "Priest Pack";

        misc_div_one.appendChild(radio_eight);
        misc_div_one.appendChild(radio_eight_text);

        equipment_four.appendChild(misc_div_one);

        let or4 = document.createElement('div');
        or4.innerHTML = "OR";

        equipment_four.appendChild(or4)

        let misc_div_2 = document.createElement('div');
        misc_div_2.classList.add('radio-div');
        let radio_nine = document.createElement('div');
        radio_nine.classList.add('create-radio-btn');
        radio_nine.classList.add('equip1');
        radio_nine.value ='0';
        radio_nine.id= 'holy';

        let radio_nine_text = document.createElement('div');
        radio_nine_text.innerHTML = "Holy Symbol";

        misc_div_2.appendChild(radio_nine);
        misc_div_2.appendChild(radio_nine_text);

        equipment_four.appendChild(misc_div_2);

        weapon_choose.appendChild(equipment_four);

        /*******************************************************************************************************************/

        let equipment_five = document.createElement('div');
        equipment_five.classList.add("equipment-standard");

        let div5= document.createElement('div');
        div5.innerHTML = 'Shield'

        let div6= document.createElement('div');
        div6.innerHTML = 'Holy Symbol'

        equipment_five.appendChild(div5);
        equipment_five.appendChild(div6);

        weapon_choose.appendChild(equipment_five);

        /*******************************************************************************************************************/

        let cantrip_header = document.createElement('div')
        cantrip_header.classList.add('create-header');
        cantrip_header.innerHTML = "CHOOSE CANTRIPS";

        weapon_choose.appendChild(cantrip_header);

        let cantrip = document.createElement('div');
        cantrip.classList.add('create-add-spells');

        for(let i = 0; i < cleric_cantrip_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-cantrips');
            select.id="cantrip_select_" + i.toString();

            let request = new XMLHttpRequest();
            let url= "get_class_cantrips.php?name=" + "Cleric";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                console.log(response);
                for(let i = 0; i < response.length; i++)
                {
                    console.log(response[i][0])
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    console.log(option);
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        cantrip.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(cantrip);


        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();

            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {

            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);

            create_character.wisdom_prof = "1";
            create_character.charisma_prof = '1';

            create_character.backpack += "Sheild, Holy Symbol";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + radio_two_text.innerHTML;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_three_text.innerHTML;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + radio_four_text.innerHTML;
            }
            if(radio_five.value === '1')
            {
                create_character.backpack += ", " + radio_five_text.innerHTML;
            }
            if(radio_six.value === '1')
            {
                create_character.backpack += ", " + radio_six_text.innerHTML;
            }
            if(radio_seven.value === '1')
            {
                create_character.backpack += ", " + select_one.value;
            }

            let cantrip_one = document.querySelector('#cantrip_select_0').value;
            let cantrip_two = document.querySelector('#cantrip_select_1').value;
            let cantrip_three = document.querySelector('#cantrip_select_2').value;

            create_character.push_cantrip(cantrip_one);
            create_character.push_cantrip(cantrip_two);
            create_character.push_cantrip(cantrip_three);

            console.log(create_character);

            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);

        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {
            let select_simple = document.querySelector('#choose-simple');
            let mace = document.querySelector("#mace");
            let warhammer = document.querySelector("#warhammer");
            let scale = document.querySelector("#scale");
            let leather = document.querySelector("#leather");
            let chain = document.querySelector("#chain");
            let crossbow = document.querySelector("#crossbow");
            let select_one = document.querySelector("#select_one");
            let priest = document.querySelector("#priest");
            let holy = document.querySelector("#holy");
            
            if(item.id === "mace")
            {
                mace.style.backgroundColor = 'var(--clr-red-200)';
                warhammer.style.backgroundColor = 'white';

                mace.value= '1';
                warhammer.value = '0';
            }
            if(item.id === 'warhammer')
            {
                mace.style.backgroundColor = 'white';
                warhammer.style.backgroundColor = 'var(--clr-red-200)';

                mace.value= '0';
                warhammer.value = '1';
            }
            if(item.id === "scale")
            {

                scale.style.backgroundColor = 'var(--clr-red-200)';
                leather.style.backgroundColor = 'white';
                chain.style.backgroundColor = 'white';

                scale.value = '1';
                leather.value = '0';
                chain.value = '0';
            }
            if(item.id === "leather")
            {
                scale.style.backgroundColor = 'white';
                leather.style.backgroundColor = 'var(--clr-red-200)';
                chain.style.backgroundColor = 'white';

                scale.value = '0';
                leather.value = '1';
                chain.value = '0';
            }
            if(item.id === "chain")
            {
                scale.style.backgroundColor = 'white';
                leather.style.backgroundColor = 'white';
                chain.style.backgroundColor = 'var(--clr-red-200)';

                scale.value = '0';
                leather.value = '0';
                chain.value = '1';

            }
            if(item.id === "crossbow")
            {

                crossbow.style.backgroundColor = 'var(--clr-red-200)';
                select_one.style.backgroundColor = 'white';

                crossbow.value = '1';
                select_one.value = '0';

                select_simple.disabled =true;
            }
            if(item.id === "select_one")
            {
                crossbow.style.backgroundColor = 'white';
                select_one.style.backgroundColor = 'var(--clr-red-200)';

                crossbow.value = '0';
                select_one.value = '1';

                select_simple.disabled =false;
            }
            if(item.id === "priest")
            {
                priest.style.backgroundColor = 'var(--clr-red-200)';
                holy.style.backgroundColor = 'white';

                priest.value = '1';
                holy.value = '0';

            }
            if(item.id === "holy")
            {
                priest.style.backgroundColor = 'white';
                holy.style.backgroundColor = 'var(--clr-red-200)';

                priest.value = '0';
                holy.value = '1';
            }
        }))

    }

    if(input_class[1] === 'Druid')
    {
        /*
            show hit points
            show proficiencies
            choose 2 skills from list
            add spells (according to class cantrip/spells amount)

            equipment options
        */
        let druid_cantrip_count = 2;

        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div');
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < druid_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = druid_skill_list[i]
            option.innerHTML = druid_skill_list[i]

            skill_one.appendChild(option);
        }



        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < druid_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = druid_skill_list[i]
            option.innerHTML = druid_skill_list[i]

            skill_two.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);

        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

/**********************************************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let weapon_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.value='0';
        radio_one.id="wooden_shield"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Wooden Shield";

        weapon_div_1.appendChild(radio_one);
        weapon_div_1.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1)

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.classList.add('equip1');
        radio_two.value ='0';
        radio_two.id= 'select_one';

        let select_one = document.createElement('select');
        select_one.id='choose-simple-one';
        select_one.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];
            select_one.append(option);
        }

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(select_one);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);

        /**********************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.value='0';
        radio_three.id="scimitar"
        radio_three.classList.add('equip1');

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "Scimitar";

        weapon2_div_1.appendChild(radio_three);
        weapon2_div_1.appendChild(radio_three_text);

        equipment_two.appendChild(weapon2_div_1);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2)

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.classList.add('equip1');
        radio_four.value ='0';
        radio_four.id= 'select_two';

        let select_two = document.createElement('select');
        select_two.id='choose-simple-two';
        select_two.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];
            select_two.append(option);
        }

        weapon2_div_2.appendChild(radio_four);
        weapon2_div_2.appendChild(select_two);

        equipment_two.appendChild(weapon2_div_2);

        weapon_choose.appendChild(equipment_two);

        /**********************************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-standard");

        let div5= document.createElement('div');
        div5.innerHTML = 'Leather Armor'

        let div6= document.createElement('div');
        div6.innerHTML = 'Explorers Pack'

        let div7= document.createElement('div');
        div7.innerHTML = 'Druidic Focus'

        equipment_three.appendChild(div5);
        equipment_three.appendChild(div6);
        equipment_three.appendChild(div7);

        weapon_choose.appendChild(equipment_three);

        /**********************************************************************************************************************/

        let cantrip_header = document.createElement('div')
        cantrip_header.classList.add('create-header');
        cantrip_header.innerHTML = "CHOOSE CANTRIPS";

        weapon_choose.appendChild(cantrip_header);

        let cantrip = document.createElement('div');
        cantrip.classList.add('create-add-spells');

        for(let i = 0; i < druid_cantrip_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-cantrips');
            select.id = 'cantrip_select_' + i.toString();
            let request = new XMLHttpRequest();
            let url= "get_class_cantrips.php?name=" + "Druid";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                for(let i = 0; i < response.length; i++)
                {
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        cantrip.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(cantrip);


        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();

            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
//reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);

            create_character.intelligence_prof = "1";
            create_character.wisdom_prof = '1';

            create_character.backpack += "Leather Armor, Dagger";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + select_one.value;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_three_text;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + select_two.value;
            }

            let cantrip_one = document.querySelector('#cantrip_select_0').value;
            let cantrip_two = document.querySelector('#cantrip_select_1').value;

            create_character.push_cantrip(cantrip_one);
            create_character.push_cantrip(cantrip_two);

            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);

        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {
            let select_simple_one = document.querySelector('#choose-simple-one');
            let select_simple_two = document.querySelector('#choose-simple-two');

            let shield = document.querySelector("#wooden_shield");
            let scimitar = document.querySelector("#scimitar");

            let select_one = document.querySelector("#select_one");
            let select_two = document.querySelector("#select_two");

            if(item.id === "wooden_shield")
            {
                shield.style.backgroundColor = 'var(--clr-red-200)';
                select_one.style.backgroundColor = 'white';

                shield.value= '1';
                select_one.value = '0';

                select_simple_one.disabled = true;
            }
            if(item.id === 'select_one')
            {
                shield.style.backgroundColor = 'white';
                select_one.style.backgroundColor = 'var(--clr-red-200)';

                shield.value= '0';
                select_one.value = '1';

                select_simple_one.disabled = false;
            }
            if(item.id === "scimitar")
            {
                scimitar.style.backgroundColor = 'var(--clr-red-200)';
                select_two.style.backgroundColor = 'white';

                scimitar.value = '1';
                select_two.value = '0';

                select_simple_two.disabled = true;
            }
            if(item.id === "select_two")
            {
                scimitar.style.backgroundColor = 'white';
                select_two.style.backgroundColor = 'var(--clr-red-200)';

                scimitar.value = '0';
                select_two.value = '1';

                select_simple_two.disabled = false;
            }
        }))
    }

    if(input_class[1] === 'Fighter')
    {
        /*
            show hit points
            show proficiencies
            choose 2 skills from list
            choose fighter style

            equipment options
        */
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div');
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < fighter_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = fighter_skill_list[i]
            option.innerHTML = fighter_skill_list[i]

            skill_one.appendChild(option);
        }


        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < fighter_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = fighter_skill_list[i]
            option.innerHTML = fighter_skill_list[i]

            skill_two.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);

        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

    /*******************************************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let weapon_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.id="chain"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Chain Mail";

        weapon_div_1.appendChild(radio_one);
        weapon_div_1.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1);

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.id="leather"
        radio_two.classList.add('equip1');

        let radio_two_text = document.createElement('div');
        radio_two_text.innerHTML = "Leather Armor and Longbow";

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(radio_two_text);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);

        /**********************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio-long");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div-three');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.id="martial_plus"
        radio_three.classList.add('equip1');

        let select_one = document.createElement('select');
        select_one.id='select_one';
        select_one.disabled = true;

        for(let i = 0; i < marital_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = marital_list[i];
            option.innerHTML = marital_list[i];

            select_one.appendChild(option);
        }

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "& Shield";

        weapon2_div_1.appendChild(radio_three);
        weapon2_div_1.appendChild(select_one);
        weapon2_div_1.appendChild(radio_three_text);

        equipment_two.appendChild(weapon2_div_1);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2);

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div-three');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.id="two_martial"
        radio_four.classList.add('equip1');

        let select_hold = document.createElement('div');
        select_hold.classList.add('multi-select');

        let select_two_1 = document.createElement('select');
        select_two_1.id = "select_two_1";
        select_two_1.disabled = true;

        for(let i = 0; i < marital_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = marital_list[i];
            option.innerHTML = marital_list[i];

            select_two_1.appendChild(option);
        }

        let radio_four_text = document.createElement('div');
        radio_four_text.innerHTML = "&";

        let select_two_2 = document.createElement('select');
        select_two_2.id = "select_two_2";
        select_two_2.disabled = true;

        for(let i = 0; i < marital_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = marital_list[i];
            option.innerHTML = marital_list[i];

            select_two_2.appendChild(option);
        }

        select_hold.appendChild(select_two_1);
        select_hold.appendChild(radio_four_text);
        select_hold.appendChild(select_two_2);

        weapon2_div_2.appendChild(radio_four);
        weapon2_div_2.appendChild(select_hold);


        equipment_two.appendChild(weapon2_div_2);

        weapon_choose.appendChild(equipment_two);

        /**************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-radio");

        let weapon3_div_1 = document.createElement('div');
        weapon3_div_1.classList.add('radio-div');
        let radio_five = document.createElement('div');
        radio_five.classList.add('create-radio-btn');
        radio_five.id="crossbow"
        radio_five.classList.add('equip1');

        let radio_five_text = document.createElement('div');
        radio_five_text.innerHTML = "Light Crossbow";

        weapon3_div_1.appendChild(radio_five);
        weapon3_div_1.appendChild(radio_five_text);

        equipment_three.appendChild(weapon3_div_1);

        let or3 = document.createElement('div');
        or3.innerHTML = "OR";

        equipment_three.appendChild(or3);

        let weapon3_div_2 = document.createElement('div');
        weapon3_div_2.classList.add('radio-div');
        let radio_six = document.createElement('div');
        radio_six.classList.add('create-radio-btn');
        radio_six.id="handaxes"
        radio_six.classList.add('equip1');

        let radio_six_text = document.createElement('div');
        radio_six_text.innerHTML = "Two Handaxes";

        weapon3_div_2.appendChild(radio_six);
        weapon3_div_2.appendChild(radio_six_text);

        equipment_three.appendChild(weapon3_div_2);

        weapon_choose.appendChild(equipment_three);


        /************************************************************************************************/

        let equipment_four = document.createElement('div');
        equipment_four.classList.add("equipment-radio");

        let weapon4_div_1 = document.createElement('div');
        weapon4_div_1.classList.add('radio-div');
        let radio_seven = document.createElement('div');
        radio_seven.classList.add('create-radio-btn');
        radio_seven.id="dungeoneer"
        radio_seven.classList.add('equip1');

        let radio_seven_text = document.createElement('div');
        radio_seven_text.innerHTML = "Dungeoneer's Pack";

        weapon4_div_1.appendChild(radio_seven);
        weapon4_div_1.appendChild(radio_seven_text);

        equipment_four.appendChild(weapon4_div_1);

        let or4 = document.createElement('div');
        or4.innerHTML = "OR";

        equipment_four.appendChild(or4);

        let weapon4_div_2 = document.createElement('div');
        weapon4_div_2.classList.add('radio-div');
        let radio_eight = document.createElement('div');
        radio_eight.classList.add('create-radio-btn');
        radio_eight.id="explorer"
        radio_eight.classList.add('equip1');

        let radio_eight_text = document.createElement('div');
        radio_eight_text.innerHTML = "Explorer's Pack";

        weapon4_div_2.appendChild(radio_eight);
        weapon4_div_2.appendChild(radio_eight_text);

        equipment_four.appendChild(weapon4_div_2);

        weapon_choose.appendChild(equipment_four);

        /*********************************************************************************************/

        let fight_header = document.createElement('div');
        fight_header.classList.add('create-header');
        fight_header.innerHTML = "CHOOSE FIGHTING STYLE";

        weapon_choose.appendChild(fight_header);

        let style_div = document.createElement('div');
        style_div.classList.add('create-show-style');

        let style_select = document.createElement('select');
        style_select.id= 'fighting-style';

        for(let i= 0; i < fighting_styles_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = fighting_styles_list[i];
            option.innerHTML = fighting_styles_list[i];

            style_select.appendChild(option);
        }

        style_div.appendChild(style_select);
        weapon_choose.append(style_div);

        /*********************************************************************************************/


        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();
            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);

            create_character.strength_prof = "1";
            create_character.consitution_prof = '1';


            if(radio_one.value === '1')
            {
                create_character.backpack += radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + radio_two_text.innerHTML;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + select_one.value;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + select_two_1.value;
                create_character.backpack += ", " + select_two_2.value;
            }
            if(radio_five.value === '1')
            {
                create_character.backpack += ", " + radio_five_text.innerHTML;
            }
            if(radio_six.value === '1')
            {
                create_character.backpack += ", " + radio_six_text.innerHTML;
            }
            if(radio_seven.value === '1')
            {
                create_character.backpack += ", " + radio_seven_text.innerHTML;
            }
            if(radio_eight.value === '1')
            {
                create_character.backpack += ", " + radio_eight_text.innerHTML;
            }

            create_character.fighting_style = style_select.value;

            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);


        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {
            let martial_select_one = document.querySelector('#select_one');
            let martial_select_two_one = document.querySelector('#select_two_1');
            let martial_select_two_two = document.querySelector('#select_two_2');

            let chain = document.querySelector("#chain");
            let leather = document.querySelector("#leather");

            let martial_plus = document.querySelector("#martial_plus");
            let two_martial = document.querySelector("#two_martial");

            let crossbow = document.querySelector("#crossbow");
            let handaxes = document.querySelector("#handaxes");

            let dungeoneer = document.querySelector("#dungeoneer");
            let explorer = document.querySelector("#explorer");

            if(item.id === "chain")
            {
                chain.style.backgroundColor = 'var(--clr-red-200)';
                leather.style.backgroundColor = 'white';

                chain.value= '1';
                leather.value = '0';

            }
            if(item.id === 'leather')
            {
                chain.style.backgroundColor = 'white';
                leather.style.backgroundColor = 'var(--clr-red-200)';

                chain.value= '0';
                leather.value = '1';
            }
            if(item.id === "martial_plus")
            {
                martial_plus.style.backgroundColor = 'var(--clr-red-200)';
                two_martial.style.backgroundColor = 'white';

                martial_plus.value = '1';
                two_martial.value = '0';

                martial_select_one.disabled = false;
                martial_select_two_one.disabled = true;
                martial_select_two_two.disabled = true;
            }
            if(item.id === "two_martial")
            {
                martial_plus.style.backgroundColor = 'white';
                two_martial.style.backgroundColor = 'var(--clr-red-200)';

                martial_plus.value = '0';
                two_martial.value = '1';

                martial_select_one.disabled = true;
                martial_select_two_one.disabled = false;
                martial_select_two_two.disabled = false;
            }
            if(item.id === "crossbow")
            {
                crossbow.style.backgroundColor = 'var(--clr-red-200)';
                handaxes.style.backgroundColor = 'white';

                crossbow.value = '1';
                handaxes.value = '0';
            }
            if(item.id === "handaxes")
            {
                crossbow.style.backgroundColor = 'white';
                handaxes.style.backgroundColor = 'var(--clr-red-200)';

                crossbow.value = '0';
                handaxes.value = '1';
            }
            if(item.id === "dungeoneer")
            {
                dungeoneer.style.backgroundColor = 'var(--clr-red-200)';
                explorer.style.backgroundColor = 'white';

                dungeoneer.value = '1';
                explorer.value = '0';
            }
            if(item.id === "explorer")
            {
                dungeoneer.style.backgroundColor = 'white';
                explorer.style.backgroundColor = 'var(--clr-red-200)';

                dungeoneer.value = '0';
                explorer.value = '1';
            }
        }))

    }

    if(input_class[1] === 'Monk')
    {
        /*
            show hit points
            show proficiencies
            choose 2 skills from list
            choose instrument or tools

            equipment options
        */
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div');
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < monk_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = monk_skill_list[i]
            option.innerHTML = monk_skill_list[i]

            skill_one.appendChild(option);
        }

        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < monk_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = monk_skill_list[i]
            option.innerHTML = monk_skill_list[i]

            skill_two.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);



        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');


    /**********************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let weapon_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.id="shortsword"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Shortsword";

        weapon_div_1.appendChild(radio_one);
        weapon_div_1.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1);

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.id="select_simple"
        radio_two.classList.add('equip1');

        let select_one = document.createElement('select');
        select_one.id='select_one';
        select_one.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];

            select_one.appendChild(option);
        }

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(select_one);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);

        /**********************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.id="dungeoneer"
        radio_three.classList.add('equip1');

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "Dungeoneer's Pack";

        weapon2_div_1.appendChild(radio_three);
        weapon2_div_1.appendChild(radio_three_text);

        equipment_two.appendChild(weapon2_div_1);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2);

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div-three');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.id="explorer"
        radio_four.classList.add('equip1');

        let radio_four_text = document.createElement('div');
        radio_four_text.innerHTML = "Explorer's Pack";


        weapon2_div_2.appendChild(radio_four);
        weapon2_div_2.appendChild(radio_four_text);

        equipment_two.appendChild(weapon2_div_2);

        weapon_choose.appendChild(equipment_two);

        /*****************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-standard");


        let div5= document.createElement('div');
        div5.innerHTML = '10 Darts'

        equipment_three.appendChild(div5);

        weapon_choose.appendChild(equipment_three);

        /*****************************************************************************************************/

        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();
            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);

            create_character.strength_prof = "1";
            create_character.dexterity_prof = '1';

            create_character.backpack += "10 Darts";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + select_one.value;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_three_text;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + radio_four_text.innerHTML;
            }

            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);

        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {
            let select_one = document.querySelector('#select_one');

            let shortsword = document.querySelector("#shortsword");
            let select_simple = document.querySelector("#select_simple");

            let dungeoneer = document.querySelector("#dungeoneer");
            let explorer = document.querySelector("#explorer");



            if(item.id === "shortsword")
            {
                shortsword.style.backgroundColor = 'var(--clr-red-200)';
                select_simple.style.backgroundColor = 'white';

                shortsword.value= '1';
                select_simple.value = '0';

                select_one.disabled = true;
            }
            if(item.id === 'select_simple')
            {
                shortsword.style.backgroundColor = 'white';
                select_simple.style.backgroundColor = 'var(--clr-red-200)';

                shortsword.value= '0';
                select_simple.value = '1';

                select_one.disabled = false;
            }
            if(item.id === "dungeoneer")
            {
                dungeoneer.style.backgroundColor = 'var(--clr-red-200)';
                explorer.style.backgroundColor = 'white';

                dungeoneer.value = '1';
                explorer.value = '0';
            }
            if(item.id === "explorer")
            {
                dungeoneer.style.backgroundColor = 'white';
                explorer.style.backgroundColor = 'var(--clr-red-200)';

                dungeoneer.value = '0';
                explorer.value = '1';
            }

        }))
    }

    if(input_class[1] === 'Paladin')
    {
        /*
            show hit points
            show proficiencies
            choose 2 skills from list

            equipment options
        */
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div');
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < paladin_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = paladin_skill_list[i]
            option.innerHTML = paladin_skill_list[i]

            skill_one.appendChild(option);
        }


        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < paladin_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = paladin_skill_list[i]
            option.innerHTML = paladin_skill_list[i]

            skill_two.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);

        /*****************************************************************************************************************/
        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio-long");

        let weapon_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div-three');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.id="martial_plus"
        radio_one.classList.add('equip1');

        let select_one = document.createElement('select');
        select_one.id='select_one';
        select_one.disabled = true;

        for(let i = 0; i < marital_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = marital_list[i];
            option.innerHTML = marital_list[i];

            select_one.appendChild(option);
        }

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "& Shield";

        weapon_div_1.appendChild(radio_one);
        weapon_div_1.appendChild(select_one);
        weapon_div_1.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1);

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div-three');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.id="two_martial"
        radio_two.classList.add('equip1');

        let select_hold = document.createElement('div');
        select_hold.classList.add('multi-select');

        let select_two_1 = document.createElement('select');
        select_two_1.id = "select_two_1";
        select_two_1.disabled = true;

        for(let i = 0; i < marital_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = marital_list[i];
            option.innerHTML = marital_list[i];

            select_two_1.appendChild(option);
        }

        let radio_two_text = document.createElement('div');
        radio_two_text.innerHTML = "&";

        let select_two_2 = document.createElement('select');
        select_two_2.id = "select_two_2";
        select_two_2.disabled = true;

        for(let i = 0; i < marital_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = marital_list[i];
            option.innerHTML = marital_list[i];

            select_two_2.appendChild(option);
        }

        select_hold.appendChild(select_two_1);
        select_hold.appendChild(radio_two_text);
        select_hold.appendChild(select_two_2);

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(select_hold);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);

        /******************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.id="javelin"
        radio_three.classList.add('equip1');

        let radio_text_three=document.createElement('div');
        radio_text_three.innerHTML = "5 Javelins"

        weapon2_div_1.appendChild(radio_three);
        weapon2_div_1.appendChild(radio_text_three);

        equipment_two.appendChild(weapon2_div_1)

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2);

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.id="select-simple"
        radio_four.classList.add('equip1');

        let select_three = document.createElement('select');
        select_three.id = "select_three";
        select_three.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];

            select_three.appendChild(option);
        }

        weapon2_div_2.appendChild(radio_four);
        weapon2_div_2.appendChild(select_three);

        equipment_two.appendChild(weapon2_div_2);
        weapon_choose.appendChild(equipment_two);


    /******************************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-radio");

        let weapon3_div_1 = document.createElement('div');
        weapon3_div_1.classList.add('radio-div');
        let radio_five = document.createElement('div');
        radio_five.classList.add('create-radio-btn');
        radio_five.id="priest"
        radio_five.classList.add('equip1');

        let radio_five_text = document.createElement('div');
        radio_five_text.innerHTML = "Priest Pack";

        weapon3_div_1.appendChild(radio_five);
        weapon3_div_1.appendChild(radio_five_text);

        equipment_three.appendChild(weapon3_div_1);

        let or3 = document.createElement('div');
        or3.innerHTML = "OR";

        equipment_three.appendChild(or3);

        let weapon3_div_2 = document.createElement('div');
        weapon3_div_2.classList.add('radio-div');
        let radio_six = document.createElement('div');
        radio_six.classList.add('create-radio-btn');
        radio_six.id="explorer"
        radio_six.classList.add('equip1');

        let radio_six_text = document.createElement('div');
        radio_six_text.innerHTML = "Explorer's Pack";

        weapon3_div_2.appendChild(radio_six);
        weapon3_div_2.appendChild(radio_six_text);

        equipment_three.appendChild(weapon3_div_2);

        weapon_choose.appendChild(equipment_three);

    /******************************************************************************************************************/

        let equipment_four = document.createElement('div');
        equipment_four.classList.add("equipment-standard");


        let div5= document.createElement('div');
        div5.innerHTML = 'Chain Mail'

        let div6= document.createElement('div');
        div6.innerHTML = 'Holy Symbol'

        equipment_four.appendChild(div5);
        equipment_four.appendChild(div6);

        weapon_choose.appendChild(equipment_four);

        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();

            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);

            create_character.wisdom_prof = "1";
            create_character.charisma_prof = '1';

            create_character.backpack += "Chain Mail, Holy Symbol";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + select_one.value + ", Sheild";
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + select_two_1.value + ', ' + select_two_2.value;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_text_three.innerHTML;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + select_three.value;
            }
            if(radio_five.value === '1')
            {
                create_character.backpack += ", " + radio_five_text.innerHTML;
            }
            if(radio_six.value === '1')
            {
                create_character.backpack += ", " + radio_six_text.innerHTML;
            }

            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);

        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {
            let select_one = document.querySelector('#select_one');
            let select_two_1 = document.querySelector('#select_two_1');
            let select_two_2 = document.querySelector('#select_two_2');
            let select_three = document.querySelector("#select_three");

            let martial_plus = document.querySelector('#martial_plus');
            let two_martial = document.querySelector('#two_martial');

            let javelin = document.querySelector('#javelin');
            let select_simple = document.querySelector('#select-simple');

            let priest = document.querySelector('#priest');
            let explorer = document.querySelector('#explorer');



            if(item.id === "martial_plus")
            {
                martial_plus.style.backgroundColor = 'var(--clr-red-200)';
                two_martial.style.backgroundColor = 'white';

                martial_plus.value = '1';
                two_martial.value = '0';

                select_one.disabled = false;
                select_two_1.disabled = true;
                select_two_2.disabled = true;
            }
            if(item.id === 'two_martial')
            {
                martial_plus.style.backgroundColor = 'white';
                two_martial.style.backgroundColor = 'var(--clr-red-200)';

                martial_plus.value = '0';
                two_martial.value = '1';

                select_one.disabled = true;
                select_two_1.disabled = false;
                select_two_2.disabled = false;

            }
            if(item.id === "javelin")
            {
                javelin.style.backgroundColor = 'var(--clr-red-200)';
                select_simple.style.backgroundColor = 'white';

                javelin.value = "1";
                select_simple.value= '0';

                select_three.disabled = true;

            }
            if(item.id === "select-simple")
            {
                javelin.style.backgroundColor = 'white';
                select_simple.style.backgroundColor = 'var(--clr-red-200)';

                javelin.value = "0";
                select_simple.value= '1';

                select_three.disabled = false;

            }
            if(item.id === "priest")
            {
                priest.style.backgroundColor = 'var(--clr-red-200)';
                explorer.style.backgroundColor = 'white';

                priest.value = "1";
                explorer.value= '0';

            }
            if(item.id === "explorer")
            {
                priest.backgroundColor = 'white';
                explorer.style.backgroundColor = 'var(--clr-red-200)';

                priest.value = "0";
                explorer.value= '1';
            }
        }))
    }

    if(input_class[1] === 'Ranger')
    {
        /*
            show hit points
            show proficiencies
            choose 3 skills from list
            choose favored Enemy
            choose natural explorer

            equipment options
        */
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div');
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < ranger_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = ranger_skill_list[i]
            option.innerHTML = ranger_skill_list[i]

            skill_one.appendChild(option);
        }


        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < ranger_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = ranger_skill_list[i]
            option.innerHTML = ranger_skill_list[i]

            skill_two.appendChild(option);
        }


        let skill_three = document.createElement('select');
        skill_three.ariaLabel = "choice1";
        skill_three.classList.add('create-select');
        skill_three.id = "three";

        let option3 = document.createElement('option');
        option3.value = "--"
        option3.innerHTML = "--";

        skill_three.appendChild(option3);

        for(let i = 0; i < ranger_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = ranger_skill_list[i]
            option.innerHTML = ranger_skill_list[i]

            skill_three.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_three.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);
        container_class_details.appendChild(skill_three);


    /*********************************************************************************************************************/

        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

        /*********************************************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let weapon_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.id="scale"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Scale Mail";

        weapon_div_1.appendChild(radio_one);
        weapon_div_1.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1);

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.id="leather"
        radio_two.classList.add('equip1');

        let radio_two_text = document.createElement('div');
        radio_two_text.innerHTML = "Leather Armor";

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(radio_two_text);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);


        /*********************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio-long");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.id="shortswords"
        radio_three.classList.add('equip1');

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "2 Shortswords";

        weapon2_div_1.appendChild(radio_three);
        weapon2_div_1.appendChild(radio_three_text);

        equipment_two.appendChild(weapon2_div_1);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2);

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div-three');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.id="two_simple"
        radio_four.classList.add('equip1');

        let select_hold = document.createElement('div');
        select_hold.classList.add('multi-select');

        let select_one_1 = document.createElement('select');
        select_one_1.id = "select_two_1";
        select_one_1.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];

            select_one_1.appendChild(option);
        }

        let radio_four_text = document.createElement('div');
        radio_four_text.innerHTML = "&";

        let select_one_2 = document.createElement('select');
        select_one_2.id = "select_two_2";
        select_one_2.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];

            select_one_2.appendChild(option);
        }

        select_hold.appendChild(select_one_1);
        select_hold.appendChild(radio_four_text);
        select_hold.appendChild(select_one_2);

        weapon2_div_2.appendChild(radio_four);
        weapon2_div_2.appendChild(select_hold);

        equipment_two.appendChild(weapon2_div_2);

        weapon_choose.appendChild(equipment_two);

        /******************************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-radio");

        let weapon3_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div');
        let radio_five = document.createElement('div');
        radio_five.classList.add('create-radio-btn');
        radio_five.id="dungeoneers"
        radio_five.classList.add('equip1');

        let radio_five_text = document.createElement('div');
        radio_five_text.innerHTML = "Dungeoneer's Pack";

        weapon3_div_1.appendChild(radio_five);
        weapon3_div_1.appendChild(radio_five_text);

        equipment_three.appendChild(weapon3_div_1);

        let or3 = document.createElement('div');
        or3.innerHTML = "OR";

        equipment_three.appendChild(or3);

        let weapon3_div_2 = document.createElement('div');
        weapon3_div_2.classList.add('radio-div');
        let radio_six = document.createElement('div');
        radio_six.classList.add('create-radio-btn');
        radio_six.id="explorer"
        radio_six.classList.add('equip1');

        let radio_six_text = document.createElement('div');
        radio_six_text.innerHTML = "Explorer's Pack";

        weapon3_div_2.appendChild(radio_six);
        weapon3_div_2.appendChild(radio_six_text);

        equipment_three.appendChild(weapon3_div_2);

        weapon_choose.appendChild(equipment_three);

      /****************************************************************************************************************/

        let equipment_four = document.createElement('div');
        equipment_four.classList.add("equipment-standard");


        let div5= document.createElement('div');
        div5.innerHTML = 'Long Bow'

        equipment_four.appendChild(div5);

        weapon_choose.appendChild(equipment_four);

    /*********************************************************************************************************************/
        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();
            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);
            set_prof(skill_three.value);

            create_character.strength_prof = "1";
            create_character.dexterity_prof = '1';

            create_character.backpack += "Long Bow";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + radio_two_text.innerHTML;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_three_text.innerHTML;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + select_one_1.value + ", " + select_one_2.value;
            }
            if(radio_five.value === '1')
            {
                create_character.backpack += ", " + radio_five_text.innerHTML;
            }
            if(radio_six.value === '1')
            {
                create_character.backpack += ", " + radio_six_text.innerHTML;
            }


            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);

        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {

            let select_two_1 = document.querySelector('#select_two_1');
            let select_two_2 = document.querySelector('#select_two_2');

            let scale = document.querySelector('#scale');
            let leather = document.querySelector('#leather');

            let shortsword = document.querySelector('#shortswords');
            let two_simple = document.querySelector('#two_simple');

            let dungeoneer = document.querySelector('#dungeoneers');
            let explorer = document.querySelector('#explorer');



            if(item.id === "scale")
            {
                scale.style.backgroundColor = 'var(--clr-red-200)';
                leather.style.backgroundColor = 'white';

                scale.value = '1';
                leather.value = '0';

            }
            if(item.id === 'leather')
            {
                scale.style.backgroundColor = 'white';
                leather.style.backgroundColor = 'var(--clr-red-200)';

                scale.value = '0';
                leather.value = '1';

            }
            if(item.id === "shortswords")
            {
                shortsword.style.backgroundColor = 'var(--clr-red-200)';
                two_simple.style.backgroundColor = 'white';

                shortsword.value = "1";
                two_simple.value= '0';

                select_two_1.disabled = true;
                select_two_2.disabled = true;
            }
            if(item.id === "two_simple")
            {
                shortsword.style.backgroundColor = 'white';
                two_simple.style.backgroundColor = 'var(--clr-red-200)';

                shortsword.value = "0";
                two_simple.value= '1';

                select_two_1.disabled = false;
                select_two_2.disabled = false;
            }
            if(item.id === "dungeoneers")
            {
                dungeoneer.style.backgroundColor = 'var(--clr-red-200)';
                explorer.style.backgroundColor = 'white';

                dungeoneer.value = "1";
                explorer.value= '0';

            }
            if(item.id === "explorer")
            {
                dungeoneer.style.backgroundColor = 'white';
                explorer.style.backgroundColor = 'var(--clr-red-200)';

                dungeoneer.value = "0";
                explorer.value= '1';
            }
        }))
    }

    if(input_class[1] === 'Rogue')
    {
        /*
            show hit points
            show proficiencies
            choose 4 skills from list
            choose 2 expertise (look at how it functions

            equipment options
         */
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div');
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < rouge_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = rouge_skill_list[i]
            option.innerHTML = rouge_skill_list[i]

            skill_one.appendChild(option);
        }

        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < rouge_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = rouge_skill_list[i]
            option.innerHTML = rouge_skill_list[i]

            skill_two.appendChild(option);
        }

        let skill_three = document.createElement('select');
        skill_three.ariaLabel = "choice1";
        skill_three.classList.add('create-select');
        skill_three.id = "three";

        let option3 = document.createElement('option');
        option3.value = "--"
        option3.innerHTML = "--";

        skill_three.appendChild(option3);

        for(let i = 0; i < rouge_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = rouge_skill_list[i]
            option.innerHTML = rouge_skill_list[i]

            skill_three.appendChild(option);
        }



        let skill_four = document.createElement('select');
        skill_four.ariaLabel = "choice1";
        skill_four.classList.add('create-select');
        skill_four.id = "four";

        let option4 = document.createElement('option');
        option4.value = "--"
        option4.innerHTML = "--";

        skill_four.appendChild(option4);

        for(let i = 0; i < rouge_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = rouge_skill_list[i]
            option.innerHTML = rouge_skill_list[i]

            skill_four.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_three.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_four.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);
        container_class_details.appendChild(skill_three);
        container_class_details.appendChild(skill_four);




        /*********************************************************************************************************************/

        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

        /*********************************************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let weapon_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.id="rapier"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Rapier";

        weapon_div_1.appendChild(radio_one);
        weapon_div_1.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1);

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.id="shortsword"
        radio_two.classList.add('equip1');

        let radio_two_text = document.createElement('div');
        radio_two_text.innerHTML = "Shortsword";

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(radio_two_text);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);

        /*********************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.id="shortbow"
        radio_three.classList.add('equip1');

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "Shortbow";

        weapon2_div_1.appendChild(radio_three);
        weapon2_div_1.appendChild(radio_three_text);

        equipment_two.appendChild(weapon2_div_1);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2);

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.id="shortsword2"
        radio_four.classList.add('equip1');

        let radio_four_text = document.createElement('div');
        radio_four_text.innerHTML = "Shortsword";

        weapon2_div_2.appendChild(radio_four);
        weapon2_div_2.appendChild(radio_four_text);

        equipment_two.appendChild(weapon2_div_2);

        weapon_choose.appendChild(equipment_two);

        /*********************************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-radio-three");

        let weapon3_div_1 = document.createElement('div');
        weapon3_div_1.classList.add('radio-div');
        let radio_five = document.createElement('div');
        radio_five.classList.add('create-radio-btn');
        radio_five.id="burgler"
        radio_five.classList.add('equip1');

        let radio_five_text = document.createElement('div');
        radio_five_text.innerHTML = "Burgler's Pack";

        weapon3_div_1.appendChild(radio_five);
        weapon3_div_1.appendChild(radio_five_text);

        equipment_three.appendChild(weapon3_div_1);

        let or3 = document.createElement('div');
        or3.innerHTML = "OR";

        equipment_three.appendChild(or3);

        let weapon3_div_2 = document.createElement('div');
        weapon3_div_2.classList.add('radio-div');
        let radio_six = document.createElement('div');
        radio_six.classList.add('create-radio-btn');
        radio_six.id="dungeoneer"
        radio_six.classList.add('equip1');

        let radio_six_text = document.createElement('div');
        radio_six_text.innerHTML = "Dungeoneer's Pack";

        weapon3_div_2.appendChild(radio_six);
        weapon3_div_2.appendChild(radio_six_text);

        equipment_three.appendChild(weapon3_div_2);

        let or4 = document.createElement('div');
        or4.innerHTML = "OR";

        equipment_three.appendChild(or4);

        let weapon3_div_3 = document.createElement('div');
        weapon3_div_3.classList.add('radio-div');
        let radio_seven = document.createElement('div');
        radio_seven.classList.add('create-radio-btn');
        radio_seven.id="explorer"
        radio_seven.classList.add('equip1');

        let radio_seven_text = document.createElement('div');
        radio_seven_text.innerHTML = "Explorers Pack";

        weapon3_div_3.appendChild(radio_seven);
        weapon3_div_3.appendChild(radio_seven_text);

        equipment_three.appendChild(weapon3_div_3);

        weapon_choose.appendChild(equipment_three);

        /*****************************************************************************************************************/

        let equipment_four = document.createElement('div');
        equipment_four.classList.add("equipment-standard");


        let div5= document.createElement('div');
        div5.innerHTML = 'Leather Armor'

        let div6= document.createElement('div');
        div6.innerHTML = '2 Daggers'

        let div7= document.createElement('div');
        div7.innerHTML = "Thieves Tools"

        equipment_four.appendChild(div5);
        equipment_four.appendChild(div6);
        equipment_four.appendChild(div7);

        weapon_choose.appendChild(equipment_four);

        /*********************************************************************************************************************/
        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();

            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);
            set_prof(skill_three.value);
            set_prof(skill_four.value);

            create_character.dexterity_prof = "1";
            create_character.intelligence_prof = '1';

            create_character.backpack += "Leather Armor, 2 Daggers, Thieves Tools";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + radio_two_text.innerHTML;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_three_text;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + radio_four_text.innerHTML;
            }
            if(radio_five.value === '1')
            {
                create_character.backpack += ", " + radio_five_text.innerHTML;
            }
            if(radio_six.value === '1')
            {
                create_character.backpack += ", " + radio_six_text.innerHTML;
            }
            if(radio_seven.value === '1')
            {
                create_character.backpack += ", " + radio_seven_text;
            }

            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);

        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {

            let rapier = document.querySelector('#rapier');
            let shortsword = document.querySelector('#shortsword');

            let shortbow = document.querySelector('#shortbow');
            let shortsword2 = document.querySelector('#shortsword2');

            let burgler = document.querySelector('#burgler');
            let dungeoneer = document.querySelector('#dungeoneer');
            let explorer = document.querySelector('#explorer');



            if(item.id === "rapier")
            {
                rapier.style.backgroundColor = 'var(--clr-red-200)';
                shortsword.style.backgroundColor = 'white';

                rapier.value = '1';
                shortsword.value = '0';

            }
            if(item.id === 'shortsword')
            {
                rapier.style.backgroundColor = 'white';
                shortsword.style.backgroundColor = 'var(--clr-red-200)';

                rapier.value = '0';
                shortsword.value = '1';

            }
            if(item.id === "shortbow")
            {
                shortbow.style.backgroundColor = 'var(--clr-red-200)';
                shortsword2.style.backgroundColor = 'white';

                shortbow.value= '1';
                shortsword2.value = "0";
            }
            if(item.id === "shortsword2")
            {
                shortbow.style.backgroundColor = 'white';
                shortsword2.style.backgroundColor = 'var(--clr-red-200)';

                shortbow.value= '0';
                shortsword2.value = "1";
            }
            if(item.id === "burgler")
            {
                burgler.style.backgroundColor = 'var(--clr-red-200)';
                dungeoneer.style.backgroundColor = 'white';
                explorer.style.backgroundColor = 'white';

                burgler.value = '1';
                dungeoneer.value = "0";
                explorer.value= '0';

            }
            if(item.id === "dungeoneer")
            {
                burgler.style.backgroundColor = 'white';
                dungeoneer.style.backgroundColor = 'var(--clr-red-200)';
                explorer.style.backgroundColor = 'white';

                burgler.value = '0';
                dungeoneer.value = "1";
                explorer.value= '0';

            }
            if(item.id === "explorer")
            {
                burgler.style.backgroundColor = 'white';
                dungeoneer.style.backgroundColor = 'white';
                explorer.style.backgroundColor = 'var(--clr-red-200)';

                burgler.value = '0';
                dungeoneer.value = "0";
                explorer.value= '1';
            }
        }))
    }

    if(input_class[1] === 'Sorcerer')
    {
        /*
            show hit points
            show proficiencies
            choose 2 skills from list
            choose sorcerers origin
            add spells (according to class cantrip/spells amount)

            equipment options
         */
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div');
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < sorcerer_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = sorcerer_skill_list[i]
            option.innerHTML = sorcerer_skill_list[i]

            skill_one.appendChild(option);
        }


        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < sorcerer_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = sorcerer_skill_list[i]
            option.innerHTML = sorcerer_skill_list[i]

            skill_two.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);

        /*********************************************************************************************************************/

        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

        /*********************************************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let weapon_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.id="crossbow"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Crossbow";

        weapon_div_1.appendChild(radio_one);
        weapon_div_1.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1);

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.id="select_simple";
        radio_two.classList.add('equip1');

        let select_simple = document.createElement('select');
        select_simple.id='select_one';
        select_simple.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];
            select_simple.appendChild(option);
        }

        for(let i = 0; i < simple_range_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_range_list[i];
            option.innerHTML = simple_range_list[i];
            select_simple.appendChild(option);
        }

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(select_simple);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);

        /*********************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.id="pouch"
        radio_three.classList.add('equip1');

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "Component Pouch";

        weapon2_div_1.appendChild(radio_three);
        weapon2_div_1.appendChild(radio_three_text);

        equipment_two.appendChild(weapon2_div_1);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2);

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.id="focus"
        radio_four.classList.add('equip1');

        let radio_four_text = document.createElement('div');
        radio_four_text.innerHTML = "Arcane Focus";

        weapon2_div_2.appendChild(radio_four);
        weapon2_div_2.appendChild(radio_four_text);

        equipment_two.appendChild(weapon2_div_2);

        weapon_choose.appendChild(equipment_two);

        /*********************************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-radio");

        let weapon3_div_1 = document.createElement('div');
        weapon3_div_1.classList.add('radio-div');
        let radio_five = document.createElement('div');
        radio_five.classList.add('create-radio-btn');
        radio_five.id="dungeoneer"
        radio_five.classList.add('equip1');

        let radio_five_text = document.createElement('div');
        radio_five_text.innerHTML = "Dungeoneer's Pack";

        weapon3_div_1.appendChild(radio_five);
        weapon3_div_1.appendChild(radio_five_text);

        equipment_three.appendChild(weapon3_div_1);

        let or4 = document.createElement('div');
        or4.innerHTML = "OR";

        equipment_three.appendChild(or4);

        let weapon3_div_2 = document.createElement('div');
        weapon3_div_2.classList.add('radio-div');
        let radio_six = document.createElement('div');
        radio_six.classList.add('create-radio-btn');
        radio_six.id="explorer"
        radio_six.classList.add('equip1');

        let radio_six_text = document.createElement('div');
        radio_six_text.innerHTML = "Explorers Pack";

        weapon3_div_2.appendChild(radio_six);
        weapon3_div_2.appendChild(radio_six_text);

        equipment_three.appendChild(weapon3_div_2);

        weapon_choose.appendChild(equipment_three);

        /*****************************************************************************************************************/

        let equipment_four = document.createElement('div');
        equipment_four.classList.add("equipment-standard");

        let div5= document.createElement('div');
        div5.innerHTML = '2 Daggers'

        equipment_four.appendChild(div5);

        weapon_choose.appendChild(equipment_four);

        let sorcerer_spell_count = 2;
        let sorcerer_cantrip_count = 4;

        let cantrip_header = document.createElement('div')
        cantrip_header.classList.add('create-header');
        cantrip_header.innerHTML = "CHOOSE CANTRIPS";

        weapon_choose.appendChild(cantrip_header);

        let cantrip = document.createElement('div');
        cantrip.classList.add('create-add-spells');

        for(let i = 0; i < sorcerer_cantrip_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-cantrips');
            select.id = 'cantrip_select_' + i.toString();

            let request = new XMLHttpRequest();
            let url= "get_class_cantrips.php?name=" + "Sorcerer";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                for(let i = 0; i < response.length; i++)
                {
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        cantrip.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(cantrip);


        let spell_header = document.createElement('div')
        spell_header.classList.add('create-header');
        spell_header.innerHTML = "CHOOSE SPELLS";

        weapon_choose.appendChild(spell_header);

        let spells = document.createElement('div');
        spells.classList.add('create-add-spells');

        for(let i = 0; i < sorcerer_spell_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-spells');
            select.id = "spell_select_" + i.toString();
            let request = new XMLHttpRequest();
            let url= "get_class_spells.php?name=" + "Sorcerer";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                for(let i = 0; i < response.length; i++)
                {
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        spells.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(spells);

        /*********************************************************************************************************************/
        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();

            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);

            create_character.constitution_prof = "1";
            create_character.charisma_prof = '1';

            create_character.backpack += "Leather Armor, Dagger";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + select_simple.value;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_three_text.innerHTML;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + radio_four_text.innerHTML;
            }
            if(radio_five.value === '1')
            {
                create_character.backpack += ", " + radio_five_text.innerHTML;
            }
            if(radio_six.value === '1')
            {
                create_character.backpack += ", " + radio_six_text.innerHTML;
            }

            let cantrip_one = document.querySelector('#cantrip_select_0').value;
            let cantrip_two = document.querySelector('#cantrip_select_1').value;
            let cantrip_three = document.querySelector('#cantrip_select_2').value;
            let cantrip_four = document.querySelector('#cantrip_select_3').value;

            let spell_one = document.querySelector('#spell_select_0').value;
            let spell_two = document.querySelector('#spell_select_1').value;


            create_character.push_cantrip(cantrip_one);
            create_character.push_cantrip(cantrip_two);
            create_character.push_cantrip(cantrip_three);
            create_character.push_cantrip(cantrip_four);

            create_character.push_spell(spell_one);
            create_character.push_spell(spell_two);

            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);

        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {

            let select_one = document.querySelector("#select_one");

            let crossbow = document.querySelector('#crossbow');
            let select_simple = document.querySelector('#select_simple');

            let pouch = document.querySelector('#pouch');
            let focus = document.querySelector('#focus');

            let dungeoneer = document.querySelector('#dungeoneer');
            let explorer = document.querySelector('#explorer');



            if(item.id === "crossbow")
            {
                crossbow.style.backgroundColor = 'var(--clr-red-200)';
                select_simple.style.backgroundColor = 'white';

                crossbow.value = '1';
                select_simple.value = '0';

                select_one.disabled = true;
            }
            if(item.id === 'select_simple')
            {
                crossbow.style.backgroundColor = 'white';
                select_simple.style.backgroundColor = 'var(--clr-red-200)';

                crossbow.value = '0';
                select_simple.value = '1';

                select_one.disabled = false;
            }
            if(item.id === "pouch")
            {
                pouch.style.backgroundColor = 'var(--clr-red-200)';
                focus.style.backgroundColor = 'white';

                pouch.value= '1';
                focus.value = "0";
            }
            if(item.id === "focus")
            {
                pouch.style.backgroundColor = 'white';
                focus.style.backgroundColor = 'var(--clr-red-200)';

                pouch.value= '0';
                focus.value = "1";
            }
            if(item.id === "dungeoneer")
            {

                dungeoneer.style.backgroundColor = 'var(--clr-red-200)';
                explorer.style.backgroundColor = 'white';

                dungeoneer.value = "1";
                explorer.value= '0';
            }
            if(item.id === "explorer")
            {
                dungeoneer.style.backgroundColor = 'white';
                explorer.style.backgroundColor = 'var(--clr-red-200)';

                dungeoneer.value = "0";
                explorer.value= '1';
            }
        }))
    }

    if(input_class[1] === 'Warlock')
    {
        /*
            show hit points
            show proficiencies
            choose 2 skills from list
            choose otherworldly patron
            add spells (according to class cantrip/spells amount)

            equipment options
         */
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6].toString();
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div')
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < warlock_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = warlock_skill_list[i]
            option.innerHTML = warlock_skill_list[i]

            skill_one.appendChild(option);
        }


        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < warlock_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = warlock_skill_list[i]
            option.innerHTML = warlock_skill_list[i]

            skill_two.appendChild(option);
        }

        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })


        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);

        /*********************************************************************************************************************/

        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

        /*********************************************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let weapon_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.id="crossbow"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Crossbow";

        weapon_div_1.appendChild(radio_one);
        weapon_div_1.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1);

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.id="select_simple";
        radio_two.classList.add('equip1');

        let select_simple = document.createElement('select');
        select_simple.id='select_one';
        select_simple.disabled = true;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];
            select_simple.appendChild(option);
        }

        for(let i = 0; i < simple_range_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_range_list[i];
            option.innerHTML = simple_range_list[i];
            select_simple.appendChild(option);
        }

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(select_simple);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);

        /*********************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.id="pouch"
        radio_three.classList.add('equip1');

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "Component Pouch";

        weapon2_div_1.appendChild(radio_three);
        weapon2_div_1.appendChild(radio_three_text);

        equipment_two.appendChild(weapon2_div_1);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2);

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.id="focus"
        radio_four.classList.add('equip1');

        let radio_four_text = document.createElement('div');
        radio_four_text.innerHTML = "Arcane Focus";

        weapon2_div_2.appendChild(radio_four);
        weapon2_div_2.appendChild(radio_four_text);

        equipment_two.appendChild(weapon2_div_2);

        weapon_choose.appendChild(equipment_two);

        /*********************************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-radio");

        let weapon3_div_1 = document.createElement('div');
        weapon3_div_1.classList.add('radio-div');
        let radio_five = document.createElement('div');
        radio_five.classList.add('create-radio-btn');
        radio_five.id="dungeoneer"
        radio_five.classList.add('equip1');

        let radio_five_text = document.createElement('div');
        radio_five_text.innerHTML = "Dungeoneer's Pack";

        weapon3_div_1.appendChild(radio_five);
        weapon3_div_1.appendChild(radio_five_text);

        equipment_three.appendChild(weapon3_div_1);

        let or4 = document.createElement('div');
        or4.innerHTML = "OR";

        equipment_three.appendChild(or4);

        let weapon3_div_2 = document.createElement('div');
        weapon3_div_2.classList.add('radio-div');
        let radio_six = document.createElement('div');
        radio_six.classList.add('create-radio-btn');
        radio_six.id="scholar"
        radio_six.classList.add('equip1');

        let radio_six_text = document.createElement('div');
        radio_six_text.innerHTML = "Scholar's Pack";

        weapon3_div_2.appendChild(radio_six);
        weapon3_div_2.appendChild(radio_six_text);

        equipment_three.appendChild(weapon3_div_2);

        weapon_choose.appendChild(equipment_three);

        /*****************************************************************************************************************/

        let equipment_four = document.createElement('div');
        equipment_four.classList.add("create-show-style");
        let weapon4_div_1 = document.createElement('div');
        weapon4_div_1.classList.add('solo-select');

        let select_two = document.createElement('select');
        select_two.id='select_two';
        select_two.disabled = false;

        for(let i = 0; i < simple_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = simple_list[i];
            option.innerHTML = simple_list[i];
            select_two.appendChild(option);
        }

        weapon4_div_1.appendChild(select_two);

        equipment_four.appendChild(weapon4_div_1);

        weapon_choose.appendChild(equipment_four);

        /*****************************************************************************************************************/

        let equipment_five = document.createElement('div');
        equipment_five.classList.add("equipment-standard");

        let div5= document.createElement('div');
        div5.innerHTML = '2 Daggers';

        let div6= document.createElement('div');
        div6.innerHTML = 'Leather Armor';

        equipment_five.appendChild(div5);
        equipment_five.appendChild(div6);

        weapon_choose.appendChild(equipment_five);


        let warlock_spell_count = 2;
        let warlock_cantrip_count = 2;

        let cantrip_header = document.createElement('div')
        cantrip_header.classList.add('create-header');
        cantrip_header.innerHTML = "CHOOSE CANTRIPS";

        weapon_choose.appendChild(cantrip_header);

        let cantrip = document.createElement('div');
        cantrip.classList.add('create-add-spells');

        for(let i = 0; i < warlock_cantrip_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-cantrips');
            select.id = 'cantrip_select_' + i.toString();

            let request = new XMLHttpRequest();
            let url= "get_class_cantrips.php?name=" + "Warlock";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                for(let i = 0; i < response.length; i++)
                {
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        cantrip.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(cantrip);


        let spell_header = document.createElement('div')
        spell_header.classList.add('create-header');
        spell_header.innerHTML = "CHOOSE SPELLS";

        weapon_choose.appendChild(spell_header);

        let spells = document.createElement('div');
        spells.classList.add('create-add-spells');

        for(let i = 0; i < warlock_spell_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-spells');
            select.id = "spell_select_" + i.toString();
            let request = new XMLHttpRequest();
            let url= "get_class_spells.php?name=" + "Sorcerer";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                for(let i = 0; i < response.length; i++)
                {
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        spells.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(spells);


        /*********************************************************************************************************************/
        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();
            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {
//reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);

            create_character.wisdom_prof = "1";
            create_character.charisma_prof = '1';

            create_character.backpack += "Leather Armor, 2 Daggers";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + select_simple.value;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_three_text.innerHTML;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + radio_four_text.innerHTML;
            }
            if(radio_five.value === '1')
            {
                create_character.backpack += ", " + radio_five_text.innerHTML;
            }
            if(radio_six.value === '1')
            {
                create_character.backpack += ", " + radio_six_text.innerHTML;
            }

            create_character.backpack += ", " + select_two.value;

            let cantrip_one = document.querySelector('#cantrip_select_0').value;
            let cantrip_two = document.querySelector('#cantrip_select_1').value;

            let spell_one = document.querySelector('#spell_select_0').value;
            let spell_two = document.querySelector('#spell_select_1').value;


            create_character.push_cantrip(cantrip_one);
            create_character.push_cantrip(cantrip_two);

            create_character.push_spell(spell_one);
            create_character.push_spell(spell_two);

            choose_class();
        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);

        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {

            let select_one = document.querySelector("#select_one");

            let crossbow = document.querySelector('#crossbow');
            let select_simple = document.querySelector('#select_simple');

            let pouch = document.querySelector('#pouch');
            let focus = document.querySelector('#focus');

            let dungeoneer = document.querySelector('#dungeoneer');
            let scholar = document.querySelector('#scholar');



            if(item.id === "crossbow")
            {
                crossbow.style.backgroundColor = 'var(--clr-red-200)';
                select_simple.style.backgroundColor = 'white';

                crossbow.value = '1';
                select_simple.value = '0';

                select_one.disabled = true;
            }
            if(item.id === 'select_simple')
            {
                crossbow.style.backgroundColor = 'white';
                select_simple.style.backgroundColor = 'var(--clr-red-200)';

                crossbow.value = '0';
                select_simple.value = '1';

                select_one.disabled = false;
            }
            if(item.id === "pouch")
            {
                pouch.style.backgroundColor = 'var(--clr-red-200)';
                focus.style.backgroundColor = 'white';

                pouch.value= '1';
                focus.value = "0";
            }
            if(item.id === "focus")
            {
                pouch.style.backgroundColor = 'white';
                focus.style.backgroundColor = 'var(--clr-red-200)';

                pouch.value= '0';
                focus.value = "1";
            }
            if(item.id === "dungeoneer")
            {

                dungeoneer.style.backgroundColor = 'var(--clr-red-200)';
                scholar.style.backgroundColor = 'white';

                dungeoneer.value = "1";
                scholar.value= '0';
            }
            if(item.id === "scholar")
            {
                dungeoneer.style.backgroundColor = 'white';
                scholar.style.backgroundColor = 'var(--clr-red-200)';

                dungeoneer.value = "0";
                scholar.value= '1';
            }
        }))
    }

    if(input_class[1] === 'Wizard')
    {
        /*
            show hit points
            show proficiencies
            choose 2 skills from list
            add spells (according to class cantrip/spells amount)

            equipment options
         */
        let container_class_details = document.createElement('div');
        container_class_details.classList.add('container-class-details');

        let create_show_name = document.createElement('div');
        create_show_name.classList.add('create-show-name');
        create_show_name.innerHTML = input_class[1].toString();

        container_class_details.appendChild(create_show_name);

        let create_show_proficiency = document.createElement('div');
        create_show_proficiency.classList.add('create-show-proficiency');
        let dice = document.createElement('div');
        dice.innerHTML = "HIT-DICE: " + input_class[2].toString();
        let points = document.createElement('div');
        points.innerHTML = "HIT-POINTS: " + input_class[3].toString();
        let armor = document.createElement('div');
        armor.innerHTML = "ARMOR: " + input_class[4].toString();
        let weapons = document.createElement('div');
        weapons.innerHTML = "WEAPONS: " + input_class[5].toString();
        let tools = document.createElement('div');
        tools.innerHTML = "TOOLS: " + input_class[6];
        let saves = document.createElement('div');
        saves.innerHTML = "SAVING-THROWS: " + input_class[7].toString();

        container_class_details.appendChild(dice);
        container_class_details.appendChild(points);
        container_class_details.appendChild(armor);
        container_class_details.appendChild(weapons);
        container_class_details.appendChild(tools);
        container_class_details.appendChild(saves);

        let skill_header = document.createElement('div');
        skill_header.classList.add('create-header');
        skill_header.innerHTML = "CHOOSE SKILLS";

        container_class_details.appendChild(skill_header);

        let skill_one = document.createElement('select');
        skill_one.ariaLabel = "choice1";
        skill_one.classList.add('create-select');
        skill_one.id = "one";

        let option = document.createElement('option');
        option.value = "--"
        option.innerHTML = "--";

        skill_one.appendChild(option);

        for(let i = 0; i < wizard_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = wizard_skill_list[i]
            option.innerHTML = wizard_skill_list[i]

            skill_one.appendChild(option);
        }

        let skill_two = document.createElement('select');
        skill_two.ariaLabel = "choice1";
        skill_two.classList.add('create-select');
        skill_two.id = "two";

        let option2 = document.createElement('option');
        option2.value = "--"
        option2.innerHTML = "--";

        skill_two.appendChild(option2);

        for(let i = 0; i < wizard_skill_list.length; i++)
        {
            let option = document.createElement('option');
            option.value = wizard_skill_list[i]
            option.innerHTML = wizard_skill_list[i]

            skill_two.appendChild(option);
        }



        skill_one.addEventListener('change', function()
        {
            select_check(this);
        })
        skill_two.addEventListener('change', function()
        {
            select_check(this);
        })

        container_class_details.appendChild(skill_one);
        container_class_details.appendChild(skill_two);

        /*********************************************************************************************************************/

        let equip_header = document.createElement('div');
        equip_header.classList.add('create-header');
        equip_header.innerHTML = "CHOOSE EQUIPMENT";

        container_class_details.appendChild(equip_header);

        let weapon_choose = document.createElement('div');
        weapon_choose.classList.add('weapon-choose-select');

        /*********************************************************************************************************************/

        let equipment_one = document.createElement('div');
        equipment_one.classList.add("equipment-radio");

        let weapon_div_1 = document.createElement('div');
        weapon_div_1.classList.add('radio-div');
        let radio_one = document.createElement('div');
        radio_one.classList.add('create-radio-btn');
        radio_one.id="quarterstaff"
        radio_one.classList.add('equip1');

        let radio_one_text = document.createElement('div');
        radio_one_text.innerHTML = "Quarterstaff";

        weapon_div_1.appendChild(radio_one);
        weapon_div_1.appendChild(radio_one_text);

        equipment_one.appendChild(weapon_div_1);

        let or1 = document.createElement('div');
        or1.innerHTML = "OR";

        equipment_one.appendChild(or1);

        let weapon_div_2 = document.createElement('div');
        weapon_div_2.classList.add('radio-div');
        let radio_two = document.createElement('div');
        radio_two.classList.add('create-radio-btn');
        radio_two.id="dagger";
        radio_two.classList.add('equip1');

        let radio_two_text = document.createElement('div');
        radio_two_text.innerHTML = "Dagger"

        weapon_div_2.appendChild(radio_two);
        weapon_div_2.appendChild(radio_two_text);

        equipment_one.appendChild(weapon_div_2);

        weapon_choose.appendChild(equipment_one);

        /*********************************************************************************************************************/

        let equipment_two = document.createElement('div');
        equipment_two.classList.add("equipment-radio");

        let weapon2_div_1 = document.createElement('div');
        weapon2_div_1.classList.add('radio-div');
        let radio_three = document.createElement('div');
        radio_three.classList.add('create-radio-btn');
        radio_three.id="pouch"
        radio_three.classList.add('equip1');

        let radio_three_text = document.createElement('div');
        radio_three_text.innerHTML = "Component Pouch";

        weapon2_div_1.appendChild(radio_three);
        weapon2_div_1.appendChild(radio_three_text);

        equipment_two.appendChild(weapon2_div_1);

        let or2 = document.createElement('div');
        or2.innerHTML = "OR";

        equipment_two.appendChild(or2);

        let weapon2_div_2 = document.createElement('div');
        weapon2_div_2.classList.add('radio-div');
        let radio_four = document.createElement('div');
        radio_four.classList.add('create-radio-btn');
        radio_four.id="focus"
        radio_four.classList.add('equip1');

        let radio_four_text = document.createElement('div');
        radio_four_text.innerHTML = "Arcane Focus";

        weapon2_div_2.appendChild(radio_four);
        weapon2_div_2.appendChild(radio_four_text);

        equipment_two.appendChild(weapon2_div_2);

        weapon_choose.appendChild(equipment_two);

        /*********************************************************************************************************************/

        let equipment_three = document.createElement('div');
        equipment_three.classList.add("equipment-radio");

        let weapon3_div_1 = document.createElement('div');
        weapon3_div_1.classList.add('radio-div');
        let radio_five = document.createElement('div');
        radio_five.classList.add('create-radio-btn');
        radio_five.id="explorer"
        radio_five.classList.add('equip1');

        let radio_five_text = document.createElement('div');
        radio_five_text.innerHTML = "Explorer's Pack";

        weapon3_div_1.appendChild(radio_five);
        weapon3_div_1.appendChild(radio_five_text);

        equipment_three.appendChild(weapon3_div_1);

        let or4 = document.createElement('div');
        or4.innerHTML = "OR";

        equipment_three.appendChild(or4);

        let weapon3_div_2 = document.createElement('div');
        weapon3_div_2.classList.add('radio-div');
        let radio_six = document.createElement('div');
        radio_six.classList.add('create-radio-btn');
        radio_six.id="scholar"
        radio_six.classList.add('equip1');

        let radio_six_text = document.createElement('div');
        radio_six_text.innerHTML = "Scholar's Pack";

        weapon3_div_2.appendChild(radio_six);
        weapon3_div_2.appendChild(radio_six_text);

        equipment_three.appendChild(weapon3_div_2);

        weapon_choose.appendChild(equipment_three);


        /*****************************************************************************************************************/

        let equipment_four = document.createElement('div');
        equipment_four.classList.add("equipment-standard");

        let div5= document.createElement('div');
        div5.innerHTML = 'Spell Book';

        equipment_four.appendChild(div5);

        weapon_choose.appendChild(equipment_four);


        let wizard_spell_count = 2;
        let wizard_cantrip_count = 3;

        let cantrip_header = document.createElement('div')
        cantrip_header.classList.add('create-header');
        cantrip_header.innerHTML = "CHOOSE CANTRIPS";

        weapon_choose.appendChild(cantrip_header);

        let cantrip = document.createElement('div');
        cantrip.classList.add('create-add-spells');

        for(let i = 0; i < wizard_cantrip_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-cantrips');
            select.id = 'cantrip_select_' + i.toString();

            let request = new XMLHttpRequest();
            let url= "get_class_cantrips.php?name=" + "Wizard";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                for(let i = 0; i < response.length; i++)
                {
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        cantrip.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(cantrip);


        let spell_header = document.createElement('div')
        spell_header.classList.add('create-header');
        spell_header.innerHTML = "CHOOSE SPELLS";

        weapon_choose.appendChild(spell_header);

        let spells = document.createElement('div');
        spells.classList.add('create-add-spells');

        for(let i = 0; i < wizard_spell_count; i++)
        {
            let select = document.createElement('select');
            select.classList.add('select-spells');
            select.id = "spell_select_" + i.toString();
            let request = new XMLHttpRequest();
            let url= "get_class_spells.php?name=" + "Wizard";
            request.open('Get', url, true);
            request.onload = function()
            {
                let response = JSON.parse(this.response);
                for(let i = 0; i < response.length; i++)
                {
                    let option = document.createElement('option');
                    option.value = response[i][0];
                    option.innerHTML = response[i][0];
                    select.appendChild(option);
                    if(i === response.length - 1)
                    {
                        spells.appendChild(select);
                    }
                }
            }
            request.send();

        }
        weapon_choose.appendChild(spells);

        /*********************************************************************************************************************/
        let cancel_choose = document.createElement('div');
        cancel_choose.classList.add('display-race-buttons');
        let cancel = document.createElement('div');
        cancel.classList.add('show-cancel')
        cancel.innerHTML = "CANCEL";
        cancel.addEventListener('click', function()
        {
            class_reset();
            cancel_class();
        });
        let choose = document.createElement('div');
        choose.classList.add('show-choose');
        choose.innerHTML = "CHOOSE";
        choose.addEventListener('click', function()
        {

            //reset
            class_reset();
            //set
            create_character.hit_dice = input_class[2].toString();
            set_max_hit(input_class[3].toString());
            create_character.armor_prof = input_class[4].toString();
            create_character.weapon_prof = input_class[5].toString();
            create_character.tool_prof = input_class[6].toString();

            set_prof(skill_one.value);
            set_prof(skill_two.value);

            create_character.intelligence_prof = "1";
            create_character.wisdom_prof = '1';

            create_character.backpack += "Spellbook";

            if(radio_one.value === '1')
            {
                create_character.backpack += ", " + radio_one_text.innerHTML;
            }
            if(radio_two.value === '1')
            {
                create_character.backpack += ", " + radio_two_text.innerHTML;
            }
            if(radio_three.value === '1')
            {
                create_character.backpack += ", " + radio_three_text.innerHTML;
            }
            if(radio_four.value === '1')
            {
                create_character.backpack += ", " + radio_four_text.innerHTML;
            }
            if(radio_five.value === '1')
            {
                create_character.backpack += ", " + radio_five_text.innerHTML;
            }
            if(radio_six.value === '1')
            {
                create_character.backpack += ", " + radio_six_text.innerHTML;
            }


            let cantrip_one = document.querySelector('#cantrip_select_0').value;
            let cantrip_two = document.querySelector('#cantrip_select_1').value;
            let cantrip_three = document.querySelector('#cantrip_select_2').value;

            let spell_one = document.querySelector('#spell_select_0').value;
            let spell_two = document.querySelector('#spell_select_1').value;


            create_character.push_cantrip(cantrip_one);
            create_character.push_cantrip(cantrip_two);
            create_character.push_cantrip(cantrip_three);

            create_character.push_spell(spell_one);
            create_character.push_spell(spell_two);

            console.log(create_character);

            choose_class();

        });

        cancel_choose.appendChild(cancel);
        cancel_choose.appendChild(choose);

        weapon_choose.appendChild(cancel_choose);

        container_class_details.appendChild(weapon_choose);

        let show_class_details = document.querySelector('#show-class-details');
        show_class_details.appendChild(container_class_details);

        let equip_one = document.querySelectorAll('.equip1');
        equip_one.forEach((item) => item.addEventListener('click', function()
        {


            let quarterstaff = document.querySelector('#quarterstaff');
            let dagger = document.querySelector('#dagger');

            let pouch = document.querySelector('#pouch');
            let focus = document.querySelector('#focus');

            let explorer = document.querySelector('#explorer');
            let scholar = document.querySelector('#scholar');



            if(item.id === "quarterstaff")
            {
                quarterstaff.style.backgroundColor = 'var(--clr-red-200)';
                dagger.style.backgroundColor = 'white';

                quarterstaff.value = '1';
                dagger.value = '0';
            }
            if(item.id === 'dagger')
            {
                quarterstaff.style.backgroundColor = 'white';
                dagger.style.backgroundColor = 'var(--clr-red-200)';

                quarterstaff.value = '0';
                dagger.value = '1';
            }
            if(item.id === "pouch")
            {
                pouch.style.backgroundColor = 'var(--clr-red-200)';
                focus.style.backgroundColor = 'white';

                pouch.value= '1';
                focus.value = "0";
            }
            if(item.id === "focus")
            {
                pouch.style.backgroundColor = 'white';
                focus.style.backgroundColor = 'var(--clr-red-200)';

                pouch.value= '0';
                focus.value = "1";
            }
            if(item.id === "explorer")
            {

                explorer.style.backgroundColor = 'var(--clr-red-200)';
                scholar.style.backgroundColor = 'white';

                explorer.value = "1";
                scholar.value= '0';
            }
            if(item.id === "scholar")
            {
                explorer.style.backgroundColor = 'white';
                scholar.style.backgroundColor = 'var(--clr-red-200)';

                explorer.value = "0";
                scholar.value= '1';
            }
        }))

    }

}

//variables for holding values from the select_check function
let temp1 = 0
let temp2 = 0
let temp3 = 0
let temp4 = 0


function select_check(value)
{
    let select_list = document.querySelectorAll('.create-select');
    console.log(value.id);
    if(value.id === 'one')
    {
        if(value.selectedIndex === 0)
        {
            select_list.forEach((item) => item.options[temp1].style.display = 'block');
            temp1 = 0;
        }
        if(temp1 === 0 && value.selectedIndex > 0)
        {
            select_list.forEach((item) => item.options[value.selectedIndex].style.display = 'none');
            temp1 = value.selectedIndex;
        }
        else
        {
            select_list.forEach((item) => item.options[temp1].style.display = 'block');
            select_list.forEach((item) => item.options[value.selectedIndex].style.display = 'none');
            temp1 = value.selectedIndex;
        }
    }
    if(value.id === 'two')
    {
        if(value.selectedIndex === 0)
        {
            select_list.forEach((item) => item.options[temp2].style.display = 'block');
            temp2 = 0;
        }
        if(temp2 === 0 && value.selectedIndex > 0)
        {
            select_list.forEach((item) => item.options[value.selectedIndex].style.display = 'none');
            temp2 = value.selectedIndex;
        }
        else
        {
            select_list.forEach((item) => item.options[temp2].style.display = 'block');
            select_list.forEach((item) => item.options[value.selectedIndex].style.display = 'none');
            temp2 = value.selectedIndex;
        }
    }
    if(value.id === 'three')
    {
        if(value.selectedIndex === 0)
        {
            select_list.forEach((item) => item.options[temp3].style.display = 'block');
            temp3 = 0;
        }
        if(temp3 === 0 && value.selectedIndex > 0)
        {
            select_list.forEach((item) => item.options[value.selectedIndex].style.display = 'none');
            temp3 = value.selectedIndex;
        }
        else
        {
            select_list.forEach((item) => item.options[temp3].style.display = 'block');
            select_list.forEach((item) => item.options[value.selectedIndex].style.display = 'none');
            temp3 = value.selectedIndex;
        }

    }
    if(value.id === 'four')
    {
        if(value.selectedIndex === 0)
        {
            select_list.forEach((item) => item.options[temp4].style.display = 'block');
            temp4 = 0;
        }
        if(temp4 === 0 && value.selectedIndex > 0)
        {
            select_list.forEach((item) => item.options[value.selectedIndex].style.display = 'none');
            temp4 = value.selectedIndex;
        }
        else
        {
            select_list.forEach((item) => item.options[temp4].style.display = 'block');
            select_list.forEach((item) => item.options[value.selectedIndex].style.display = 'none');
            temp4 = value.selectedIndex;
        }

    }

}

function cancel_class()
{
    let show_class = document.querySelector('#show-class')
    let show_details = document.querySelector('#show-class-details')

    show_class.classList.add('active-container');
    show_details.classList.remove('active-container');

    clear_children(show_details);
}

function choose_class()
{
    let show_abilities = document.querySelector("#show-ability");
    let show_details = document.querySelector('#show-class-details');

    show_abilities.classList.add('active-container');
    show_details.classList.remove('active-container');

    get_ability();
}

let ability_list = ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA'];
let ability_numbers = ['15', '14', '13', '12', '10', '8'];

function get_ability()
{
    let container_class_details = document.createElement('div');
    container_class_details.classList.add('container-class-details');

    let main_ability_container = document.createElement('div');
    main_ability_container.classList.add('abilities-container');

    /****************************************************************************************/
    for(let x = 0; x < ability_list.length; x++)
    {
        let container = document.createElement('div');
        container.classList.add('ability');

        let ability_select_container = document.createElement('div');
        ability_select_container.classList.add('ability-select-container');

        let label = document.createElement('label');
        label.htmlFor = ability_list[x];
        label.innerHTML = ability_list[x];

        ability_select_container.appendChild(label);

        let select = document.createElement('select');
        select.classList.add('ability-select');
        select.id = ability_list[x];

        let option_one = document.createElement('option');
        option_one.value = '0';
        option_one.innerHTML = '--';

        select.appendChild(option_one);

        for(let i = 0; i < ability_numbers.length; i++)
        {
            let option = document.createElement('option');
            option.value = ability_numbers[i];
            option.innerHTML = ability_numbers[i];
            select.appendChild(option);
        }

        ability_select_container.appendChild(select);

        container.appendChild(ability_select_container);
        main_ability_container.appendChild(container);
    }

    /****************************************************************************************/

    let cancel_choose = document.createElement('div');
    cancel_choose.classList.add('display-race-buttons');
    let cancel = document.createElement('div');
    cancel.classList.add('show-cancel')
    cancel.innerHTML = "CANCEL";
    cancel.addEventListener('click', function()
    {
        cancel_abilities();
    });
    let choose = document.createElement('div');
    choose.classList.add('show-choose');
    choose.innerHTML = "CHOOSE";
    choose.addEventListener('click', function()
    {
        let check_list = document.querySelectorAll('.ability-select');

        check_list.forEach((item) => set_abilites(item))

        console.log(create_character);
        choose_abilities();
    });

    cancel_choose.appendChild(cancel);
    cancel_choose.appendChild(choose);


    container_class_details.appendChild(main_ability_container);
    container_class_details.appendChild(cancel_choose);
    let show_abilities = document.querySelector("#show-ability");
    show_abilities.appendChild(container_class_details);

    let select_list = document.querySelectorAll('.ability-select');
    select_list.forEach((item) => item.addEventListener('change', search_and_update));
}

function set_abilites(item)
{
    if(item.id === 'STRENGTH')
    {
        if(create_character.strength === "")
        {
            create_character.strength += item.value;
        }
        else
        {
            create_character.strength = (parseInt(create_character.strength) + parseInt(item.value)).toString();
        }
    }
    if(item.id === 'DEXTERITY')
    {
        if(create_character.dexterity === "")
        {
            create_character.dexterity += item.value;
        }
        else
        {
            create_character.dexterity = (parseInt(create_character.dexterity) + parseInt(item.value)).toString();
        }
    }
    if(item.id === 'CONSTITUTION')
    {
        if(create_character.constitution === "")
        {
            create_character.constitution += item.value;
        }
        else
        {
            create_character.constitution = (parseInt(create_character.constitution) + parseInt(item.value)).toString();
        }
    }
    if(item.id === 'INTELLIGENCE')
    {
        if(create_character.intelligence === "")
        {
            create_character.intelligence += item.value;
        }
        else
        {
            create_character.intelligence = (parseInt(create_character.intelligence) + parseInt(item.value)).toString();
        }
    }if(item.id === 'WISDOM')
{
    if(create_character.wisdom === "")
    {
        create_character.wisdom += item.value;
    }
    else
    {
        create_character.wisdom = (parseInt(create_character.wisdom) + parseInt(item.value)).toString();
    }
}if(item.id === 'CHARISMA')
{
    if(create_character.charisma === "")
    {
        create_character.charisma += item.value;
    }
    else
    {
        create_character.charisma = (parseInt(create_character.charisma) + parseInt(item.value)).toString();
    }
}


}

let strength_index = 0;
let dexterity_index = 0;
let constitution_index = 0;
let intelligence_index = 0;
let wisdom_index = 0;
let charisma_index = 0;

function search_and_update()
{
    let select_list = document.querySelectorAll('.ability-select');

    console.log(this.id);
    if(this.value > 0) {
        if (this.id === 'STRENGTH') {
            if (strength_index === 0) {
                strength_index = this.selectedIndex;
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
            } else {
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[strength_index].style.display = 'block';
                }
                strength_index = this.selectedIndex;
            }
        }
        if (this.id === 'DEXTERITY') {
            if (dexterity_index === 0) {
                dexterity_index = this.selectedIndex;
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
            } else {
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[dexterity_index].style.display = 'block';
                }
                dexterity_index = this.selectedIndex;
            }
        }
        if (this.id === 'CONSTITUTION') {
            if (constitution_index === 0) {
                constitution_index = this.selectedIndex;
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
            } else {
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[constitution_index].style.display = 'block';
                }
                constitution_index = this.selectedIndex;
            }
        }
        if (this.id === 'INTELLIGENCE') {
            if (intelligence_index === 0) {
                intelligence_index = this.selectedIndex;
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
            } else {
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[intelligence_index].style.display = 'block';
                }
                intelligence_index = this.selectedIndex;
            }
        }
        if (this.id === 'WISDOM') {
            if (wisdom_index === 0) {
                wisdom_index = this.selectedIndex;
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
            } else {
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[wisdom_index].style.display = 'block';
                }
                wisdom_index = this.selectedIndex;
            }
        }
        if (this.id === 'CHARISMA') {
            if (charisma_index === 0) {
                charisma_index = this.selectedIndex;
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
            } else {
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[this.selectedIndex].style.display = 'none';
                }
                for (let i = 0; i < select_list.length; i++) {
                    select_list[i].options[charisma_index].style.display = 'block';
                }
                charisma_index = this.selectedIndex;
            }
        }
    }
    else
    {
        if (this.id === 'STRENGTH')
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[strength_index].style.display = 'block';
            }
            strength_index = 0;
        }
        if (this.id === 'DEXTERITY')
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[dexterity_index].style.display = 'block';
            }
            dexterity_index = 0;
        }
        if (this.id === 'CONSTITUTION')
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[constitution_index].style.display = 'block';
            }
            constitution_index = 0;
        }
        if (this.id === 'INTELLIGENCE')
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[intelligence_index].style.display = 'block';
            }
            intelligence_index = 0;
        }
        if (this.id === 'WISDOM')
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[wisdom_index].style.display = 'block';
            }
            wisdom_index = 0;
        }

        if (this.id === 'CHARISMA')
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[charisma_index].style.display = 'block';
            }
            charisma_index = 0;
        }
    }
}//END SEARCH AND UPDATE

function get_background()
{
    let container_class_details = document.createElement('div');
    container_class_details.classList.add('container-class-details');



    let show_abilities = document.querySelector("#show-background");
    show_abilities.appendChild(container_class_details);
}

function cancel_abilities()
{
    let show_abilities = document.querySelector("#show-ability");
    let show_details = document.querySelector('#show-class-details');

    show_abilities.classList.remove('active-container');
    show_details.classList.add('active-container');

    clear_children(show_abilities);
}

function choose_abilities()
{
    let show_abilities = document.querySelector("#show-ability");
    let show_background = document.querySelector('#show-background');

    show_abilities.classList.remove('active-container');
    show_background.classList.add('active-container');

    let character_description = document.querySelector("#character-description");
    character_description.addEventListener('click', show_hide_extras);

    let physical_traits = document.querySelector("#physical-traits");
    physical_traits.addEventListener('click', show_hide_extras);

    let personality_traits = document.querySelector("#personality-traits");
    personality_traits.addEventListener('click', show_hide_extras);

    let character_notes = document.querySelector('#character-notes');
    character_notes.addEventListener('click', show_hide_extras);

    let personality_modal = document.querySelector('#personality-modal');
    let ideals_modal = document.querySelector('#ideals-modal');
    let bonds_modal = document.querySelector('#bonds-modal');
    let flaws_modal = document.querySelector('#flaws-modal');

    let org_modal = document.querySelector('#org-modal');
    let allies_modal = document.querySelector('#allies-modal');
    let enemies_modal = document.querySelector('#enemies-modal');
    let backstory_modal = document.querySelector('#backstory-modal');



    let personality_button = document.querySelector('#personality-btn');
    personality_button.addEventListener('click', function()
    {
        let background = document.querySelector("#background-choice").value;
        console.log(background);
        if(background !== "0")
        {
            let url = "get_personality.php?name=" + background;
            console.log(url);
            fill_traits("personality", url);
        }
        else
        {
            fill_empty_traits("personality");
        }
        personality_modal.style.display = 'grid';
    })
    let ideal_button = document.querySelector('#ideals-btn');
    ideal_button.addEventListener('click', function()
    {
        let background = document.querySelector("#background-choice").value;
        if(background !== "0")
        {
            let url = "get_ideals.php?name=" + background;
            console.log(background);
            fill_traits("ideals", url);
        }
        else
        {
            fill_empty_traits("ideals");
        }

        ideals_modal.style.display = 'grid';
    })
    let bond_button = document.querySelector('#bonds-btn');
    bond_button.addEventListener('click', function()
    {
        let background = document.querySelector("#background-choice").value;
        console.log(background);
        if(background !== "0")
        {
            let url = "get_bonds.php?name=" + background;
            fill_traits("bonds", url);
        }
        else
        {
            fill_empty_traits("bonds");
        }


        bonds_modal.style.display = 'grid';
    })
    let flaw_button = document.querySelector('#flaws-btn');
    flaw_button.addEventListener('click', function()
    {
        let background = document.querySelector("#background-choice").value;
        console.log(background);
        if(background !== "0")
        {
            let url = "get_flaws.php?name=" + background;
            fill_traits("flaws", url);
        }
        else
        {
            fill_empty_traits("flaws");
        }


        flaws_modal.style.display = 'grid';
    })

    let org_button = document.querySelector('#org-btn');
    org_button.addEventListener('click', function()
    {
        org_modal.style.display = 'grid';
    })
    let allies_button = document.querySelector('#allies-btn');
    allies_button.addEventListener('click', function()
    {
        allies_modal.style.display = 'grid';
    })

    let enemy_button = document.querySelector('#enemies-btn');
    enemy_button.addEventListener('click', function()
    {
        enemies_modal.style.display = 'grid';
    })

    let backstory_button = document.querySelector('#backstory-btn');
    backstory_button.addEventListener('click', function()
    {
        backstory_modal.style.display = 'grid';
    })

    get_background_name();
}

function modal_close()
{
    let modal_list = document.querySelectorAll('.modal-traits');
    modal_list.forEach((item) => item.style.display = 'none');
}

let feature_check_character= "";
let feature_check_physical = "";
let feature_check_personality = "";
let feature_check_notes = "";

function show_hide_extras()
{
    console.log(this.id);
    let show_character_description = document.querySelector("#character-description-div");
    let show_physical_traits = document.querySelector("#physical-traits-div");
    let show_personality_traits = document.querySelector('#personality-traits-div');
    let show_notes = document.querySelector('#character-note-div');


    if(this.id === "character-description" && feature_check_character === "")
    {
        this.innerHTML = "-"
        show_character_description.classList.add('show-features-active');
        show_character_description.classList.add('feature-margin-none');
        feature_check_character = this.id;
    }
    else if(this.id === feature_check_character)
    {
        this.innerHTML = "+";
        show_character_description.classList.remove('show-features-active');
        show_character_description.classList.remove('feature-margin-none');
        feature_check_character = "";
    }

    if(this.id === "physical-traits" && feature_check_physical === "")
    {
        this.innerHTML = "-"
        show_physical_traits.classList.add('show-features-active');
        show_physical_traits.classList.add('feature-margin-none');
        feature_check_physical = this.id;
    }
    else if(this.id === feature_check_physical)
    {
        this.innerHTML = "+";
        show_physical_traits.classList.remove('show-features-active');
        show_physical_traits.classList.remove('feature-margin-none');
        feature_check_physical = "";
    }

    if(this.id === "personality-traits" && feature_check_personality === "")
    {
        this.innerHTML = "-"
        show_personality_traits.classList.add('show-features-active');
        show_personality_traits.classList.add('feature-margin-none');
        feature_check_personality = this.id;
    }
    else if(this.id === feature_check_personality)
    {
        this.innerHTML = "+";
        show_personality_traits.classList.remove('show-features-active');
        show_personality_traits.classList.remove('feature-margin-none');
        feature_check_personality = "";
    }

    if(this.id === "character-notes" && feature_check_notes === "")
    {
        this.innerHTML = "-"
        show_notes.classList.add('show-features-active');
        show_notes.classList.add('feature-margin-none');
        feature_check_notes = this.id;
    }
    else if(this.id === feature_check_notes)
    {
        this.innerHTML = "+";
        show_notes.classList.remove('show-features-active');
        show_notes.classList.remove('feature-margin-none');
        feature_check_notes = "";
    }

}

function get_background_name()
{


    let request = new XMLHttpRequest();

    let url = "get_background_name.php";
    request.open('Get', url, true)
    request.onload = function()
    {
        let response= JSON.parse(this.response);
        fill_background_select(response)
    }

    request.send();
}

function fill_background_select(names)
{
    let select = document.querySelector('#background-choice');

    let first_option = document.createElement('option');
    first_option.value = '0';
    first_option.innerHTML = "--";

    select.appendChild(first_option);

    for(let i = 0; i < names.length; i++)
    {
        console.log(names[i][0]);
        let option = document.createElement('option');
        option.value = names[i][0];
        option.innerHTML = names[i][0];
        select.appendChild(option);
    }
}

let personality_trait = "";
let ideal_trait = "";
let bond_trait = "";
let flaw_trait = "";


function fill_traits(name, input_url)
{
    let personality_modal = document.querySelector('#personality-modal');
    let ideals_modal = document.querySelector('#ideals-modal');
    let bonds_modal = document.querySelector('#bonds-modal');
    let flaws_modal = document.querySelector('#flaws-modal');

    if(name === 'personality')
    {
        let main_div = document.querySelector('#personality-content');
        clear_children(main_div);

        let top_div = document.createElement('div');
        top_div.classList.add('top_div');
        let div_one = document.createElement('div');
        div_one.innerHTML = "d8"
        let div_two = document.createElement('div');
        div_two.innerHTML = "PERSONALITY TRAITS"
        let div_three = document.createElement('div');
        div_three.innerHTML = "ADD";

        top_div.appendChild(div_one);
        top_div.appendChild(div_two);
        top_div.appendChild(div_three);

        main_div.appendChild(top_div)

        let request = new XMLHttpRequest();
        request.open('Get', input_url, true);
        request.onload = function()
        {

            let response = JSON.parse(this.response)
            console.log(response);
            for(let i = 0; i < response.length; i++)
            {
                let top = document.createElement('div');
                top.classList.add('top_div');
                let div_1 = document.createElement('div');

                div_1.innerHTML = response[i][2];
                let div_2 = document.createElement('div');
                div_2.innerHTML = response[i][3];
                div_2.classList.add('styles')
                let div_3 = document.createElement('div');

                let button = document.createElement('button');
                button.id = 'personality' + i.toString();
                button.innerHTML = "ADD";
                button.addEventListener('click', function()
                {
                    create_character.personality_trait = response[i][3];
                    personality_modal.style.display = 'none';
                })
                div_3.appendChild(button);
                top.appendChild(div_1);
                top.appendChild(div_2);
                top.appendChild(div_3);

                main_div.appendChild(top)
            }

        }
        request.send();
    }

    if(name === 'ideals')
    {
        let main_div = document.querySelector('#ideals-content');
        clear_children(main_div);

        let top_div = document.createElement('div');
        top_div.classList.add('top_div');
        let div_one = document.createElement('div');
        div_one.innerHTML = "d6"
        let div_two = document.createElement('div');
        div_two.innerHTML = "IDEALS"
        let div_three = document.createElement('div');
        div_three.innerHTML = "ADD";

        top_div.appendChild(div_one);
        top_div.appendChild(div_two);
        top_div.appendChild(div_three);

        main_div.appendChild(top_div)

        let request = new XMLHttpRequest();
        request.open('Get', input_url, true);
        request.onload = function()
        {

            let response = JSON.parse(this.response)
            console.log(response);
            for(let i = 0; i < response.length; i++)
            {
                let top = document.createElement('div');
                top.classList.add('top_div');
                let div_1 = document.createElement('div');

                div_1.innerHTML = response[i][2];
                let div_2 = document.createElement('div');
                div_2.innerHTML = response[i][3];
                div_2.classList.add('styles')
                let div_3 = document.createElement('div');

                let button = document.createElement('button');
                button.id = 'personality' + i.toString();
                button.innerHTML = "ADD";
                button.addEventListener('click', function()
                {
                    create_character.ideal = response[i][3];
                    ideals_modal.style.display = 'none';
                })
                div_3.appendChild(button);
                top.appendChild(div_1);
                top.appendChild(div_2);
                top.appendChild(div_3);

                main_div.appendChild(top)
            }

        }
        request.send();
    }

    if(name === 'flaws')
    {
        let main_div = document.querySelector('#flaws-content');
        clear_children(main_div);

        let top_div = document.createElement('div');
        top_div.classList.add('top_div');
        let div_one = document.createElement('div');
        div_one.innerHTML = "d6"
        let div_two = document.createElement('div');
        div_two.innerHTML = "FLAWS"
        let div_three = document.createElement('div');
        div_three.innerHTML = "ADD";

        top_div.appendChild(div_one);
        top_div.appendChild(div_two);
        top_div.appendChild(div_three);

        main_div.appendChild(top_div)

        let request = new XMLHttpRequest();
        request.open('Get', input_url, true);
        request.onload = function()
        {

            let response = JSON.parse(this.response)
            console.log(response);
            for(let i = 0; i < response.length; i++)
            {
                let top = document.createElement('div');
                top.classList.add('top_div');
                let div_1 = document.createElement('div');

                div_1.innerHTML = response[i][2];
                let div_2 = document.createElement('div');
                div_2.innerHTML = response[i][3];
                div_2.classList.add('styles')
                let div_3 = document.createElement('div');

                let button = document.createElement('button');
                button.id = 'personality' + i.toString();
                button.innerHTML = "ADD";
                button.addEventListener('click', function()
                {
                    create_character.flaws = response[i][3];
                    flaws_modal.style.display = 'none';
                })
                div_3.appendChild(button);
                top.appendChild(div_1);
                top.appendChild(div_2);
                top.appendChild(div_3);

                main_div.appendChild(top)
            }

        }
        request.send();
    }

    if(name === 'bonds')
    {
        let main_div = document.querySelector('#bonds-content');
        clear_children(main_div);

        let top_div = document.createElement('div');
        top_div.classList.add('top_div');
        let div_one = document.createElement('div');
        div_one.innerHTML = "d6"
        let div_two = document.createElement('div');
        div_two.innerHTML = "BONDS"
        let div_three = document.createElement('div');
        div_three.innerHTML = "ADD";

        top_div.appendChild(div_one);
        top_div.appendChild(div_two);
        top_div.appendChild(div_three);

        main_div.appendChild(top_div)

        let request = new XMLHttpRequest();
        request.open('Get', input_url, true);
        request.onload = function()
        {

            let response = JSON.parse(this.response)
            console.log(response);
            for(let i = 0; i < response.length; i++)
            {
                let top = document.createElement('div');
                top.classList.add('top_div');
                let div_1 = document.createElement('div');

                div_1.innerHTML = response[i][2];
                let div_2 = document.createElement('div');
                div_2.innerHTML = response[i][3];
                div_2.classList.add('styles')
                let div_3 = document.createElement('div');

                let button = document.createElement('button');
                button.id = 'personality' + i.toString();
                button.innerHTML = "ADD";
                button.addEventListener('click', function()
                {
                    create_character.bonds = response[i][3];
                    bonds_modal.style.display = 'none';
                })
                div_3.appendChild(button);
                top.appendChild(div_1);
                top.appendChild(div_2);
                top.appendChild(div_3);

                main_div.appendChild(top)
            }

        }
        request.send();
    }

}


function fill_empty_traits(name)
{
    let personality_modal = document.querySelector('#personality-modal');
    let ideals_modal = document.querySelector('#ideals-modal');
    let bonds_modal = document.querySelector('#bonds-modal');
    let flaws_modal = document.querySelector('#flaws-modal');

    if(name === 'personality')
    {
        let content = document.querySelector('#personality-content');
        clear_children(content);
        let text = document.createElement('textarea');
        text.ariaLabel = "";
        let button = document.createElement("button");
        button.innerHTML="ADD";
        button.classList.add('styles');
        button.addEventListener('click', function()
        {
            create_character.personality_trait = text.innerHTML;
            personality_modal.style.display = 'none';
        })
        content.appendChild(text);
        content.appendChild(button);
    }
    if(name === 'ideals')
    {
        let content = document.querySelector('#ideals-content');
        clear_children(content);
        let text = document.createElement('textarea');
        text.ariaLabel = "";
        let button = document.createElement("button");
        button.innerHTML="ADD";
        button.classList.add('styles');
        button.addEventListener('click', function()
        {
            create_character.ideal = text.innerHTML;
            ideals_modal.style.display = 'none';
        })
        content.appendChild(text);
        content.appendChild(button);
    }
    if(name === 'bonds')
    {
        let content = document.querySelector('#bonds-content');
        clear_children(content);
        let text = document.createElement('textarea');
        text.ariaLabel = "";
        let button = document.createElement("button");
        button.innerHTML="ADD";
        button.classList.add('styles');
        button.addEventListener('click', function()
        {
            create_character.bonds = text.innerHTML;
            bonds_modal.style.display = 'none';
        })
        content.appendChild(text);
        content.appendChild(button);
    }
    if(name === 'flaws')
    {
        let content = document.querySelector('#flaws-content');
        clear_children(content);
        let text = document.createElement('textarea');
        text.ariaLabel = "";
        let button = document.createElement("button");
        button.innerHTML="ADD";
        button.classList.add('styles');
        button.addEventListener('click', function()
        {
            create_character.flaws = text.innerHTML;
            flaws_modal.style.display = 'none';
        })
        content.appendChild(text);
        content.appendChild(button);

    }
}


function set_max_hit(input)
{
    for(let i = 0; i < input.length; i++)
    {
        if(parseInt(input.charAt(i)))
        {
            create_character.max_hit_points += input.charAt(i);
        }
    }
}

function set_prof(input)
{
    if(input !== '--') {
        if (input === 'Acrobatics') {
            create_character.acrobatics_prof += "1";
        }
        if (input === 'Animal Handling') {
            create_character.animal_handling_prof += "1";
        }
        if (input === 'Arcana') {
            create_character.arcana_prof += "1";
        }
        if (input === 'Athletics') {
            create_character.athletics_prof += "1";
        }
        if (input === 'Deception') {
            create_character.deception_prof+= "1";
        }
        if (input === 'History') {
            create_character.history_prof += "1";
        }
        if (input === 'Insight') {
            create_character.insight_prof += "1";
        }
        if (input === 'Intimidation') {
            create_character.intimidation_prof += "1";
        }
        if (input === 'Investigation') {
            create_character.investigation_prof += "1";
        }
        if (input === 'Medicine') {
            create_character.medicine_prof += "1";
        }
        if (input === 'Nature') {
            create_character.nature_prof += "1";
        }
        if (input === 'Perception') {
            create_character.perception_prof += "1";
        }
        if (input === 'Performance') {
            create_character.performance_prof += '1';
        }
        if (input === 'Persuasion') {
            create_character.persuasion_prof += "1";
        }
        if (input === 'Religion') {
            create_character.religion_prof += "1";
        }
        if (input === 'Sleight of Hand') {
            create_character.slight_of_hand_prof += "1";
        }
        if (input === 'Stealth') {
            create_character.stealth_prof += "1";
        }
        if (input === 'Survival') {
            create_character.survival_prof += "1";
        }
    }

}


function remove_prof(input)
{
    if(input !== '--') {
        if (input === 'Acrobatics') {
            create_character.acrobatics_prof = "";
        }
        if (input === 'Animal Handling') {
            create_character.animal_handling_prof = "";
        }
        if (input === 'Arcana') {
            create_character.arcana_prof = "";
        }
        if (input === 'Athletics') {
            create_character.athletics_prof = "";
        }
        if (input === 'Deception') {
            create_character.deception_prof = "";
        }
        if (input === 'History') {
            create_character.history_prof = "";
        }
        if (input === 'Insight') {
            create_character.insight_prof = "";
        }
        if (input === 'Intimidation') {
            create_character.intimidation_prof = "";
        }
        if (input === 'Investigation') {
            create_character.investigation_prof = "";
        }
        if (input === 'Medicine') {
            create_character.medicine_prof = "";
        }
        if (input === 'Nature') {
            create_character.nature_prof = "";
        }
        if (input === 'Perception') {
            create_character.perception_prof = "";
        }
        if (input === 'Performance') {
            create_character.performance_prof = '';
        }
        if (input === 'Persuasion') {
            create_character.persuasion_prof = "";
        }
        if (input === 'Religion') {
            create_character.religion_prof = "";
        }
        if (input === 'Sleight of Hand') {
            create_character.slight_of_hand_prof = "";
        }
        if (input === 'Stealth') {
            create_character.stealth_prof = "";
        }
        if (input === 'Survival') {
            create_character.survival_prof = "";
        }
    }
}

function class_reset()
{
        create_character.acrobatics_prof = "0";
        create_character.animal_handling_prof = "0";
        create_character.arcana_prof = "0";
        create_character.athletics_prof = "0";
        create_character.deception_prof = "0";
        create_character.history_prof = "0";
        create_character.insight_prof = "0";
        create_character.intimidation_prof = "0";
        create_character.investigation_prof = "0";
        create_character.medicine_prof = "0";
        create_character.nature_prof = "0";
        create_character.perception_prof = "0";
        create_character.performance_prof = '0';
        create_character.persuasion_prof = "0";
        create_character.religion_prof = "0";
        create_character.slight_of_hand_prof = "0";
        create_character.stealth_prof = "0";
        create_character.survival_prof = "0";

        create_character.strength_prof = "0";
        create_character.dexterity_prof = "0";
        create_character.constitution_prof = "0";
        create_character.intelligence_prof = "0";
        create_character.wisdom_prof = "0";
        create_character.charisma_prof = "0";

        create_character.hit_dice = "";
        create_character.max_hit_points = "";

        create_character.backpack = "";

        create_character.language_prof = "";
        create_character.spells = [];
        create_character.cantrips = [];
        create_character.fighting_style = "";

        create_character.armor = [];
        create_character.weapons = [];
}




function create_listener()
{
    let create = document.querySelector('#add_character');

    create.addEventListener('click', function()
    {


        let alignment = document.querySelector('#alignment').value;
        let faith = document.querySelector('#faith').value;
        let hair = document.querySelector('#hair').value;
        let skin = document.querySelector('#skin').value;
        let eyes = document.querySelector('#eyes').value;
        let height = document.querySelector('#height').value;
        let weight = document.querySelector('#weight').value;
        let age = document.querySelector('#age').value;
        let gender = document.querySelector('#gender').value;
        if(alignment !== "0")
        {
            create_character.background = document.querySelector('#alignment').value;
        }
        //add alignment
        if(faith)
        {
            create_character.faith = faith;
        }
        if(hair)
        {
            create_character.hair = hair;
        }
        if(skin)
        {
            create_character.skin = skin;
        }
        if(eyes)
        {
            create_character.eyes = eyes;
        }
        if(height)
        {
            create_character.height = height;
        }
        if(weight)
        {
            create_character.weight = weight;
        }
        if(age)
        {
            create_character.age =age;
        }
        if(gender)
        {
            create_character.gender =gender;
        }

        set_ability_modifiers();

        set_ability_saves();

        set_skills_strength();

        set_skills_dexterity();

        set_skills_intelligence();

        set_skills_wisdom();

        set_skills_charisma();

        set_passives();

        create_character.name = document.querySelector('#character_name').value;

        create_character.user_id = get_cookie_create('usernumber');

        add_character_to_db();

    });
}




function set_ability_modifiers()
{
    let str = parseInt(create_character.strength);
    let dex = parseInt(create_character.dexterity);
    let con = parseInt(create_character.constitution);
    let intel = parseInt(create_character.intelligence);
    let wis = parseInt(create_character.wisdom);
    let chs = parseInt(create_character.charisma);

    let temp_str = (str-10) / 2;
    let temp_dex = (dex-10) / 2;
    let temp_con = (con-10) / 2;
    let temp_intel = (intel-10) / 2;
    let temp_wis = (wis-10) / 2;
    let temp_chs = (chs-10) / 2;

    if(temp_str > 0)
    {
        create_character.strength_mod = (Math.floor(temp_str)).toString();
    }
    else
    {
        create_character.strength_mod = (Math.ceil(temp_str)).toString();
    }

    if(temp_dex > 0)
    {
        create_character.dexterity_mod = (Math.floor(temp_dex)).toString();
    }
    else
    {
        create_character.dexterity_mod = (Math.ceil(temp_dex)).toString();
    }

    if(temp_con > 0)
    {
        create_character.constitution_mod = (Math.floor(temp_con)).toString();
    }
    else
    {
        create_character.constitution_mod = (Math.ceil(temp_con)).toString();
    }

    if(temp_intel > 0)
    {
        create_character.intelligence_mod = (Math.floor(temp_intel)).toString();
    }
    else
    {
        create_character.intelligence_mod = (Math.ceil(temp_intel)).toString();
    }

    if(temp_wis > 0)
    {
        create_character.wisdom_mod = (Math.floor(temp_wis)).toString();
    }
    else
    {
        create_character.wisdom_mod = (Math.ceil(temp_wis)).toString();
    }

    if(temp_chs > 0)
    {
        create_character.charisma_mod = (Math.floor(temp_chs)).toString();
    }
    else
    {
        create_character.charisma_mod = (Math.ceil(temp_chs)).toString();
    }

}


function set_ability_saves()
{
    if(create_character.strength_prof === '1')
    {
        create_character.strength_save = (parseInt(create_character.strength_mod) + 2).toString()
    }
    else
    {
        create_character.strength_save = create_character.strength_mod;
    }

    if(create_character.dexterity_prof === '1')
    {
        create_character.dexterity_save = (parseInt(create_character.dexterity_mod) + 2).toString()
    }
    else
    {
        create_character.dexterity_save = create_character.dexterity_mod;
    }

    if(create_character.constitution_prof === '1')
    {
        create_character.constitution_save = (parseInt(create_character.constitution_mod) + 2).toString()
    }
    else
    {
        create_character.constitution_save = create_character.constitution_mod;
    }

    if(create_character.intelligence_prof === '1')
    {
        create_character.intelligence_save = (parseInt(create_character.intelligence_mod) + 2).toString()
    }
    else
    {
        create_character.intelligence_save = create_character.intelligence_mod;
    }

    if(create_character.wisdom_prof === '1')
    {
        create_character.wisdom_save = (parseInt(create_character.wisdom_mod) + 2).toString()
    }
    else
    {
        create_character.wisdom_save = create_character.wisdom_mod;
    }

    if(create_character.charisma_prof === '1')
    {
        create_character.charisma_save = (parseInt(create_character.charisma_mod) + 2).toString()
    }
    else
    {
        create_character.charisma_save = create_character.charisma_mod;
    }
}

function set_skills_strength()
{
    let athletics_prof = parseInt(create_character.athletics);

    if(athletics_prof === 11)
    {
        create_character.athletics = (parseInt(create_character.strength_mod) + 4).toString()
    }
    if(athletics_prof === 1)
    {
        create_character.athletics = (parseInt(create_character.strength_mod) + 2).toString()
    }
    if(athletics_prof === 0)
    {
        create_character.athletics = (parseInt(create_character.strength_mod)).toString()
    }

}

function set_skills_dexterity()
{
    let acrobat_prof = parseInt(create_character.acrobatics_prof);
    let slight_of_hand_prof = parseInt(create_character.slight_of_hand_prof);
    let stealth_prof = parseInt(create_character.stealth_prof);

    if(acrobat_prof === 11)
    {
        create_character.acrobatics = (parseInt(create_character.dexterity_mod) + 4).toString()
    }
    if(slight_of_hand_prof === 11)
    {
        create_character.slight_of_hand = (parseInt(create_character.dexterity_mod) + 4).toString()
    }
    if(stealth_prof === 11)
    {
        create_character.stealth = (parseInt(create_character.dexterity_mod) + 4).toString()
    }
    if(acrobat_prof === 1)
    {
        create_character.acrobatics = (parseInt(create_character.dexterity_mod) + 2).toString()
    }
    if(slight_of_hand_prof === 1)
    {
        create_character.slight_of_hand = (parseInt(create_character.dexterity_mod) + 2).toString()
    }
    if(stealth_prof === 1)
    {
        create_character.stealth = (parseInt(create_character.dexterity_mod) + 2).toString()
    }
    if(acrobat_prof === 0)
    {
        create_character.acrobatics = (parseInt(create_character.dexterity_mod)).toString()
    }
    if(slight_of_hand_prof === 0)
    {
        create_character.slight_of_hand = (parseInt(create_character.dexterity_mod)).toString()
    }
    if(stealth_prof === 0)
    {
        create_character.stealth = (parseInt(create_character.dexterity_mod)).toString()
    }
}

function set_skills_intelligence()
{
    let arcana_prof = parseInt(create_character.arcana_prof);
    let history_prof = parseInt(create_character.history_prof);
    let investigation_prof = parseInt(create_character.investigation_prof);
    let nature_prof = parseInt(create_character.nature_prof);
    let religion_prof = parseInt(create_character.religion_prof);

    if(arcana_prof === 11)
    {
        create_character.arcana = (parseInt(create_character.intelligence_mod) + 4).toString()
    }
    if(history_prof === 11)
    {
        create_character.history= (parseInt(create_character.intelligence_mod) + 4).toString()
    }
    if(investigation_prof === 11)
    {
        create_character.investigation = (parseInt(create_character.intelligence_mod) + 4).toString()
    }
    if(nature_prof === 11)
    {
        create_character.nature = (parseInt(create_character.intelligence_mod) + 4).toString()
    }
    if(religion_prof === 11)
    {
        create_character.religion = (parseInt(create_character.intelligence_mod) + 4).toString()
    }
    if(arcana_prof === 1)
    {
        create_character.arcana = (parseInt(create_character.intelligence_mod) + 2).toString()
    }
    if(history_prof === 1)
    {
        create_character.history = (parseInt(create_character.intelligence_mod)+ 2).toString()
    }
    if(investigation_prof === 1)
    {
        create_character.investigation = (parseInt(create_character.intelligence_mod) + 2).toString()
    }
    if(nature_prof === 1)
    {
        create_character.nature = (parseInt(create_character.intelligence_mod) + 2).toString()
    }
    if(religion_prof === 1)
    {
        create_character.religion = (parseInt(create_character.intelligence_mod) + 2).toString()
    }
    if(arcana_prof === 0)
    {
        create_character.arcana = (parseInt(create_character.intelligence_mod)).toString()
    }
    if(history_prof === 0)
    {
        create_character.history = (parseInt(create_character.intelligence_mod)).toString()
    }
    if(investigation_prof === 0)
    {
        create_character.investigation = (parseInt(create_character.intelligence_mod)).toString()
    }
    if(nature_prof === 0)
    {
        create_character.nature = (parseInt(create_character.intelligence_mod)).toString()
    }
    if(religion_prof === 0)
    {
        create_character.religion = (parseInt(create_character.intelligence_mod)).toString()
    }


}

function set_skills_wisdom()
{
    let animal_prof = parseInt(create_character.animal_handling_prof);
    let insight_prof = parseInt(create_character.insight_prof);
    let medicine_prof = parseInt(create_character.medicine_prof);
    let perception_prof = parseInt(create_character.perception_prof);
    let survival_prof = parseInt(create_character.survival_prof);

    if(animal_prof === 11)
    {
        create_character.animal_handling = (parseInt(create_character.wisdom_mod) + 4).toString();
    }
    if(insight_prof === 11)
    {
        create_character.insight = (parseInt(create_character.wisdom_mod) + 4).toString();
    }
    if(medicine_prof === 11)
    {
        create_character.medicine = (parseInt(create_character.wisdom_mod) + 4).toString();
    }
    if(perception_prof === 11)
    {
        create_character.perception = (parseInt(create_character.wisdom_mod) + 4).toString();
    }
    if(survival_prof === 11)
    {
        create_character.survival = (parseInt(create_character.wisdom_mod) + 4).toString();
    }

    if(animal_prof === 1)
    {
        create_character.animal_handling = (parseInt(create_character.wisdom_mod) + 2).toString();
    }
    if(insight_prof === 1)
    {
        create_character.insight = (parseInt(create_character.wisdom_mod) + 2).toString();
    }
    if(medicine_prof === 1)
    {
        create_character.medicine = (parseInt(create_character.wisdom_mod) + 2).toString();
    }
    if(perception_prof === 1)
    {
        create_character.perception = (parseInt(create_character.wisdom_mod) + 2).toString();
    }
    if(survival_prof === 1)
    {
        create_character.survival = (parseInt(create_character.wisdom_mod) + 2).toString();
    }

    if(animal_prof === 0)
    {
        create_character.animal_handling = (parseInt(create_character.wisdom_mod)).toString();
    }
    if(insight_prof === 0)
    {
        create_character.insight = (parseInt(create_character.wisdom_mod)).toString();
    }
    if(medicine_prof === 0)
    {
        create_character.medicine = (parseInt(create_character.wisdom_mod)).toString();
    }
    if(perception_prof === 0)
    {
        create_character.perception = (parseInt(create_character.wisdom_mod)).toString();
    }
    if(survival_prof === 0)
    {
        create_character.survival = (parseInt(create_character.wisdom_mod)).toString();
    }

}

function set_skills_charisma()
{
    let deception_prof = parseInt(create_character.deception_prof);
    let intimidation_prof = parseInt(create_character.intimidation_prof);
    let performance_prof = parseInt(create_character.performance_prof);
    let persuasion_prof = parseInt(create_character.persuasion_prof);


    if(deception_prof === 11)
    {
        create_character.deception = (parseInt(create_character.charisma_mod) + 4).toString();
    }
    if(intimidation_prof=== 11)
    {
        create_character.intimidation = (parseInt(create_character.charisma_mod) + 4).toString();
    }
    if(performance_prof === 11)
    {
        create_character.performance = (parseInt(create_character.charisma_mod) + 4).toString();
    }
    if(persuasion_prof === 11)
    {
        create_character.persuasion = (parseInt(create_character.charisma_mod) + 4).toString();
    }


    if(deception_prof === 1)
    {
        create_character.deception = (parseInt(create_character.charisma_mod) + 2).toString();
    }
    if(intimidation_prof=== 1)
    {
        create_character.intimidation = (parseInt(create_character.charisma_mod) + 2).toString();
    }
    if(performance_prof === 1)
    {
        create_character.performance = (parseInt(create_character.charisma_mod) + 2).toString();
    }
    if(persuasion_prof === 1)
    {
        create_character.persuasion = (parseInt(create_character.charisma_mod) + 2).toString();
    }

    if(deception_prof === 0)
    {
        create_character.deception = (parseInt(create_character.charisma_mod)).toString();
    }
    if(intimidation_prof=== 0)
    {
        create_character.intimidation = (parseInt(create_character.charisma_mod)).toString();
    }
    if(performance_prof === 0)
    {
        create_character.performance = (parseInt(create_character.charisma_mod)).toString();
    }
    if(persuasion_prof === 0)
    {
        create_character.persuasion = (parseInt(create_character.charisma_mod).toString());
    }

}

function set_passives()
{
    create_character.passive_investigation = (parseInt(create_character.investigation) + 10).toString();
    create_character.passive_wisdom_perception = (parseInt(create_character.perception) + 10).toString();
    create_character.passive_wisdom_insight = (parseInt(create_character.insight) + 10).toString();
}

function add_character_to_db()
{
    let user_id = create_character.user_id;
    let character_name = create_character.name;
    let character_details = JSON.stringify(create_character);

    let url = 'insert_character.php?character_name=' + character_name + '&character_details=' + character_details + '&user_id=' + user_id;

    let request = new XMLHttpRequest();
    request.open('Get', url, true);
    request.onload = function()
    {
        let response = JSON.parse(this.response)
        console.log(response);
    }
    request.send();

    window.location.assign('manyhats-view-all.html');

}

function get_cookie_create(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}