import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TicketFormComponent} from './components/ticket-form/ticket-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TicketFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ticket-reservation-app';
}
