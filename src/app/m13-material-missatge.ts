import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
/**
 * @title M13Component
 * @description Component per a mostrar un missatge utilitzant Angular Material.
 * @author sergi.grau@fje.edu
 * @date 17.1.26
 */
@Component({
  selector: 'm13-component',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './m13-material-missatge.html'})
export class M13Component {
  constructor(private snack: MatSnackBar) {}

  greet() {
    this.snack.open('Hola! Salutacions.', 'Tancar', { duration: 2000 });
  }
}
