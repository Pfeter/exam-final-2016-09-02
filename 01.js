'use strict';
// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}


const cars = [{
  color: 'red',
  type: 'Volvo'
}, {
  color: 'yellow',
  type: 'VW'
}, {
  color: 'red',
  type: 'Ferrari'
}, {
  color: 'white',
  type: 'Tesla'
}, {
  color: 'yellow',
  type: 'Toyota'
}, {
  color: 'red',
  type: 'Lada'
}, {
  color: 'green',
  type: 'Trabant'
}];

function countCarsByColor() {
  let output = {};
  for (let i = 0; i < cars.length; i++) {
    if (!output[cars[i].color]) {
      output[cars[i].color] = 1;
    } else {
      output[cars[i].color] += 1;
    }
  }
  return output;
}

console.log(countCarsByColor());
