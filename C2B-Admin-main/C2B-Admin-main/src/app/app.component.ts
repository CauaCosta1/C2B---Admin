import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'C2B-Angular';
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) { 
    this.isAuthenticated = this.authService.getIsAuthenticated();
  }

}
