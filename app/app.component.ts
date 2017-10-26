import { Component } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  currentFocus: string = 'Tapped Kegs';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedBeer = null;

  masterBeerList: Beer[] = [
    new Beer('Franziskaner Hefe-Weisse', 'Spaten-Franziskaner-Brau', '7', '5.00%'),
    new Beer('1664 Blanc', 'Kronenbourg', '8', '5.00%'),
    new Beer('Alaskan Amber', 'Alaskan Brewing', '6', '5.0%'),
    new Beer('Anchor Steam', 'Anchor', '6', '4.9%'),
    new Beer('Beamish Stout', 'Beamish', '7', '3.8%'),
    new Beer('Blue Moon White', 'Blue Moon', '7', '5.4%'),
    new Beer('Heineken Light', 'Heineken', '5', '3.5%'),
    new Beer('Black Rabbit Porter', 'McMenamins', '7', '5.5%'),
    new Beer('Olde English 800 Ice', 'Olde English 800', '6', '7.9%'),
    new Beer('Pabst', 'Pabst', '5', '5.0%'),
    new Beer('Pilsner Uruqell', 'Pilsner Uruqell', '6', '4.3%'),
    new Beer('India Pale Ale', 'Pyramid', '6', '6.7%'),
    new Beer('Tilted Kilt', 'Pyramid', '6', '6.3%'),
    new Beer('Redhook Nut Brown', 'Redhook', '6', '5.6%'),
    new Beer('Sapporo Reserve', 'Sapporo', '7', '5.2%'),
    new Beer('Arrogant Bastard Ale', 'Stone Brewing', '7', '7.2%'),
    new Beer('Ruination IPA', 'Stone Brewing', '6', '7.7%'),
    new Beer('Tsingtao', 'Tsingtao', '6', '4.7%'),
    new Beer('Drop Top Amber Ale', 'Widmer', '5', '4.9%')
  ]
}

  // editBeer(clickedBeer) {
  //   this.selectedBeer = clickedBeer;
  // }

  // finishEditing() {
  //   this.selectedBeer = null;
  // }

  addBeer(newBeerFromChild: Beer) {
    this.masterBeerList.push(newBeerFromChild);
  }

}
