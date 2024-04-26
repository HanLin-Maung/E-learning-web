import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  login() {
    // Your login logic here, if validation succeeds then navigate to home
    this.router.navigate(['/home']);
  }
  


  goToSignUp() {
    // Logic to navigate to the sign-up page or show sign-up modal
    console.log('Navigate to sign-up page');
  }
}
