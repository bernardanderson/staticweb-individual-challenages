function fibonacciSeries() {
  var firstNum = 0; // The starting numbers for the calculation
  var secondNum = 1; // The starting numbers for the calculation
  var totalList = firstNum + " " + secondNum + " "; // A string containing all the F#'s'

  while (true) {

    firstNum = firstNum + secondNum;
    secondNum = firstNum + secondNum;

  //firstNum can never be larger than secondNum so we'll check to see 
  //if it's > 500 first.  If so break out of the while loop.
    if (firstNum > 500) { 
      break;
    }
    totalList += firstNum + " ";

  //we check secondNum to see if it's > 500 if so break out of the while loop
    if (secondNum > 500) {
      break;
    }
    totalList += secondNum + " ";

  }
document.getElementById("fibonacciOutput").innerHTML = "<p>Here is a Fibonacci Series that ends before 500:</p>" + "<p>" + totalList + "</p>";
}

fibonacciSeries();
