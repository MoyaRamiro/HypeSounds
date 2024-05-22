import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-track-library',
  standalone: true,
  imports: [sideNavComponent, CommonModule, RouterLink],
  templateUrl: './track-library.component.html',
  styleUrl: './track-library.component.css'
})
export class TrackLibraryComponent {

  modal = false;

  constructor(private router : Router) {}


  toggleModal(){
    this.modal = !this.modal;
  }
}
