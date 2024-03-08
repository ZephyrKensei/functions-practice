
// EXERCISE 17
// Please, read the exercise-info/includes.md to get the initial data of what is the expected result of this exercise.
// doesArrayInclude(['a', 'b', 'c'], 'a') => true
// doesArrayInclude(['a', 'b', 'c'], 'f') => false
// NOTE: You can NOT use the array.includes() method in your code

export function doesArrayInclude(array, value) {
  // Your code goes here...
  let valueAdded = [];
  for(let i = 0; i < array.length; i++) {

    // console.log(array[i] + " has a type of: " +  typeof array[i]);
    console.log(value + ":" + array[i]);
    if(value === array[i]) {
        valueAdded.push(array[i]);
        console.log(true);
        // return true;
    }else{
        console.log(false);
        // return false;
    }
}
if(valueAdded.length) {
    console.log("We are One!! This is True!!" );
    return true;
}else{
    console.log("Deception!! Disgrace!! He is not, ONE OF UUUUSSSSS!!! This is false!!!");
    return false;
}
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
