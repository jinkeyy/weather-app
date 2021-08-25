"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __importDefault(require("./shape"));
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(x, y, _radius) {
        var _this = _super.call(this, x, y) || this;
        _this.radius = _radius;
        return _this;
    }
    circle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (" radius = " + this.radius + " ");
    };
    return circle;
}(shape_1.default));
exports.default = circle;
