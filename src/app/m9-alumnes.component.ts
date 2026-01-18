/*
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 * Component que permet gestionar alumnes
 * @author sergi.grau@fje.edu
 * @date 7.11.24
  * 1-1-2026
 * - Actualització a Angular 21
 * 
 * @version 1.0
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alumne } from './m9-alumne';
import { NivellPipe } from './m9-nivell.pipe';
import { QualificacioPipe } from './m9-qualificacio.pipe';

@Component({
    selector: 'aplicacio',
    standalone: true,
    imports: [CommonModule, FormsModule, NivellPipe, QualificacioPipe],
    template: `
      <div class="container py-3">
        <h1 class="mb-4">Gestió d'alumnes</h1>

        <div class="table-responsive mb-3">
          <table class="table table-striped table-bordered align-middle">
            <thead class="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Nota</th>
                <th scope="col">Estrelles</th>
                <th scope="col">Qualificació</th>
                <th scope="col">FCTs</th>
                <th scope="col">Accions</th>
              </tr>
            </thead>
            <tbody>
              @for (alumne of llistaAlumnes; track alumne; let i = $index) {
              <tr>
                <th scope="row">{{ i + 1 }}</th>
                <td>{{ alumne.nom }}</td>
                <td>
                  <span [ngClass]="{ 'text-danger fw-bold': alumne.nota < 5 }">
                    {{ alumne.nota }}
                  </span>
                </td>
                <td>{{ alumne.nota | nivell }}</td>
                <td>{{ alumne.nota | qualificacio }}</td>
                <td>{{ alumne.fcts ? 'Sí' : 'No' }}</td>
                <td>
                  <button class="btn btn-sm btn-outline-primary me-2" type="button" (click)="editar(i)">Editar</button>
                  <button class="btn btn-sm btn-outline-danger" type="button" (click)="esborrarAlumne(i)">Esborrar</button>
                </td>
              </tr>
              }
              <tr [hidden]="llistaAlumnes.length !== 0">
                <td colspan="5" class="text-center">No hi ha alumnes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form (ngSubmit)="enviarForm()" #f="ngForm" class="row g-2 align-items-center">
          <div class="col-sm-4">
            <input name="nom" class="form-control" [(ngModel)]="form.nom" required placeholder="Nom">
          </div>
          <div class="col-sm-2">
            <input name="nota" type="number" class="form-control" [(ngModel)]="form.nota" required placeholder="Nota">
          </div>
          <div class="col-auto form-check">
            <input class="form-check-input" type="checkbox" name="fcts" [(ngModel)]="form.fcts" id="fctsCheck">
            <label class="form-check-label" for="fctsCheck">FCTs</label>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary" type="submit">{{ indexEdicio === null ? 'Afegir' : 'Actualitzar' }}</button>
            <button class="btn btn-secondary ms-2" type="button" (click)="cancelar()" [hidden]="indexEdicio === null">Cancel·lar</button>
            <button class="btn btn-danger ms-2" type="button" (click)="esborrarTot()" [disabled]="llistaAlumnes.length === 0">Esborrar tots</button>
          </div>
        </form>
      </div>
    `,
    styles: [
        'h1 { color: #900 }'
        // usant Bootstrap per la resta d'estils
    ]
})
export class M09_Alumnes_IteradorComponent {
    llistaAlumnes: Alumne[] 

    // formulari local i estat d'edició
    form = { nom: '', nota: 0, fcts: false };
    indexEdicio: number | null = null;

    constructor() {
        let a1:Alumne = new Alumne('sergi', 8, true);
        let a2:Alumne = new Alumne('carles', 7, false);
        let a3:Alumne = new Alumne('anna', 7, true);
        this.llistaAlumnes = [a1,a2, a3];
    }

    // afegir un alumne a la llista
    afegirAlumne(nom: string, nota:string, fcts:boolean): void {
        console.log(fcts);
        this.llistaAlumnes.push(new Alumne(nom,parseInt(nota), fcts));
    }

    // submit del formulari: afegir o actualitzar segons indexEdicio
    enviarForm(): void {
        if (!this.form.nom) return;
        if (this.indexEdicio === null) {
            this.afegirAlumne(this.form.nom, String(this.form.nota), this.form.fcts);
        } else {
            this.llistaAlumnes[this.indexEdicio] = new Alumne(this.form.nom, Number(this.form.nota), this.form.fcts);
        }
        this.resetForm();
    }

    editar(index: number): void {
        const a = this.llistaAlumnes[index];
        this.form = { nom: a.nom, nota: a.nota, fcts: a.fcts };
        this.indexEdicio = index;
    }

    cancelar(): void {
        this.resetForm();
    }

    resetForm(): void {
        this.form = { nom: '', nota: 0, fcts: false };
        this.indexEdicio = null;
    }

    // esborra per index
    esborrarAlumne(index: number) {
        this.llistaAlumnes.splice(index, 1);
        if (this.indexEdicio === index) {
            this.resetForm();
        } else if (this.indexEdicio !== null && index < this.indexEdicio) {
            // ajustar l'índex d'edició si cal
            this.indexEdicio--;
        }
    }

    esborrarTot() {
        this.llistaAlumnes = [];
        this.resetForm();
    }

    // nova propietat per a l'iteració amb @for
    get files() {
        return this.llistaAlumnes.map((a, i) => ({ a, i }));
    }
}

