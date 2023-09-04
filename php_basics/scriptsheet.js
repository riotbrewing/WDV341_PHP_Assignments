function fromPhpLoop(input)
{
    console.log(input);

    let outputArray = input;
    let div = document.getElementById("here");

    for(let i = 0; i < outputArray.length; i++)
    {
        let outputToDOM = document.createElement("h3");
        outputToDOM.innerHTML = outputArray[i];
        div.append(outputToDOM);
    }




}