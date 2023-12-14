let login_button = document.querySelector('#login');

login_button.addEventListener('click', function()
{
    console.log('clicked');
    let username = document.querySelector('#username-input');
    let password = document.querySelector('#password-input');
    let failure = document.querySelector('#login-failure');
    failure.style.color = 'var(--clr-greys-200)';

    let request = new XMLHttpRequest();
    let url = 'login.php?username=' + username.value + "&password=" + password.value;
    request.open('Get', url, true);
    request.onload = function()
    {
        let response = JSON.parse(this.response);
        console.log(response);
        if(response === 1)
        {
            create_session(username, password);
        }
        else
        {
            failure.innerHTML = "INCORRECT USERNAME/PASSWORD COMBINATION";
        }
    }
    request.send();
})


function set_user_number(input)
{
    let date = new Date();
    let expire = new Date(date.setHours(date.getHours()+5));
    document.cookie = 'usernumber=' + input +'; expires=' + expire.toUTCString() + '; path=/';
}

function set_admin(input)
{
    let date = new Date();
    let expire = new Date(date.setHours(date.getHours()+5));
    document.cookie = 'admin=' + input +'; expires=' + expire.toUTCString() + '; path=/';
}

function create_session(username, password)
{
    let user_request = new XMLHttpRequest();
    let user_url = 'get_user_number.php?username=' + username.value + "&password=" + password.value;
    user_request.open('Get', user_url, true);
    user_request.onload = function()
    {
        let user_response = JSON.parse(this.response);
        console.log(user_response[0][0]);
        let number = (user_response[0][0]).toString();
        console.log(user_response[0][3])
        if(user_response[0][3] === 'admin')
        {
            console.log('admin');
            set_user_number(number);

            set_admin("true");
            window.location.assign('manyhats-admin.html');
        }
        else
        {
            set_user_number(number);window.location.assign('manyhats-view-all.html');
        }

    }
    user_request.send();
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function send_email()
{
    document.getElementById("myForm").style.display = "none";
    let test = document.querySelector("#login-failure");
    test.style.color = 'white'
    test.innerHTML = "CHECK YOUR EMAIL FOR LOGIN CREDENTIALS"
}