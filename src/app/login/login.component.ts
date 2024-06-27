import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private router: Router) {}

  login() {
    console.log('Login attempted with username:', this.username);
    // Mock authentication (replace with actual logic)
    if (this.username === 'Gowtham' && this.password === 'Gowtham15') {
      console.log('Login successful');
      // Clear error message if validation succeeds
      this.errorMsg = '';
  
      // Redirect to home page or perform any other action
      this.router.navigate(['/home']); // Make sure this matches the route path
    } else {
      console.log('Login failed');
      // Display error message for invalid credentials
      this.errorMsg = 'Invalid username or password';
    }
  }
  
}
