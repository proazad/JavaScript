

  
  // Set the interval to 1000 milliseconds (1 second).
  setInterval(Clock=>{
    let theDate = new Date();
    let hours = theDate.getHours();
    let minutes = theDate.getMinutes();
    let seconds = theDate.getSeconds();
    // Display the time.
    document.getElementById("second").innerHTML = seconds;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("hour").innerHTML = hours;
  }, 1000);
  