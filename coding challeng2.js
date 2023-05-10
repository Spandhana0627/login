
var massMark = 78;
var heightMark = 1.69;
var massJohn = 95;
var heightJohn = 1.76; 


//var massMark = 95;
//var heightMark = 1.88;
//var massJohn = 85;
//var heightJohn = 1.76;

var BMIMark = massMark / heightMark ** 2;
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark , BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}