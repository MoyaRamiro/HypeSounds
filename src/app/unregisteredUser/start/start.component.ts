import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  standalone: true,
  imports: [HeaderModule, RouterModule],
  styleUrls: ['./start.component.css'],
  animations: [
    trigger('slideUp', [
      state('void', style({
        transform: 'translateY(100%)'
      })),
      state('*', style({
        transform: 'translateY(0)'
      })),
      transition('unclicked => clicked', animate('500ms ease-out')),
      transition('clicked => unclicked', animate('500ms ease-in')),
    ]),
  ]
})
export class StartComponent {

  isArrowClicked = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  onArrowClick() {
    this.isArrowClicked = !this.isArrowClicked;
  }

}
