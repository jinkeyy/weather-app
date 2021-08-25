export default class Customer {
    firstName: string;
    lastName: string;


    public get _firstName(): string{
        return this.firstName
    } 
    
    public set _firstName(v : string) {
        this.firstName = v;
    }
    
    public get _lastName(): string{
        return this.firstName
    } 
    
    public set _lastName(v : string) {
        this.lastName = v;
    }
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}



