import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  currentSlide = 0;
  autoSlideInterval: any;

  slides = [
    {
      image: 'assets/images/explore-varanasi-tour.jpg',
      title: '',
      route: '/tours'
    },
    {
      image: 'assets/images/Prayagraj-Triveni-Sangam-Hanuman.png',
      title: 'Prayagraj Tours',
      route: '/tours'
    },
    {
      image: 'assets/images/ayodhya-ram_mandir.jpg',
      title: 'Ayodhya Ram Mandir Tour',
      route: '/tours'
    },
    {
      image: 'assets/images/ganga-aarti.jpg',
      title: 'Ganga Aarti in Varanasi',
      route: '/tours'
    },
    {
      image: 'assets/images/cab-booking-in-varanasi.jpg',
      title: 'Premium Taxi Service',
      route: '/taxi'
    }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Sri Ram Yatra - Spiritual Tours in Varanasi, Prayagraj & Ayodhya');
    this.metaService.updateTag({ name: 'description', content: 'Sri Ram Yatra offers the best spiritual tour packages in Varanasi, Prayagraj, and Ayodhya. Experience Ganga Aarti, Ram Mandir, Triveni Sangam & book reliable taxi service.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Sri Ram Yatra - Spiritual Tours in Varanasi, Prayagraj & Ayodhya' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://sriramyatra.com/' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide() {
    if (isPlatformBrowser(this.platformId)) {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  navigateToSlide(route: string) {
    this.router.navigate([route]);
  }

  goToTourPackages() {
    this.router.navigate(['/tours']);
  }
}
