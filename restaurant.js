// See here to understand instructions: https://github.com/nashville-software-school/client-side-mastery/blob/cohort-60/book-2-fun-functions/chapters/VEGGISH_FUSION.md

const { mongerInventory } = require("./fishMonger.js") 

const chefsPurchase = mongerInventory(5)
//console.log(chefsPurchase)

/* 

    REQUIREMENTS: 

    **In fishMonger.js, used the mongerInventory() for the chef to purchase fish priced $5 or less AND got half or 50% of whatever the fish monger's had in stock for those fish**
    **So the new fishMenu function for this module, restaurant.js, just needs to build the HTML for the menu

*/ 

// Set up the fishMenu function 
// Make a new variable for the HTML string in the function; the string should be empty right now. I will add to this in the function. 
// I need to make elements headers before I start my menu item list.
// Use a for..of loop to go through each fish that the chef purchased (halibut, mackerel, and salmon)
// This will help me create the section HTML elements for soup, sandwich, and grilled x  
// Use dot notation to acces the fish name, stored in the "species" property (e.g. ingredient.species)
// Use string interpolation to add the html elements around the menu items and to input the fish names for menu items
// Add the closing HTML element at the end 

// PRO TIP: worry about adding "\n" and "\t" for the spacing of your HTML elements later 


const fishMenu = () => {

    let menuHTML = ""

    menuHTML += `\n<h1>Menu<h1>`

    for (const ingredient of chefsPurchase) {
        menuHTML += `\n<article class="menu">`
        menuHTML += `\n\t<h2>${ingredient.species}</h2>`
        menuHTML += `\n\t<section class="menu_item">${ingredient.species} Soup</section>`
        menuHTML += `\n\t<section class="menu_item">${ingredient.species} Sandwich</section>`
        menuHTML += `\n\t<section class="menu_item">Grilled ${ingredient.species}</section>`
        menuHTML += `\n</article>`
    }

    return menuHTML
}

// **good for checking work in this module, but comment out after moving to next module**
// **since we're invoking this in the next module, seems like results are duplicated in the terminal if not commented out**
// const menu = fishMenu()
// console.log(menu)

module.exports = { fishMenu }


