export default class shape {
    private x: number;
    private y: number;
    constructor(private _x: number, private _y: number) {
        this.x = _x
        this.y = _y
    }
    getInfo():string{
        return `x = ${this._x}, y = ${this.y}`
    }
}