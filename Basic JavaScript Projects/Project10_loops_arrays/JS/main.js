
function Call_Loop() { //Displaying a while loop
    var Digit = "";
    var X = 10;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}


var Cars = ["Kia", "Hyundai", "BMW", "Mercedes", "Tesla", "Toyota", "Honda"]; //Displaying a for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Cars.length; Y++) {
    Content += Cars[Y] + "<br>";
    }
    document.getElementById("List_of_Cars").innerHTML = Content;
}

function array_Function() { //Displaying an array

    var Favorite_Color = [];
    Favorite_Color [0] = "Red";
    Favorite_Color[1] = "Black";
    Favorite_Color[2] = "White";
    Favorite_Color[3] = "Olive Green";
    Favorite_Color[4] = "Gray";
    document.getElementById("Array").innerHTML = "My favorite color is "+ Favorite_Color [3] + ".";
}


function constant_Function() { //Displaying a constant
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "green";
    Musical_Instrument.price = "$1200";
    Musical_Instrument.size = "large";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.size + " sized " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}


let car = {  //Creating an object with let
    make: "Kia ",
    model: "Sorento ",
    year: "2022 ",
    color: "gray ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();