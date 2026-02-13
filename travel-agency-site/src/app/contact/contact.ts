import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
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
      window.open(`https://wa.me/918383987411?text=${encodedText}`, '_blank');
      
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
