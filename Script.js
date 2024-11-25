


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// CallBack a function that passes as an argument to another function
//a function which is to be executed after another function has finished execution. 
//Example 1

// function Hello(callback) {
//     console.log("Hello !");
//     callback();
// }

// function wait() {
//     console.log("Wait");
// }

// function leave() {
//     console.log("Leave !");
// }

// function goodbye() {
//     console.log("Goodbye !");
// }


// Hello(wait);


// Hello(leave);

// Hello(goodbye);


//Example2

// sum(displayPage,1,6)

// function sum(callback,x,y){
//     let result = x + y;
//     callback(result);

// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result
// }


// //Synchronous

// function calculateSum(a, b, callback) {
//     const sum = a + b;
//     callback(sum);   
// }

// calculateSum(5, 7, function(sum) {
//     console.log("The sum is", sum);
// });


// //Asynchronous


// function calculateSum(a, b, callback) {
//     const sum = a + b; 
//     setTimeout(() => {
//         callback(sum); 
//     }, 1000);
// }

// calculateSum(4, 4, function(sum) {
//     console.log("The sum is", sum); 
// });

//Example 3


// function fetchUserData(callback) {

//     setTimeout(function() {
//         const userData = { name: 'Khurram', age: 22 }; 
//         callback(userData); 
//     }, 2000);
// }


// fetchUserData(function(data) {
//     console.log('User data:', data); 
// });


//Example 4


// function processNumbers(arr, callback) {
//     const result = [];
//     for (let num of arr) {
//         result.push(callback(num));
//     }
//     return result;
// }

// const processedArray = processNumbers([1, 6, 3, 5], function(num) {
//     return num * 3; 
// });

// console.log(processedArray);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Spread Operator  ... allows an iterable such as an array or string to be 
// expanded into seperate elements (unpack the elements)

//Example1
// let numbers =[ 1,2,3,4,5]
// let maxium =Math.max(...numbers)
// let minumum =Math.min(...numbers)

// console.log(maxium)

//Example2
// let username ="Khurram"
// let letters=[...username]

// console.log(letters)

//Example3

// let fruits =["apple","orange","banana"]
// let vegetables =["carrots","celery","potatoes"]
// let foods =[...fruits,...vegetables ,"eggs","milk"]

// console.log(foods)

//Example2
// let arr =[10,9,8,7,6,5,4,3,2,1]
// let [a,b,...rest] =arr

// console.log(a,b, rest)


// let arr1 =[3,5,8,4,2,9,7,1,2,3]
// let obj1 ={...arr1}

// console.log(obj1)


// function sum(v1,v2,v3){
//     return v1+v2+v3
// }

// console.log(sum(...arr1))

//Example3

// let a=1;

// let b=2;

// [a,b] =[b,a];

// console.log(a);
// console.log(b);


// const colors=["red","green","blue","black","white"];


// // [colors[0],colors[4]] = [colors[4],colors[0]];

// // console.log(colors)

// const [firstColor,secondColor,...extaColors] =colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(extaColors);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CLOSURE = A function defined inside of another function,
// the inner function has access to the variables 
// and scope of the outer function
// Allow for private variables and state maintenance 
//Example1
// function outer (){
//     let message ="Hello"

//     function inner(){
//         console.log(message);
//     }
//     inner()
// }
// outer()

//Example2

// function createCounter(){

//     let count = 0;

// function increment(){

//     count++;
//     console.log(`Count increase tom ${count}`)
// }

// function getCount(){
//     return count
// }
// return {increment ,getCount}
// }

// const counter = createCounter()

// counter.increment()
// counter.increment()
// counter.increment()

// console.log(`The current count is ${counter.getCount()}`);

//Example3

// function createGame(){
// let score =0

// function increaseScore(points){

//     score +=points
//     console.log(`Your current points is ${points}`)
// }

// function decreaseScore(points){

//     score +=points
//     console.log(`Your current points is ${points}`)
// }

// function getScore(){
//     return score
// }
// return {increaseScore,decreaseScore,getScore}
// }

// const game = createGame();
// game.increaseScore(5)
// game.decreaseScore(3)
// game.increaseScore(8)

// console.log(`The final score is ${game.getScore()}`)

//Example4

// function createAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }


// const addThree = createAdder(4);
// console.log(addThree(3)); 
// console.log(addThree(5)); 


//Example5

// function createCounter() {
//     let count = 0;

//     return {
//         increment: function() {
//             count += 1;
//             return count;
//         },
//         decrement: function() {
//             count -= 1;
//             return count;
//         }
//     };
// }


// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment()); 
// console.log(counter.decrement());
// console.log(counter.decrement()); 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TERNARY OPERATOR
//Example1

