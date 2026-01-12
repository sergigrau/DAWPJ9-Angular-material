import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
    * Component que mostra un logo i una llista de persones carregades des d'un fitxer JSON
    */

@Component({
  selector: 'aplicacio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding:1rem">
      <img src="assets/logo_clot.png" alt="logo_clot" style="max-width:240px; display:block; margin-bottom:1rem">
      <h2>Persones</h2>

      <table *ngIf="persones.length > 0" aria-label="Llista de persones">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Cognom</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of persones">
            <td>{{ p.nom }}</td>
            <td>{{ p.cognom }}</td>
          </tr>
        </tbody>
      </table>

      <p *ngIf="persones.length === 0">No hi ha dades a mostrar.</p>
    </div>
  `,
  styles: [`
    table { border-collapse: collapse; width: 100%; max-width: 600px; margin-bottom: 1rem; }
    th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
    th { background: #f5f5f5; }
  `]
})
export class M10_LogoComponent implements OnInit {
  persones: Array<{ nom: string; cognom: string }> = [];
  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    fetch('assets/dades.json')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((dades: any) => {
        console.log(dades.persones);
        this.persones = Array.isArray(dades.persones) ? dades.persones : [];
        this.cdr.detectChanges();
      })
      .catch((err) => {
        console.error('Failed to load assets/dades.json:', err);
        this.persones = [];
      });
  }
}
