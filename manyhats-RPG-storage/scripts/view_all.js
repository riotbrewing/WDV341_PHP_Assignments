function getCookie(cname) {
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

function remove_user()
{
    document.cookie = 'usernumber= ; expires=expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    document.cookie = 'admin=; expires= expires=expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}

function show_page_check()
{
    let validate = getCookie("usernumber");
    if(!parseInt(validate) > 0)
    {
        window.location.assign('manyhats-home.html');
    }
}

function add_hyperlink()
{
    let validate = getCookie("admin");
    if(validate === 'true')
    {
        let li = document.querySelector('#admin-link');
        console.log(li)
        li.style.visibility = 'visible';
    }
}

function get_characters()
{
    let user_id = getCookie('usernumber');

    let url = "get_characters.php?user_id=" + user_id;

    let request=new XMLHttpRequest();
    request.open('Get', url, true);

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        fill_page(response);
    }
    request.send();
}

function get_my_characters()
{
    let user_id = getCookie('usernumber');

    let url = "get_characters.php?user_id=" + user_id;

    let request=new XMLHttpRequest();
    request.open('Get', url, true);

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        fill_delete(response);
    }
    request.send();
}




function get_all_characters()
{
    let url = "get_all_characters.php?";

    let request=new XMLHttpRequest();
    request.open('Get', url, true);

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        console.log(response);
        fill_all_delete(response);
    }
    request.send();
}

function get_username()
{

}

function fill_page(character_list)
{
    for(let i = 0; i < character_list.length; i++)
    {
        let test = JSON.parse(character_list[i][3]);
        console.log(test);

        let main = document.createElement('div')
        main = document.createElement('div');
        main.classList.add('container-view');
        main.addEventListener('click', function()
        {
            fill_character_sheet(test);
        });

        let name_div = document.createElement('div');
        name_div.classList.add('character-name');
        name_div.innerHTML = test['name'];

        main.appendChild(name_div);

        let detail_div = document.createElement('div');
        detail_div.classList.add('character-details');

        let ul = document.createElement('ul');

        let li_1 = document.createElement('li');
        if(test['sub_race'] === "")
        {
            li_1.innerHTML = 'RACE: ' + test['race']
            ul.appendChild(li_1);
        }
        else
        {
            li_1.innerHTML = 'RACE: ' + test['race']
            let li_2 = document.createElement('li');
            li_2.innerHTML = 'SUB-RACE: ' + test['sub_race']
            ul.appendChild(li_1);
            ul.appendChild(li_2);
        }
        let li_3 = document.createElement('li');
        li_3.innerHTML = 'CLASS: ' + test['class_name']
        ul.appendChild(li_3);



        detail_div.appendChild(ul);
        main.appendChild(detail_div);


        let view_content = document.querySelector('#place-content');
        view_content.appendChild(main);
    }


}

function fill_delete(character_list)
{
    for(let i = 0; i < character_list.length; i++)
    {
        let test = JSON.parse(character_list[i][3]);
        console.log(test);

        let main = document.createElement('div')
        main = document.createElement('div');
        main.classList.add('container-view');
        main.addEventListener('click', function()
        {
            console.log("clicked")
            let pop_check  = "ARE YOU SURE YOU WANT TO DELETE";
            if(confirm(pop_check) === true)
            {
                delete_my_character(test);
            }
        });

        let name_div = document.createElement('div');
        name_div.classList.add('character-name');
        name_div.innerHTML = test['name'];

        main.appendChild(name_div);

        let detail_div = document.createElement('div');
        detail_div.classList.add('character-details');

        let ul = document.createElement('ul');

        let li_1 = document.createElement('li');
        if(test['sub_race'] === "")
        {
            li_1.innerHTML = 'RACE: ' + test['race']
            ul.appendChild(li_1);
        }
        else
        {
            li_1.innerHTML = 'RACE: ' + test['race']
            let li_2 = document.createElement('li');
            li_2.innerHTML = 'SUB-RACE: ' + test['sub_race']
            ul.appendChild(li_1);
            ul.appendChild(li_2);
        }
        let li_3 = document.createElement('li');
        li_3.innerHTML = 'CLASS: ' + test['class_name']
        ul.appendChild(li_3);



        detail_div.appendChild(ul);
        main.appendChild(detail_div);


        let view_content = document.querySelector('#place-content');
        view_content.appendChild(main);
    }
}

