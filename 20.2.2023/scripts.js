var count = 3;
while (count <=20) {
    //let rez = count % 9;
    //console.log("rez = " + rez);
    if (count % 9 == 0) {
        count++;
        continue;
    }
    //console.log(count)
    count++;
}

var varOne = 0;
for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++) {
        varOne++;
    }
}
console.log(varOne);

