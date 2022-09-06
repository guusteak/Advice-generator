window.onload = function() {

    let ok = fetch("https://api.adviceslip.com/advice").then( response => response.json() ).then( data => dataReady(data));
    console.log(ok);
}

function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

function dataReady(data){
    console.log(data.slip.id);
    document.querySelector("#advice-id").innerHTML = data.slip.id;
    document.querySelector("#advice-text").innerHTML = data.slip.advice;
    console.log(data.slip.advice)
}
let dice = document.querySelector("#diceclick");
dice.addEventListener("click", refresh => {
    delay(1000);
    location.reload();
})