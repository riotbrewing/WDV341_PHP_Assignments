/*-----------------------------------FORM FUNCTIONS-------------------------------------------*/

let nav_list = document.querySelectorAll('.nav-bar li');
let show_list = document.querySelectorAll(".show-form");
function active_link()
{
    console.log(this.id);
    nav_list.forEach((item) => item.classList.remove('nav-active'));
    this.classList.add('nav-active');
    show_form(this.id);

}
// FUNCTION TO SET THE CURRENT FROM BASED ON CLICKED BUTTON
function show_form(id_input)
{
    show_list.forEach((item) => item.classList.remove('active-form'));

    if(id_input === "start-button")
    {
        document.querySelector("#start-form").classList.add('active-form');
    }
    if(id_input === "class-button")
    {
        document.querySelector("#class-form").classList.add('active-form');
    }
    if(id_input === "back-button")
    {
        document.querySelector("#back-form").classList.add('active-form');
    }
    if(id_input === "equip-button")
    {
        document.querySelector("#equip-form").classList.add('active-form');
    }
    if(id_input === "final-button")
    {
        document.querySelector("#final-form").classList.add('active-form');
    }
}// END SHOW FORM

//FUNCTION TO ADD A NUMBER TO THE BONUS


nav_list.forEach((item) => item.addEventListener('click', active_link));


/*-----------------------------------FORM BUTTONS-------------------------------------------*/

let bonus_button_list = document.querySelectorAll('.ability-button');
let bonus_mod_list = document .querySelectorAll('#bonus-mod')

//FUNCTION TO CHECK THE ID OF THE BUTTON AND CALL EITHER THE ADD OR SUBTRACT FUNCTION
function plus_minus()
{
   if(this.id === 'str-plus-one' || this.id === 'dex-plus-one' || this.id === 'con-plus-one'
       || this.id === 'int-plus-one' || this.id === 'wis-plus-one' || this.id === 'chr-plus-one')
   {
       add_one(this.id);
   }
   else
   {
       subtract_one(this.id)
   }

}//END PLUS MINUS

//FUNCTION TO ADD ONE TO THE ABILITY MODIFIER SELECTED
function add_one(input_id)
{

    if(input_id === 'str-plus-one')
    {
        let temp = parseFloat(bonus_mod_list[0].innerHTML);
        if(temp < 5)
        {
            temp += 1;
            bonus_mod_list[0].innerHTML = temp.toString();
        }
    }
    else if(input_id === 'dex-plus-one')
    {
        let temp = parseFloat(bonus_mod_list[1].innerHTML);
        if(temp < 5)
        {
            temp += 1;
            bonus_mod_list[1].innerHTML = temp.toString();
        }
    }
    else if(input_id === 'con-plus-one')
    {
        let temp = parseFloat(bonus_mod_list[2].innerHTML);
        if(temp < 5)
        {
            temp += 1;
            bonus_mod_list[2].innerHTML = temp.toString();
        }
    }
    else if(input_id === 'int-plus-one')
    {
        let temp = parseFloat(bonus_mod_list[3].innerHTML);
        if(temp < 5)
        {
            temp += 1;
            bonus_mod_list[3].innerHTML = temp.toString();
        }
    }
    else if(input_id === 'wis-plus-one')
    {
        let temp = parseFloat(bonus_mod_list[4].innerHTML);
        if(temp < 5)
        {
            temp += 1;
            bonus_mod_list[4].innerHTML = temp.toString();
        }
    }
    else if(input_id === 'chr-plus-one')
    {
        let temp = parseFloat(bonus_mod_list[5].innerHTML);
        if(temp < 5)
        {
            temp += 1;
            bonus_mod_list[5].innerHTML = temp.toString();
        }
    }
}//END ADD ONE

