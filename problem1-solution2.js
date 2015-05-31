// Odin Project Javascript Bacics http://www.theodinproject.com/web-development-101/javascript-basics
// Problem 1 https://projecteuler.net/problem=1

var num = 0;
var sum = 0;

do {
    num++;
    if(num % 3 === 0 || num % 5 === 0) {
        sum += num;
    }
    
} while(num < 999);
alert(sum);