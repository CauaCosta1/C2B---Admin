import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ReportComponent } from './components/report/report.component';
import { ReportSearchComponent } from './components/report/report-search/report-search.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesSearchComponent } from './components/employees/employees-search/employees-search.component';
import { ReportViewComponent } from './components/report/report-view/report-view.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'report', component: ReportComponent },
      { path: 'report/search', component: ReportSearchComponent },
      { path: 'report/report-view', component: ReportViewComponent },
      { path: 'employees/search', component: EmployeesSearchComponent },
      { path: 'user-profile', component: UserComponent },
      { path: 'employees', component: EmployeesComponent },
     
    ]
  },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
