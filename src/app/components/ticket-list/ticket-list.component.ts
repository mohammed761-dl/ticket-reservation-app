import { Component, OnInit } from '@angular/core';
import { db, Reservation, seedFakeReservations } from '../../services/reservation-db.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  imports: [
    FormsModule,
    RouterOutlet,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  reservations: Reservation[] = [];
  editingId: number | null = null;

  async ngOnInit() {
    await seedFakeReservations();  //rod bal seed data  ghi la kan empty
    this.reservations = await db.reservations.toArray();
  }

  async deleteReservation(id: number) {
    await db.reservations.delete(id);
    this.reservations = await db.reservations.toArray();  // Refresh the list
  }

  enableEdit(id: number) {
    this.editingId = id;  // Enable editing for specific reservation
  }

  async saveUpdate(res: Reservation) {
    if (res.id != null) {
      await db.reservations.update(res.id, res);  // Save updated reservation
      this.editingId = null;  // Disable edit mode
      this.reservations = await db.reservations.toArray();  // Refresh the list
    }
  }
}
