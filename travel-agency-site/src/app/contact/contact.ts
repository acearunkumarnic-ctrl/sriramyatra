import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Contact Us - Sri Ram Yatra | Book Tours & Taxi in Varanasi');
    this.metaService.updateTag({ name: 'description', content: 'Contact Sri Ram Yatra to book spiritual tour packages or taxi service in Varanasi. Call or WhatsApp us for instant bookings and travel inquiries.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Contact Sri Ram Yatra - Book Tours & Taxi in Varanasi' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://sriramyatra.com/contact' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  successMessage = '';

  submitForm() {
    if (this.formData.name && this.formData.email && this.formData.phone && this.formData.subject && this.formData.message) {
      // Create WhatsApp message
      const text = `Hi Sri Ram Yatra,\n\nName: ${this.formData.name}\nEmail: ${this.formData.email}\nPhone: ${this.formData.phone}\nSubject: ${this.formData.subject}\n\nMessage: ${this.formData.message}`;
      const encodedText = encodeURIComponent(text);
      
      // Open WhatsApp
      if (isPlatformBrowser(this.platformId)) {
        window.open(`https://wa.me/917607119739?text=${encodedText}`, '_blank');
      }
      
      // Show success message
      this.successMessage = 'Thank you! Your message has been sent. Opening WhatsApp for confirmation...';
      
      // Reset form
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };
        this.successMessage = '';
      }, 3000);
    } else {
      alert('Please fill in all fields');
    }
  }
}
