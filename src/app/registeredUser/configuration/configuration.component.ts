import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';
import { AuthService, User } from '@auth0/auth0-angular';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [sideNavComponent, CommonModule],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
  constructor (private user: UserService) {}

  getUserInfo(){
    return this.user.getUserInfo();
  }
}
