const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Count batteries
let totalBatteries = batteryBatches.reduce(function(total, amount){ return amount + total})
