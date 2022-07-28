function Ride_Function(){ // defining function and assigning value to it
    var Height, Can_Ride; // defining a variable and assigning value to it
    Height = document.getElementById("Height"). value;
    Can_Ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride +" to ride.";

}

function Vehicle (Make, Model, Year, Color) { // defining a function and assigning value to it
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Make = Year;
    this.Vehicle_Color = Color;


}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // defining a variable and assigning value to it
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("New_and_This").innerHTML = // method to show the value of an element
    "Erik drives a " + Erik.Vehicle_Color +"-colored " + Erik.Vehicle_Model + 
    "manufactured in" + Erik.Vehicle_Make;
}

function Nested_Function() { // nested function is a function under another function that is connected
    document.getElementById("Nested").innerHTML = count();// method to show the value of an element
    function count (){
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
    }
