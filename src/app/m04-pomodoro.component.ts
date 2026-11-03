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
 * 24.10.2024
 * - Actualització a Angular 18
 * 1-1-2026
 * - Actualització a Angular 21
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aplicacio',
  template: `
    <div>
      <h1>{{ minuts() }}:{{ segons() | number: '2.0-0' }}</h1>
      <p>
        <button (click)="conmutarPausa()">
          {{ etiquetaBoto() }}
        </button>
      </p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class M04_PomodoroComponent {
  private readonly destroyRef = inject(DestroyRef);
  minuts = signal(0);
  segons = signal(0);
  isPausa = signal(false);
  etiquetaBoto = signal('');

  constructor() {
    this.resetPomodoro();
    const timerId = setInterval(() => this.tick(), 1000);
    this.destroyRef.onDestroy(() => clearInterval(timerId));
  }

  resetPomodoro(): void {
    this.isPausa.set(true);
    this.minuts.set(23);
    this.segons.set(10);
    this.etiquetaBoto.set('Inicia');
  }

  private tick(): void {
    if (!this.isPausa()) {
      this.etiquetaBoto.set('Pausa');

      const nousSegons = this.segons() - 1;
      if (nousSegons < 0) {
        this.segons.set(59);
        const nousMinuts = this.minuts() - 1;
        if (nousMinuts < 0) {
          this.resetPomodoro();
        } else {
          this.minuts.set(nousMinuts);
        }
      } else {
        this.segons.set(nousSegons);
      }
    }
  }

  conmutarPausa(): void {
    this.isPausa.update((valorActual) => !valorActual);
    if (this.minuts() < 24 || this.segons() < 59) {
      this.etiquetaBoto.set(this.isPausa() ? 'Continua' : 'Pausa');
    }
  }
}
