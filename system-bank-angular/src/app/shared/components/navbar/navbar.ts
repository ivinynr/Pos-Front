import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../services/auth/auth-service';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, RouterLink, MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
