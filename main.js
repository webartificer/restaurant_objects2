$(document).on("ready", function() {

// DEFINE CONSTRUCTORS FOR MENU ITEMS //

function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name || "name unknown";
    this.calories = calories || "calories unknown";
    this.vegan = vegan || "vegan unknown";
    this.glutenFree = glutenFree || "glutan free unknown";
    this.citrusFree = citrusFree || "citrus free unknown";
}

function Drink(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}

function Plate(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}

function Order(plates) {
    this.plates = plates;
}
function Menu(plates) {
    this.plates = plates;
}
function Restaurant(name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
}

function Customer(diet)  {
    this.diet = diet;
}

var tortillaSoup = new FoodItem("Tortilla Soup", 350, false, false, true);
var fishTacos = new FoodItem("Tacos", 400, false, false, false);
var burritoBowl = new FoodItem("Burrito Bowl", 500, false, false, true);


//problems//
var burrito = new Plate(
    "Burrito",
    "A good burrito",
    8.00,
    ["rice", "beans", "tortilla", "chicken", "lettuce", "pico de gallo", "cheese", "sou r cream"]
);

var guac = new Plate(
    "Guacamole Plate",
    "A delicious serving of guacamole along side a healthy heaping of nachos",
    7.00,
    ["Guacamole", "Nachos", "Black Olives", "Cheese"]
);

var margarita = new Drink(
    "Margarita",
    "A good margarita",
    8.00,
    ["Tequilla", "Lime Juice", "Simple Syrup", "Orange Liqueur", "Salt"]);

var dinnerMenu = new Menu(
    [margarita,
    guac,
    burrito]
);

var pepes = new Restaurant(
    "Pepes", "Authentic Mexican Cuisine", dinnerMenu
);

FoodItem.prototype.toString = function () {
    return this.name + "\n" + this.calories + "\n" + this.vegan + "\n" +   this.glutanFree + "\n" + this.citrusFree;
};

Drink.prototype.toString = function () {
    return this.name + "\n" + this.description + "\n" + this.price + "\n" +   this.ingredients;
};

Plate.prototype.toString = function () {
    return this.name + "\n" + this.description + "\n" + this.price + "\n" +   this.ingredients;
};




Plate.prototype.isVegan = function () {
    return this.isVegan;
};

Plate.prototype.isGlutenFree = function () {
    return this.isGlutenFree;
};

Plate.prototype.isCitrusFree = function () {
    return this.isCitrusFree;
};




Order.prototype.toString = function () {
    return this.plates.toString();
};

Menu.prototype.toString = function () {
    return this.plates.toString();
};

Restaurant.prototype.toString = function () {
    return this.name + "\n" + this.description + "\n" + this.menu;
};

Customer.prototype.toString = function () {
    return this.diet;
};



// console.log(dinnerMenu);
console.log( pepes.toString() );

// class_name.prototype.method_name = function (first_argument) {
//     // body...
// };




    FoodItem.prototype.create = function() {
        return ('<div class="food-item">' + this.name + '\n' + this.calories + '\n' + this.vegan + '\n' + this.glutenFree + '\n' +  this.citrusFree + '</div>');
        };
        var carrots = new FoodItem("carrots", 20, true, true, true );
        $(".container").append(carrots.create());


    Drink.prototype.create = function() {
        return ('<div class="drink-item">' + this.name + '\n' + this.description + '\n' + this.price + '\n' + this.ingredients + '</div>');
        };
        var lemonade = new Drink("lemonade", "fresh squeezed lemonade", 1.00, ["lemons", "water", "sugar"]);
        $(".container").append(carrots.create());

    Plate.prototype.create = function() {
        return ('<div class="plate">' + this.name + '\n' + this.description + '\n' + this.price + '\n' + this.ingredients + '</div>');
        };
        var Steak = new Plate("Steak Plate", "10oz Ribeye", 12.00, ["steak", "steamed vegetables", "mashed potatos"]);
        $(".container").append(carrots.create());

    Order.prototype.create = function() {
        return $('<div class="order">').text(name);
        };
        var HappyHourPlate = new Order(Steak);
        $(".container").append(carrots.create());


    Menu.prototype.create = function() {
        return $('<div class="menu">').text(name);
        };
        var DinnerMenu = new Order(Steak);
        $(".container").append(carrots.create());

    Restaurant.prototype.create = function() {
        return $('<div class="restaurant">').text(name);
    };
        var BoulderSteaks = new Menu(HappyHourPlate);
        $(".container").append(carrots.create());


});
