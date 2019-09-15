import { Component, Input } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list-item',
  styleUrls: ['./ticket-list-item.component.scss'],
  template: `
    <p>
      <a
        [routerLink]="['..', 'details', ticket.id]"
        [class.completed]="ticket.completed"
        ><strong>{{ ticket.description }}</strong>
        <br />
        <small>#{{ ticket.id }}</small></a
      >
    </p>
  `
})
export class TicketListItem {
  @Input() ticket: Ticket;
}
