// let mySet = new Set([1, 2, 3]);
// console.log(typeof mySet); // "object"

// movements.push(350)
// console.log(movements);

// // for (const movement of movements){
// //   if (movement>0){
// //     console.log(`You deposited ${movement}`);
// //   }
// //   else{
// //     console.log(`You withdraw ${Math.abs(movement)}`);
// //   }
// // }
// for (const [i,movement] of movements.entries()){
//   if (movement>0){
//     console.log(`Movement ${i+1}:You deposited ${movement}`);
//   }
//   else{
//     console.log(`Movement ${i+1}:You withdraw ${Math.abs(movement)}`);
//   }  
// }
// console.log("---------FOREACH METHOD------------");
// movements.forEach(function (movement,i){
//   if (movement>0){
//     console.log(`Movement ${i+1}:You deposited ${movement}`);
//   }
//   else{
//     console.log(`Movement ${i+1}:You withdraw ${Math.abs(movement)}`);
//   }

// })



// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value,key,map){
//   console.log(`${value} : ${key} ${map}`);
// })

let strin="Ahmad"
console.log(strin.includes("ch"));

// *************************Practice 
// ------------------------Array Methods
// const array=['a','b','c','d','e','f','g','h']
// const array2=['i','j','k','l','m','n']
// console.log(array2.splice(2,3));
// console.log(array2);
// console.log(array);
// // console.log(array.splice(5,2));
// console.log(array.reverse());
// const array3=array.concat(array2);
// console.log(array3);
// console.log(array3.join('**'))
// console.log(array3);

// // Exercise 2
// // -----------------------forEach Loop
// for each with Arrays
// array.forEach(function (ar1,i){
//   console.log(` Hi ${ar1} and ${i+1}`);
// })
// for each with Maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value,key,map){
//   console.log(`Hi ${key} my full form is ${value}`);
// })
// // for each with Sets
// const currenciesUnique=new Set(['USD','EUR','GBP'])
// currenciesUnique.forEach(function (value,_,set){
//   console.log(`Hi ${value} and ${set}`);
// })

// *****************************Coding Challenges*********************************

// const calcAverageHumanAge=function(arr){
//     const mov2=0
//     arr.map(function (mov){
//      if (mov<=2 && mov>=0){
//        return mov*2;
//      }
//      else{
//         return 16 + mov * 4;
//      }
//     })
// }

// console.log(calcAverageHumanAge( [5, 2, 4, 1, 15, 8, 3]));