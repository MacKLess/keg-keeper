import { Component } from '@angular/core';

// if make beer page --> import { Beer } from './beer';

@Component({
  selector: 'beer-detail',
  template: `
    <div *ngIf="beer">
      <h2>{{beer.name}} details!</h2>
      <div><label>brand: </label>{{beer.brand}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="beer.name" placeholder="name">
      </div>
      <div>
        <label>price: </label>{{beer.price}}</div>
        <input [(ngModel)]="beer.price" placeholder="price">
      </div>
      <div>
        <label>alcohol content (ABV): </label>{{beer.ABV}}</div>
        <input [(ngModel)]="beer.ABV" placeholder="ABV">
      </div>
    </div>
  `
})

export class BeerDetailComponent {
  @Input() beer: Beer;
}
