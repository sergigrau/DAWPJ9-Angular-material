import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
/**
 * @title M14Component
 * @description Component per a sumar dos números utilitzant Angular Material.
 * @author sergi.grau@fje.edu
 * @date 17.1.26
 */
@Component({
  selector: 'm14-component',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './m14-material-inputs.html',
  styleUrls: ['./m14-material-inputs.css']
})
export class M14Component {
  a: number | null = null;
  b: number | null = null;

  get sum(): number {
    const x = Number(this.a) || 0;
    const y = Number(this.b) || 0;
    return x + y;
  }
}
