import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [sideNavComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {

}
