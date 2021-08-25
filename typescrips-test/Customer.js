"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "_firstName", {
        get: function () {
            return this.firstName;
        },
        set: function (v) {
            this.firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "_lastName", {
        get: function () {
            return this.firstName;
        },
        set: function (v) {
            this.lastName = v;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.default = Customer;
