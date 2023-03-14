var sc = require('./StepCounter');

sc.walk();// 1
console.log(sc.getTotalSteps());

sc.walk();// 2
sc.walk();// 3
sc.walk();// 4
console.log(sc.getTotalSteps()); //4
