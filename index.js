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



  



