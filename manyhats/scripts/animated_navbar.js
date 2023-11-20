//create a list of all the elements of the class
let list = document.querySelectorAll('.animated-list');

/* function to loop through the list remove the active class to 'deactivate' all of them
   then apply the active class to the currently selected element */
function activeLink()
{
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

// add an event listener to all the elements in the list
list.forEach((item) => item.addEventListener('click', activeLink));