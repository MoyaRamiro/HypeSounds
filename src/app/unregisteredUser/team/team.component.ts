import { Component } from '@angular/core';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [HeaderModule, RouterModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
