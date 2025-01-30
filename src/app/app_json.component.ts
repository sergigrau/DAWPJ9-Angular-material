import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as data from '../assets/dades.json';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  jsonData = (data as any).default;

  constructor() {
    console.log(this.jsonData.persones[0].nom);
  }
}
