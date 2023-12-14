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
let class_container = document.querySelector(".class-container");
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
        get_classes();
    }
    if(item.id === "class-previous")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[1].classList.add('active-display');
        clear_children(class_container);
    }
    if(item.id === "class-next")
    {
        display_list.forEach((item) => item.classList.remove('active-display'));
        display_list[3].classList.add('active-display');
        clear_children(class_container);
    }
    if(item.id === "ability-previous")
    {
        get_classes();
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

/*----------------------------------------RACES-----------------------------------------------*/

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
}//END CREATE RACE CONTENT

//FUNCTION TO CHECK IF A NAME HAS WHITE SPACE (SUB RACE CHECK)
function check_white_space(name)
{
    return name.indexOf(' ') >= 0;
}//END CHECK WHITE SPACE

//GET ALL RACE DATA BASED OFF NAME
function get_race_details(name)
{
    let request = new XMLHttpRequest();
    let url = "db_get_race.php?race_name=" + name;
    request.open('Get', url, true);

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        features_race_details(response);
    }
    request.send();
}//END GET RACE

//GET ALL SUB RACE DATA BASED OFF NAME
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
}//END GET SUB RACE

function get_combined_race(name)
{
    let race_name = name[0]['race_name'];

    let request = new XMLHttpRequest();
    let url = "db_get_race.php?race_name=" + race_name;
    request.open('Get', url, true);

    request.onload = function()
    {
        let response = JSON.parse(this.response);
        features_sub_race_details_combined(name, response)
    }
    request.send();
}

// API GET FEATURES BASED OFF SUB RACE AND CALL FUNCTION TO FILL SUB-RACE MODAL
function features_sub_race_details_combined(sub_name, race)
{
    let sub_race_name = sub_name[0]['sub_race_name'];
    let race_name = race[0]['race_name'];
    let request = new XMLHttpRequest();
    let url = "db_get_features_sub_race.php?race_name=" + race_name + '&sub_race_name=' + sub_race_name;

    request.open('Get', url, true);
    request.onload = function()
    {
        let response = JSON.parse(this.response);
        display_sub_race(race, sub_name, response);
    }
    request.send()
} //END SUB-RACE FEATURES API

// API GET FEATURES BASED OFF RACE AND CALL FUNCTION TO FILL RACE MODAL
function features_race_details(name)
{
    let race_name= name[0]['race_name'];
    let request = new XMLHttpRequest();
    let url = "db_get_features_race.php?race_name=" + race_name;

    request.open('Get', url, true);
    request.onload = function()
    {
        let response = JSON.parse(this.response);
        display_race(name, response);
    }
    request.send()
}//END RACE FEATURES API

