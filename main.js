$(document).on("ready", function() {






    $(document).on("click", "li" ,function genOrder(){
        console.log(this);

        $( "div#orderBar" ).fadeIn( "slow" );

        $(this).clone().appendTo("aside ul");
        $(this).clone().appendTo("#orderBar").delay(5000).fadeOut(3000);
        // $('#orderBar').clone().append(this);

        // var myQuote = $("#add-quote").val();
        // var myAuthor = $("#add-author").val();
        //
        // Quote.prototype.create = function() {
        //     this.$el = $('<li>')
        //     .addClass('test')
        //     .append('<blockquote>' + this.text)
        //     .append('<h1>' +  this.author)
        //     .append('<div class="rating">' +  this.rating)
        //     .append('<div class="close"><i class="fa fa-times"></i></div>');
        //     return this.$el;
        // };
        //
        // var greatQuote1 = new Quote(myQuote,myAuthor, 5);
        // $('#quoteList ul').append(greatQuote1.create());
        //
        // $("#add-quote").val('');
        // $("#add-author").val('');


    });

    $(document).on("click","#orderBar" ,function genOrder(){
        console.log("removing order bar");
        $( "div#orderBar" ).fadeOut( "slow" );
    });


// DEFINE CONSTRUCTORS FOR MENU ITEMS //


// PLATE //

function Plate(imgUrl, name, description, price, ingredients) {
    this.name = name;
    this.imgUrl = imgUrl || "No Image";
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}

Plate.prototype.toString = function () {
    return this.imgUrl + this.name + "\n" + this.description + "\n" + this.price + "\n" +   this.ingredients;
};

Plate.prototype.isGlutenFree = function () {
    return this.isGlutenFree;
};

Plate.prototype.isCitrusFree = function () {
    return this.isCitrusFree;
};

Plate.prototype.isVegan = function () {
    return this.isVegan;
};

Plate.prototype.create = function() {
    return $('<li class="plates">' + '<div>' + this.imgUrl + '<div class="hidden">' + this.name + '\n' + this.description + '\n' + this.price + '\n' + this.ingredients + '</div>' + '</div>' + '</li>');
    };
    var chickenBurritoPlate = new Plate('<img src="img/plate_burrito.jpg" class="clickPic">',"Chicken Burritto Plate", "10oz Ribeye", 12.00, ["steak", "steamed vegetables", "mashed potatos"]);
    var floutasPlate = new Plate('<img src="img/plate_floutas.png" class="clickPic">',"Floutas Plate", "A delicious floutas plate", 12.00, ["steak", "steamed vegetables", "mashed potatos"]);
    var chiliRellenosPlate = new Plate('<img src="img/plate_chili.png" class="clickPic">',"Chili Rellenos Plate", "Spicy Spicy Goodness", 12.00, ["steak", "steamed vegetables", "mashed potatos"]);


    $(".container ul.plates").append(chickenBurritoPlate.create());
    $(".container ul.plates").append(floutasPlate.create());
    $(".container ul.plates").append(chiliRellenosPlate.create());


// FOOD ITEM //

function FoodItem(imgUrl, name, calories, vegan, glutenFree, citrusFree) {
    this.name = name || "name unknown";
    this.imgUrl = imgUrl || "No Image";
    this.calories = calories || "calories unknown";
    this.vegan = vegan || "vegan unknown";
    this.glutenFree = glutenFree || "gluten free unknown";
    this.citrusFree = citrusFree || "citrus free unknown";
}

FoodItem.prototype.toString = function () {
    return this.imgUrl + this.name + "\n" + this.calories + "\n" + this.vegan + "\n" +   this.glutanFree + "\n" + this.citrusFree;
};

FoodItem.prototype.create = function() {
    return ('<li class="food-item">' + '<div>' + this.imgUrl + '<div class="hidden">' + this.name + '\n' + this.calories + '\n' + this.vegan + '\n' + this.glutenFree + '\n' +  this.citrusFree + '<div' + '<div>' + '</li>');
    };
    var nachos = new FoodItem('<img src="img/nachos.png">',"Nachos", 20, true, true, true );
    var tostada = new FoodItem('<img src="img/tostada.png">',"Tostada", 20, true, true, true );
    var tacoSalad = new FoodItem('<img src="img/taco_salad.png">',"Taco Salad", 20, true, true, true );


    $(".container ul.foodItems").append(nachos.create());
    $(".container ul.foodItems").append(tostada.create());
    $(".container ul.foodItems").append(tacoSalad.create());


    var carrots = new FoodItem("Carrots", 20, true, true, true );



// DRINK //

function Drink(imgUrl, name, description, price, ingredients) {
    this.name = name;
    this.imgUrl = imgUrl || "No Image";
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}

Drink.prototype.toString = function () {
    return this.imgUrl + this.name + "\n" + this.description + "\n" + this.price + "\n" +   this.ingredients;
};

Drink.prototype.create = function() {
    return $('<li class="drinks">' + '<div>' + this.imgUrl + '<div class="hidden">' + this.name + '\n' + this.description + '\n' + this.price + '\n' + this.ingredients + '</div>' + '</div>' + '</li>');
    };
    var lemonade = new Drink('<img src="img/lemonade.png">',"Lemonade", "fresh squeezed lemonade", 1.00, ["lemons", "water", "sugar"]);
    var horchata = new Drink('<img src="img/horchata.png">',"Horchata", "Awesome Horchata", 1.00, ["lemons", "water", "sugar"]);
    var margarita = new Drink('<img src="img/margarita.png">',"Margarita", "Margarita Madness", 1.00, ["lemons", "water", "sugar"]);

    $(".container ul.drinks").append(lemonade.create());
    $(".container ul.drinks").append(horchata.create());
    $(".container ul.drinks").append(margarita.create());






// ORDER //

function Order(plates) {
    this.plates = plates;
}

Order.prototype.toString = function () {
    return this.plates.toString();
};

Order.prototype.create = function() {
    return $('<div class="order">').text(this.name);
    };
    var HappyHourPlate = new Order();



// MENU //

function Menu(plates) {
    this.plates = plates;
}

Menu.prototype.toString = function () {
    return this.plates.toString();
};

Menu.prototype.create = function() {
    return $('<div class="menu">').text(this.name);
    };
    var DinnerMenu = new Order();



// RESTAURANT //

function Restaurant(name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
}

Restaurant.prototype.toString = function () {
    return this.name + "\n" + this.description + "\n" + this.menu;
};

Restaurant.prototype.create = function() {
    return $('<div class="restaurant">').text(this.name);
    };
    var BoulderSteaks = new Menu(HappyHourPlate);



// DIET //

function Customer(diet)  {
    this.diet = diet;
}

Customer.prototype.toString = function () {
    return this.diet;
};





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



console.log( pepes.toString() );

});
