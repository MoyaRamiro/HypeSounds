import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showPassword = false;


  constructor(private activatedRoute : ActivatedRoute, private router : Router) {}

  loginForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  })
  
  submitLogin(){
    let cartelError = document.querySelector("#errorMsg") as HTMLElement

    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.router.navigate(['../']);

    /*const isValidUser = this.service.validateUser(userName, password);

    if (isValidUser){
      const UserFromLocalStorage = this.service.getUser(userName)

      if(UserFromLocalStorage){
        this.service.setActiveUser(UserFromLocalStorage);
        console.log(UserFromLocalStorage);
        this.router.navigate(['../../']);
      } else {
        console.error("Usuario no encontrado en el almacenamiento local.");
      }

      

      
    } else {
      
      cartelError.textContent = "ERROR // LAS CREDENCIALES NO COINCIDEN....."
    }*/
  }

  toggleShowPassword(){
    this.showPassword = !this.showPassword;
  }

}
