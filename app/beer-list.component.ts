import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template: `
  <ul>
    <li *ngFor="let currentBeer of childBeerList">
    <h4>{{currentBeer.name}}</h4>
    </li>
  </ul>
  <div id="detail" *ngIf="selectedBeer">
    <h3>{{selectedBeer.name}}</h3>
    <ul>
      <li *ngFor="let brand of selectedBeer.brand">{{brand}}
      </li>
      <li *ngFor="let price of selectedBeer.price">{{price}}
      </li>
      <li *ngFor="let abv of selectedBeer.abv">{{abv}}
      </li>
    </ul>
    <button (click)="finishedReviewing()" class="btn btn-warning">Done</button>
  </div>
   `
})

export class BeerListComponent {
  @Input() childBeerList: Beer[];
  // @Output() clickSender = new EventEmitter();
}
