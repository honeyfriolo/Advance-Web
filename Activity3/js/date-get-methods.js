const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const mon = new Date();
let month = months[mon.getMonth()];
document.getElementById("date-get-methods").innerHTML = month;