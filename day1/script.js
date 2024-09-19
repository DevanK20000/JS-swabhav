
// let age = 20;
// console.log(age)

// console.log(typeof age)

// age = "Tyenty one";
// console.log(age)
// console.log(typeof age)

// let isStundent = true;
// console.log(isStundent)
// console.log(typeof isStundent)

// let user ={
//     name:"Devan",
//     email:"deva@sd.com",
//     age:24
// }
// console.log(user)
// console.log(user.name)
// console.log(user.email)
// console.log(user.age)
// console.log(typeof user)

// let temp;
// console.log(temp)
// console.log(typeof temp)

// let temp2=null;
// console.log(temp2);
// console.log(typeof temp2);


// console.log(temp+10)
// console.log(temp2+10);

// console.log(temp+"sas")
// console.log(temp2+"sas")


//String methods

// let fullName="Devan Khandagale";
// let email ="DEVA@gmail.com";

// console.log(email.toLocaleLowerCase())
// console.log(email.toUpperCase())

// console.log(email.indexOf("@"));
// console.log(email.split("@"));
// console.log(email.substring(email.indexOf("@")+1))
// console.log(email.slice(5,7));
// console.log(email.includes("DEVA"));
// console.log(email.replace("DEVA","DEVU"))

// Template String

// let title = "Learn Java in 24 days";
// let author = "Devan";
// let likes = 123;

// let strResult = "Blog titled "+title+" by "+author+" has "+likes+" likes"
// console.log(strResult);

// let result = `Blog titled ${title} by ${author} has ${likes} likes`;
// console.log(result);

// let html = `<h2>${title}</h2>
//             <h4>${author}</h4>
//             <h4>${likes}</h4>`;

// console.log(html);
// const div = document.querySelector("div")

// div.innerHTML= html

// arrays

// let students = ["Devan","Sanjay","Rohit","Nikhil","Ravi"];
// console.log(students.length);
// console.log(students.join("-"));
// console.log(students.indexOf("Rohit"));
// console.log(students.includes("Devan"));
// console.log(students.indexOf("Ravi"));
// console.log(students.indexOf("Devashree"));


// students.pop();
// console.log(students)

// students.push("Devashree")
// console.log(students);

// // students.splice(1,3);
// // console.log(students);

// students = students.concat("David");
// console.log(students)

// students = students.concat(["hellow","world"])
// console.log(students)

//comporator

// let num=10;
// let numText="10";
// console.log(num==numText);
// console.log(num===numText);

// type conversation

// let score ="100";
// console.log(score,typeof score);

// let tempScore = Number(score);
// console.log(tempScore,typeof tempScore);

// let marks = 150;
// let strMarks = String(marks)
// console.log(strMarks, typeof strMarks);

// let num1= 100;
// let boolNum = Boolean(num1); //only flase for 0 value
// console.log(boolNum, typeof boolNum);

// let str1= "Hundred";
// let boolStr = Boolean(str1); //only flase for blank value
// console.log(boolStr, typeof boolStr);

// function and function hoistinf

// greet()

// function greet(name="Devan",time="Morning") {
//     console.log(`Good ${time}, ${name}\nWelcome to JS classes`);   
// }

// greet("vikas","Night")
// greet("Devan")


// //greeting() Gives error
// const greetings = function(name="Devan",time="Morning") {
//     console.log(`Good ${time}, ${name}`);
// }
// greetings()


// const factorial = function(number) {
//     if(number===1) return 1;
//     return number* factorial(number-1); 
// }
// console.log(factorial(4))

// const circleArea = (radius) =>  Math.PI*radius*radius;

// let area = circleArea(10)
// console.log(area);

// callback function
// const func = (callback) =>{
//     callback();
// }

// const temFunc = ()=> console.log("Callback Funciton callled");
// func(temFunc)

// let html="";
// console.log(students);
// students.forEach((student) => html+=`<li>${student}</li>\n`)
// const ul = document.querySelector("ul");
// console.log(html);
// ul.innerHTML=html

// object literals

// let user ={
//     name:"Devan",
//     eamil:"Devan@afk.com",
//     age:24,
//     hobbies:["swimming","reading","camping"],
//     printHobbies:function() {
//       console.log(this.hobbies.join(","));
        
//     },
//     login:function(){
//         console.log(this.name+" has logged in...");
//     },
//     logout:function() {
//         console.log(this.name+" has logged out...");  
//     }
// }

// console.log(user);
// user.login();
// user.logout();
// user.printHobbies()


// Math
// let number = 75.4;
// console.log(Math.ceil(number));
// console.log(Math.floor(number))
// console.log(Math.round(number));
// console.log(Math.PI);

// function RandomMax(max) {
//     return Math.random()*max;
// }

// function Random(min,max) {
//     return Math.random()*(max-min)+min;    
// }

// console.log(RandomMax(number));
// console.log(Random(-10,40));


