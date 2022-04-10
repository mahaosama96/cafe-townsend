import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';

import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})
export class EmployeesInfoComponent implements OnInit {
  employee: Employee;

  constructor(public route: ActivatedRoute,
              public employeeSer: EmployeesService) { }

  ngOnInit() {
    const id = this.route.snapshot.params[+'id'];
  
  }
  
} 
