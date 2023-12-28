import { Component } from '@angular/core';
import { DashboardModule } from '../sideNav/sideNav.module';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [DashboardModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {


  images: string[] = ['/assets/dashboard/beatstarsLogo.webp', '/assets/dashboard/discordLogo.webp', '/assets/main/googlePlayImage.webp']; 
  currentImageIndex = 0;

  get currentImage(): string {
    return this.images[this.currentImageIndex];
  }

  showNextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

  }

  showPreviousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;

  }


}
