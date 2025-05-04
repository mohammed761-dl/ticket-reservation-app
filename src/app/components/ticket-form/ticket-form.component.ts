import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  imports: [
    FormsModule
  ],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})

export class TicketFormComponent {
  name = '';
  destination = '';
  date = '';
  successMessage = '';
  formData: any;

  submitForm(form: any) {
    if (form.valid) {
      console.log('Réservation:', {
        name: this.name,
        destination: this.destination,
        date: this.date,
      });

      this.successMessage = 'Réservation effectuée avec succès !';

      // Reset form and model
      form.resetForm();
      this.name = '';
      this.destination = '';
      this.date = '';
    }
  }
}
