import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  unBoolean: boolean;


  constructor() {

    setTimeout(() => {

      this.title = 'meriem';
    }, 5000);


  }
}


