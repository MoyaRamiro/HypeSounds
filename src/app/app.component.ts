import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardModule } from './registeredUser/sideNav/sideNav.module';
import { sideNavComponent } from './registeredUser/sideNav/sideNav.component';
import { BodyComponent } from './registeredUser/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, sideNavComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'hypeSounds';
  //falta routerOutlet en unregistered
}
