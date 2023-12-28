
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import {AuthModule, AuthService } from '@auth0/auth0-angular';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AuthModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  userLogged = false;

  constructor(private activatedRoute : ActivatedRoute, private router : Router, private auth: AuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.userLogged = isAuthenticated;
      
      if(isAuthenticated){
        this.router.navigateByUrl('/feed');
      }
    });
    
    console.log(this.userLogged);
  }

  login() {
      this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ 
      logoutParams: {
        returnTo: window.location.origin
      }
    });
    this.userLogged = false;
  }


}
