import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service'; 

@Component({
  selector: 'app-employees-search',
  templateUrl: './employees-search.component.html',
  styleUrls: ['./employees-search.component.css']
})
export class EmployeesSearchComponent implements OnInit {
  searchQuery: string = '';
  filteredEmployees: any[] = [];
  p: number = 1;
  itemsPerPage: number = 5;

  constructor(private employeeService: EmployeeService) {} 
  
  ngOnInit(): void {
    this.getEmployees(); 
  }

  getEmployees(): void {
    this.filteredEmployees = [
      { name: 'Bruno Pequeno', email: 'bruno@gmail,con', phone: '(11) 963258831', projects: 'C2B, Code Nave', dateAdmiss: '12-04-2023' },
      { name: 'Alice Silva', email: 'alice@gmail.com', phone: '(21) 987654321', projects: 'WebAppX, MobileY', dateAdmiss: '11-09-2023' },
      { name: 'Carlos Oliveira', email: 'carlos@hotmail.com', phone: '(31) 876543210', projects: 'Data Analytics, Cloud Services', dateAdmiss: '17-02-2020' },
      { name: 'Eva Santos', email: 'eva@gmail.com', phone: '(11) 765432109', projects: 'AI Integration, Robotics', dateAdmiss: '06-09-2020' },
    ];

    console.log('Funcionários:', this.filteredEmployees);

    /*
    this.employeeService.getAllEmployees().subscribe(
      (employees: any[]) => {
        this.filteredEmployees = employees;
      },
      (error: any) => {
        console.error('Erro ao obter funcionários:', error);
      }
    );*/
  }

  searchEmployees(): void {
    const query = this.searchQuery.toLowerCase();

    if (this.searchQuery == ''){
      this.getEmployees();
    } else {
      this.filteredEmployees = this.filteredEmployees.filter(employee => 
      employee.name.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query) ||
      employee.phone.toLowerCase().includes(query) ||
      employee.projects.toLowerCase().includes(query) ||
      employee.dateAdmiss.toLowerCase().includes(query)
    )}
/*
    this.employeeService.searchEmployees(this.searchQuery).subscribe(
      (result: any[]) => {
        this.filteredEmployees = result;
        this.p = 1; // Reinicia a paginação para a primeira página após a pesquisa
      },
      (error: any) => {
        console.error('Erro na pesquisa de funcionários:', error);
      }
    );*/
  }
}
