//total basketball score

function totalBasketballScore(freeThrows, midRange, threePointers) {
    if( typeof freeThrows === "number" && typeof midRange === "number" &&  typeof threePointers=== "number"){
    return ((freeThrows) + (midRange * 2) + (threePointers * 3));
    } else {
return "invalid response";
}

}
console.log(totalBasketballScore(3, 5, 12));

//computer store

function itemPrice(item) {
    switch(item) {
        case "computer":
        return "$500";
        case "mouse":
        return "$10";
        case "tablet":
        return "$250";
        case "case":
        return "$25";
        default: 
        return "Please select an available item";
    }
if(typeof item !== "string") {
        console.log("All entries must be of type string");
    }
}
    
    console.log(itemPrice("case"));

// whats for dinner


function randomRestaurant(numOfRestaurants){
        const restaurants = ["Applebees", "Panera Bread", "Popeyes", "Chopt", "Chick-fil-A", "Cheesecake Factory", "Five Guys"];

        const randomRestaurantList = [];

    for (var i = 0; i < numOfRestaurants; i++) {
        const randomIndex = Math.floor(Math.random() * restaurants.length + 1);
        randomRestaurantList.push(restaurants[randomIndex - 1]);
        }
        return randomRestaurantList;
    }
        
        const randomRestaurantList= randomRestaurant(3);
        console.log(randomRestaurantList);


// leap year

 
function isLeapYear(year){    
return (year % 100 === 0) ? (vear % 400 === 0) : (year % 4 === 0);
};



    console.log(isLeapYear(2016));
