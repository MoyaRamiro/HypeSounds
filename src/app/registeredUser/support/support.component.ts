import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [sideNavComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
