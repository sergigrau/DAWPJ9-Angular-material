import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aplicacio',
  template: `
    <div>
      <h1>{{ minuts }}:{{ segons }}</h1>
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
export class M04_PomodoroComponent implements OnDestroy {
  minuts = 0;
  segons = 0;
  isPausa = false;
  etiquetaBoto = '';

  private temporitzador?: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.resetPomodoro();
    this.temporitzador = window.setInterval(() => {
      this.tick();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.temporitzador) {
      clearInterval(this.temporitzador);
    }
  }

  resetPomodoro(): void {
    this.isPausa = true;
    this.minuts = 19;
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
    this.etiquetaBoto = this.isPausa ? 'Continua' : 'Pausa';
    this.cdr.detectChanges();
  }
}