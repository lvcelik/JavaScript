var y = document.createElement("h1");
y.innerHTML = "ovo je nas header";


//1)
var div = document.getElementsByClassName("description")[0];
div.parentNode.insertBefore(y, div);

//2)
var divInfo = document.createElement("div");
divInfo.className = "info";
var foot = document.getElementById("footer");

foot.parentNode.insertBefore(divInfo, foot);

for(let i = 3; i <= 6; i++)
{
    var listViwItem = document.createElementNS("li");
    listViwItem.appendChild(document.createTextNode("i"));
    ul.appendChild(listViwItem);
}
