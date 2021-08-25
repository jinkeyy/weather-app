let fonnd: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = "Kumar";

console.log(fonnd)
console.log("The grade is " + grade)
console.log(`Hi ${firstName} ${lastName}`);

let reviews: number[] = [1, 2, 3, 4, 5]
let total: number = 0
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i])
    total += reviews[i]
}
let avg: number = total / reviews.length
console.log("AVG = " + avg);

let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"]
for(let item of sportsOne){
    console.log(item);
    
}
