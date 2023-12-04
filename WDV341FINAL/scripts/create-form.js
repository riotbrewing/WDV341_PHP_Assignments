/*-----------------------------------DRAG DROP FUNCTION-------------------------------------------*/
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        [...ev.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if (item.kind === "file") {
                const file = item.getAsFile();
                console.log(`… file[${i}].name = ${file.name}`);
            }
        });
    }
    else {
        // Use DataTransfer interface to access the file(s)
        [...ev.dataTransfer.files].forEach((file, i) => {
            console.log(`… file[${i}].name = ${file.name}`);
        });
    }
}

/*--------------------------------END DRAG DROP FUNCTION---------------------------------------*/

/*------------------------------------FORM FUNCTIONS-------------------------------------------*/
let previous_list = document.querySelectorAll(".btn-previous-form, .btn-next-form");
let display_list = document.querySelectorAll('.body-container');
let race_container = document.querySelector(".race-container");
function clear_children(input_element)
{
    while(input_element.lastElementChild)
    {
        input_element.removeChild(input_element.lastElementChild);
    }
}

//check the button clicked and display the correct info
previous_list.forEach((item) => item.addEventListener('click', function(){

    if(item.id === "home-next")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[1].classList.add('active-display');
        get_races();

    }
    if(item.id === "race-previous")
    {
        clear_children(race_container);
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[0].classList.add('active-display');
    }
    if(item.id === "race-next")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[2].classList.add('active-display');
    }
    if(item.id === "class-previous")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[1].classList.add('active-display');
    }
    if(item.id === "class-next")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[3].classList.add('active-display');
    }
    if(item.id === "ability-previous")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[2].classList.add('active-display');
    }
    if(item.id === "ability-next")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[4].classList.add('active-display');
    }
    if(item.id === "description-previous")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[3].classList.add('active-display');
    }
    if(item.id === "description-next")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[5].classList.add('active-display');
    }
    if(item.id === "equipment-previous")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[4].classList.add('active-display');
    }
    if(item.id === "equipment-next")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[6].classList.add('active-display');
    }
    if(item.id === "submit-previous")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[5].classList.add('active-display');
    }

}))


//API TO GET THE RACES FROM THE DB AND PASS THE LIST OF RACES TO THE GET SUB RACE API
function get_races()
{
    let race_request = new XMLHttpRequest();
    let url = "db_get_race_names.php";
    race_request.open('Get', url, true);

    race_request.onload = function()
    {
        let response = JSON.parse(this.response);
        let race_list = []
        for(let i =0; i < response.length; i++)
        {
            race_list.push(response[i]['race_name']);
        }

        get_sub_races(race_list);
    }
    race_request.send()
}//END GET RACES API


//API T0 GET A LIST OF THE SUB-RACES AND PASS THE LIST AND THE RACE LIST TO THE CREATE CONTENT FUNCTION
function get_sub_races(input_list)
{
    let sub_race_list =[]
    let sub_race_request = new XMLHttpRequest();
    let url = "db_get_sub_race_names.php"
    sub_race_request.open('Get', url, true);
    sub_race_request.onload = function()
    {
        let response = JSON.parse(this.response);

        for(let i =0; i < response.length; i++)
        {
            sub_race_list.push(response[i]);
        }
        create_race_content(input_list, sub_race_list);
    }
    sub_race_request.send()
} //END GET SUB-RACES API

//API to get the features from the database
function get_features_race()
{
    let race_features = [];

       let feature_request = new XMLHttpRequest();
       let url = "db_get_create_features.php";
       feature_request.open('Get', url, true);

       feature_request.onload = function()
       {
           let response = JSON.parse(this.response);
       }
       feature_request.send()
} // END GET FEATURES API


