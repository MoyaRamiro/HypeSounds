import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';
import { CommonModule } from '@angular/common';
import { placementsData } from './placements-data';

@Component({
  selector: 'app-placements',
  standalone: true,
  imports: [sideNavComponent, CommonModule],
  templateUrl: './placements.component.html',
  styleUrl: './placements.component.css'
})
export class PlacementsComponent {

  placements = placementsData;
}
