import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [sideNavComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

}