//FILL AND DISPLAY MODAL BASED ON RACE CALL FUNCTION TO STORE DATA
function display_race(race, features)
{
    /*
    PARENT - CREATE-MODAL-CONTENT
    1ST CHILD - CREATE-MODAL-HEADER
        1ST CHILD - DIV
        <H1<
        2ND CHILD - DIV
        <SPAN> CLASS-CREATE-MODAL-CLOSE-BTN ID-CLOSE-MODAL-BTN
    2ND CHILD - CREATE-MODAL-BODY
        1ST CHILD - RACE-DESCRIPTION
            <h1>
            <p>
        2ND CHILD - RACE-FEATURE-CONTAINER
            1ST CHILD(RFC) - RACE-FEATURES
                1ST CHILD(RF) - FEATURE-NAME
                2ND CHILD(RF) - FEATURE-DESCRIPTION
        3RD CHILD - ADD-FEATURE-BUTTONS
            1ST CHILD(AFB) - CANCEL
            2ND CHILD(AFB) - CHOOSE

     */

    let content = document.createElement('div');
    content.classList.add('create-modal-content');

    let header = document.createElement('div');
    header.classList.add('create-modal-header');

    let header_div_1 =document.createElement('div');
    let header_h1 = document.createElement('h1');
    header_h1.innerHTML = "CONFIRM RACE SELECTION"
    let header_div_2 = document.createElement('div');
    let span = document.createElement('span');
    span.classList.add('create-modal-close-btn');
    span.id = 'closeModalBtn';
    span.innerHTML = 'X';
    span.addEventListener('click', function () {
        modal.style.display = 'none';
        clear_children(modal);
    });

    header_div_1.appendChild(header_h1);
    header_div_2.appendChild(span)

    header.appendChild(header_div_1);
    header.appendChild(header_div_2);

    content.appendChild(header);

    let body = document.createElement('div');
    body.classList.add("create-modal-body");

    let race_description = document.createElement('div');
    race_description.classList.add('race-description')
    let h1 = document.createElement('h1');
    h1.innerHTML = race[0]['race_name'].toString();
    let p =document.createElement('p');
    p.innerHTML = race[0]['race_description'].toString();

    race_description.appendChild(h1);
    race_description.appendChild(p);

    body.appendChild(race_description);


    let race_features_container = document.createElement('div');
    race_features_container.classList.add('race-features-container');
    let h1_2 = document.createElement('h1');
    h1_2.innerHTML = "FEATURES AND TRAITS"

    race_features_container.appendChild(h1_2)


    if(features.length > 0)
    {
        for(let i = 0; i < features.length; i++)
        {
            let race_features = document.createElement('div');
            race_features.classList.add('race-features');

            //loop through and create feature names and descriptions
            let feature_name = document.createElement('div');
            feature_name.classList.add('feature-name');
            feature_name.innerHTML = features[i]['feature_name'];

            let feature_description = document.createElement('div');
            feature_description.classList.add('feature-description');
            feature_description.innerHTML = features[i][3].toString();

            race_features.appendChild(feature_name);
            race_features.appendChild(feature_description);

            race_features_container.appendChild(race_features);
        }
    }
    else
    {
        let race_features = document.createElement('div');
        race_features.classList.add('race-features');

        let feature_name = document.createElement('div');
        feature_name.classList.add('feature-name');
        feature_name.innerHTML = "HUMANS HAVE NO RACIAL TRAITS";
        race_features.appendChild(feature_name);
        race_features_container.appendChild(race_features);
    }

    body.appendChild(race_features_container);

    let add_feature_buttons = document.createElement('div');
    add_feature_buttons.classList.add('add-feature-buttons');

    let cancel = document.createElement('div');
    cancel.classList.add('cancel');
    cancel.innerHTML='CANCEL';
    cancel.addEventListener('click', function () {
        modal.style.display = 'none';
        clear_children(modal);
    });

    let choose = document.createElement('div');
    choose.classList.add('choose');
    choose.innerHTML='CHOOSE';
    choose.addEventListener('click', function () {
        modal.style.display = 'none';
        clear_children(modal);

        set_race_details(race, features);

    });

    add_feature_buttons.appendChild(cancel);
    add_feature_buttons.appendChild(choose);

    body.appendChild(add_feature_buttons);

    content.appendChild(body);

    modal.appendChild(content);

    modal.style.display = 'grid';
}//END DISPLAY RACE

