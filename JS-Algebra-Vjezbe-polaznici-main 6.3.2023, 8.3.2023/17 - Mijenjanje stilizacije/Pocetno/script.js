var ul = document.querySelector("ul");
ul.style.listStyleType = "decamal";


var info = document.querySelector(".info");
info.classList.add("hide");

var body = document.querySelector("body");
var sviStilovi = window.getComputedStyle(body, null);
var stilMarginLeft = sviStilovi.getPropertyValue("margin-left");
console.log(stilMarginLeft);

var pocetnaMargina = sviStilovi.getPropertyValue("margin");
console.log(pocetnaMargina);
var marginaBroj = parsInt(pocetnaMargina);
console.log(marginaBroj);

var animacija = setInterval(funcFrame, 10);
var unazad = false;

function functionFrame(){

    if(unazad == true){
        marginaBroj--;
    }else{
        marginaBroj++;
    }
    console.log(marginaBroj);
    if(marginaBroj == 30) {
        unazad = true;
        console.log("<<<<<<<<");
    }
    if(marginaBroj == 0) {
        unazad = false;
        console.log("<<<<<<<<");
    }


    body.style.margin = marginaBroj;

}