// let isStudent =false;

// let message = isStudent ? "You are student": "you are Not a student";

// console.log(message);


// let age =18;

// let message =age >=18 ? "You are an adult" :"You are a minor";


// console.log(message)


//Example2


// function checkEvenOrOdd(number) {
//     const result = (number % 2 === 0) ? "Even" : "Odd";
//     console.log(`The number ${number} is ${result}.`);
// }


// const input = parseInt(prompt("Enter Number: "), 10);
// checkEvenOrOdd(input);

//Example3


// function getGrade(score) {
//     const grade = (score < 0 || score > 100) ? "Invalid score!" :

//                   (score >= 90) ? "A" :
//                   (score >= 80) ? "B" :
//                   (score >= 60) ? "C" :
//                   (score >= 50) ? "D" : "F";
//     console.log(
//         (grade === "Invalid score!") ? "Please enter a number between 0 and 100..." :
//         `The grade for a score of ${score} is: ${grade}`
//     );
// }


// const input = parseInt(prompt("Enter the student's score (0-100): "));


// getGrade(input);


/////////////////////////////////////////////////////////////////////////////////////////////////////

//Promises An Object that manages asychronous operation
// Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// new Promise((resolve, reject )=>{asynchronous code})
//Example1
// function cleanKitchen(){

//      return new Promise((resolve,reject)=>{

//         setTimeout(()=>
//             {  const cleaned =true;

//                 if(cleaned){
//                 resolve("Kitchen is clean");
//                 }
//                 else{
//                     reject("Kitchen is not clean")
//                 }
//             },250
//              )

//      });
// }

// function cookDinner(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const cooked = true;

//             if(cooked){
//            resolve("Dinner is ready");
//             } else{
//                 reject("Dinner is not ready");
//             }
//         },500);

//     })
// }

// function eatDinner(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const eaten = false;

//             if(eaten){
//             resolve("Dinner is eaten");
//             }
//             else
//             {
//                 reject("Dinner is not eaten");
//             }      
//         },200)
//        })
// }


// cleanKitchen().then(value=> {console.log(value); return cleanKitchen()})
//       .then(value => {console.log(value); return cookDinner()})
//       .then(value => {console.log(value); return eatDinner()})
//       .catch(error => console.error(error))
//callback
// cleanKitchen(()=>{
//     cookDinner(()=>{
//         eatDinner(()=> console.log("You Finished All the chores!"))

//         });
// });

//Example 2

// const delayed = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Khurram");
//     }, 2000);
//   });


//   delayed.then((message) => {
//     console.log(message);
//   });


//Example 3


// const error = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Error"));
//     }, 1000);
//   });


//   error.catch((error) => {
//     console.error(error.message);
//   });


//Example4

// function waitForPromises() {
//     const promise1 = new Promise((resolve) => setTimeout(() => resolve("First Promise"), 1000));
//     const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second Promise"), 500));

//     Promise.all([promise1, promise2]).then((results) => {
//     
//       console.log(results[0]);
//       console.log(results[1]);
//     });
//   }


///////////////////////////////////////////////////
//Async/Await

//Async = makes a function return a promise
//Await =make an async function wait for a promise




//Example1
// async function Promises() {
//     const promise1 = new Promise((resolve) => setTimeout(() => resolve("First Promise"), 1000));
//     const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 500));

//     try {
//       const results = await Promise.all([promise1, promise2]);
//       console.log(results[0]);
//       console.log(results[1]);
//     } catch (error) {
//       console.error( error);
//     }
//   }

//   Promises();

//Example2
// async function fetchData() {
//     const url = "https://jsonplaceholder.typicode.com/posts";

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// fetchData();


//////////////////////////////////////////////////////////////////////////////////////////////////////

//CURRING

//when a function, instead of taking all arguments at one time
//takes the first one and return a new function that takes second one
 

// const power = base => exponent => base ** exponent;
// console.log(power(2)(3)); 
// const format = str => prefix => suffix => `${prefix} ${str} ${suffix}`;
// console.log(format('Hello')('Mr.')('Smith'));







//////////////////////////////////////////////////////////////////////////////////////////////
//Other Practice Example


// let isStudent =false;

// let message = isStudent ? "You are student": "you are Not a student";

// console.log(message);


// let age =18;

// let message =age >=18 ? "You are an adult" :"You are a minor";


// console.log(message)





// function checkEvenOrOdd(number) {
//     const result = (number % 2 === 0) ? "Even" : "Odd";
//     console.log(`The number ${number} is ${result}.`);
// }


// const input = parseInt(prompt("Enter Number: "), 10);
// checkEvenOrOdd(input);





