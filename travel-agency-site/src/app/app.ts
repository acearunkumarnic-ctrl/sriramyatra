import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('travel-agency-site');
  protected readonly mobileMenuOpen = signal(false);

  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll to top on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(current => !current);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
