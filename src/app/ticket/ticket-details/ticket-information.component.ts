import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { Assignee } from '../assignee';

@Component({
  selector: 'app-ticket-information',
  template: `
    <ng-container *ngIf="ticket; else loadingTicket">
      <h2>Ticket #{{ ticket.id }}</h2>
      <p>{{ ticket.description }}</p>
      <p *ngIf="ticket.assignee">
        <strong>Assigned to: </strong
        ><small>{{ ticket.assignee.name || 'nobody' }}</small>
      </p>
    </ng-container>

    <ng-template #loadingTicket>
      Loading ticket information for you...
    </ng-template>
  `,
  styles: []
})
export class TicketInformation {
  @Input() ticket: Ticket & { assignee: Assignee };
}
