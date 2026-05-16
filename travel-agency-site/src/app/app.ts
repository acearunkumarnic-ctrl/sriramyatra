import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
  protected readonly pageLoading = signal(false);

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pageLoading.set(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        // Small delay so the loader is visible even on fast navigations
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => this.pageLoading.set(false), 400);
        } else {
          this.pageLoading.set(false);
        }
      }
    });

    // Scroll to top on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
      });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(current => !current);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
