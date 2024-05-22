import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor (private auth : AuthService) {}

  getUserInfo() {
    return this.auth.user$;
  }
}
