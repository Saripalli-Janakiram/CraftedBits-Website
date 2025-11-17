import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9\\-\\+\\s\\(\\)]+$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  get name() { return this.contactForm.get('name'); }
  get phone() { return this.contactForm.get('phone'); }
  get email() { return this.contactForm.get('email'); }

  onSubmit() {
    if (this.contactForm.valid) {
      const form = this.contactForm.value;

      // Replace with your EmailJS details
      emailjs.send(
        'service_id', // Your EmailJS service ID
        'template_id', // Your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message
        },
        'public_api_key' // Your EmailJS public key
      ).then(() => {
        this.submitted = true;
        this.contactForm.reset();
      }).catch((error) => {
        console.error('Email send failed:', error);
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
