import { Component, signal, computed } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Navbar } from './shared/components/navbar/navbar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  currentUrl = signal<string>('/');

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => this.currentUrl.set(event.url));
  }

  showNavbar = computed(() => !this.currentUrl().startsWith('/auth'));
}
