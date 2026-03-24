import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
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
