import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sideNav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sideNav.component.html',
  styleUrl: './sideNav.component.css'
})
export class sideNavComponent {

  constructor(private auth : AuthService) {}

  getUserInfo() {
    return this.auth.user$;
  }

  currentSection: string = 'feed';
  activeButton: string = 'feed';

  changeSection(section: string) {
    this.currentSection = section;

  }

  isButtonActive(button: string): boolean {
    return this.activeButton === button;
  }

  logout(){
    this.auth.logout();
  }
}
