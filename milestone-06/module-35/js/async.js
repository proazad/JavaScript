
function Clock() {
    // Get the current time.
    var theDate = new Date();
    var hours = theDate.getHours();
    var minutes = theDate.getMinutes();
    var seconds = theDate.getSeconds();
  
    // Format the time.
    var time = hours + ":" + minutes + ":" + seconds;
  
    // Display the time.
    document.getElementById("time").innerHTML = time;
  }
  
  // Set the interval to 1000 milliseconds (1 second).
  setInterval(Clock, 1000);
  