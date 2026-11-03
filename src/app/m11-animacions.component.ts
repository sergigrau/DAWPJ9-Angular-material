import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
* @title M11_AnimacionsComponent
* @description Component d'exemple d'animacions en Angular.
* @author sergi.grau@fje.edu
* @date 7.11.24
 * 1-1-2026
* - Actualització a Angular 21   
*/
@Component({
  selector: 'm11-animacions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m11-animacions.component.html',
  styleUrls: ['./m11-animacions.component.css']
})
export class M11_AnimacionsComponent {
  estatMida: 'petit' | 'gran' = 'petit';
  estatMostrar: boolean = true;

  canviarMida() { this.estatMida = this.estatMida === 'petit' ? 'gran' : 'petit'; }
  canviarMostrar() { this.estatMostrar = !this.estatMostrar; }
}
