var num = prompt("Please enter the number of students in the class: ");
var sum = 0;
var avg = 0;
for (let i = 1; i <= num; i++) {
    var score = prompt("Enter the " + i + "th student score: ");
    // 因为从prompt接收的数据是字符串型的，所以需要parseFloat
    sum = sum + parseFloat(score);
}
avg = sum / num;
alert("Score: " + sum);
alert("Avg: " + avg);