function totalBasketballScore(freeThrows, midRange, threePointers) {
    if( typeof freeThrows === "number" && typeof midRange === "number" &&  typeof threePointers=== "number"){
    return ((freeThrows) + (midRange * 2) + (threePointers * 3));
    } else {
return "invalid response";
}

}
console.log(totalBasketballScore(3, 5, 12));