//function to fill the race container on the dom
function create_race_content(race_list, sub_race_list)
{
    for(let i = 0; i < race_list.length; i++)
    {
        let race_container = document.querySelector(".race-container");

        let race_card_div = document.createElement('div');
        race_card_div.classList.add('race-card');

        let race_img_div = document.createElement('div');
        race_img_div.classList.add('race-img');

        let race_content_div = document.createElement('div');
        race_content_div.classList.add('race-content');

        let button_div = document.createElement('div');

        let btn_down = document.createElement('button');
        btn_down.classList.add('btn-down');
        let btn_next = document.createElement('button');
        btn_next.classList.add('btn-next');


        race_content_div.innerHTML = race_list[i];
        race_card_div.appendChild(race_img_div);
        race_card_div.appendChild(race_content_div);
        btn_down.id = race_list[i] + '-btn';
        btn_down.innerHTML = "+";
        btn_down.value = "0";



        btn_down.addEventListener("click", function() {

            if (btn_down.value === '0') {
                btn_down.value = "1";
                btn_down.classList.remove('btn-down');
                btn_down.classList.add('btn-next');
                btn_down.innerHTML= '-';
                let id = '#' +race_list[i] + "-sub-card";
                if(document.querySelectorAll(id))
                {
                    document.querySelectorAll(id).forEach((item) => item.classList.add('sub-race-card-active'));
                }
                return;
            }
           if (btn_down.value === '1') {
                btn_down.value = "0";
                btn_down.classList.remove('btn-next');
              btn_down.innerHTML= '+';
                btn_down.classList.add('btn-down');
               let id = '#' +race_list[i] + "-sub-card";
               if(document.querySelectorAll(id))
               {
                   document.querySelectorAll(id).forEach((item) => item.classList.remove('sub-race-card-active'));
               }
            }

        })

        let check = false;

        for(let z = 0; z <sub_race_list.length; z++)
        {
            if(race_list[i] === sub_race_list[z]['race_name'])
            {
                check = true;
            }
        }

        if(check)
        {
            button_div.appendChild(btn_down);
            race_card_div.appendChild(button_div);
            race_container.appendChild(race_card_div);
        }
        else
        {
            btn_next.id = race_list[i] + '-btn';
            btn_next.innerHTML = ">";
            btn_next.value = "0";
            btn_next.name = race_list[i];
            button_div.appendChild(btn_next);
            race_card_div.appendChild(button_div);
            race_container.appendChild(race_card_div);
        }

        check = false;

        for(let x =0; x < sub_race_list.length; x++)
        {
            if(race_list[i] === sub_race_list[x]['race_name'])
            {
                let sub_race_card = document.createElement('div');
                let race_card_div = document.createElement('div');
                let button_div = document.createElement('div');

                race_card_div.classList.add('race-card');

                let race_img_div = document.createElement('div');
                race_img_div.classList.add('race-img');

                let btn_next = document.createElement('button');
                btn_next.classList.add('btn-next');

                btn_next.id = race_list[i] + '-btn';
                btn_next.name = sub_race_list[x]['sub_race_name'].toString();
                btn_next.innerHTML = ">";
                btn_next.value = "0";

                button_div.appendChild(btn_next);

                let race_content_div = document.createElement('div');
                race_content_div.classList.add('race-content');
                sub_race_card.classList.add('sub-race-card');
                sub_race_card.id = race_list[i] + "-sub-card";
                race_content_div.innerHTML = sub_race_list[x]['sub_race_name'].toString();
                sub_race_card.appendChild(race_img_div);
                sub_race_card.appendChild(race_content_div);
                sub_race_card.appendChild(button_div);
                race_container.appendChild(sub_race_card);
            }
        }
    }

    let next_button_list = document.querySelectorAll('.btn-next');

    next_button_list.forEach((item) => item.addEventListener('click', function()
    {
        if(check_white_space(item.name))
        {
            get_sub_race_details(item.name);
        }
        else
        {
            get_race_details(item.name);
        }
    }));
}

function check_white_space(name)
{
    return name.indexOf(' ') >= 0;
}

function get_race_details(name)
{
    let request = new XMLHttpRequest();
    let url = "db_get_race.php?race_name=" + name;
    request.open('Get', url, true);

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        display_race_details(response);
    }
    request.send();
}

function get_sub_race_details(name)
{
    let request = new XMLHttpRequest();
    let url = "db_get_sub_race.php?race_name=" + name;
    request.open('Get', url, true);

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        get_combined_race(response);
    }
    request.send();
}

function get_combined_race(name)
{
    let race_name = name[0]['race_name'];

    let request = new XMLHttpRequest();
    let url = "db_get_race.php?race_name=" + race_name;
    request.open('Get', url, true);

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        display_sub_race_details_combined(name, response)
    }
    request.send();
}

/*
*
* functions below are for filling the race modal
*
* */
function display_sub_race_details_combined(sub_name, race)
{
    console.log(sub_name);
    console.log(race);
    //modal.style.display = 'grid';
}

function display_race_details(name)
{
    console.log(name);
    //modal.style.display = 'grid';
}

/*----------------------------------RACE MODAL-----------------------------------------*/


let modal = document.getElementById('sub-race-modal');
let closeModalBtn = document.getElementById('closeModalBtn');

closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


/*------------------------------------END RACE MODAL-------------------------------------------*/

/*----------------------------------END FORM FUNCTIONS-----------------------------------------*/

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
