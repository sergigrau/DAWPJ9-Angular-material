/*
 * Component que demostra el funcionament de diverses directives
 * Fa ús d'una classe interna
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2016
 * - Component embolcall que utilitza un subcomponent amb la lògica
 * 5.12.2017
 * - correccions i actualitzacions
   * 1.12.2020
 * - Actualització a Angular 11
 * 1-1-2026
 * - Actualització a Angular 21
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Alumne {
  id: number=0;
  nom: string='';
}

@Component({
  selector: 'aplicacio',
  standalone: true,
  imports: [CommonModule],
  template: `

      <div class="container mt-3">
        <p>expressió: <span class="badge bg-secondary">{{estatVisible}}</span></p>

        <div class="btn-group mb-2" role="group">
          <button class="btn btn-outline-primary" (click)="dada=2">dada 2</button>
          <button class="btn btn-outline-primary" (click)="dada=3">dada 3</button>
          <button class="btn btn-success" (click)="veureInfo()">Mostrar info</button>
        </div>

        <div *ngIf="estatVisible" class="mb-3">
          <h2 [ngStyle]="{'color': color}" class="h3">Angular2!</h2>
        </div>

        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between align-items-center" *ngFor="let alumne of alumnes; let i = index">
            Alumne #{{i}} {{alumne.nom}}
            <span class="badge bg-primary rounded-pill">{{alumne.id}}</span>
          </li>
        </ul>

        <div [ngSwitch]="dada" class="mb-3">
          <h2 *ngSwitchCase="2" class="text-info">has seleccionat 2</h2>
          <ng-container *ngSwitchCase="3">
            <h2 class="text-info">has seleccionat 3</h2>
          </ng-container>
          <p *ngSwitchDefault class="text-muted">No has seleccionat res</p>
        </div>

        <div class="btn-group mb-2" role="group">
          <button class="btn btn-outline-secondary" (click)="mida=mida+1">˄</button>
          <button class="btn btn-outline-secondary" (click)="mida=mida-1">˅</button>
        </div>
        <div [ngStyle]="{'font-size.px':mida}" class="border p-2 d-inline-block">DAW2</div>
      </div>

  `,
  styles: ['.blau { color: #00F }']
})
export class M06_DirectivesComponent {
  color: string = 'rgb(150,0,0)';
  dada: number = 4;
  mida:number =10;
  alumnes = [
    { id: 11, nom: 'Sergi' },
    { id: 12, nom: 'Joan' },
    { id: 13, nom: 'Anna' },

  ];
  estatVisible: boolean = false;
  veureInfo(): void {
    this.estatVisible = !this.estatVisible;
  }
}
