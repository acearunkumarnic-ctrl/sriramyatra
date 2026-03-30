import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-tour-packages',
  imports: [CommonModule],
  templateUrl: './tour-packages.html',
  styleUrl: './tour-packages.css',
})
export class TourPackages implements OnInit {
  selectedTour: string = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Tour Packages - Varanasi, Prayagraj, Ayodhya | Sri Ram Yatra');
    this.metaService.updateTag({ name: 'description', content: 'Explore our spiritual tour packages: Ganga Aarti in Varanasi, Ram Mandir in Ayodhya, Triveni Sangam in Prayagraj. Customized group & private tours at best prices.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Spiritual Tour Packages - Varanasi, Prayagraj, Ayodhya' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://sriramyatra.com/tours' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }

  bookTour(tourName: string) {
    this.selectedTour = tourName;
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        window.open(`https://wa.me/917607119739?text=I want to book ${tourName} tour`, '_blank');
      }, 500);
    }
  }
}
