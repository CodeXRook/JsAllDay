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