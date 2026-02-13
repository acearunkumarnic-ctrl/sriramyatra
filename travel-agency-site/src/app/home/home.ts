import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

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
      image: 'https://kashiz.com/sriramyatra/wp-content/uploads/2026/01/img1.png',
      title: 'Spiritual Varanasi'
    },
    {
      image: 'https://kashiz.com/sriramyatra/wp-content/uploads/2026/01/img2.png',
      title: 'Cultural Tours'
    },
    {
      image: 'https://kashiz.com/sriramyatra/wp-content/uploads/2025/04/cab-booking-in-varanasi.jpg',
      title: 'Premium Taxi Service'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
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

  goToTourPackages() {
    this.router.navigate(['/tours']);
  }
}
