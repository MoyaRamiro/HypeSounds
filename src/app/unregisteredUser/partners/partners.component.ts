import { Component } from '@angular/core';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [HeaderModule, RouterModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {

}
