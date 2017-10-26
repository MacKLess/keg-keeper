import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {

}



export class Beer {
  name: string;
  brand: string;
  price: number;
  alcoholContent: number;

}
