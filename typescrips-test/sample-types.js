"use strict";
var fonnd = true;
var grade = 88.6;
var firstName = "Anup";
var lastName = "Kumar";
console.log(fonnd);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
var reviews = [1, 2, 3, 4, 5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var avg = total / reviews.length;
console.log("AVG = " + avg);
var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var item = sportsOne_1[_i];
    console.log(item);
}