//FILL AND DISPLAY MODAL BASED ON SUB-RACE CALL FUNCTION TO STORE DATA
function display_sub_race(race, sub_race, features)
{
    let content = document.createElement('div');
    content.classList.add('create-modal-content');

    let header = document.createElement('div');
    header.classList.add('create-modal-header');

    let header_div_1 =document.createElement('div');
    let header_h1 = document.createElement('h1');
    header_h1.innerHTML = "CONFIRM RACE SELECTION"
    let header_div_2 = document.createElement('div');
    let span = document.createElement('span');
    span.classList.add('create-modal-close-btn');
    span.id = 'closeModalBtn';
    span.innerHTML = 'X';
    span.addEventListener('click', function () {
        modal.style.display = 'none';
        clear_children(modal);
    });

    header_div_1.appendChild(header_h1);
    header_div_2.appendChild(span)

    header.appendChild(header_div_1);
    header.appendChild(header_div_2);

    content.appendChild(header);

    let body = document.createElement('div');
    body.classList.add("create-modal-body");

    let race_description = document.createElement('div');
    race_description.classList.add('race-description')
    let h1 = document.createElement('h1');
    h1.innerHTML = race[0]['race_name'].toString();
    let p =document.createElement('p');
    p.innerHTML = race[0]['race_description'].toString() + '\n' + sub_race[0]['sub_race_description'];

    race_description.appendChild(h1);
    race_description.appendChild(p);

    body.appendChild(race_description);


    let race_features_container = document.createElement('div');
    race_features_container.classList.add('race-features-container');
    let h1_2 = document.createElement('h1');
    h1_2.innerHTML = "FEATURES AND TRAITS"

    race_features_container.appendChild(h1_2)



    for(let i = 0; i < features.length; i++)
    {
        let race_features = document.createElement('div');
        race_features.classList.add('race-features');

        //loop through and create feature names and descriptions
        let feature_name = document.createElement('div');
        feature_name.classList.add('feature-name');
        feature_name.innerHTML = features[i]['feature_name'];

        let feature_description = document.createElement('div');
        feature_description.classList.add('feature-description');
        feature_description.innerHTML = features[i][3].toString();

        race_features.appendChild(feature_name);
        race_features.appendChild(feature_description);

        race_features_container.appendChild(race_features);
    }

    body.appendChild(race_features_container);

    let add_feature_buttons = document.createElement('div');
    add_feature_buttons.classList.add('add-feature-buttons');

    let cancel = document.createElement('div');
    cancel.classList.add('cancel');
    cancel.innerHTML = 'CANCEL';
    cancel.addEventListener('click', function () {
        modal.style.display = 'none';
        clear_children(modal);
    });

    let choose = document.createElement('div');
    choose.classList.add('choose');
    choose.innerHTML='CHOOSE';
    choose.addEventListener('click', function () {
        modal.style.display = 'none';
        clear_children(modal);

        set_race_details_sub(race, sub_race, features);

    });

    add_feature_buttons.appendChild(cancel);
    add_feature_buttons.appendChild(choose);

    body.appendChild(add_feature_buttons);

    content.appendChild(body);
    modal.appendChild(content);
    modal.style.display = 'grid';
}//END DISPLAY SUB-RACE


/*---------------------------------------END RACES--------------------------------------------*/


/*----------------------------------------CLASSES----------------------------------------------*/
function get_classes()
{
    let request = new XMLHttpRequest();
    let url = "db_get_class.php";

    request.open('Get', url, true);
    request.onload = function()
    {
        let response = JSON.parse(this.response);
        fill_class_container(response);
    }
    request.send();
}

function fill_class_container(class_input)
{

    let class_list = class_input;

    let class_container = document.querySelector(".class-container");
    class_container.classList.add('race-container');

    for(let i = 0; i < class_list.length; i++)
    {
        let class_card_div = document.createElement('div');
        class_card_div.classList.add('race-card');

        let class_img_div = document.createElement('div');
        class_img_div.classList.add('race-img');

        let class_content_div = document.createElement('div');
        class_content_div.classList.add('race-content');

        let button_div = document.createElement('div');
        let btn_next = document.createElement('button');
        btn_next.classList.add('btn-next');

        class_content_div.innerHTML = class_list[i]['class_name'];
        class_card_div.appendChild(class_img_div);
        class_card_div.appendChild(class_content_div);

        btn_next.id = class_list[i]['class_name'] + '-btn';
        btn_next.innerHTML = ">";
        btn_next.value = "0";
        btn_next.name = class_list[i]['class_name'];
        button_div.appendChild(btn_next);
        class_card_div.appendChild(button_div);
        class_container.appendChild(class_card_div);

    }

    let next_button_list = document.querySelectorAll('.btn-next');

    next_button_list.forEach((item) => item.addEventListener('click', function() {

       get_class_details(item.name)
    }));


}

