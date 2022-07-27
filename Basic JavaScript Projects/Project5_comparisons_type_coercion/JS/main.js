function my_Function(){// this function is to check whether or not something is a number 
    document.getElementById("Math").innerHTML = isNaN('This is a string');
}

document.write (typeof 1982); // output a number
document.write (typeof "Word"); // output a string

document.write(2E310);// to display "infiniy"

document.write(-3E310);//to display"-infinity"

document.write ("10" + 5);// type coercion converts the value to type ut chooses

document.write(10>2); //boolean logic that output true

document.write(10<2);// boolean logic that output false

console.log ( 2 + 2);// display the result of math operation in the console

document.write (10==10);//to check for equality

document.write (3==10);//to check if the left side is equal to the right side

X = 10;
Y = 10;
document.write(X === Y); //comparison between left and right side that the answer will be "true or false"

X = 82;
Y = "82";
document.write (X === Y);//comparison between left and right side that the answer will be "true or false"

A = "Marilyn";
B= "Marilyn";
document.write (A === B);//comparison between left and right side that the answer will be "true or false"

document.write(5>2 && 10>4);// logical operators to determine between logic values or variables, verifying if both returns true or false
document.write(5>10 && 10>4);

document.write( 5 >10 || 10 > 4);// logical operators to determine between logic values or variables, verifying if both returns true or false
document.write( 5 > 10 || 10>20);

function not_Function(){
    document.getElementById("Not").innerHTML = !(20>10); //operator to checcks whether or not something is true.

}


