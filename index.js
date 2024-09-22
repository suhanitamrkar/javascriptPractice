// let courses = ["HTML","CSS","JAVASCRIPT","REACT","NODE.JS","NEXTJS" ]
// console.log(courses,"courses Name");

// let lastItem = courses[courses.length -3]
// console.log("first Item" ,lastItem);

// let age = 24
// console.log(age,"this is my brother's age");
// console.log("suhani tamrkar");

// let price = 100.3
// console.log(price);

//objects
// const student = {
//     name: "suhani tamrkar",
//     age: 20,
//     cgpa: 9.3,
//     isPass:true
// }
// student["age"]=student["age"] +2 // to change the value
// student['name'] ='tanu tamrkar'
// console.log(student['age']);
// console.log(student.name);

// const product= {
//     item:'pen',
//     name:'Parkar Jotter',
//     rating: 3,
//     deal: true,
//     price:200,
//     offer: true

// }
// const profile ={
//     name:'sharadha',
//     posts:195,
//     followers:89433,
//     description:"para",

// }
// console.log(product);
// console.log(profile.description);

// Arithmetic Operators
// let a = 4;
// let b = 5;
// let c = a + b;
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);
// console.log('a++ =' ,a++);
// console.log('a =' ,a);
// console.log('a-- =' ,a--);
// console.log('a =' ,a);
// console.log('--a =' ,--a);

//As9gment operators
// let a = 4;
// let b = 5;
// a /= 5
// a += 5
// a ** 5
// console.log('a = ',a);
// console.log('a = ',a);
// console.log('a = 4',a);

//Comparison operators
// let a = 3
// let b = 2
// console.log("3 == 2", a==b);
// console.log("3 != 3", a!=b);

//logical operators
// let a =6

// let b=4
// let cond1 = a > b
// let cond2 = a ===6
// console.log('cond1 && cond2',cond1 && cond2);

//condition statements
// let age = 24

// if (age >= 18) {
//     console.log('you can vote');

// }
// if (age < 18) {
//     console.log('you can not vote');

// }

// let mode = 'dark'
// let color
// if (mode === 'dark') {
//     color = 'black'
// }
// if (mode === 'light') {
//     color = 'white'
// }
// console.log(color);

//Objects
//  const person =  {
//      name:['bob','smith'],
//      age:32,
//     bio:function(){
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old `);

//     },
//     introdueSelf:function(){
//  console.log(`Hi! I'm ${this.name[0]}`);

//     }

//  }
// console.log(person);

// const person ={
//     name: {
//         first:'suhani',
//         last:'tamrkar',
//     },
//     age:32,
//     education:{
//         secondary:'govt.school',
//         primary:'govt.school',
//         college:'girls college',
//     }

// }
// person['education'] = 'study'
// console.log(person.education.college);
// console.log(person.education.secondary);
// console.log(person.education.primary);
// console.log(person);

// function createPerson(name){
//     const obj={}
//     obj.name = name
//     obj.introdueSelf= function(){
//         console.log(`Hi ! I'm ${this.name}`);

//     }
//     return obj
// }
// console.log(createPerson);
// const salva = createPerson('salva')
// salva.introdueSelf()
// const frankie = createPerson('Frankie')
// frankie.introdueSelf()
// function Person(name){
//     this.name = name
//     this.introdueSelf = function(){
//         console.log(`Hi I'm ${this.name}`);
//     }
// }
// const salva= new Person('salva')
// salva.introdueSelf()
// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//       console.log('Meow!');
//     }
//   }
//   console.log(cat);

//string and their method
// const browserType = 'mozilla is very good browser'
// if (browserType.includes('zilla')) {
//     console.log('Found zilla');
// }else {
//     console.log('No zilla here!');
// }
// if (browserType.endsWith('zilla')) {
//     console.log('Found zilla');
// }else {
//     console.log('No zilla here!');
// }
// console.log(browserType);
// console.log(browserType[0]);//m
// console.log(browserType[1]);//o
// console.log(browserType[2]);//z
// console.log(browserType[3]);//i
// console.log(browserType[4]);//l
// const tagLine = 'MDN - Resource for developers , by developer'
// console.log(tagLine.indexOf('developer'));
// const firstOccurence = tagLine.indexOf('developers')
// const secondOccurence = tagLine.indexOf('developers',firstOccurence + 1)
// console.log(firstOccurence)
// console.log(secondOccurence);
// let browserType  = 'mozilla'//change the value
// browserType = browserType.replace('moz','van')//vanilla
// // const updated = browserType.replace('moz','van')
// console.log(browserType);

