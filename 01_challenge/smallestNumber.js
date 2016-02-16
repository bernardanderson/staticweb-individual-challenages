
function findSmallestNumber() {
  var result = 0; // The result from the remainder calculation
  var countingValue = 0; // The initial numerator  
  var doLoop = true; // Switches off the while loop once the number is found

  while (doLoop) {
    countingValue++;
    for (var i = 1; i <= 10; i++) {
      result = countingValue % i;
      if (result > 0) {
        break;
      } else if (i === 10) {
        doLoop = false;
        document.getElementById("numberSmallest").innerHTML = "The smallest number divisible by 1 through 10 without a remainder is : " + countingValue;
      }
    }
  }
}

findSmallestNumber();