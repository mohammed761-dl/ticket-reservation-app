import { Routes } from '@angular/router';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

export const routes: Routes = [
  { path: 'reserver', component: TicketFormComponent },
  { path: '', redirectTo: '/reserver', pathMatch: 'full' }
];
