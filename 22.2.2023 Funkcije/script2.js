/*var dog = {};
dog.breed = "Golden retriever";
dog["other breed"] = "Chihuahua"


console.log("breed: " + dog.breed)
console.log("breed: " + dog)*/

var osoba = {
    ime : "ime",
    prezime : "gdasldhaskč",
    brojCipele : 45,
};


var isObrisano = delete osoba.godine;
console.log(isObrisano)


/*
osoba.ime = "Angela";
osoba.prezime = "aaaa";
osoba.godine = 19;
osoba.brojCipele = 40;
*/
if(osoba.brojCipele > 39) {
    console.log(`ime i prezime: ${osoba.ime} ${osoba.prezime}`);
}
