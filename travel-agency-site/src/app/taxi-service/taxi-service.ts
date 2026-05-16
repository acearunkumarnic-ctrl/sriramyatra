import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-taxi-service',
  imports: [CommonModule],
  templateUrl: './taxi-service.html',
  styleUrl: './taxi-service.css',
})
export class TaxiService implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Taxi Service in Varanasi | Airport & Station Cab Booking - Sri Ram Yatra');
    this.metaService.updateTag({ name: 'description', content: 'Book reliable taxi and cab service in Varanasi for airport transfers, station pickups, and outstation trips to Prayagraj, Ayodhya & nearby pilgrimage sites.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Taxi Service in Varanasi - Airport & Outstation Cab Booking' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://sriramyatra.com/taxi' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
