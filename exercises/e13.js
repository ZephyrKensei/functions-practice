// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let lessThan2000orBumkist = [];

  for(let j = 0; j < array.length; j++) {
    let accountDeposits = array[j].deposits;

    if(accountDeposits && accountDeposits[0] > 0) {
        let sum = 0;

        for (let num of accountDeposits) {
            sum+=num;
        }

        if(sum < 2000 && sum > 0) {
            lessThan2000orBumkist.push(array[j]);
        }

    }else {
        lessThan2000orBumkist.push(array[j]);
    }
  }
  console.log("this is the final: ", lessThan2000orBumkist);
  return lessThan2000orBumkist;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
