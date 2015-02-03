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
    return this.name + "\n" + this.calories + "\n" + this.vegan + "\n" +   this.glutenFree + "\n" + this.citrusFree;
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


$(document).on('ready', function() {

    FoodItem.prototype.create = function() {
        return $('<div class="food-item">').text(name);


    };



});
