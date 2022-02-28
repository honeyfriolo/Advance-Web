import _ from "lodash";

{
    // Using var declaration    
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("var").innerHTML =
"The value of z is: " + z;
}

{ //Using let declaration
let x = 5;
let y = 6;
let z = x + y;
document.getElementById("v-let").innerHTML =
"The value of z is: " + z;
}

{
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("v-const").innerHTML =
"The total is: " + total;
}