// //asyncrouns
// console.log("one");

// console.log("two");
// console.log("three");
// setTimeout(() => {
//   console.log("hello this is suhani");
// }, 3000);

// console.log("five");

// //callback function
// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a,b,sumcallback){//this called callback means we can pass a function into a function
//     sumcallback(a,b)
// }
// calculator(1,2,sum)
// function calculator(1,2,(a,b)=>{
//     console.log(a+b);

// })
//nesting means under ke under
// let age = 19;
// if (age >= 18) {
//   if (age >= 3) {
//     console.log("any");
//   }
//   console.log("adult");
// } else {
//   console.log("child");
// }

//callback hell
// function getData(dataId, getnextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getnextData) {
//       getnextData();
//     }
//   }, 2000);
// }
// getData(1, () => {
//   console.log("getting data 2...");

//   getData(2, () => {
//     console.log("getting data 3...");

//     getData(3, () => {
//       console.log("getting data 4...");

//       getData(4);
//     });
//   });
// });

//Promises
// let promise = new Promise((resolve,reject) =>{
//     console.log('I am a promise');
//     resolve(success)
// })

//  function getData(dataId,getnextData){
//     return new Promise((resolve,reject)=>{
//          setTimeout(() => {
//             console.log('data',dataId);
//             resolve('success');
//             if (getnextData) {
//                 getnextData()
//             }

//          }, 2000);
//      })
//  }
//promise chain
//this is first way
//  let p1= getData(1)
//  p1.then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log('success');

//     })

//  })

//  //this is second way
//  getData(1).then((res)=>{
//     return getData(2)
//  }).then((res)=>{
//     return getData(3)
//  })

// function asyncfunc(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log('some data 1');
//             resolve('success')
//         }, 5000);
//     })
// }
// console.log('fetching data 1');

// let p1 = asyncfunc()
// p1.then((res)=>{
//     console.log(res);

// })

// console.log('hello');

// async function hello(params) {
//     console.log('hello');

// }
// function api(){
//     return new Promise ((resolve,reject)=>{
//        setTimeout(() => {
//         console.log('wheather data');
//         resolve(200)
//        }, 2000);
//     })
// }
// async function getWheatherData(){
// await api()
// }
// const URL= 'https://cat-fact.herokuapp.com/users'
// let promise =  fetch(URL)
// console.log('promise',promise);

// const email = document.getElementById('mail')
// email.addEventListener('input',(Event) =>{
//     if(email.validity.typeMismatch){
//         email.setCustomValidity('I am expecting an email address')
//     }else{
//         email.setCustomValidity('')
//     }
// })
// let is_array = function (input){
//     if(toString.call(input) === "[object Array]")
//         return true
//     return false
// }
// console.log(is_array('w3resource'));
// console.log(is_array([1,2,3,4,0]))
// console.log('hiih thifgfdg');

//loops for stat pattern
// let n =5
// let string = ''
// for (let i = 0; i < n; i++) {
//     for(let j = 0;j<n;j++){
//         string += '*'
//     }
//     string += '\n'
// }
// console.log(string);

// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (i === 0 || i === n - 1) {
//       string += "*";
//     } else {
//       if (j === 0 || j === n - 1) {
//         string += "*";
//       } else {
//         string += "";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += "";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//  let n = 5
//  let string = ''
//  for(let i =1; i < n; i++){
//     for(let j = 0; j - n-i; j++){
//         string += '*'
//     }
//     string += '\n'
//  }
//  console.log(string);

//true ? alert('Condition is true'): alert('condition is false')
// 10 > 5 ? console.log('Yes 10 > 0'): console.log('No');
// ;
// let age = 25
// let canDrink = (age > 18) ? 'Yes':'no'
// console.log(canDrink);

let day = 5;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName);

let grade = "C";
let result;
switch (grade) {
  case "A":
    result = "A (Excellenet)";
    break;
  case "B":
    result = "B (Averge)";
    break;
  case "C":
    result = "C (Below than averge)";
    break;
  default:
    result = "No Grade";
}
console.log(result);