// function getGrade(score) {
//     const grade = (score < 0 || score > 100) ? "Invalid score!" :
//                   (score >= 90) ? "A" :
//                   (score >= 80) ? "B" :
//                   (score >= 60) ? "C" :
//                   (score >= 50) ? "D" : "F";
//     console.log(
//         (grade === "Invalid score!") ? "Please enter a number between 0 and 100." :
//         `The grade for a score of ${score} is: ${grade}`
//     );
// }


// const input = parseInt(prompt("Enter the student's score (0-100): "));
// getGrade(input);






// let arr =[10,9,8,7,6,5,4,3,2,1]
// let [a,b,...rest] =arr

// console.log(a,b, rest)


// let arr1 =[3,5,8,4,2,9,7,1,2,3]
// let obj1 ={...arr1}

// console.log(obj1)


// function sum(v1,v2,v3){
//     return v1+v2+v3
// }

// console.log(sum(...arr1))



// let a=1;

// let b=2;

// [a,b] =[b,a];

// console.log(a);
// console.log(b);


// const colors=["red","green","blue","black","white"];


// // [colors[0],colors[4]] = [colors[4],colors[0]];

// // console.log(colors)

// const [firstColor,secondColor,...extaColors] =colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(extaColors);


// function displayPerson({firstName,lastName,age,job}){
//     console.log(`Name: ${firstName} ${lastName}, Age: ${age}, Job: ${job}`)

// }

// const person1={

//     firstName : "Khurram",
//     lastName : "Qaiser",
//     age:30,
//     job : "front end Developer"
// }


// const person2={

//     firstName : "Naseem",
//     lastName : "Shah",
//     age:34,
//     job : "Fast Bolwer"
// }

// displayPerson(person1);

// const {firstName,lastName,age,job} =person2

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

















// const student = {
//     namee: 'David',
//     grade: 'A',
//     age: 22,
//     university: 'XYZ University'
// };


// const { namee, grade } = student;


// console.log(`Name: ${namee}`);
// console.log(`Grade: ${grade}`);


// let a = 5;
// let b = 10;


// [a, b] = [b, a];

// console.log(`a = ${a}`);
// console.log(`b = ${b}`); 



// function createCounter(){

//     let count =0;
//      function increment(){


//         count++;
//         console.log(`Count increased to ${count}`) ;
//      }
//         function getCount(){
//             return count;
//         }

//      return {increment,getCount}

// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`)


// function createAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }


// const addThree = createAdder(4);
// console.log(addThree(3)); 
// console.log(addThree(5)); 




// function createCounter() {
//     let count = 0;

//     return {
//         increment: function() {
//             count += 1;
//             return count;
//         },
//         decrement: function() {
//             count -= 1;
//             return count;
//         }
//     };
// }

// // Example usage:
// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment()); 
// console.log(counter.decrement());
// console.log(counter.decrement()); 



// function calculateSum(a, b, callback) {
//     const sum = a + b;
//     callback(sum);
// }

// calculateSum(5, 7, function(sum) {
//     console.log("The sum is", sum); 
// });

// function calculateSum(a, b, callback) {
//     const sum = a + b;
//     setTimeout(() => {
//         callback(sum);
//     }, 1000); 
// }



// calculateSum(5, 7, function(sum) {
//     console.log("The sum is", sum); 
// });


// function outer(){

//     let message ="Hello"

//     function inner(){

//         console.log(message);


//     }

//     inner();

// }
// outer();





// function createCounter(){
// let count =0;

// function increment(){

//     count++;
//     console.log(`Count increase to ${count}`);
// }

// function getCount(){
//     return count;
// }

// return {increment,getCount};



// }


// const counter = createCounter();


// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`);


// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`);
// console.log(`The current count is ${counter.getCount()}`);
// counter.increment();
// counter.increment();


// let score =0;

// function increaseScore(points){
//     score += points;
//     console.log(`+${points}pts`);
// }

// function decreaseScore(points){
//     score -= points;
//     console.log(`-${points}pts`);
// }

// function getScore(){
//     return score
// }

// increaseScore(10);
// decreaseScore(20);
// increaseScore(10);
// decreaseScore(5);
// increaseScore(25);

// console.log(`The final Score is ${getScore()}`)




// function createGame() {

//     let score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points} pts`);
//     }

//     function decreaseScore(points) {
//         score -= points;
//         console.log(`-${points} pts`);
//     }

//     function getScore() {
//         return score;
//     }

//     return { increaseScore, decreaseScore, getScore };

// }

// const game = createGame();
// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);
// game.decreaseScore(5);

// console.log(`The final score is ${game.getScore()} pts`);


