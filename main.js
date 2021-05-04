//This program calculates the price of an hamburger for the user
//after he choose to add any topping in the menu
//discounting a coupon to the price if the user insert one

var hamburgerPrice = 9.50;

var toppingsWithPrice = [["Cheese", 1.0], ["Egg", 1.5], ["Mustard", 0.5], ["Tomato", 1.0], ["Lettuce", 1.0], ["Ketchup", 0.5]];

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


  document.querySelector('button').addEventListener('onclick', function() {
    function calculateHamburgerPrice (toppings) {
        if (toppings === toppingsWithPrice[0][0]) {
          hamburgerPrice += toppingsWithPrice[0][1];   
          console.log(hamburgerPrice);     
        } else if (toppings ===  toppingsWithPrice[1][0]) {
          hamburgerPrice += toppingsWithPrice[1][1];   
          console.log(hamburgerPrice);
      
        } else if (toppings === toppingsWithPrice[2][0]) {
          hamburgerPrice += toppingsWithPrice[2][1];   
          console.log(hamburgerPrice);
      
        } else if (toppings ===  toppingsWithPrice[3][0]) {
          hamburgerPrice += toppingsWithPrice[3][1];   
          console.log(hamburgerPrice);
      
        } else if (toppings ===  toppingsWithPrice[4][0]) {
          hamburgerPrice += toppingsWithPrice[4][1];   
          console.log(hamburgerPrice);
      
        } else if (toppings ===  toppingsWithPrice[5][0]) {
          hamburgerPrice += toppingsWithPrice[5][1];   
          console.log(hamburgerPrice);
      
        }
      }


  } )