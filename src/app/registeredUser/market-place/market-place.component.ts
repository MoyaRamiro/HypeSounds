import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';
import { CommonModule } from '@angular/common';
import { servicesData } from './services-data';
import { soundPacksData } from '../sound-packs/soundPacks-data';

@Component({
  selector: 'app-market-place',
  standalone: true,
  imports: [sideNavComponent, CommonModule],
  templateUrl: './market-place.component.html',
  styleUrl: './market-place.component.css'
})
export class MarketPlaceComponent {

  services = servicesData;
  soundPacks = soundPacksData;
}
