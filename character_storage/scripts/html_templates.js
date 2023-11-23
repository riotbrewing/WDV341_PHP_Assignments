let class_form = document.getElementById(""); //element name insert

function display_add_class_form()
{
    class_form.display ="initial";

    class_form.innerHTML =
        "<form method='post' action='#'>" +
        "<div>" +
        "<label for='new-class-name'>CLASS NAME</label>" +
        "<input id='new-class-name' name='new-class-name' type='text'>" +
        "</div>"+
        "<div>" +
        "<label for='new-class-describe'>CLASS DESCRIPTION</label>" +
        "<textarea id='new-class-describe' name='new-class-describe'></textarea>" +
        "</div>"+
        "<div>" +
        "<label for='new-class-hit-dice'>HIT DICE</label>" +
        "<input id='new-class-hit-dice' name='new-class-hit-dice' type='text'>" +
        "</div>"+
        "<div>" +
        "<label for='new-class-hit-points'>HIT POINTS</label>" +
        "<input id='new-class-hit-points' name='new-class-hit-points' type='text'>" +
        "</div>"+
        "<div>" +
        "<label for='new-class-armor'>ARMOR PROFICIENCY</label>" +
        "<input id='new-class-armor' name='new-class-armor' type='text'>" +
        "</div>"+
        "<div>" +
        "<label for='new-class-weapon'>WEAPON PROFICIENCY</label>" +
        "<input id='new-class-weapon' name='new-class-weapon' type='text'>" +
        "</div>"+
        "<div>" +
        "<label for='new-class-tools'>TOOLS</label>" +
        "<input id='new-class-tools' name='new-class-tools' type='text'>" +
        "</div>"+
        "<div>" +
        "<label for='new-class-saves'>SAVING THROWS</label>" +
        "<input id='new-class-saves' name='new-class-saves' type='text'>" +
        "</div>"+
        "<div>" +
        "<label for='new-class-proficiency'>PROICIENCY BONUS</label>" +
        "<input id='new-class-proficiency' name='new-class-proficiency' type='text'>" +
        "</div>"+
        "</form>";
}// END SHOW-ADD-CLASS FORM





//ajax call to get column names

function get_class_columns()
{
    let url = "get_class_column_names.php"

    let request = new XMLHttpRequest();

    request.open('Get', url, true);
    request.onload = function()
    {
        if(request.status === 200)
        {
            let response = JSON.parse(this.response);
            console.log(response);
        }
    }


    request.send()
}







/*
AJAX-START

get value for url
set url to the right php page + value
create request object
set request methods - open()
what to do with request - .onload
    if connection is good set response variable and do all functions you need to do
send request

AJAX-END
 */