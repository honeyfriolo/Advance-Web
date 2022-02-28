import _ from "lodash";

{
try {
    const PI = 3.141592653589793;
    PI = 3.14;
  }
  catch (err) {
    document.getElementById("const").innerHTML = err;
  }

}

{// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

// Display the property:
document.getElementById("const1").innerHTML = "Car owner is " + car.owner;}