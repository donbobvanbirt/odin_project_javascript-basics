// Odin Project Javascript Basics http://www.theodinproject.com/web-development-101/javascript-basics
// Problem 2 https://projecteuler.net/problem=2

var i = 1;
var j = 2;

var n;
var sum = 0;

do {
    if (j % 2 === 0) {
        sum += j;
    }
    
    n = i + j;
    i = j;
    j = n;
    
} while (j < 4000000);

alert(sum);