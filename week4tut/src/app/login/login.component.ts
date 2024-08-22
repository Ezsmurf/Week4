import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  users = [
    { email: 'user1@example.com', password: 'password1', username: 'User One', birthdate: '1990-01-01', age: 30 },
    { email: 'user2@example.com', password: 'password2', username: 'User Two', birthdate: '1985-05-05', age: 35 },
    { email: 'user3@example.com', password: 'password3', username: 'User Three', birthdate: '2000-09-09', age: 20 }
  ];

  constructor(private router: Router) {}

  login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      // Store user details in sessionStorage
      sessionStorage.setItem('user', JSON.stringify(user));
      // Navigate to the profile page after login
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials');
    }
  }
}