// const radData = "My NaMe Is MuD";
// console.log(radData.toLowerCase());
// console.log(radData.toUpperCase());

//loops
// for (let count = 0; count <= 5; count++) {
//   console.log('count',count);

// }
// let sum = 0
// let n =7
// for (let i = 0; i <= n; i++) {
//     sum = sum + i

// }
// console.log('sum=',sum);
// let i=1
// while (i<=5) {
//     console.log('suhani');
//     i++

// }

// let student = {
//   name : 'Rahul kumar',
//   age:20,
//   cgpa:7.5,
//   isPass:true

// }
// for(let key in student){
// console.log('key=',key,'value=',student[key]);

// }

// for (let count = 1; count <= 100; count++) {
//      if(count % 2 !== 0){//for even !for odd number
// console.log("this is a even number",count);

//      }

//      }

// let gameNum = 23
// let userNum= prompt('Guess the game number')
// // console.log(userNum);
// while (userNum != gameNum) {
//     userNum= prompt('You entered wrong number  Guess the game number')
// }
// console.log('congratulation , you entered the right number');

//strings
// let str = 'suhani'
// console.log(str.length);
// console.log(str[3]);//a

// let obj = {
//     item :'pen',
//     price:23
// }
// let output = `the cost of ${obj.item} is ${obj.price} ruppes`//we can use it beacuse this is easy to write
// console.log(output);
//console.log('the cost of ',obj.item,'is',obj.price);

//template literal
// let specialString = `This is template literal ${4+5+9}`
// console.log( specialString);
// let str= 'suhani \ntamrkar'//output will be 15 not 16
// console.log(str.length);
// console.log('suhani \ttamrkar');
//  let str = 'suhani'
//  console.log(str.toUpperCase());
//  console.log(str.toLowerCase());
//  console.log(str.trim());
//  console.log(str.slice(2));
// console.log(str.replace('s','t'));
// console.log(str.replaceAll('suhani','tamrkar'));
// let userName = prompt('Enter your full name')
// let genertName = `your userName is @${userName}${userName.length}.
// `
// console.log(genertName.trim());

//Arrays
//  let marks = [23,23,35,65,67,64,45,32,34,34]
//  console.log(marks[0]);
//  let heroes = ['ironmen','thor','hulk','shaktiman','spiderman']
//  console.log(heroes[0]);
//  for (let index = 0; index < heroes.length; index++) {
//    console.log(heroes[index]);
//     ;

//  }

//  for(let item of heroes){
//     console.log(item);

//  }
//  let cities = ['Delhi','Mumbai','Indore','Jabalpur']
//  for(let el of cities){
//     console.log(el.toUpperCase());

//  }

// let marks = [85,97,44,37,76,60]

//  let sum = 85+97+44+37+76+60
// console.log(sum/marks.length);
// let price= [250,645,300,900,50]
// let idx = 0
// for(let val of price){
//     console.log(`Value at index ${idx} = ${val}`);
//     let offer = val / 10
//     price[idx] = price[idx] - offer
//     console.log(`value after offer = ${price[idx]}`);

//     idx++
// }

// //Arrays  method
// let veggeis = ['potato','tamato','other']
// console.log(veggeis.push('chips'));
// // console.log(veggeis.pop('potato'));
// console.log(veggeis);

//function
// function myFunction(msg) {
//   console.log(msg);
// }
// myFunction("hello this is suhani"); //msg is argument

// function sum(a, b) {
//   // s=a+b
//   // return s
//   console.log(a + b);
// }
// sum(23, 32);

// const mul = (a, b) => {
//   console.log(a + b);

//   return a + b;
// };
// mul(550, 656);

// const printHello = () => {
//   console.log("hello");
// };

// function countVowel(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "i" ||
//       char === "o" ||
//       char === "e" ||
//       char === "u"
//     ) {
//       count++;
//     }
//    ;
//   }

//   console.log(count);
// }
// const countVow =  (str) =>{
// let count = 0
// for (const char of str) {
//     if (
//       char === "a" ||
//       char === "i" ||
//       char === "o" ||
//       char === "e" ||
//       char === "u"
//     ) {
//       count++;
//     }
//    ;
//   }

//   console.log(count);
// }
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newBtm");
let msg = document.querySelector(".msg");

let trunO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
   
    if (trunO) {
      box.innerText = "O";
      trunO = false;
    } else {
      box.innerText = "X";
      trunO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});



const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
      
        showWinner(pos1);
      }
    }
  }
};
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msg.innerText = `congratulation , winner is ${winner}`;
  disabledBoxes();
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const resetGame = () => {
  trunO = true;
  enableBoxes();
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
