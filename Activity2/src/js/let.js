import _ from "lodash";

let x = 2;   // Allowed

{
  let x = 3;   // Allowed
}

{
  let x = 4;   // Allowed
}
document.getElementById("let").innerHTML = x;
