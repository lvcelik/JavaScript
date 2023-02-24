var auto = {
    brand: {
        marka:"VW",
        model: "Golf",
    },
    gorivo: "benzin",
    godina: 2022,
    boja:"crvena",
    maxBrzina: 160,
    trenutnaBrzina: 0,
    ubrzaj: function(ubrzanje)  {
        this.trenutnaBrzina += ubrzanje;
        return this.trenutnaBrzina;
    },
    zakoci: function(brojSekundi){
        while (this.trenutnaBrzina > 0 && brojSekundi >= 0){
            this.trenutnaBrzina -= 10;
            console.info("Trenutna brzina pri kočenju je: " + this.trenutnaBrzina);
            brojSekundi--;
            console.debug("brojac: " + brojSekundi);

        }
        return this.trenutnaBrzina;
    },
    brojKotaca: 4
};

console.log(auto.propertyIsEnumerable(`marka`));

for (let key in auto) {
    if (auto.propertyIsEnumerable(key)){
        console.log("kljuc " + key + "; vrijednost: " + auto[key]);
    }
}


console.log("Ja vozim auto marke: " + auto.brand.marka + "; model" + auto.brand.model + " iz godine " + auto.godina);

console.log("Auto vozi brzinom " + auto.trenutnaBrzina);
console.log("Auto nakon ubrzanja vozi brzinom " + auto.ubrzaj(60));
console.log("Auto nakon kocenja vozi brzinom " + auto.zakoci(30));

var json = JSON.stringify(auto);
console.log(json);




   
    
