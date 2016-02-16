//For this challenge I'm using 1 through 10 as the natural numbers
var sumOfPowers = 0;
var sumsSquared = 0;

for (var i = 1; i < 11; i++) {
  sumOfPowers += Math.pow(i,2);
  sumsSquared += i;
}
document.getElementById("body").innerHTML = "<p>The difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers is: " + (sumOfPowers - Math.pow(sumsSquared,2)) + "</p>";
