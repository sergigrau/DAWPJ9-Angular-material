import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
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
  styleUrls: ['./m11-animacions.component.css'],
  animations: [
    trigger('boxState', [
      state('petit', style({ transform: 'scale(1)', backgroundColor: '#4f46e5' })),
      state('gran', style({ transform: 'scale(1.4)', backgroundColor: '#06b6d4' })),
      transition('petit <=> gran', animate('300ms ease-in-out')),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class M11_AnimacionsComponent {
  estatMida: 'petit' | 'gran' = 'petit';
  estatMostrar: boolean = true;

  canviarMida() { this.estatMida = this.estatMida === 'petit' ? 'gran' : 'petit'; }
  canviarMostrar() { this.estatMostrar = !this.estatMostrar; }
}
