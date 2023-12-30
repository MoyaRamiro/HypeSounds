import { Component } from '@angular/core';
import { DashboardModule } from '../sideNav/sideNav.module';
import { OnInit } from '@angular/core';
import { placementsData } from '../placements/placements-data';
import { CommonModule } from '@angular/common';
import { soundPacksData } from '../sound-packs/soundPacks-data';
import { servicesData } from '../servicios/services-data';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [DashboardModule, CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {


  images: string[] = ['/assets/dashboard/beatstarsLogo.webp', '/assets/dashboard/discordLogo.webp', '/assets/main/googlePlayImage.webp']; 
  currentImageIndex = 0;

  placements = placementsData;
  soundPacks = soundPacksData;
  services = servicesData;
  

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
