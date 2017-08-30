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
    // console.log(i);    // logs the "index" not the value 
  // console.log(arr[i]); // logs the "value" in the "index"
  }
  console.log(newArr);
};

// lessThanFive(magic);
// lessThanFive(array);

//==================================================================================

// 2: Merge Arrays

//Imagine you have two arrays which have already been sorted.
// Write an algorithm to merge the two arrays into a single array, which should also be sorted. 
//For example, input arrays were [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], 
//output array should be [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].

const arr1 = [1, 3, 6, 8, 11];
const arr2 = [2, 3, 5, 8, 9, 10];

const mergeArray = (arr1, arr2) => {
  const finalArr = [];
  for (var i = 0; i < arr1.length; i++) {
    finalArr.push(arr1[i]);
  }
  for (var j = 0; j < arr2.length; j++) {
    finalArr.push(arr2[j]);
  }
  finalArr.sort(function (a,b) {
    return a - b;
  });

  // finalArr.sort(function(a,b) => { b-a;});        //can I write ES6 inside of a method
  console.log(finalArr);
};

// mergeArray(arr1, arr2);



//==================================================================================

//3: Remove Characters

//Write an algorithm that deletes given characters from a string. 
//For example
//input = string of "Battle of the Vowels: Hawaii vs. Grozny" and characters to be removed are "aeiou", 
//output = the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny".

//**** Very Important: **** Do not use Javascript's filter, split, or join methods.

const string = 'Battle of the Vowels: Hawaii vs. Grozny';

const remove = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] ===  'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      string.replace(i, '');
      console.log(string[i]);
    }
    else {
      return string[i];
    }
  }
  // console.log(string);
};

remove(string);
