"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape = /** @class */ (function () {
    function shape(_x, _y) {
        this._x = _x;
        this._y = _y;
        this.x = _x;
        this.y = _y;
    }
    shape.prototype.getInfo = function () {
        return "x = " + this._x + ", y = " + this.y;
    };
    return shape;
}());
exports.default = shape;
