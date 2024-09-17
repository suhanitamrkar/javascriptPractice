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

 const person =  {
     name:['bob','smith'],
     age:32,
    bio:function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old `);
        
    },
    introdueSelf:function(){
 console.log(`Hi! I'm ${this.name[0]}`);

    }

 }
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
  