function fill_all_delete(character_list)
{
    for(let i = 0; i < character_list.length; i++)
    {
        let test = JSON.parse(character_list[i][3]);
        console.log(test);

        let main = document.createElement('div')
        main = document.createElement('div');
        main.classList.add('container-view');
        main.addEventListener('click', function()
        {
            delete_character(test);
        });

        let name_div = document.createElement('div');
        name_div.classList.add('character-name');
        name_div.innerHTML = test['name'];

        main.appendChild(name_div);

        let detail_div = document.createElement('div');
        detail_div.classList.add('character-details');

        let ul = document.createElement('ul');

        let li_1 = document.createElement('li');
        if(test['sub_race'] === "")
        {
            li_1.innerHTML = 'RACE: ' + test['race']
            ul.appendChild(li_1);
        }
        else
        {
            li_1.innerHTML = 'RACE: ' + test['race']
            let li_2 = document.createElement('li');
            li_2.innerHTML = 'SUB-RACE: ' + test['sub_race']
            ul.appendChild(li_1);
            ul.appendChild(li_2);
        }
        let li_3 = document.createElement('li');
        li_3.innerHTML = 'CLASS: ' + test['class_name']
        ul.appendChild(li_3);

        let request = new XMLHttpRequest();
        let url = "get_username.php?userid=" + test['user_id'];

        request.open('Get', url, true);

        request.onload = function()
        {
            let response = JSON.parse(this.response);
            let li_4 = document.createElement('li');
            li_4.innerHTML = 'USERNAME: ' + response[0][0]
            ul.appendChild(li_4);
        }

        request.send();

        detail_div.appendChild(ul);
        main.appendChild(detail_div);


        let view_content = document.querySelector('#place-content');
        view_content.appendChild(main);
    }
}

function delete_character(input)
{
    let user = input['user_id'];
    let name = input['name'];

    let url = 'delete_character.php?userid=' + user + '&character_name=' + name;

    let request = new XMLHttpRequest()

    request.open('Get', url, true)
    {
        //let response = JSON.parse(this.response);
        console.log(this.response);
    }
    request.send()
    window.location.assign('manyhats-admin.html')
}

function delete_my_character(input)
{
    let user = input['user_id'];
    let name = input['name'];

    let url = 'delete_character.php?userid=' + user + '&character_name=' + name;

    let request = new XMLHttpRequest()

    request.open('Get', url, true)
    {
        //let response = JSON.parse(this.response);
        console.log(this.response);
    }
    request.send()
    window.location.assign('manyhats-delete.html')
}

