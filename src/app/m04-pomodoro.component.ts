/*
 * Component que mostra com poden utilitzar esdeveniment DOM
 * també mostra com utilitzar una pipe
 * mostra un cronometre pomodoro
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2016
 * - Component que mostra com poden utilitzar esdeveniment DOM
 * 15.10.2017
 * - Actualització a Angular 5
  * 1.12.2020
 * - Actualització a Angular 11
 *  - 24.10.2024
 * - Actualització a Angular 18
 * 1-1-2026
 * - Actualització a Angular 21
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'aplicacio',
    template: `
    <div>
      <h1> {{ minuts }}:{{ segons | number: '2.0'  }} </h1>
      <p>
        <button (click)="conmutarPausa()">
          {{ etiquetaBoto }}
        </button>
      </p>
    </div>
    `,
    standalone: true,
    imports: [CommonModule],
})
export class M04_PomodoroComponent {
    minuts: number=0;
    segons: number=0;
    isPausa: boolean=false;
    etiquetaBoto: string='';

    constructor() {
        this.resetPomodoro();
        setInterval(() => this.tick(), 1000);
    }

    resetPomodoro(): void {
        this.isPausa = true;
        this.minuts = 23;
        this.segons = 10;
        this.etiquetaBoto = 'Inicia';
    }

    private tick(): void {
        if (!this.isPausa) {
            this.etiquetaBoto = 'Pausa';

            if (--this.segons < 0) {
                this.segons = 59;
                if (--this.minuts < 0) {
                    this.resetPomodoro();
                }
            }
        }
    }
    conmutarPausa(): void {
        this.isPausa = !this.isPausa;
        if (this.minuts < 24 || this.segons < 59) {
            this.etiquetaBoto = this.isPausa ? 'Continua' : 'Pausa';
        }
    }
}

