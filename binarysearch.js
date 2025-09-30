let leftSide = 0;
let rightSide =100;
let randomNumber; 
function binarySearch (){
  randomNumber = Math.floor(Math.random()*rightSide)+1;
  console.log(`Is your number ${randomNumber}?`);
  while (leftSide <= rightSide) {
    // Find the middle index
    let mid = Math.floor((leftSide + rightSide) / 2);

    if (mid === randomNumber) {
      return console.log(mid); // Found! Return index
    } else if (mid < randomNumber) {
      leftSide = mid + 1; // Search right half
      console.log(mid);
    } else {
      rightSide = mid - 1; // Search left half
      console.log(mid);
    }
  }

  return -1; // Not found
}
binarySearch();