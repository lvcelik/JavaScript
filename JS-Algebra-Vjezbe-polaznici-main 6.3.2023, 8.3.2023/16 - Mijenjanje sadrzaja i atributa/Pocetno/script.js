//1
var h1 = document.querySelector("h1");

h1.innerText = "Karlovac";
// console.log("h1 inner html=" + h1.innerHTML);
// console.log("h1 inner text=" + h1.innerText);
// console.log("h1 text content=" + h1.textContent);

//2
// var divDescription = document.querySelector(".description");
// divDescription.innerHTML = "Grad na <h3>5 rijeka</h3>";

var divDescription = document.querySelector(".description span");
divDescription.outerHTML = "<h3>5 rijeka</h3>";

// console.log("inner=" + divDescription.innerHTML);
// console.log("outer=" + divDescription.outerHTML);

//3
var info = document.querySelector(".info");
info.textContent = "Peta rijeka je piva";

//4
// var rijeke = ["Kupa","Mreznica", "Korana", "Dobra", "Karlovačko pivo"];
// var footer = document.getElementById("footer");

// for(let c = 0; c < rijeke.length; c++)
// {
//     console.log(rijeke[c]);
//    footer.querySelectorAll("li")[c].innerText = rijeke[c];

// };

//5
//var divElement = document.getElementById("element");
// var myPageOffsetY = 1300;
// var myScrollTop = 200;
// var myKorisnikEkran = 730;


// var vidljivY = myKorisnikEkran - myPageOffsetY + myScrollTop;
// // console.log(vidljivY);

// if(vidljivY > 0){
//     console.log("vidljivY");
// }else{
//     var fali = vidljivY + visinaElementa;
//     console.log("da bi bio vidljiv, fali nam = " + fali);
// }