//FUNCTION TO SUBTRACT ONE FROM THE ABILITY MODIFIER SELECTED
function subtract_one(input_id)
{
    if(input_id === 'str-minus-one')
    {
        let temp = parseFloat(bonus_mod_list[0].innerHTML);
        if (temp > 0)
        {
            temp -= 1;
            bonus_mod_list[0].innerHTML = temp.toString();
        }
    }
    else if(input_id === 'dex-minus-one')
    {
        let temp = parseFloat(bonus_mod_list[1].innerHTML);
        if (temp > 0)
        {
            temp -= 1;
            bonus_mod_list[1].innerHTML = temp.toString();
        }
    }
    else if(input_id === 'con-minus-one')
    {
        let temp = parseFloat(bonus_mod_list[2].innerHTML);
        if (temp > 0)
        {
            temp -= 1;
            bonus_mod_list[2].innerHTML = temp.toString();
        }
    }
    else if(input_id === 'int-minus-one')
    {
        let temp = parseFloat(bonus_mod_list[3].innerHTML);
        if (temp > 0)
        {
            temp -= 1;
            bonus_mod_list[3].innerHTML = temp.toString();
        }
    }
    else if(input_id === 'wis-minus-one')
    {
        let temp = parseFloat(bonus_mod_list[4].innerHTML);
        if (temp > 0)
        {
            temp -= 1;
            bonus_mod_list[4].innerHTML = temp.toString();
        }
    }
    else
    {
        let temp = parseFloat(bonus_mod_list[5].innerHTML);
        if (temp > 0)
        {
            temp -= 1;
            bonus_mod_list[5].innerHTML = temp.toString();
        }
    }
} //END SUBTRACT ONE

bonus_button_list.forEach((item) => item.addEventListener('click', plus_minus))

/*-----------------------------------RACE FUNCTIONS-------------------------------------------*/

let race_select = document.querySelector("#race-select");
race_select.addEventListener('change', set_sub_race);

let sub_select = document.querySelector("#sub-race-select");

//----CLEAR ALL/ANY CHILDREN FROM AN ELEMENT
function clear_children(input_element)
{
    while(input_element.hasChildNodes())
    {
        input_element.removeChild(input_element.firstChild)
    }

}// END CLEAR CHILDREN

//FUNCTION FILL RACE SELECT
function set_race_select()
{
    console.log("HERE")
    let url = "db_get_race_names.php";

    let request = new XMLHttpRequest();

    request.open("Get", url, true);

    request.onload = function()
    {
        if(request.status === 200)
        {
            let race_names = JSON.parse(this.response);
            for(let i = 0; i < race_names.length; i++)
            {
                let option = document.createElement('option');
                option.name = race_names[i]['race_name'];
                option.value = race_names[i]['race_name'];
                option.innerHTML = race_names[i]['race_name'];
                race_select.appendChild(option);
            }
        }
    }

    request.send()
}


function set_sub_race()
{
    let race = document.querySelector("#race-select").value;

    let url= "db_get_sub_race_names.php?race=" + race;

    let request = new XMLHttpRequest();

    request.open('Get', url, true);

    request.onload = function()
    {
        let response = this.response;
        //let test = JSON.parse(response);
        console.log(response);
    }

    request.send();
}



/*-----------------------------------RADIO FUNCTIONS-------------------------------------------*/
let radio_list = document.querySelectorAll(".prof-radio");

radio_list.forEach((item) => item.addEventListener("click", radio_select));
radio_list.forEach((item)=> item.value=0);

function radio_select()
{
    if(this.value === 0)
    {
        this.value = 1;
        this.style.backgroundColor='var(--clr-purples-100)';
    }
    else if (this.value === 1)
    {
        this.value = 0;
        this.style.backgroundColor='var(--clr-greys-100)';
    }
}

// function add_race_to_db()
// {
//
//     console.log(race);
//
//     let url= "test_race_add.php?race=" + race
//
//     let request = new XMLHttpRequest();
//
//     request.open("GET", url, true)
//
//     request.onload= function()
//     {
//         console.log(this.response)
//     }
//
//     request.send();
// }