//API TO GET CLASS DETAILS BY NAME AND CALL THE API TO GET CLASS FEATURES
function get_class_details(name)
{
    let request = new XMLHttpRequest();
    let url = "db_get_class_by_name.php?class_name=" + name;
    request.open("Get", url, true);
    request.onload = function ()
    {
        let response = JSON.parse(this.response);
        get_class_features(response);
    }
    request.send();
}//END GET CLASS DETAILS

////API TO GET CLASS FEATURES BY CLASS NAME
function get_class_features(class_input)
{
    let name = class_input[0]['class_name'];

    let request = new XMLHttpRequest();
    let url = "db_get_class_features_name.php?class_name=" + name;
    request.open('Get', url, true);
    request.onload = function ()
    {
        let response = JSON.parse(this.response);
        fill_class_modal(class_input, response);
    }
    request.send();
}//END GET CLASS FEATURES


//FUNCTION TO FILL THE CLASS MODAL BASED ON CLASS DETAILS
function fill_class_modal(class_input, class_features)
{
    console.log(class_input);
    console.log(class_features);

    /*
   PARENT - CREATE-MODAL-CONTENT
   1ST CHILD - CREATE-MODAL-HEADER
       1ST CHILD - DIV
       <H1<
       2ND CHILD - DIV
       <SPAN> CLASS-CREATE-MODAL-CLOSE-BTN ID-CLOSE-MODAL-BTN
   2ND CHILD - CREATE-MODAL-BODY
       1ST CHILD - RACE-DESCRIPTION
           <h1>
           <p>
       2ND CHILD - RACE-FEATURE-CONTAINER
           1ST CHILD(RFC) - RACE-FEATURES
               1ST CHILD(RF) - FEATURE-NAME
               2ND CHILD(RF) - FEATURE-DESCRIPTION
       3RD CHILD - ADD-FEATURE-BUTTONS
           1ST CHILD(AFB) - CANCEL
           2ND CHILD(AFB) - CHOOSE

    */
    let class_content = document.createElement('div');
    class_content.classList.add('create-modal-content');

    let header = document.createElement('div');
    header.classList.add('create-modal-header');

    let header_div_1 =document.createElement('div');
    let header_h1 = document.createElement('h1');
    header_h1.innerHTML = "CONFIRM CLASS SELECTION"
    let header_div_2 = document.createElement('div');
    let span = document.createElement('span');
    span.classList.add('create-modal-close-btn');
    span.id = 'closeModalBtn';
    span.innerHTML = 'X';
    span.addEventListener('click', function () {
        modal.style.display = 'none';
        clear_children(modal);
    });

    header_div_1.appendChild(header_h1);
    header_div_2.appendChild(span)

    header.appendChild(header_div_1);
    header.appendChild(header_div_2);

    class_content.appendChild(header);

    let class_body = document.createElement('div');
    class_body.classList.add("create-modal-body");

    let class_description = document.createElement('div');
    class_description.classList.add('race-description')
    let h1 = document.createElement('h1');
    h1.innerHTML = class_input[0]['class_name'].toString();
    let p =document.createElement('p');
    p.innerHTML = class_input[0]['class_description'].toString();

    class_description.appendChild(h1);
    class_description.appendChild(p);

    class_body.appendChild(class_description);


    let class_features_container = document.createElement('div');
    class_features_container.classList.add('race-features-container');
    let h1_2 = document.createElement('h1');
    h1_2.innerHTML = "CLASS FEATURES"

    class_features_container.appendChild(h1_2)


    if(class_features.length > 0)
    {
        for(let i = 0; i < class_features.length; i++)
        {
            let race_features = document.createElement('div');
            race_features.classList.add('race-features');

            //loop through and create feature names and descriptions
            let feature_name = document.createElement('div');
            feature_name.classList.add('feature-name');
            feature_name.innerHTML = class_features[i]['class_feature_name'];

            let feature_description = document.createElement('div');
            feature_description.classList.add('feature-description');
            feature_description.innerHTML = class_features[i][3].toString();

            race_features.appendChild(feature_name);
            race_features.appendChild(feature_description);

            class_features_container.appendChild(race_features);
        }
    }

    class_body.appendChild(class_features_container);

    let add_feature_buttons = document.createElement('div');
    add_feature_buttons.classList.add('add-feature-buttons');

    let cancel = document.createElement('div');
    cancel.classList.add('cancel');
    cancel.innerHTML='CANCEL';
    cancel.addEventListener('click', function () {
        modal.style.display = 'none';
        clear_children(modal);
    });

    let choose = document.createElement('div');
    choose.classList.add('choose');
    choose.innerHTML='CHOOSE';
    choose.addEventListener('click', function () {
        modal.style.display = 'none';
        clear_children(modal);

        set_class_details(class_input, class_features);

    });

    add_feature_buttons.appendChild(cancel);
    add_feature_buttons.appendChild(choose);

    class_body.appendChild(add_feature_buttons);

    class_content.appendChild(class_body);

    modal.appendChild(class_content);

    modal.style.display = 'grid';


}//END FILL CLASS MODAL


