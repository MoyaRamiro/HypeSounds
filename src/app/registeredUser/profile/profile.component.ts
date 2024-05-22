import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [sideNavComponent, CommonModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor (private user : UserService, private router : Router) {}

  getUserInfo() {
    return this.user.getUserInfo();
  }

}
