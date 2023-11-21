// create variable to hold a list of the buttons with the class .alert
let alert = document.querySelectorAll('.alert');


/*
      @ function - pop up confirm window
      if ok - use the id to delete the item form database
      else - stay on same page
 */
function catchAlert()
{
      if (confirm("ARE YOU SURE YOU WANT TO DELETE?"))
      {
            window.location=this.id;
      }
      else
      {
          window.location = "delete_event.php";
      }
}

//loop through list and add event listener calling the catchAlert function to all the buttons in the list
alert.forEach((item) => item.addEventListener('click', catchAlert))
