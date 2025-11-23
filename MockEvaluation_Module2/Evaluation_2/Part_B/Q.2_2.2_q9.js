function displayCar(){
        console.log(" car name is:thar")
}
function displayTruck(){
    console.log(" truck name is:jcp")
}
function displayBike(){
    console.log(" bike name is:honda")
}
function vehicleInfo(vehicleCategory, callbackFn){
    console.log(`vehicle category: ${vehicleCategory}`)
    callbackFn();
}

vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)


