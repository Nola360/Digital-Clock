function showTime() {
  //Create global date object
  let date = new Date();
  let hours = date.getHours(); // 0-23 hours
  let minutes = date.getMinutes() // 0-59 minutes
  let seconds = date.getSeconds() // 0-59 seconds

  //Create variable Format AM & PM hours using convertFormat function
  let formatHours = convertFormat(hours);

  // Formats the hours up to 12
  hours = checkTime(hours);

  //Inserts zero in the time
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  //Format display 00:00:00 AM/PM
  document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`
}


//create formatHours function
function convertFormat(time) {
  let format = 'AM'
  if (time >= 12) {
    format = 'PM'
  }
  return format;
}

//Format hours function
function checkTime(time) {
  if (time > 12) {
    time = time - 12;
  }

  if (time === 0) {
    time = 12;
  }
  return time;
}

//Add zero function
function addZero(time) {
  if (time < 10) {
    time = '0' + time;
  }
  return time;
}

//Call time to show upon reload
showTime();

//Call as a call back function and a set interval function
setInterval(showTime, 1000);
