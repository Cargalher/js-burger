//This program calculates the price of an hamburger for the user
//after he choose to add any topping in the menu
//discounting a coupon to the price if the user insert one

// var hamburgerPrice = 9.50;

// var toppingsWithPrice = [["Cheese", 1.0], ["Egg", 1.5], ["Mustard", 0.5], ["Tomato", 1.0], ["Lettuce", 1.0], ["Ketchup", 0.5]];

//to get the topping "Cheese" we use 
//console.log(toppingsWithPrice[0][0]);

//to get the price of a topping "Mustard" we use
//console.log(toppingsWithPrice[2][1]);

// function calculateHamburgerPrice (toppings) {
//     if (toppings === toppingsWithPrice[0][0]) {
//       hamburgerPrice += toppingsWithPrice[0][1];   
//       console.log(hamburgerPrice);     
//     } else if (toppings ===  toppingsWithPrice[1][0]) {
//       hamburgerPrice += toppingsWithPrice[1][1];   
//       console.log(hamburgerPrice);
  
//     } else if (toppings === toppingsWithPrice[2][0]) {
//       hamburgerPrice += toppingsWithPrice[2][1];   
//       console.log(hamburgerPrice);
  
//     } else if (toppings ===  toppingsWithPrice[3][0]) {
//       hamburgerPrice += toppingsWithPrice[3][1];   
//       console.log(hamburgerPrice);
  
//     } else if (toppings ===  toppingsWithPrice[4][0]) {
//       hamburgerPrice += toppingsWithPrice[4][1];   
//       console.log(hamburgerPrice);
  
//     } else if (toppings ===  toppingsWithPrice[5][0]) {
//       hamburgerPrice += toppingsWithPrice[5][1];   
//       console.log(hamburgerPrice);
  
//     }
//   }
  
//calculateHamburgerPrice(toppingsWithPrice[5][0]);


// document.getElementById("calc_btn").addEventListener("click", calculateHamburgerPrice(toppings));

// // function Hello() {
// //   console.log("Hello something is happening")
// //   return "Hello something is happening";
// // }


//     function calculateHamburgerPrice (toppings) {
//         if (toppings === toppingsWithPrice[0][0]) {
//           hamburgerPrice += toppingsWithPrice[0][1];   
//           console.log(hamburgerPrice);     
//         } else if (toppings ===  toppingsWithPrice[1][0]) {
//           hamburgerPrice += toppingsWithPrice[1][1];   
//           console.log(hamburgerPrice);
      
//         } else if (toppings === toppingsWithPrice[2][0]) {
//           hamburgerPrice += toppingsWithPrice[2][1];   
//           console.log(hamburgerPrice);
      
//         } else if (toppings ===  toppingsWithPrice[3][0]) {
//           hamburgerPrice += toppingsWithPrice[3][1];   
//           console.log(hamburgerPrice);
      
//         } else if (toppings ===  toppingsWithPrice[4][0]) {
//           hamburgerPrice += toppingsWithPrice[4][1];   
//           console.log(hamburgerPrice);
      
//         } else if (toppings ===  toppingsWithPrice[5][0]) {
//           hamburgerPrice += toppingsWithPrice[5][1];   
//           console.log(hamburgerPrice);
      
//         }
//         return hamburgerPrice;
//         console.log(hamburgerPrice);
//       }

// console.log(hamburgerPrice);


// var checkboxes = document.querySelectorAll("input[type='checkbox']");
// console.log(checkboxes);
// var cheese = document.getElementById("cheese").checked;
// console.log(cheese);

// var cheesePrice = document.getElementById("cheese").getAttribute("data-price");
// console.log(cheesePrice);



// document.getElementById("calc_btn").addEventListener("click", function calculateHamburgerPrice () {
//     if (document.getElementById("cheese").checked === true) {
//       hamburgerPrice = hamburgerPrice + toppingsWithPrice[0][1];   
//       console.log(hamburgerPrice);
//       console.log(cheese);
//     }
//     console.log(hamburgerPrice);
//   }

// );


function attempt(array, element) {
  for (var i=0; i<array.length; i++) {

    element.insertAdjacentHTML('afterbegin',
    `
    <div class="form-toppings">
    <label for="${toppingsWithPrice[i][0]}">${toppingsWithPrice[i][0]}</label>
    <input type="checkbox" name="${toppingsWithPrice[i][0]}" id="${toppingsWithPrice[i][0]}" data-price="${toppingsWithPrice[i][1]}">
    </div>
    `
    );


  }
}

var hamburgerPrice = 9.50;

var toppingsWithPrice = [["Cheese", 1.0], ["Egg", 1.5], ["Mustard", 0.5], ["Tomato", 1.0], ["Lettuce", 1.0], ["Ketchup", 0.5]];



var toppingsElement = document.querySelector('.toppings');

attempt(toppingsWithPrice, toppingsElement);

