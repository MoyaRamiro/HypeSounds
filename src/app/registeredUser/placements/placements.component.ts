import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';

@Component({
  selector: 'app-placements',
  standalone: true,
  imports: [sideNavComponent],
  templateUrl: './placements.component.html',
  styleUrl: './placements.component.css'
})
export class PlacementsComponent {

}
