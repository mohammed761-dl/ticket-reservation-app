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

/**
 * Inserts fake reservations into the database if it's empty.
 */
export async function seedFakeReservations() {
  const count = await db.reservations.count();
  if (count === 0) {
    await db.reservations.bulkAdd([
      { name: 'Alice Dupont', destination: 'Paris', date: '2025-06-01' },
      { name: 'Karim Boulahya', destination: 'Londres', date: '2025-06-15' },
      { name: 'Sophie Bernard', destination: 'Rome', date: '2025-07-10' },
      { name: 'Marc Lefèvre', destination: 'Tokyo', date: '2025-08-20' },
    ]);
    console.log('✅ Fake reservations inserted.');
  }
}
