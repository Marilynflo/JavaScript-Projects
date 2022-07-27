function my_Dictionary(){ //defining a function 
    var Shoes = { //defining a variable and naming it
        Brand:"Nike",
        Color:"White",
        Style:"Running",
        Price: 100,
        Material:"Nylon"

    };
delete Shoes.Price; //function to delete a value
document.getElementById("Dictionary").innerHTML = Shoes.Price; //method to show the value of an element

}