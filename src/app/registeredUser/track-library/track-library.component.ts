import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';

@Component({
  selector: 'app-track-library',
  standalone: true,
  imports: [sideNavComponent],
  templateUrl: './track-library.component.html',
  styleUrl: './track-library.component.css'
})
export class TrackLibraryComponent {

}
