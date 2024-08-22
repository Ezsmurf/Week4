import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';  // Import ProfileComponent
import { CommonModule } from '@angular/common';  // Import CommonModule for directives
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  // Needed for ngIf, ngFor, etc.
    RouterOutlet,
    RouterLink,
    LoginComponent,
    AccountComponent,
    ProfileComponent  // Add ProfileComponent to imports
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';

  constructor(private router: Router) {}

  logout(): void {
    // Clear session storage
    sessionStorage.clear();
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
