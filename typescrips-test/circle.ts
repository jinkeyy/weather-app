import shape from "./shape"
export default class circle extends shape {
    private radius:number;
    constructor(x: number, y: number, _radius: number) {
        super(x, y);
        this.radius = _radius
    }
    getInfo():string{
        return super.getInfo() + ` radius = ${this.radius} `
    }
}