import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      // Convert birthdate from YYYY-MM-DD to DD-MM-YYYY if needed
      if (this.user.birthdate && this.user.birthdate.includes('-')) {
        const [year, month, day] = this.user.birthdate.split('-');
        this.user.birthdate = `${day}-${month}-${year}`;
      }
    } else {
      this.router.navigate(['/login']);  // Redirect to login if no user data is found
    }
  }

  saveProfile(): void {
    // Convert birthdate from DD-MM-YYYY to YYYY-MM-DD before saving
    if (this.user.birthdate && this.user.birthdate.includes('-')) {
      const [day, month, year] = this.user.birthdate.split('-');
      this.user.birthdate = `${year}-${month}-${day}`;
    }
    sessionStorage.setItem('user', JSON.stringify(this.user));
    alert('Profile updated successfully');
  }
}
