// Task 1
// 1. How would you define a function that takes two numbers as parameters and returns their sum?

function sumOfTwoNumbers(a,b){
    return `The sum of ${a} and ${b} is ${a+b}`;
}
console.log(sumOfTwoNumbers(10,20));
console.log();

//Task 2
//2. If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?
function string(a){
    return a.toUpperCase();
}
console.log(string("Krishna"));
console.log();

//Task 3
//3. In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?
function hello(a){
    return a;
}
console.log(hello());
console.log();

//Task4
//4. Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?
function isArrayEmpty(arr){
    if(arr.length == 0)
        return 'Array is empty';
    else
        return 'Array contains values';
}

console.log(isArrayEmpty([]))
console.log();


//Task5
// 5. write a function that takes two numbers as parameters and returns their difference.
function difference(a,b){
    return `The difference of ${a} and ${b} is ${a-b}`;
}
console.log(difference(20,10));
console.log();

//Task6
//6. Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."
function greeting(name, age){
    return `Hello, ${name}! You are ${age} years old.`
}
console.log(greeting("Krishna",22));
console.log();

//Task7
//7. Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.
function evenOrOddCheck(a){
    if(a%2==0)
        return `${a} is a even number`;
    else
        return `${a} is a odd number`;
}
console.log(evenOrOddCheck(8));




