import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private router: Router,
    public employeeService: EmployeesService
             ) { }

  ngOnInit(){
    
  }
  onCreate(){
    this.router.navigate(['new'])
    
  }
}
