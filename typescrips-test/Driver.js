"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = __importDefault(require("./circle"));
var Customer_1 = __importDefault(require("./Customer"));
var shape_1 = __importDefault(require("./shape"));
var cus = new Customer_1.default("Hello", "World");
cus._firstName = "Halo";
console.log(cus._firstName);
var myShpae = new shape_1.default(55, 2);
console.log(myShpae.getInfo());
var myCircle = new circle_1.default(1, 2, 2);
console.log(myCircle.getInfo());
