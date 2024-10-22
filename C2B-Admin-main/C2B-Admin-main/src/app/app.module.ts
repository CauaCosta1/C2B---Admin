import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { ReportComponent } from './components/report/report.component';
import { ReportService } from './services/report.service';
import { HttpClientModule } from '@angular/common/http';
import { ReportSearchComponent } from './components/report/report-search/report-search.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeesSearchComponent } from './components/employees/employees-search/employees-search.component';
import { EmployeeService } from './services/employee.service';
import { CommonModule } from '@angular/common';
import { ReportViewComponent } from './components/report/report-view/report-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    ReportComponent,
    ReportSearchComponent,
    EmployeesComponent,
    EmployeesSearchComponent,
    ReportViewComponent
  ],
  
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ReportService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