/*-----------------------------------------END CLASSES--------------------------------------------*/

/*-----------------------------------------ABILITIES----------------------------------------------*/

//FUNCTION TO SET UP ABILITY MODAL

let strength_list = document.querySelector("#ability-select-strength");
let dexterity_list = document.querySelector("#ability-select-dexterity");
let constitution_list = document.querySelector("#ability-select-constitution");
let intelligence_list = document.querySelector("#ability-select-intelligence");
let wisdom_list = document.querySelector("#ability-select-wisdom");
let charisma_list = document.querySelector("#ability-select-charisma");

let select_list = [strength_list, dexterity_list, constitution_list, intelligence_list, wisdom_list, charisma_list];

let strength_index = 0;
let dexterity_index = 0;
let constitution_index = 0;
let intelligence_index = 0;
let wisdom_index = 0;
let charisma_index = 0;

let strength_total = document.getElementById('strength-total')
let dexterity_total = document.getElementById('dexterity-total')
let constitution_total = document.getElementById('constitution-total')
let intelligence_total = document.getElementById('intelligence-total')
let wisdom_total = document.getElementById('wisdom-total')
let charisma_total = document.getElementById('charisma-total')

//ADD EVENT LISTENERS TO EACH SELECT
select_list.forEach((item) => item.addEventListener('change', search_and_update));

//UPDATE CONTENTS OF THE SELECTION BASED ON USER CHOICE
function search_and_update()
{
    if(this.value > 0) {
        if (this.id === strength_list.id) {
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
        if (this.id === dexterity_list.id) {
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
        if (this.id === constitution_list.id) {
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
        if (this.id === intelligence_list.id) {
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
        if (this.id === wisdom_list.id) {
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
        if (this.id === charisma_list.id) {
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
        if (this.id === strength_list.id)
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[strength_index].style.display = 'block';
            }
            strength_index = 0;
        }
        if (this.id === dexterity_list.id)
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[dexterity_list].style.display = 'block';
            }
           dexterity_index = 0;
        }
        if (this.id === constitution_list.id)
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[constitution_index].style.display = 'block';
            }
            constitution_index = 0;
        }
        if (this.id === intelligence_list.id)
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[intelligence_index].style.display = 'block';
            }
            intelligence_index = 0;
        }
        if (this.id === wisdom_list.id)
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[wisdom_index].style.display = 'block';
            }
            wisdom_index = 0;
        }

        if (this.id === charisma_list.id)
        {
            for (let i = 0; i < select_list.length; i++)
            {
                select_list[i].options[charisma_index].style.display = 'block';
            }
            charisma_index = 0;
        }
    }
    set_totals();
}//END SEARCH AND UPDATE

function set_totals()
{
    strength_total.innerHTML = (parseInt(strength_list.value) + parseInt(db_race_strength)).toString();
    dexterity_total.innerHTML = (parseInt(dexterity_list.value) + parseInt(db_race_dexterity)).toString();
    constitution_total.innerHTML = (parseInt(constitution_list.value) + parseInt(db_race_constitution)).toString();
    intelligence_total.innerHTML = (parseInt(intelligence_list.value) + parseInt(db_race_intelligence)).toString();
    wisdom_total.innerHTML = (parseInt(wisdom_list.value) + parseInt(db_race_wisdom)).toString();
    charisma_total.innerHTML = (parseInt(charisma_list.value) + parseInt(db_race_charisma)).toString();
}


