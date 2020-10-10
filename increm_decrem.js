/* When we use the ++ operator, 
the value of highFives goes up by 1, 
and when we use the -- operator, 
it goes down by 1. You can also put these operators after the variable. 
This does the same thing, 
but the value that gets returned is the value
 before the increment or decrement
*/

var highFives = 0; ++highFives;
1
++highFives;
2
--highFives;
1

var x = 10;
x = x + 5;
console.log(x);

var score = 10;
score += 7;
score -= 3;
console.log(score);

var balloons = 100;
balloons *= 2;
console.log(balloons);

var balloons = 100;
balloons /= 4;
console.log(balloons);