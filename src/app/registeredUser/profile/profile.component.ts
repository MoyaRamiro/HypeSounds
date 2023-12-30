import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [sideNavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