/*---------------------------------------END ABILITIES--------------------------------------------*/



//CREATE CHARACTER VARIABLES

//change this to the cookie from the current user
let user_number = 1;
/*************************************************/

let db_race_name = "";
let db_sub_race_name = "";
let db_race_strength = 0;
let db_race_dexterity = 0;
let db_race_constitution = 0;
let db_race_intelligence = 0;
let db_race_wisdom = 0;
let db_race_charisma = 0;
let db_features = [];

let db_class_name = "";
let db_hit_dice = "";
let db_hit_points = "";
let db_class_saves = "";
let db_armor = "";
let db_equipment = "";
let db_tools = "";
let db_weapons = "";
let db_class_features = "";


let db_strength = 0;
let db_dexterity = 0;
let db_constitution = 0;
let db_intelligence = 0;
let db_wisdom = 0;
let db_charisma = 0;
let db_strength_mod = 0;
let db_dexterity_mod = 0;
let db_constitution_mod = 0;
let db_intelligence_mod = 0;
let db_wisdom_mod = 0;
let db_charisma_mod = 0



//FUNCTION TO STORE CHARACTER DETAILS
function set_race_details(race, features)
{
    console.log(race);
    console.log(features);
    console.log(race[0]['charisma'])
    //RACE
    db_race_name = race[0]['race_name'];
    db_race_strength = race[0]['strength'];
    db_race_dexterity = race[0]['dexterity'];
    db_race_constitution = race[0]['constitution'];
    db_race_intelligence = race[0]['intelligence'];
    db_race_wisdom = race[0]['wisdom'];
    db_race_charisma = race[0]['charisma'];
    db_features = JSON.stringify(features);

}//END STORE RACE DETAILS

//FUNCTION TO STORE CHARACTER (SUB-RACE) DETAILS
function set_race_details_sub(race, sub_race, features)
{
    console.log(race);
    console.log(sub_race);
    console.log(features);

    db_race_name = race[0]['race_name'];
    db_sub_race_name = sub_race[0]['sub_race_name'];
    db_race_strength = race[0]['strength'] + sub_race[0]['strength'];
    db_race_dexterity = race[0]['dexterity'] + sub_race[0]['dexterity'];
    db_race_constitution = race[0]['constitution'] + sub_race[0]['constitution'];
    db_race_intelligence = race[0]['intelligence'] + sub_race[0]['intelligence'];
    db_race_wisdom = race[0]['wisdom'] + sub_race[0]['wisdom'];
    db_race_charisma = race[0]['charisma'] + sub_race[0]['charisma'];
    db_features = JSON.stringify(features);


}//END STORE SUB-RACE DETAILS

//FUNCTION TO STORE CLASS DETAILS
function set_class_details(class_input, class_features)
{
    console.log(class_input);
    console.log(class_features);

    db_class_name = class_input[0]['class_name'];
    db_hit_dice = class_input[0]['hit_dice'];
    db_hit_points = class_input[0]['hit_points'];
    db_class_saves = class_input[0]['saves'];
    db_armor = class_input[0]['armor'];
    db_tools = class_input[0]['tools'];
    db_weapons = class_input[0]['weapons'];
    db_class_features = "";
}

/*----------------------------------RACE MODAL-----------------------------------------*/


let modal = document.getElementById('sub-race-modal');

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        clear_children(modal);
    }
});


/*------------------------------------END RACE MODAL--------------------------------------------*/


/*--------------------------------------CLASS MODAL---------------------------------------------*/

let modal_class = document.getElementById('class-modal');

window.addEventListener('click', function (event) {
    if (event.target === modal_class) {
        modal_class.style.display = 'none';
        clear_children(modal_class);
    }
});

/*-------------------------------------END CLASS MODAL-------------------------------------------*/



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
