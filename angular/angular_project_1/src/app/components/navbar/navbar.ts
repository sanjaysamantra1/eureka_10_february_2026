import { UserRoleService } from './../../services/user-role';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true
})
export class Navbar {
  userRoleService = inject(UserRoleService);
  currentUser_Role :string = '';
  
  constructor(){
    this.currentUser_Role = this.userRoleService.getUserRole();
  }
}