function fill_character_sheet(input)
{
    console.log(input);
    let str_mod = document.querySelector('#strength-mod');
    let str = document.querySelector('#strength');
    let dex_mod = document.querySelector('#dexterity-mod');
    let dex = document.querySelector('#dexterity');
    let con_mod = document.querySelector('#constitution-mod');
    let con = document.querySelector('#constitution');
    let int_mod = document.querySelector('#intelligence-mod');
    let int = document.querySelector('#intelligence');
    let wis_mod = document.querySelector('#wisdom-mod');
    let wis = document.querySelector('#wisdom');
    let chr_mod = document.querySelector('#charisma-mod');
    let chr = document.querySelector('#charisma');

    let prof = document.querySelector('#proficiency-bonus');
    let speed = document.querySelector('#speed');

    let current = document.querySelector('#current-hit-points');
    let max = document.querySelector('#max-hit-points');

    let str_prof = document.querySelector('#strength-prof');
    let str_save = document.querySelector('#strength-save-number');
    let dex_prof = document.querySelector('#dexterity-prof');
    let dex_save = document.querySelector('#dexterity-save-number');
    let con_prof = document.querySelector('#constitution-prof');
    let con_save = document.querySelector('#constitution-save-number');
    let int_prof = document.querySelector('#intelligence-prof');
    let int_save = document.querySelector('#intelligence-save-number');
    let wis_prof = document.querySelector('#wisdom-prof');
    let wis_save = document.querySelector('#wisdom-save-number');
    let chr_prof = document.querySelector('#charisma-prof');
    let chr_save = document.querySelector('#charisma-save-number');

    let pass_perception = document.querySelector('#passive-perception');
    let pass_investigation = document.querySelector('#passive-investigation');
    let pass_insight = document.querySelector('#passive-insight');

    let armor = document.querySelector('#prof-armor');
    let weapons = document.querySelector('#prof-weapons');
    let tools = document.querySelector('#prof-tools');
    let language = document.querySelector('#prof-languages');

    str_mod.value =  input['strength_mod'];
    str.innerHTML = input['strength'];
    dex_mod.value = input['dexterity_mod'];
    dex.innerHTML = input['dexterity'];
    con_mod.value = input['constitution_mod'];
    con.innerHTML = input['constitution'];
    int_mod.value =  input['intelligence_mod'];
    int.innerHTML = input['intelligence'];
    wis_mod.value =  input['wisdom_mod'];
    wis.innerHTML = input['wisdom'];
    chr_mod.value = input['charisma_mod'];
    chr.innerHTML = input['charisma'];

    prof.value = input['proficiency_bonus'];
    speed.value = input['speed'];

    current.innerHTML = input['max_hit_points'];
    max.innerHTML = input['max_hit_points'];

    let str_test_prof = input['strength_prof'];
    if(str_test_prof === '1')
    {
        str_prof.style.backgroundColor = 'var(--clr-red-300)'
    }
    str_save.innerHTML = input['strength_save'];

    let dex_test_prof = input['dexterity_prof'];
    if(dex_test_prof === '1')
    {
        dex_prof.style.backgroundColor = 'var(--clr-red-300)'
    }
    dex_save.innerHTML = input['dexterity_save'];

    let con_test_prof = input['constitution_prof'];
    console.log(con_test_prof);
    if(con_test_prof === '1')
    {
        con_prof.style.backgroundColor = 'var(--clr-red-300)'
    }
    con_save.innerHTML = input['constitution_save'];

    let int_test_prof = input['intelligence_prof'];
    if(int_test_prof === '1')
    {
        int_prof.style.backgroundColor = 'var(--clr-red-300)'
    }
    int_save.innerHTML = input['intelligence_save'];

    let wis_test_prof = input['wisdom_prof'];
    if(wis_test_prof === '1')
    {
        wis_prof.style.backgroundColor = 'var(--clr-red-300)'
    }
    wis_save.innerHTML = input['wisdom_save'];

    let chr_test_prof = input['charisma_prof'];
    if(chr_test_prof === '1')
    {
        chr_prof.style.backgroundColor = 'var(--clr-red-300)'
    }
    chr_save.innerHTML = input['charisma_save'];

    pass_perception.innerHTML = input['passive_wisdom_perception'];
    pass_investigation.innerHTML = input['passive_investigation'];
    pass_insight.innerHTML = input['passive_wisdom_insight'];

    armor.innerHTML = input['armor_prof'];
    weapons.innerHTML = input['weapon_prof'];
    tools.innerHTML = input['tool_prof'];
    language.innerHTML = input['language_prof'];

    let acrobat_prof = document.querySelector('#acrobatics-prof');
    let acrobat_bonus = document.querySelector('#acrobatics-bonus');
    let test_acrobat = input['acrobatics_prof'];
    if(test_acrobat === '1' || test_acrobat === '11' || test_acrobat === '01')
    {
        acrobat_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    acrobat_bonus.value = input['acrobatics'];

    let animal_prof = document.querySelector('#animal-handling-prof');
    let animal_bonus = document.querySelector('#animal-handling-bonus');
    let test_animal = input['animal_handling_prof'];
    if(test_animal === '1' || test_animal === '11' || test_animal === '01')
    {
        animal_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    animal_bonus.value = input['animal_handling'];

    let arcana_prof = document.querySelector('#arcana-prof');
    let arcana_bonus = document.querySelector('#arcana-bonus');
    let test_arcana = input['arcana_prof'];
    if(test_arcana === '1' || test_arcana === '11' || test_arcana === '01')
    {
        arcana_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    arcana_bonus.value = input['arcana'];

    let athletics_prof = document.querySelector('#athletics-prof');
    let athletics_bonus = document.querySelector('#athletics-bonus');
    let test_athletics = input['athletics_prof'];
    if(test_athletics === '1' || test_athletics === '11' || test_athletics === '01')
    {
        athletics_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    athletics_bonus.value = input['athletics'];

    let deception_prof = document.querySelector('#deception-prof');
    let deception_bonus = document.querySelector('#deception-bonus');
    let test_deception = input['deception_prof'];
    if(test_deception === '1' || test_deception === '11' || test_deception === '01')
    {
        deception_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    deception_bonus.value = input['deception'];

    let history_prof = document.querySelector('#history-prof');
    let history_bonus = document.querySelector('#history-bonus');
    let test_history = input['history_prof'];
    if(test_history === '1' || test_history === '11' || test_history === '01')
    {
        history_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    history_bonus.value = input['history'];

    let intimidation_prof = document.querySelector('#intimidation-prof');
    let intimidation_bonus = document.querySelector('#intimidation-bonus');
    let test_intimidation = input['intimidation_prof'];
    if(test_intimidation === '1' || test_intimidation === '11' || test_intimidation === '01')
    {
        intimidation_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    intimidation_bonus.value = input['intimidation'];

    let insight_prof = document.querySelector('#insight-prof');
    let insight_bonus = document.querySelector('#insight-bonus');
    let test_insight = input['insight_prof'];
    if(test_insight === '1' || test_insight === '11' || test_insight === '01')
    {
        insight_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    insight_bonus.value = input['insight'];

    let investigation_prof = document.querySelector('#investigation-prof');
    let investigation_bonus = document.querySelector('#investigation-bonus');
    let test_investigation = input['investigation_prof'];
    if(test_investigation === '1' || test_investigation === '11' || test_investigation === '01')
    {
        investigation_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    investigation_bonus.value = input['investigation'];

    let medicine_prof = document.querySelector('#medicine-prof');
    let medicine_bonus = document.querySelector('#medicine-bonus');
    let test_medicine = input['medicine_prof'];
    if(test_medicine === '1' || test_medicine === '11' || test_medicine === '01')
    {
        medicine_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    medicine_bonus.value = input['medicine'];

    let nature_prof = document.querySelector('#nature-prof');
    let nature_bonus = document.querySelector('#nature-bonus');
    let test_nature = input['nature_prof'];
    if(test_nature === '1' || test_nature === '11' || test_nature === '01')
    {
        nature_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    nature_bonus.value = input['nature'];

    let perception_prof = document.querySelector('#perception-prof');
    let perception_bonus = document.querySelector('#perception-bonus');
    let test_perception = input['perception_prof'];
    if(test_perception === '1' || test_perception === '11' || test_perception === '01')
    {
        perception_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    perception_bonus.value = input['perception'];

    let performance_prof = document.querySelector('#performance-prof');
    let performance_bonus = document.querySelector('#performance-bonus');
    let test_performance = input['performance_prof'];
    if(test_performance === '1' || test_performance === '11' || test_performance === '01')
    {
        performance_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    performance_bonus.value = input['performance'];

    let persuasion_prof = document.querySelector('#persuasion-prof');
    let persuasion_bonus = document.querySelector('#persuasion-bonus');
    let test_persuasion = input['persuasion_prof'];
    if(test_persuasion === '1' || test_persuasion === '11' || test_persuasion === '01')
    {
        persuasion_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    persuasion_bonus.value = input['persuasion'];

    let religion_prof = document.querySelector('#religion-prof');
    let religion_bonus = document.querySelector('#religion-bonus');
    let test_religion = input['religion_prof'];
    if(test_religion === '1' || test_religion === '11' || test_religion === '01')
    {
        religion_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    religion_bonus.value = input['religion'];

    let slight_of_hand_prof = document.querySelector('#slight-of-hands-prof');
    let slight_of_hand_bonus = document.querySelector('#slight-of-hands-bonus');
    let test_slight_of_hand = input['slight_of_hand_prof'];
    if(test_slight_of_hand === '1' || test_slight_of_hand === '11' || test_slight_of_hand === '01')
    {
        slight_of_hand_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    slight_of_hand_bonus.value = input['slight_of_hand'];

    let stealth_prof = document.querySelector('#stealth-prof');
    let stealth_bonus = document.querySelector('#stealth-bonus');
    let test_stealth = input['stealth_prof'];
    if(test_stealth === '1' || test_stealth === '11' || test_stealth === '01')
    {
        stealth_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    stealth_bonus.value = input['stealth'];

    let survival_prof = document.querySelector('#survival-prof');
    let survival_bonus = document.querySelector('#survival-bonus');
    let test_survival = input['survival_prof'];
    if(test_survival === '1' || test_survival === '11' || test_survival === '01')
    {
        survival_prof.style.backgroundColor = 'var(--clr-red-300)';
    }
    survival_bonus.value = input['survival'];

    let initiative = document.querySelector("#initiative");
    initiative.value = input['dexterity_mod'];

    let hold_array = input['backpack'].split(", ");
    let inventory = document.querySelector('#inventory-text');
    for(let i = 0; i < hold_array.length; i++)
    {
        inventory.value += hold_array[i] + '\n';
    }



    let sheet= document.querySelector("#character-sheet");
    sheet.style.display = 'grid';

    let view_content = document.querySelector('#place-content');
    view_content.style.display='none';
}

let weapon_check_character= "";
let feature_check_character= "";

let add_list = document.querySelectorAll('.feature-btn');

add_list.forEach((item) => item.addEventListener('click', show_hide));

function setup_listeners()
{
    let wpn_btn = document.querySelector('#add-weapon');
    wpn_btn.addEventListener('click', show_hide);

    let feat_btn = document.querySelector('#add-feature');
    feat_btn.addEventListener('click', show_hide);

}


function show_hide()
{

    let show_add_weapon = document.querySelector("#add-weapon-div");
    let show_add_feature = document.querySelector("#add-feature-div");

    if(this.id === "add-weapon" && weapon_check_character === "")
    {
        this.innerHTML = "-"
        show_add_weapon.classList.add('show-features-active');
        show_add_weapon.classList.add('feature-margin-none');
        weapon_check_character = this.id;
    }
    else if(this.id === weapon_check_character)
    {
        this.innerHTML = "+";
        show_add_weapon.classList.remove('show-features-active');
        show_add_weapon.classList.remove('feature-margin-none');
        weapon_check_character = "";
    }
    if(this.id === "add-feature" && feature_check_character === "")
    {
        this.innerHTML = "-"
        show_add_feature.classList.add('show-features-active');
        show_add_feature.classList.add('feature-margin-none');
        feature_check_character = this.id;
    }
    else if(this.id === feature_check_character)
    {
        this.innerHTML = "+";
        show_add_feature.classList.remove('show-features-active');
        show_add_feature.classList.remove('feature-margin-none');
        feature_check_character = "";
    }
}

function add_weapon()
{
    let wep_name = document.querySelector('#weapon-name').value;
    let wep_cost = document.querySelector('#weapon-cost').value;
    let wep_damage = document.querySelector('#weapon-damage').value;
    let wep_weight = document.querySelector('#weapon-weight').value;
    let wep_properties = document.querySelector('#weapon-properties').value;

    let url = "add_weapon.php?name=" + wep_name + "&cost=" +wep_cost + "&damage=" + wep_damage +
        '&weight=' + wep_weight + '&properties=' + wep_properties;

    let request = new XMLHttpRequest()
    request.open('Get', url, true)

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        console.log(response);
    }
    request.send();

    document.querySelector('#weapon-name').value = "";
    document.querySelector('#weapon-cost').value = "";
    document.querySelector('#weapon-damage').value = "";
    document.querySelector('#weapon-weight').value = "";
     document.querySelector('#weapon-properties').value = "";

}
function add_feature()
{
    let feature_name = document.querySelector('#feature-name').value;
    let feature_description = document.querySelector('#feature-description').value;

    let url = "add_features.php?name=" + feature_name + "&description=" + feature_description

    let request = new XMLHttpRequest()
    request.open('Get', url, true)

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        console.log(response);
    }
    request.send();

    document.querySelector('#feature-name').value = "";
    document.querySelector('#feature-description').value = "";
}