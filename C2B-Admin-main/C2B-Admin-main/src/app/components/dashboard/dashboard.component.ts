import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {
  isDropdownOpenReport = false;
  isDropdownOpenEmployee = false;
  usernameAuth = 'Bruno';
  
  toggleDropdown(menu: string): void {
    if (menu === 'report') {
      this.isDropdownOpenReport = !this.isDropdownOpenReport;
      this.isDropdownOpenEmployee = false;
    } else if (menu === 'employee') {
      this.isDropdownOpenEmployee = !this.isDropdownOpenEmployee;
      this.isDropdownOpenReport = false;
    }
  }
}
