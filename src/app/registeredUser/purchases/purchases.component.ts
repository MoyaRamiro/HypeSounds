import { Component } from '@angular/core';
import { sideNavComponent } from '../sideNav/sideNav.component';
import { soundPacksData } from '../sound-packs/soundPacks-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchases',
  standalone: true,
  imports: [sideNavComponent, CommonModule],
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.css'
})
export class PurchasesComponent {

  soundPacks = soundPacksData;
}
