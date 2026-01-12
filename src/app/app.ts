import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
/*
  * Component principal de l'aplicació
*/
@Component({
  selector: 'aplicacio',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('pj9');
}
