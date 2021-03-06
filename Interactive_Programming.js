// what if we want some code to run after a delay
// or in response to something the user does?
// Delaying Code with setTimeout

/* Instead of having JavaScript execute a function immediately,
you can tell it to execute a function after a certain period of time.
Delaying a function like this is called setting a timeout.
*/

/* The following listing shows how we could use setTimeout to dis-
play an alert dialog
*/

timeUp = () => {
 alert("foreve love");
};

setTimeout(timeUp, 3000);

// -----------------------------------------------------
// Canceling a Timeout
// To cancel a time- out, 
// use the function clearTimeout on 
// the timeout ID returned by setTimeout.

var doHomeworkAlarm = function () {
    alert("Hey! You need to do your homework!");
};

var timeoutId = setTimeout(doHomeworkAlarm, 6000);

// To cancel the timeout, pass the timeout ID to the clearTimeout function like this:

clearTimeout(timeoutId);


// ------------------------------------------------------
// Calling Code Multiple Times with setInterval

// You call setInterval with two arguments: 
// the function you want to call and the length of the interval (in milliseconds)

var counter = 1;

var printMessage = function () {
    console.log("You have been staring at you console for " + counter + "second");
      counter++;
};
 
var intervalId = setInterval(printMessage, 1000);
clearInterval(intervalId);


//-------------------------------------------

// Animating elements with setInterval
var leftOffset = 0;

    var moveHeading = function () {
        $("#heading").offset({ left: leftOffset });

        leftOffset++;

        if(leftOffset > 200) {
            leftOffset = 0;
        }
    };

    setInterval(moveHeading, 30);

//--------------------------------------------

// Responding to user Actions
// Responding to Clicks

var clickHandler = function (event) {
    console.log("Click!" + event.pageX + " " + event.pageY);
};
  
  $("h1").click(clickHandler);

  //------------------------------------------
  // The mousemove event

  $("html").mousemove(function (event) {
      $("#heading").offset({
          left: event.pageX,
          top: event.pageY
      });
  });

//---------------------------------------------