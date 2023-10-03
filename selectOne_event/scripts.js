let count = document.getElementById("#event_count");

function generate_options(x)
{
    console.log(x)
    for(let i = 0; i < x; i++)
    {
        let option = document.createElement("option");
        let temp =  i + 1
        option.value = temp.toString();
        option.innerHTML = temp.toString();
        count.appendChild(option)
    }
}
