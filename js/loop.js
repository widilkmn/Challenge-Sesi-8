// input: [80,30,60,55,32,60,10,70,90,12]
// search total : 100
// output [90,10] / [10,90]

let input = [80, 30, 60, 55, 32, 60, 10, 65, 90, 12];
let search = 100;

function searchFunction(input, search) {
  let map = {};
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let diff = search - input[i];

    if (map[diff] !== undefined) {
      result.push([input[i], diff]);
    }

    map[input[i]] = i;
  }

  return result;
}

console.log(searchFunction(input, search)); // Output: [[60, 40], [55, 45], [90, 10]]
