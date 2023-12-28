import { Component } from '@angular/core';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characteristics',
  standalone: true,
  imports: [HeaderModule, RouterModule],
  templateUrl: './characteristics.component.html',
  styleUrl: './characteristics.component.css'
})
export class CharacteristicsComponent {

}
