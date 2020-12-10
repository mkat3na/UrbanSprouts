
/*
    Name: Michaela Chua
    Filename: script.js
*/
function submitData() {
    alert("Thanks for Contacting with us!");
}

var down = document.getElementById('GFG_DOWN');
function myFunction() {
    var src = document.getElementById("x");
    var down = document.getElementById('GFG_DOWN');
    //document.getElementById("loadmore").style.display='none';
let d = document.getElementById("x");
    let d_nested = document.getElementById("loadmore");
    let throwawayNode = d.removeChild(d_nested); //Requirement #5
    for (let i = 1; i < 5; i++) {
        //Requirement #11
        var x = document.createElement("IMG");
        x.setAttribute("src", "./img/loadmore" + i + ".png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "loadmore");
        src.appendChild(x);
    }
    down.innerHTML = "More images loaded...";
}
//Requirement #4
function myFunctionPar1() {
    var x, i;
    x = document.querySelectorAll(".pragraph");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "green";
    }
    document.getElementById("pragraph").innerHTML = "Great Choice!";

}
function myFunctionpar2() {
    var x = document.getElementById("pragraphDIV");
    x.querySelector(".pragraph2").innerHTML = "Great Choice!";
}







