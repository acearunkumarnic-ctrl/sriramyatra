import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('About Us - Sri Ram Yatra | Trusted Travel Agency in Varanasi');
    this.metaService.updateTag({ name: 'description', content: 'Learn about Sri Ram Yatra - a trusted travel agency based in Varanasi, specializing in spiritual tours to Prayagraj, Ayodhya, and pilgrimage destinations across Uttar Pradesh.' });
    this.metaService.updateTag({ property: 'og:title', content: 'About Sri Ram Yatra - Trusted Spiritual Travel Agency' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://sriramyatra.com/about' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
