import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string = 'Bruno Pequeno';
  userEmail: string = 'bru.pequeno@gmail.com';
  userProjects: string[] = ['C2B', 'X Space', 'Cloud Nave'];
  admissionDate: Date = new Date('10/11/2023');
  showEditModal: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  getFormattedDate(date: Date): string {
    return format(date, 'dd/MM/yyyy', { locale: pt });
  }

  openEditModal(): void {
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }
}