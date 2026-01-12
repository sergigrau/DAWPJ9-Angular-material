/*
 * Component que permet sumar dos nombres
 * mostra con es generen esdeveniments i es controlen propietats
 * utilitza ngif
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Component que permet sumar dos nombres
 * 1.12.2020
 * - Actualització a Angular 11
 * 1.10.2024
 * - Actualització a Angular 18
  * 1-1-2026
 * - Actualització a Angular 21
 * 
 * NOTES
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'aplicacio',
    standalone: true,
    imports: [FormsModule, CommonModule],
    template: `

    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Entra nombre 1"   [(ngModel)]="n1" required>
    </div>

    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Entra nombre 2"  [(ngModel)]="n2" required>
    </div>
    <button  class="btn btn-primary" (click)="sumar()"> suma </button>
    <button  class="btn btn-primary" (click)="restar()"> resta </button>
    
    <div class="alert alert-primary" role="alert">
      <h3>el resultat és {{resultat}} </h3>
    </div>
      <h2 *ngIf="resultat<0">el valor es negatiu</h2>
  
    `,
    styles: ['h2 { color: #900 }']
})
export class M02_SumaComponent_bis {
        
    public resultat: number;
    public n1: number=100;
    public n2: number=0;
    constructor() {
        this.resultat = 0;
    }
    sumar(): void {
        this.resultat = this.n1*1 + this.n2 * 1;
        this.n1=0;
        this.n2=0;

    }
    restar(): void {
        this.resultat = this.n1 - this.n2 * 1;
    }

}
