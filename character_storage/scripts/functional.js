
let prof_array =[];
let lang_array=[];

let language_modal = document.querySelector("#language_modal");

function check_radio()
{
    if(this.value === 0)
    {
        this.value = 1;
        this.style.backgroundColor = "red";
        console.log(this.id);
    }
    else if(this.value === 1)
    {
        this.value = 0;
        this.style.backgroundColor = "white";
    }
}

function add_new_lang()
{
    document.querySelector("#language_modal").style.display = "grid";

}

function show_lang_option()
{
    let select=document.querySelector("#lang-select");
    let lang=document.querySelector("#lang_option");
    let prof=document.querySelector("#prof_option");
    select.options[0].disabled=true;
    if(select.options[0].disabled)
    {
        if(select.value ==="language")
        {
            lang.style.display="grid";
            prof.style.display='none';
        }
        else
        {
            prof.style.display="grid";
            lang.style.display="none";
        }
    }

}

function add_language_proficiency()
{
    let select=document.querySelector("#lang-select");
    let insert = document.querySelector("#insert-lang-prof");
    let lang_input=document.querySelector("#lang_option");
    let prof_input=document.querySelector("#prof_option");
    let language = document.querySelector("#new_lang");
    let prof = document.querySelector("#new_prof");
    let button = document.querySelector("#lang_modal_button");
    if (language.value !== "" || prof.value !== "")
    {
        if (select.value === "language") {
            let lang_id_num = lang_array.length;
            let lang_id = "language" + lang_id_num.toString();
            lang_array.push(language.value);
            let output = document.createElement("p");
            output.id = lang_id;
            output.value = language.value;
            output.innerHTML = language.value;
            insert.appendChild(output);
            language.value = "";
            language_modal.style.display = "none";
        }
        else
        {
            let prof_id_num = prof_array.length;
            let prof_id = "prof" + prof_id_num.toString();
            prof_array.push(prof.value);
            let output = document.createElement("p");
            output.id = prof_id;
            output.value = prof.value;
            output.innerHTML = prof.value;
            insert.appendChild(output);
            prof.value = "";
            language_modal.style.display = "none";
        }
    }

    select.options[0].disabled=false;
    select.selectedIndex = "0";
    lang_input.style.display="none";
    prof_input.style.display="none";
    button.style.display = "none";
}

function show_button()
{
    let language = document.querySelector("#new_lang");
    let prof = document.querySelector("#new_prof");
    let button = document.querySelector("#lang_modal_button");

    if(language.value !== "" || prof.value !== "") {
        button.style.display = "grid";
    }


}


if(document.querySelectorAll(".my-radio"))
{
    let radio = document.querySelectorAll(".my-radio");
    radio.forEach((item)=>item.addEventListener('click', check_radio));
    radio.forEach((item)=>item.value=0);
}

if(document.querySelector("#add-lang") !== null)
{
    document.querySelector("#add-lang").addEventListener('click', add_new_lang);
}

if(document.querySelector("#lang-select") !== null)
{
    document.querySelector("#lang-select").addEventListener('change', show_lang_option);
}

if(document.querySelector("#new_lang") !== null)
{
    document.querySelector("#new_lang").addEventListener("input", show_button);
}

if(document.querySelector("#new_prof") !== null)
{
    document.querySelector("#new_prof").addEventListener("input", show_button);
}

if(document.querySelector("#lang_modal_button") !== null)
{
    document.querySelector("#lang_modal_button").addEventListener('click', add_language_proficiency);
}



/* CLICK OUTSIDE OF MODEL TO CLOSE */
window.onclick = function(event) {
    if (event.target === language_modal) {
        language_modal.style.display = "none";
    }
}