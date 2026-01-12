/*
 * Component que mostra el funcionament de diverses pipes
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 5.12.2017
 * - Component que mostra el funcionament de diverses pipes
 * 1.12.2020
 * - Actualització a Angular 11
  * 1-1-2026
 * - Actualització a Angular 21
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EstrellaPipe} from './m8-estrella.pipe';
import {InversaPipe} from './m8-inversa.pipe';

@Component({
    selector: 'aplicacio',
    standalone: true,
    imports: [CommonModule, EstrellaPipe, InversaPipe],
    template: `<h1> majuscula {{cadena | uppercase}}</h1>
              <h1>lowercase {{cadena | lowercase}}</h1>
              <h1>date:'MM/dd/yy' {{data | date:'yyyy'}}</h1>
              <h1>date:'shortTime'{{data | date:'shortTime'}}</h1>
              <h1>number:'2.0-1' {{nombre | number:'2.0-1'}}</h1>
              <h1>number:'2.2-2' {{nombre2 | number:'2.2-2'}}</h1>
              <h1>percent:'2.1-2' {{percentatge | percent:'2.0'}}</h1>
              <h1>currency:'EUR':'true':'2.1-2' {{import | currency:'EUR':'true':'2.1-2'}}</h1>
              <h1>slice:1:3 {{cadena | slice:1:3}}</h1>
              <h1>json {{ {"nom":"sergi", "cognom":"grau"} | json }}</h1>
              <h1>La meva pipe{{ "hola alumnes de dAW2" | estrella }}</h1>
              <h1>La meva pipe{{ "hola alumnes de dAW2" | inversa }}</h1>
              `
})

export class M08_PipesComponent {
    cadena: string = "Daw2";
    nombre: number = 10.46;
    nombre2: number = 10.6;
    percentatge: number= 0.534123;
    data = new Date(1988, 3, 15); // Abril 15, 1988
    import:number=123;
}