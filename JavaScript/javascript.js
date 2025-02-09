//create new date variable 
var date = new Date();
//convert date to string
var n = date.toDateString();
//create time variable using date variable 
var time = date.toLocaleTimeString();

// html element with the id of time display date/time 
document.getElementById('time').innerHTML = n + ' ' + time;