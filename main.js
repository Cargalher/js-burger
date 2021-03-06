//This program calculates the price of an hamburger for the user
//after he choose to add any topping in the menu
//discounting a coupon to the price if the user insert one


//declaring a variable with the Hamburger Price
var hamburgerPrice = 9.50;
console.log(hamburgerPrice);

//Storing in an Array the Toppings and their relative prices, for this reason we use two dimansional Array[[]]
// with index [i][0] we access a topping store in the array
// with index [i][1] we access the price of a particular topping
var toppingsWithPrice = [["Cheese", 1.0], ["Egg", 1.5], ["Mustard", 0.5], ["Tomato", 1.0], ["Lettuce", 1.0], ["Ketchup", 0.5]];
console.log(toppingsWithPrice);

//Declaring a variable to store all the discount codes;
var discountList = ['code003PA', 'code004PA', 'code005PA'];
console.log(discountList);


// function to automatically generate the HTML markup for toppings with prices from the array toppingsWithPrice;
function autotoppings(array, element) {
  for (var i=0; i<3; i++) {

    element.insertAdjacentHTML('afterbegin',
    `
    <div class="d_flex1">
    <div class="form-toppings">
    <img src="./img/${toppingsWithPrice[i][0]}.svg"></img>
    <label for="${toppingsWithPrice[i][0]}">${toppingsWithPrice[i][0]}</label>
    <input type="checkbox" name="${toppingsWithPrice[i][0]}" id="${toppingsWithPrice[i][0]}" data-price="${toppingsWithPrice[i][1]}">
    </div>
    </div> 
    `
    );

  }

  for (var i=3; i<6; i++) {

    element.insertAdjacentHTML('afterbegin',
    `
    <div class="d_flex2">
    <div class="form-toppings">
    <img src="./img/${toppingsWithPrice[i][0]}.svg"></img>
    <label for="${toppingsWithPrice[i][0]}">${toppingsWithPrice[i][0]}</label>
    <input type="checkbox" name="${toppingsWithPrice[i][0]}" id="${toppingsWithPrice[i][0]}" data-price="${toppingsWithPrice[i][1]}">
    </div>
    </div>
    `
    );

  }
}


var toppingsElement = document.querySelector('.toppings');
//calling the function to automatically generate my toppings code in HTML from the Array toppingsWithPrice 
// autotoppings(toppingsWithPrice, toppingsElement);



//creating a button that starts my program calculating the price of the Burger
document.getElementById('calc_btn').addEventListener('click', function () {
var hamburgerPrice = 9.50;
console.log(hamburgerPrice);

    //saving in a variable the checkes with a querySelector that automatically checks the one that are selected by the user
    var checkes = document.querySelectorAll("input[type='checkbox']");
    console.log(checkes);

    var toppingsSum = null;
    //console.log(toppingsSum);

    for (var j=0; j<checkes.length; j++){
        var topping = checkes[j];
        if(topping.checked){
            toppingsSum = toppingsSum + Number(topping.getAttribute('data-price'));
        }
    }
    //checking the total price of the toppings selected, to be added to the burger price;
    console.log(toppingsSum);

    //calculating the total burger price adding to the basic burger price the toppings selected
    var totalBurgerPrice = hamburgerPrice + toppingsSum;
    console.log(totalBurgerPrice);
    
    //storing the text input from the user as a variable to check against the possible discounts in the array discountList; 
    userDiscount = document.getElementById('discount').value;
    console.log(userDiscount);

    //setting a variable to store the amount of discount
    var discountAmount = 1.0;
    //considering the case in wich the user insert in the text input a valid discount coupon and returning the total burger
    //price after the discount has been applied or the burger price if the user has not inserted a valid discount ticket;
    switch (userDiscount) {
        case discountList[0]:
            totalBurgerPrice = totalBurgerPrice - discountAmount
            document.getElementById('totalPrice').innerHTML= totalBurgerPrice + " ???";
            break;
        case discountList[1]:
            totalBurgerPrice = totalBurgerPrice - discountAmount
            document.getElementById('totalPrice').innerHTML= totalBurgerPrice + " ???";
            break;
        case discountList[2]:
            totalBurgerPrice = totalBurgerPrice - discountAmount
            document.getElementById('totalPrice').innerHTML= totalBurgerPrice + " ???";
            break;    
        default:
            document.getElementById('totalPrice').innerHTML= totalBurgerPrice + " ???";
            break;
    }


});
