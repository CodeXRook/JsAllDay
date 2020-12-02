// MAKING A SNAKE GAME: PART 1
// using setInterval to Animate the Game

var intervalID = setInterval(function () {
ctx.clearRect(0, 0, width, height);
drawScore();
snake.move();
snake.draw();
apple.draw();
drawBorder();
}, 100);

// Setting the Size and font
ctx.font = "20px Courier"; ctx.fillText("Courier", 50, 50);
ctx.font = "24px Comic Sans MS";
ctx.fillText("Comic Sans", 50, 100);
ctx.font = "18px Arial";
ctx.fillText("Arial", 50, 150);