import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'm15-component',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, MatRadioModule],
  templateUrl: './m15-material-inputs.html',
  styleUrls: ['./m15-material-inputs.css']
})
export class M15Component {
  casellaA = false;
  casellaB = true;
  casellaC = false;

  opcionsRadio = ['Opció A', 'Opció B', 'Opció C'];
  radioSeleccionat = this.opcionsRadio[0];

  get resum(): string {
    const caixes = [] as string[];
    if (this.casellaA) caixes.push('A');
    if (this.casellaB) caixes.push('B');
    if (this.casellaC) caixes.push('C');
    return `Caixes: [${caixes.join(', ')}] — Ràdio: ${this.radioSeleccionat}`;
  }
}
