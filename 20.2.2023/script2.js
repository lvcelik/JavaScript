var firstName = "Lovro";
var lastName = "Včelik";
//var fullName = firstName + "" + lastName;
var fullName = `full name = ${firstName} ${lastName}`;

//console.log("first name: " + firstName);
//console.log("last name: " + lastName);
//console.log(fullName)

var z = 2;
var y = 17;
var x = z === 2 ? y : 5;

if (z === 2) {
    x = y;
} 
else {
    x = 5;
}

//console.log("x = " + x);
/*
for (var i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log("Broj " + i + " je paran");
    }
    else{
        console.log("Broj" + i + "je neparan")
    }

}
*/
/*
var names = [ `John`, `Jane`, `Mike`];
console.log(names);
console.log(typeof(names))
*/

var names = [`John`, `Jane`, `Mike`];
/*
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}
*/

var names = [`John`, `Jane`,, `Mike`];

for (var i = 0; i< names.length; ++i) {
    console.log(names[i]);
}
names.forEach(function(value) {
   console.log(value); 
});