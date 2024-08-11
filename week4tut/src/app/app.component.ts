import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CommonModule } from '@angular/common';  // Import CommonModule for directives

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  // Needed for ngIf, ngFor, etc.
    RouterOutlet,
    RouterLink,
    LoginComponent,
    AccountComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';
}
