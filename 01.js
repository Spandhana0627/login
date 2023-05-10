console. log("Hello World");
console. log("My Name is spandhana");
console. log("This is the first js code");
console. log("Hi teja");

const firstname = "spandhana";
const job = "software employee";
const birthYear = 2001;
const year = 2023;

const spandhana = "I'm " + firstname  + ', a ' + (year-birthYear) +' years old ' + job + ';' ;
console.log(spandhana);

/*template literals 
template literals can assemble multiple pieces into one final string,
whenever we need a multiline string we can use this template literals*/

const jonasNew = `I'm ${firstname}, a ${year-birthYear} year old ${job};`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log(`string with
multiple
lines`);