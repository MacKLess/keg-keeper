import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'new-beer',
  templateUrl: 'app/new-beer.component.html'
})

export class NewBeerComponent {
  @Output() newBeerSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number) {
    var newBeerToAdd: Beer = new Beer(name, brand, price, abv);
    this.newBeerSender.emit(newBeerToAdd);
  }
}
