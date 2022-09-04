window.onload = function() {
    console.log("nigger workin");

    let ok = fetch("https://api.adviceslip.com/advice").then( response => response.json() ).then( data => dataReady(data));
    console.log(ok);
}

function dataReady(data){
    console.log(data.slip.id);
    document.querySelector("#advice-id").innerHTML = data.slip.id;
    document.querySelector("#advice-text").innerHTML = data.slip.advice;
    console.log(data.slip.advice)
}