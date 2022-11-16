// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fiboNacci", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    expectedOutput1= [1, 1, 2, 3, 5, 8]

    const fibLength2 = 10
    expectedOutput2= [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fiboNacci(fibLength1)).toEqual(expectedOutput1)
    expect(fiboNacci(fibLength2)).toEqual(expectedOutput2)
  })
})

//ReferenceError: fiboNacci is not defined

// b) Create the function that makes the test pass.

  //create a function called fiboNacci
    //look up the fibonacci sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811. It takes the last two numbers in the sequence and adds both to create the next number.
    //Create a parameter called number
      //the function will check that the argument is greater than two using an if statement
      //if the number is not, it will return enter a number greater than two.
      //if the argument is greater than two then the function will return the length of the fibonacci sequence according to the number using slice built in method.
  //run jest to verify function

  const fiboNacci = (number) => {
    let fiboSeq =[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811]
    if (number < 2){
      return "enter a number greater than two"
    }
    else if (number > 2) {
      return fiboSeq.slice(0,number)
    }
  }
  // Expected: [1, 1, 2, 3, 5, 8]
  // Received: undefined
  //did not add inputs into expect statement
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("l2G", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
 expectedOutput3 = [15, 15, 20, 30, 30, 60, 90]
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
 expectedOutput4 = [10, 15, 20, 45, 60, 65, 100]
expect(l2G(studyMinutesWeek1)).toEqual(expectedOutput3)
expect(l2G(studyMinutesWeek2)).toEqual(expectedOutput4)
  })
})

//ReferenceError: l2G is not defined

// b) Create the function that makes the test pass.

  //Create a function called l2G
    //The parameter will be called object
      //the function will take in an object's values and sort them from least to greatest
      //it will return the list in an array
  //run jest to verify function

  const l2G = (object) =>{
  return Object.values(object).sort((a,b)=>a-b)
  } 
  
  //TypeError: object.values is not a function
  //capitalized object
  // - Expected  - 1
  //   + Received  + 1
  //     Array [
  //       10,
  //   +   100,
  //       15,
  //       20,
  //       45,
  //       60,
  //       65,
  //   -   100,
  //     ]
  //added ((a,b)=>a-b) to sort in ascending order
  //   Test Suites: 1 passed, 1 total
  // Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("totalSum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
const accountTransactions1 = [100, -17, -23, -9]
expectedOutput5 = [100, 83, 60, 51]
const accountTransactions2 = [250, -89, 100, -96]
expectedOutput6 = [250, 161, 261, 165]
const accountTransactions3 = []
expectedOutput7 = []
expect(totalSum(accountTransactions1)).toEqual(expectedOutput5)
expect(totalSum(accountTransactions2)).toEqual(expectedOutput6)
expect(totalSum(accountTransactions3)).toEqual(expectedOutput7)
  })
})

//ReferenceError: totalSum is not defined

// b) Create the function that makes the test pass.

  //Create a function called totalSum.
    //the parameter will be array.
    //the function will have a for loop to check each value.
    //the function will add each consecutive value at each index and will equal the array at that point with the index.
    //the function will return an array with the sum added cumulatively
  //run jest to verify function.

// const totalSum =(array)=>{
//   for(let i = 1 ; i < array.length ; i++) {
//    sumTotal=0
//    sum=[]
//    sum.push(array[i]+sumTotal)
   
//   }
//    return sum
//   }

  // - Expected  - 4
  // + Received  + 1

  //   Array [
  // -   100,
  // -   83,
  // -   60,
  // -   51,
  // +   -9,
  //   ]

//changed sumTotal to array[i-1] to indicate last number and sum to be assigned to result of array[i]+array[i-1] for sum with push function to move to sumTotal array.

// const totalSum =(array)=>{
//   for(let i = 1 ; i < array.length ; i++) {
//    sumTotal=[]
//    sum= array[i] + array[i-1]
//    sumTotal.push(sum)
//   }
//    return array
//   }

  // - Expected  - 3
  // + Received  + 3

  //   Array [
  //     100,
  // -   83,
  // -   60,
  // -   51,
  // +   -17,
  // +   -23,
  // +   -9,
  //   ]

//changed the equation for array[i] = array[i] + array[i-1]. This is so at each index the value will be the result of the value of the current index plus the value of the last index.  

const totalSum =(array)=>{
  for(let i = 1 ; i < array.length ; i++) {
   array[i]= array[i] + array[i-1]
  }
   return array
  }

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total