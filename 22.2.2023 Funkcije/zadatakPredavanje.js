/*function trazInajduziRijec(zadaniNiz){
    var najdzaRijecUFunkciji = "";
    for(let i = 0; i < zadaniNiz.length; i++){
        if (zadaniNiz[i].length > najdzaRijecUFunkciji.length){
        najdzaRijecUFunkciji = zadaniNiz[i];
        }
       
    }
    
    
    return najdzaRijecUFunkciji;
}*/

function checkEmail(email){
    var i = email.indexOf("@");
    console.log("search index i = " + i);
    if(i > 0){
        var tmpEmailDomain = email.substring(i+1, email.length);
        console.log(tmpEmailDomain)
        var z = tmpEmailDomain.indexOf (".");
        console.log("searc index z = " + z);
        if (z > 0){
            return true;
        }
        return false;
    }else{
    return false;
    }
}

var isEmailOk = checkEmail("moje.ime@email.com");
console.log("email ok = " + isEmailOk);

return

var niz = ["Marko", "Ana", "Josipa", "Anamarija", "Ivo"];

var najduzeIme = trazInajduziRijec(niz);

console.log(najduzeIme);