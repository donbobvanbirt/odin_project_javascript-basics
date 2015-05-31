// Odin Project Javascript Bacics http://www.theodinproject.com/web-development-101/javascript-basics
// Problem 1 https://projecteuler.net/problem=1

var sum = 0;
for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
    console.log(sum);
}