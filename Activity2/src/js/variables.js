import _ from "lodash";

{
    // Using var declaration    
var x = 512;
var y = 687;
var z = x + y;
document.getElementById("var").innerHTML =
"The value of z is: " + z;
}

{ //Using let declaration
let x = 142;
let y = 123;
let z = x + y;
document.getElementById("v-let").innerHTML =
"The value of z is: " + z;
}
 //Using let declaration
{
const price1 = 200;
const price2 = 123;
let total = price1 + price2;
document.getElementById("v-const").innerHTML =
"The total is: " + total;
}