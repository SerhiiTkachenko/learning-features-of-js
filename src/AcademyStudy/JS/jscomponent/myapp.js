// var sugar = prompt("how many spoon of sugar, do you want?");
// var milk = prompt("how many percent of milk, do you want?");

// function makeCoffee( sugar, milk ) {
//     var instructions = "Boil water,"; 
//     instructions += " pour into coup"; 
//     instructions += " add coffee granules"; 
//     instructions += " add coffee granules"; 
//     instructions += " add "+ sugar + " spoons of sugar,"; 
//     instructions += " add "+ milk + "% milk.";
//     return instructions; 
// }
// document.write( makeCoffee(sugar, milk) );

// var array = [
    //     "string",
    //     100,
    //     ["embeded", 200],
//     {car: "ford"},
//     function(){return "drive";}
// ]
// var n = prompt('Enter value for varification');

// function isNumeric(n) {
    //     return !isNaN(parseFloat(n)) && isFinite(n);
// }
// alert(isNumeric(n));

// var price1 = 0.1;
// var price2 = 0.2;

// alert( +(price1 + price2).toFixed(2));

// var i = 0;
// while (i < 11) {
    //   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }
var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons: [ {maker: "BMW"}, {maker: "BMW"} ]
    },
    drive: function(){return "drive";}
};
console.log(car.engine.pistons[0].maker);