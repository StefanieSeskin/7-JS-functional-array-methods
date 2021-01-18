//Find average price of all items
//1. Determine how many items in the array
//2. find the price of each items
// 3.Add all the prices together
//then divide by number of products
//(which is the (items.length)
//1. Console log (items) -- "items"is the
//name of the array

// console.log(items)
// const firstItem = items[0]
// console.log(firstItem)

const totalNumberOfItems = items.length

let total = 0
    items.forEach(function (item) { 
        const itemPrice = item.price
        total = total + itemPrice
    })
  
const averagePrice = total / totalNumberOfItems

    document.querySelector('#answer1').innerHTML = 
    `The average price is $${averagePrice}`



//  -------------------------------------------------------
//2. Show me how to get an array of items that 
// cost between $14.00 and $18.00 USD


// let total = 0
//     items.filter(function (price) {
//             if (price <=14.00 >=18.00)

// }


const filteredPrice = items.map(function (item) {
    if (item.price >= 14.00 && item.price <= 18.00) 
    {
        return `<p>${item.title}</p>`
    }   
})  

const htmlString = filteredPrice.join('')
document.querySelector('#answer2').innerHTML = `<p>${htmlString}</p>`



// -----------------------------------------

//3. Which item has a "GBP" currency code? Display it's name and price.
// List item "title" and "price" if "currency_code" is GBP

//items is a const.  inside, it has [currency_code: "GBP"?????

const currencyG = items.filter(function(item) {
    return (item.currency_code == "GBP")

})
const theMoney = currencyG.map(function(item){
    return `<p>${item.title} $${item.price}</p>`

})

const currency = currencyG.join('')
document.querySelector('#answer3').innerHTML = `<p>${theMoney}</p>`







// ---------------------------------------------------
// 4. Display a list of all items who are made of wood.
// Filter items and find any who include "wood" as "materials"
// list item "title" and put "is made of wood" at the end
//FILTER

const wood = items.filter(function(banana){
    return banana.materials.includes ("wood")
})

const madeOfWood = wood.map(function(item){
    let i = item
    return `<p>${i.title} ${i.materials} is made of wood</p>`
})
.join('')
document.querySelector('#answer4').innerHTML = `<p>${madeOfWood}</p>`

//candice walked me through this and I changed "item" to "banana" because it
// was easier for me to understand... and i made the new variable "i" 
// just for the heck of it

//---------------------------------------------------
//5. Which items are made of eight or more materials? 
// Display the name, 
// number of items and the items it is made of.

//Find items that list >= 8 materials.  
// "materials" is an array of values inside array of items?
//List "title", "has x materials" and list of the actual "materials"
// or is this supposed to be TAGS??



const justMaterials = items.map(function (item){
    return (item.materials)
})

// console.log(justMaterials)

const eightMaterials = justMaterials.filter(function (item) {
    if (item.length >=8) 
    return `${item.materials}`  
})

// console.log(eightMaterials)

document.querySelector('#answer6').innerHTML = `<p>${eightMaterials}</p>`

//This is as far as I could get and I don't think I'm on the right path




//---------------------------------------------------
//6. How many items were made by their sellers?
// List number of items in which "who_made" says "i_did"

const sellerMade = items.filter(function(seller){
    return seller.who_made == ("i_did")
})

// console.log(sellerMade.length)

const numberSellerMade = sellerMade.length

// console.log(numberSellerMade)


document.querySelector('#answer6').innerHTML = `${numberSellerMade} items were 
made by their seller`


//I met in a zoom with Candice on Sunday
//We got through #4.  She explained and told me what to do
//I still didn't completely understand
//Went over past array homework to work on getting syntax down
//Spoke on phone Sunday night 
// for an hour with a friend who has worked in tech for 15 years
//Worked on the last 2 questions Monda from 9:00am to 1:00pm with 
//breaks.  
//Just letting you know what I did to try to complete
//this homework
//I got #6 on my own!!!!!