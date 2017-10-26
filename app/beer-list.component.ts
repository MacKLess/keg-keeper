import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'beer-list',
  template: `

   `
})

export class BeerListComponent {
  @Input() childBeerList: Beer[];
  // @Output() clickSender = new EventEmitter();
}
