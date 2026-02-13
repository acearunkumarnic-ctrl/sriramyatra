import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour-packages',
  imports: [CommonModule],
  templateUrl: './tour-packages.html',
  styleUrl: './tour-packages.css',
})
export class TourPackages {
  selectedTour: string = '';

  bookTour(tourName: string) {
    this.selectedTour = tourName;
    // Automatically navigate to WhatsApp after 2 seconds
    setTimeout(() => {
      window.open(`https://wa.me/918383987411?text=I want to book ${tourName} tour`, '_blank');
    }, 500);
  }
}
