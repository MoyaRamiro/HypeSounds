import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sideNav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sideNav.component.html',
  styleUrl: './sideNav.component.css'
})
export class sideNavComponent {

  constructor(private auth : AuthService, private router : Router, private cdr: ChangeDetectorRef) {}

  getUserInfo() {
    return this.auth.user$;
  }

  currentSection: string = '';
  activeButton: string = 'feed';

  changeSection(section: string) {
    this.currentSection = section;
    this.router.navigateByUrl(`/${section}`)
    this.cdr.detectChanges();

  }

  isButtonActive(button: string): boolean {
    return this.activeButton === button;
  }

  logout(){
    this.auth.logout();
  }
}
