import { Routes } from '@angular/router';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: 'reserver', component: TicketFormComponent },
  { path: 'liste', component: TicketListComponent },
];
