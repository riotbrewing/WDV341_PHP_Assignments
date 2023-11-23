/*
    Functions for API calls to the server based on events on the create-form
    And necessary functions to populate the form
 */

//----CLEAR ALL/ANY CHILDREN FROM AN ELEMENT
function clear_children(input_element)
{
    while(input_element.hasChildNodes())
    {
        input_element.removeChild(input_element.firstChild)
    }

}// END CLEAR CHILDREN

//API CALL TO DYNAMICALLY FILL THE RACE SELECT FROM THE DATABASE
function fill_race_select()
{
    let select = document.getElementById("character-sheet-race-select");

    let url = "fill_race_names.php";

    let request = new XMLHttpRequest();

    request.open('GET', url, true)

    request.onload = function(){
        if(request.status === 200)
        {
            let race_names = JSON.parse(this.response);
            for(let i = 0; i < race_names.length; i++)
            {
                let option = document.createElement('option');
                option.name = race_names[i]['name'];
                option.value = race_names[i]['name'];
                option.innerHTML = race_names[i]['name'];
                select.appendChild(option);
            }
        }
    }
    request.send();


}//END FILL RACE SELECT

//API TO DYNAMICALLY FILL THE SUB-RACE SELECT FROM THE DATABASE - BASED OFF OF RACE SELECTION
function fill_sub_race_select()
{
    let disable_option = document.getElementById("character-sheet-race-select");
    disable_option.options[0].disabled = true;
    let select = document.getElementById("character-sheet-race-select").value;

    let url = "get_race.php?race=" + select;

    let request = new XMLHttpRequest();

    request.open('GET', url, true)

    request.onload = function(){
        if(request.status === 200)
        {
            let new_race = JSON.parse(this.response);
            let race = new_race[12];
            let sub_select = document.getElementById("character-sheet-sub-race-select");
            sub_select.disabled = false;
            sub_select.style.backgroundColor = 'white';
            sub_select.style.color = 'black';
            clear_children(sub_select);

            if(race != null)
            {
                let sub_race = race.split(",")
                for(let i = 0; i < sub_race.length; i++)
                {
                    let option = document.createElement('option');
                    option.name = sub_race[i];
                    option.value = sub_race[i];
                    option.innerHTML = sub_race[i];
                    sub_select.appendChild(option);
                }
            }
            else
            {
                sub_select.style.backgroundColor = 'green';
                sub_select.style.color = 'white';
                let option = document.createElement("option")
                option.name="0";
                option.value = "0";
                option.innerHTML = "Chosen Race Has No Sub-Race";
                sub_select.appendChild(option);

                sub_select.disabled = true;
            }

        }
    }
    request.send();

}//END FILL-SUB-RACE FUNCTION




// ADD EVENT LISTENERS TO ELEMENTS
document.getElementById("character-sheet-race-select").addEventListener("change", fill_sub_race_select);