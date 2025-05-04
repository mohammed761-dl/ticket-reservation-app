import Dexie, { Table } from 'dexie';

export interface Reservation {
  id?: number;
  name: string;
  destination: string;
  date: string;
}

export class ReservationDB extends Dexie {
  reservations!: Table<Reservation, number>;

  constructor() {
    super('ticketReservationDB');
    this.version(1).stores({
      reservations: '++id, name, destination, date',
    });
  }
}

export const db = new ReservationDB();
