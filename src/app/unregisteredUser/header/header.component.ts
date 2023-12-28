import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private activatedRoute : ActivatedRoute, private router : Router){}

}
