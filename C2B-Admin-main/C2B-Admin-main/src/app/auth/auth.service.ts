import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  emailSet: string = '';

  login(email: string, password: string): boolean {
    // Faça a autenticação no seu servidor
    // Se o usuário for válido, defina o papel (role) e retorne true
    if (email === 'admin' && password === 'admin') {
      localStorage.setItem('userRole', 'admin');
      this.emailSet = email;
      return true;
    } else if (email === 'Bruno' || email ==='' || password === '12345' || password ==='') {
      localStorage.setItem('userRole', 'user');
      this.emailSet = email;
      return this.isAuthenticated = true;
    } else {
      return this.isAuthenticated = false;
    }
  }

  getUserRole(): any {
    return this.getUserRole();
  }

  logout() {
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getUsername(): string {
    return this.emailSet;
    
  }
  
}