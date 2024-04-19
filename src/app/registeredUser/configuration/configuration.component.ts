import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [sideNavComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
  constructor (private auth : AuthService) {}
  
  getUserInfo (){
    this.auth.user$;
  }
}
