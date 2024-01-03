import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [sideNavComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor (private auth : AuthService) {}

  getUserInfo() {
    return this.auth.user$;
  }

}
