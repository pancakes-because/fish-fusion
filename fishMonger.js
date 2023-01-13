// See here to understand instructions: https://github.com/nashville-software-school/client-side-mastery/blob/cohort-60/book-2-fun-functions/chapters/VEGGISH_MONGER.md

const { boatInventory } = require("./fishingBoat.js") 

const inventory = boatInventory()

/* 

    This module should also define and export its own function that generates its own inventory that restaurants 
    can use to purchase fish for their daily menus. The returned inventory should be an array of objects.

/* 

    REQUIREMENTS: 

    The monger to buy fish if there's 10 or more fish for "amount"
    The monger will buy if the fish is 7.50 or less in "price"
    The monger needs 10 of each fish 

    The chef needs to specify a price to the monger for each fish, e.g. $5 or less 
    For the fish that match the chef's price, the chef wants 50% of the fish monger's inventory for those fish.
    **Devin said making this a parameter or separate function is fine; parameter may be easier** 
    **Caroline personally didn't use a parameter when she built it, but that's fine.**
    **Caroline confirmed that there are many ways to do this!**
    **With the way we have it now, just worry about making the HTML in restauraunt.js, which is simpler**


*/ 

// Set up a function called mongerInventory 
// Use for...of loop to go through each "fish" in "inventory" from boat; named each fish an "item" to differentiate
// Use if...else statements to determine when the fish monger purchases fish 
// Look at the "amount" (quantity) and "price" properties of the fish here 
// Put these into an empty object stored by a new variable, newMongerInventory. this is what the fish monger has.

// Between fishMonger.js and restaurant.js, there is some overlap with the chef purchase instructions 
// I chose to consider the chef's inventory needs here also. 
// Add parameter for the chef's price, since they tell the monger what they want, and then provide a number in the argument when calling the function. 
// Set up a second for...of loop in the mongerInventory(); can loop through the fish monger's inventory for the chef to purchase from
// Use if... else statements to determine when the chef purchases fish; keep price and desired amount/stock in mind
// Store the chef's purchase in an empty object stored by a new variable, chefInventory. this is what the chef has now. 
// return the chefInventory to myself because I need that for the next module, restaurant.js 

const mongerInventory = (chefsPrice) => { // paramater for chef to give their price to fish monger later

    let newMongerInventory = []

    for (const item of inventory) {
        if (item.amount >= 10 && item.price <= 7.50) {  
            newMongerInventory.push(item)    
            item.amount = 10
        } 
    }
    // console.log(newMongerInventory)

    let chefInventory = []

    for (const newItem of newMongerInventory) { 
        if (newItem.price <= chefsPrice) { 
            // console.log(newItem)
            chefInventory.push(newItem)
            newItem.amount = 10 * (50/100) // in restaraunt.js, chef only wants 50% of fish monger inventory
        }
    }
    return chefInventory
} 

// **good for checking work in this module, but comment out after moving to next module**
// **since we're invoking this in the next module, seems like results are duplicated in the terminal if not commented out**
// const chefsPurchase = mongerInventory(5) 
// console.log(chefsPurchase)

// build HTML for restaraunt.js using the chefPurchase variable above... 


module.exports = { mongerInventory }



