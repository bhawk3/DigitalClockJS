
var hr = document.getElementById('hr');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var date = document.getElementById('date');

setInterval(()=>{
    var today = new Date()
    var hour = today.getHours()
    var minutes = today.getMinutes()
    var seconds = today.getSeconds()

    if (hour < 10) {
        hour = "0" + today.getHours()
    } /* Can I contecate these two if statements? */
    if (minutes < 10) {
        minutes = "0" + today.getMinutes()
    }
    if (seconds < 10) {
        seconds = "0" + today.getSeconds()
    }

   var todayDate = new Date();

    hr.innerHTML = hour
    min.innerHTML = minutes
    sec.innerHTML = seconds
    date.innerHTML = todayDate.toDateString();
}, 1000)
 /* Set the date */

    

  
  