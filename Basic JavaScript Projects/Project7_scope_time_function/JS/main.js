function Age_Function(){
    Age = document.getElementById("Age").value;
    if (Age>=18) {
        Vote="You are allowed to buy alcohol";

    }
    else {
        Vote= "Please provide Identification";

    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;

}

function Time_Function(){
    var Time= new Date().getHours();
    var Reply;
    if (Time<12 == Time>0){
        Reply = "Good morning";
    }
    else if (Time>12 == Time<18){
        Reply = "Good afternoon";

    }
    else {
        Reply = "Good evening";
    }
    document.getElementById("How_old_are_you?").innerHTML = Reply;
    
    
    }

    if (100 < 101) { 
        document.write("The number on the left is smaller than the right")
    }

    var M = 100;
    function Add_numbers_1() {
        document.write(20 + M + "<br>");
    }
    function Add_numbers_2(){
        document.write (M + 200 );
    }
    
    Add_numbers_1();
    Add_numbers_2();


    function Add_numbers_1() {
    var F = 1;
    document.write(20 + F + "<br>");
}
function Add_numbers_2(){
    document.write (F + 2  );
}

Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var F = 1;
    console.log (20 + F);

}
function Add_numbers_2(){
    console.log(F + 20);

}
Add_numbers_1();
Add_numbers_2();


