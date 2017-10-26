import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  kegs: kegs[] = [
    new Keg('Franziskaner Hefe-Weisse', 'Spaten-Franziskaner-Brau', '7', '5.00%'),
    new Keg('1664 Blanc', 'Kronenbourg', '8', '5.00%'),
    new Keg('Alaskan Amber', 'Alaskan Brewing', '6', '5.0%'),
    new Keg('Anchor Steam', 'Anchor', '6', '4.9%'),
    new Keg('Beamish Stout', 'Beamish', '7', '3.8%'),
    new Keg('Blue Moon White', 'Blue Moon', '7', '5.4%'),
    new Keg('Heineken Light', 'Heineken', '5', '3.5%'),
    new Keg('Black Rabbit Porter', 'McMenamins', '7', '5.5%'),
    new Keg('Olde English 800 Ice', 'Olde English 800', '6', '7.9%'),
    new Keg('Pabst', 'Pabst', '5', '5.0%'),
    new Keg('Pilsner Uruqell', 'Pilsner Uruqell', '6', '4.3%'),
    new Keg('India Pale Ale', 'Pyramid', '6', '6.7%'),
    new Keg('Tilted Kilt', 'Pyramid', '6', '6.3%'),
    new Keg('Redhook Nut Brown', 'Redhook', '6', '5.6%'),
    new Keg('Sapporo Reserve', 'Sapporo', '7', '5.2%'),
    new Keg('Arrogant Bastard Ale', 'Stone Brewing', '7', '7.2%'),
    new Keg('Ruination IPA', 'Stone Brewing', '6', '7.7%'),
    new Keg('Tsingtao', 'Tsingtao', '6', '4.7%'),
    new Keg('Drop Top Amber Ale', 'Widmer', '5', '4.9%')
  ]
}



export class Beer {
  name: string;
  brand: string;
  price: number;
  alcoholContent: number;

}
