import { Component, OnInit } from '@angular/core';
import { db, Reservation } from '../../services/reservation-db.service';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

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
    this.reservations = await db.reservations.toArray();
  }

  async deleteReservation(id: number) {
    await db.reservations.delete(id);
    this.reservations = await db.reservations.toArray();
  }

  enableEdit(id: number) {
    this.editingId = id;
  }

  async saveUpdate(res: Reservation) {
    if (res.id != null) {
      await db.reservations.update(res.id, res);
      this.editingId = null;
      this.reservations = await db.reservations.toArray();
    }
  }
}
