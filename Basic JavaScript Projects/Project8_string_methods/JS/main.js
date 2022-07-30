function full_Sentence(){ // defining a function
    var part_1 = "My name ";// assigning a variable and value to it
    var part_2 = "is ";
    var part_3 = "Marilyn ";
    var part_4 = "Flores, ";
    var part_5 = "my birthday is"
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);// using concat method to connect two or more strings
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){ // using  a slice method
    var Sentence = "My Birthday is on September 19";// assigning a variable and value to it
    var Section = Sentence.slice (17,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {// using toString method that returns a number as a string
    var X = 1982;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method(){ // using a method to return a string as number of a specified length
    var X= 12938.3012087376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(15);
}