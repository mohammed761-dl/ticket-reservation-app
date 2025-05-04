import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { db, Reservation } from '../../services/reservation-db.service';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
  ]
})
export class TicketFormComponent {
  name = '';
  destination = '';
  date = '';
  successMessage = '';

  async submitForm(form: any) {
    if (form.valid) {
      const reservation: Reservation = {
        name: this.name,
        destination: this.destination,
        date: this.date,
      };

      try {
        await db.reservations.add(reservation);
        this.successMessage = 'Réservation enregistrée localement !';

        // Reset form
        form.resetForm();
        this.name = '';
        this.destination = '';
        this.date = '';
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement :', error);
      }
    }
  }
}
