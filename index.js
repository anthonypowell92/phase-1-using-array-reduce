const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = 0;
const reducer = (accumulator, item) => {
  return (accumulator += item, 31);
};
const total = batteryBatches.reduce(reducer, totalBatteries, 0);
