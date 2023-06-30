var arr = [2, 6, 1, 77, 52, 25, 7];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Max value in the array is: ", max);
