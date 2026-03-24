import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tour-packages',
  imports: [CommonModule],
  templateUrl: './tour-packages.html',
  styleUrl: './tour-packages.css',
})
export class TourPackages {
  selectedTour: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  bookTour(tourName: string) {
    this.selectedTour = tourName;
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        window.open(`https://wa.me/917607119739?text=I want to book ${tourName} tour`, '_blank');
      }, 500);
    }
  }
}
