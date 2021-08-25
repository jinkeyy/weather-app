import circle from "./circle";
import Customer from "./Customer";
import Shape from "./shape"
const cus = new Customer("Hello", "World");

cus._firstName = "Halo"
console.log(cus._firstName);

const myShpae = new Shape(55,2)
console.log(myShpae.getInfo());
const myCircle = new circle(1,2,2)
console.log(myCircle.getInfo())
