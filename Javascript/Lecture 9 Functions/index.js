 
// function greetings(){
//     console.log("Hello My Name is Mohd Anas Kamal");
//     return 3;
// }

// function addNumbers(num1,num2){
//     const sum=num1+num2;
//     console.log(sum);
// }
// greetings();
// addNumbers(3,4);

// console.log(greetings())

//  Rest
// function store(...num){
//     let sum=0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }

// store(2,3);
// store(2,3,5);
// store(2,3,5,9);
// store(2,3,5,9,14);


// Rest Operator
// const arr=[10,20,30,40,50];
// const arr2=[30,70,90,10];

// const [first,second,...num] = arr;
// console.log(first,second,num);

// const answer = [arr,arr2];
// console.log(answer)


// console.log(addNumber(2,5))

// function addNumber(num1,num2){
//     return num1+num2;
// }


// Arrow Function

// ()=>{

// }

// const addNumber=(num1,num2)=>{
//     return num1+num2;
// }

// let arr=[10,11,19,7,50];
// arr.sort((a,b)=>a-b);
// console.log(arr)

// const addNumber=(num1,num2)=>num1+num2;
// console.log(addNumber(5,7));


// If we have a single parameter no need of ()
// const squareNumber=num=>num*num;
// console.log(squareNumber(5));


// const greeting = ()=>{
//     return {
//         name : "Rohit",
//         age : 20,
//     }
// }

// const greeting =()=>({name : "Rohit", age:20});
// console.log(greeting())


// function dance(){
//     console.log("Why are you dancing")
// }

// function greet(){
//     console.log("Hello, how are you");
// }

// function meet(callback){
//     console.log("Right now, I am in a meeting");
//     callback();
//     console.log("Are you fine")
// }

// // meet(greet);
// meet(dance);