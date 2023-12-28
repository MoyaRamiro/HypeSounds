import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sideNavComponent } from '../sideNav/sideNav.component';
import { FeedComponent } from '../feed/feed.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, sideNavComponent, FeedComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
