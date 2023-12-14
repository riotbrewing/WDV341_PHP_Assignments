/*------------------------------BOTTOM FORM CONTENT-------------------------------------------------------------------*/

let bottom_content_list = document.querySelectorAll('.bottom-content');
let nav_button_list = document.querySelectorAll('.btm-frm-btn');

nav_button_list.forEach((item) => item.addEventListener('click', function()
{
    bottom_content_list.forEach((item)=> item.style.display='none');

    if(item.id === 'action-btn')
    {
        bottom_content_list[0].style.display = "grid";

    }
    if(item.id === 'spells-btn')
    {
        bottom_content_list[1].style.display = "grid";

    }
    if(item.id === 'inventory-btn')
    {
        bottom_content_list[2].style.display = "grid";
    }
    if(item.id === 'features-btn')
    {
        bottom_content_list[3].style.display = "grid";
    }
    if(item.id === 'description-btn')
    {
        bottom_content_list[4].style.display = "grid";
    }
    if(item.id === 'notes-btn')
    {
        bottom_content_list[5].style.display = "grid";
    }

}))





function active_field()
{

}