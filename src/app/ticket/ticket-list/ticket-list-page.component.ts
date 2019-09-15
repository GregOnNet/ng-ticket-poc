import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ticketsLoadAll } from './ticket-list.actions';
import { hasNoTicketsLoaded, selectAll } from './ticket-list.selectors';
import { TicketFeature } from '../ticket-feature-setup';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list-page',
  template: `
    <ng-container *ngIf="isLoading$ | async; else ticketList">
      Welcome, we get your tickets ready.
    </ng-container>
    <ng-template #ticketList>
      <app-ticket-list-item
        [ticket]="ticket"
        *ngFor="let ticket of tickets$ | async"
      ></app-ticket-list-item
    ></ng-template>
  `,
  styles: []
})
export class TicketListPage {
  isLoading$: Observable<boolean>;
  tickets$: Observable<Ticket[]>;

  constructor(private store: Store<TicketFeature>) {
    this.isLoading$ = this.store.pipe(select(hasNoTicketsLoaded));
    this.tickets$ = this.store.pipe(select(selectAll));
  }
}
