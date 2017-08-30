//You can use JavaScript's built in arrays rather than your Array object to answer these questions. 
//Also, be sure to consider the Big O of each of this algorithm. 
//Once you write the algorithm, identify its runtime and determine if the run time needs to be optimized.

//1: Numbers less than a given number

//Imagine you have an array of numbers.
// Write an algorithm to remove all numbers less than five from the array. 
//You shouldn't use the .filter method here; try to write the algorithm from scratch.

const array = [1,2,3,4,5,6,7,8,9,10];
const magic = [5,2,3,4,6,7,8,9,10,11];
const newArr = [];
const lessThanFive = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
    // console.log(i);
  // console.log(arr[i]);
  }
  console.log(newArr);
};

lessThanFive(magic);
// lessThanFive(array);

