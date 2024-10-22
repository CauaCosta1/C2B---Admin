import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  @Input() employees: any[] = [];
  p: number = 1;
  itemsPerPage: number = 10;

  constructor() {
    this.employees = [
      { name: 'Bruno Pequeno', email: 'bruno@gmail,con', phone: '(11) 963258831', projects: 'C2B, Code Nave', dateAdmiss: '12-04-2023' },
      { name: 'Alice Silva', email: 'alice@gmail.com', phone: '(21) 987654321', projects: 'WebAppX, MobileY', dateAdmiss: '11-09-2023' },
      { name: 'Carlos Oliveira', email: 'carlos@hotmail.com', phone: '(31) 876543210', projects: 'Data Analytics, Cloud Services', dateAdmiss: '17-02-2020' },
      { name: 'Eva Santos', email: 'eva@gmail.com', phone: '(11) 765432109', projects: 'AI Integration, Robotics', dateAdmiss: '06-09-2020' },
    ];
  }
}
