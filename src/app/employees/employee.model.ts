export class Employee {
    public firstName: string;
    public lastName: string;
    public email: string;
    public startDate: Date;

    constructor(firstName: string, lastName: string, email: string, startDate: Date){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.startDate = startDate;
    }
}