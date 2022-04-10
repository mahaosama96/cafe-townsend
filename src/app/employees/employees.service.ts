import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({providedIn: "root"})

export class EmployeesService{
    
    public employees: Employee[] = [
        new Employee ('Dane' ,'Fritz', 'daneFritz@gmail.com', new Date()),
        new Employee ('Ella' ,'Quinby', 'daneFritz@gmail.com', new Date()),
        new Employee ('Alexandra' ,'Aly', 'daneFritz@gmail.com', new Date()),
        new Employee ('Elijah' ,'Lopez', 'daneFritz@gmail.com', new Date())
    ]
    
    getEmployeeId(id: number){
        return this.employees[id];
    }
    
}