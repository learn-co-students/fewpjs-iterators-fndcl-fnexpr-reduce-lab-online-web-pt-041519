const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// let totalBatteries = 0;

let totalBatteries = batteryBatches.reduce(function(total, element){ return element + total}, 0)


// function reducer(batteryBatches) {
//     // return batteryBatches.reduce(function(totalBatteries, element){ return element + totalBatteries})
//     let totalBatteries = batteryBatches.reduce(function(total, element){ return element + total})

// }

