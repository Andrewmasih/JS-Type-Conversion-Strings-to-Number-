/* there are a few different ways that we can this 
1/ -parseInt()
2/ parseFloat()
3/ Number()

Strings to Numbers

you can also take a numberic string and convert it back to numbers, lets take a look at them:

Change a String to a Number

*/


let string1 = "12";

let number1 = parseInt(string1);
let number2 = Number(string1);

let string2 = "3.41";
let number3 = parseFloat(string2);

console.log(number1, number2, number3);
console.log(typeof (number1));
console.log(typeof (number2));
console.log(typeof (number3));