// 'use strict';
// // 1.
// var a = 78;
// var b = 34;
// //delete a;
// //delete window.b;
// var myObject = {property1:1, property2:2, property1:1};

// // 2.
// const users = [
//   { name: 'Fabio', surname: 'Biondi' },
//   { name: 'Mario', surname: 'Rossi' },
// ];

// const user = { name: 'Lorenzo', surname: 'Verdi' };
// var noviUseri = [...users,user]; 

// // console.log(noviUseri[2].name);
// // for(let i = 0; i<noviUseri.length; i++){  //prvi način
// //   console.log(noviUseri[i].name);
// // }
// // console.log("----------");


// // noviUseri.forEach(function(item){         //drugi način
// //   console.log(item.name);
// // });
// // console.log("----------");

// // for( let c in noviUseri){                 //treći način
// //   console.log(noviUseri[c].name);
// // }

// // 3.
// for (var i = 0; i < 10; i++) {
//   console.log('The number is' + i);
//  setTimeout(function() {
//    console.log('The number is ' + i);
//  }, 1000);
// }

// console.log(i);

function getX() {
  return Math.random() >= 0.5;
}

var wait = new Promise ((resolve, reject) => {
  const x = getX();
  console.log(x);
  if (x) {
    return setTimeout(resolve, 1000);
  }
  return setTimeout(reject, 1000);
}
)
.then(() => console.log ('Yay!'))
.catch(() => console.log ('Oh no!'));


