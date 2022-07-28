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
