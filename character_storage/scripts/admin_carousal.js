let card = document.querySelectorAll('.admin-card-carousel .admin-card');

let next =document.querySelector('#next');
let prev = document.querySelector('#prev');

let active_card = 3;

function slide_show()
{
    let state= 0;
    card[active_card].style.transform = `none`;
    card[active_card].style.zIndex = "1";
    card[active_card].style.filter ='none';
    card[active_card].style.opacity=`1`;
    for (let i = active_card + 1; i < card.length; i++)
    {
        state++;
        card[i].style.transform = `translateX(${120*state}px) scale(${1 - .2*state}) perspective(16px) rotateY(-1deg)`;
        card[i].style.zIndex = `${-state}`;
        card[i].style.filter ='blur(5px)';
        card[i].style.opacity=`${state > 2 ? 0 : .6}`;
    }
    state = 0;
    for (let i = active_card - 1; i >= 0; i--)
    {
        state++;
        card[i].style.transform = `translateX(${-120*state}px) scale(${1 - .2*state}) perspective(16px) rotateY(1deg)`;
        card[i].style.zIndex = `${-state}`;
        card[i].style.filter ='blur(5px)';
        card[i].style.opacity=`${state > 2 ? 0 : .6}`;
    }

}

slide_show();

next.onclick = function ()
{
    active_card = active_card + 1 < card.length ? active_card + 1 : active_card;
    slide_show();
}

prev.onclick = function()
{
    active_card = active_card - 1 >= 0 ? active_card - 1 : active_card;
    slide_show();
}