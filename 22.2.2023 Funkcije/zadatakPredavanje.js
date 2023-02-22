function trazInajduziRijec(zadaniNiz){
    var najdzaRijecUFunkciji = "";
    for(let i = 0; i < zadaniNiz.length; i++){
        if (zadaniNiz[i].length > najdzaRijecUFunkciji.length){
        najdzaRijecUFunkciji = zadaniNiz[i];
        }
       
    }
    
    
    return najdzaRijecUFunkciji;
}

var niz = ["Marko", "Ana", "Josipa", "Anamarija", "Ivo"];

var najduzeIme = trazInajduziRijec(niz);

console.log(najduzeIme);