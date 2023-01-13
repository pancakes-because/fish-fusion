// See here to understand instructions: https://github.com/nashville-software-school/client-side-mastery/blob/cohort-60/book-2-fun-functions/chapters/VEGGISH_BOAT.md


/* 

    Next, the fishing boat must have a function that the other modules can invoke in order to see today's catch.

    This function must be named boatInventory.
    The array of fish objects will be the return value when the function is invoked (see data below).
    Use the data given in the instructions. **It's the object with arrays of "fish" inside**

*/ 


// Each fish is an array, all contained in one big object. 
// I need to pull from this data later, so I'll store it in a variable. I called it "fishes". 

const fishes = 

[
    { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
    { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
    { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
    { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
    { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
    { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
    { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
    { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
]

// I can use a function with a for...of loop inside to make a copy of each fish
// I will store in a new variable, which will be my copy of the original data for later reference. 

// We're making a copy of the "fishes" object just to make sure that data is preserved and not touched
// **Caroline said it's good to practice making copies since other later books will ask for this**

const fishesObjectCopy = []

const boatInventory = () => {
    for (const fish of fishes) {
        fishesObjectCopy.push(fish)
    } 
   
    return fishesObjectCopy
}

// **good for checking work in this module, but comment out after moving to next module**
// **since we're invoking this in the next module, seems like results are duplicated in the terminal if not commented out**
// boatInventory() 
// console.log(fishesObjectCopy) 

module.exports = { boatInventory }