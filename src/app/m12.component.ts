import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M12Service } from './m12.service';
/*
* @title M12Component
* @description Component per a gestionar la visualització i interacció amb alumnes i àudio.
* @author sergi.grau@fje.edu
* @date 7.11.24
 * 1-1-2026
* - Actualització a Angular 21   
*/
@Component({
  selector: 'm12-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m12.component.html',
  styleUrls: []
})
export class M12Component {
  alumnes: Array<any> = [];
  loading = false;

  constructor(private svc: M12Service, private cd: ChangeDetectorRef) {}

  consultar() {
    this.loading = true;
    this.svc.getAlumnes().subscribe({
      next: (res) => {
        console.log('getAlumnes response:', res);
        // Accept different response shapes (array, {alumnes: [...]}, {data: [...]})
        if (Array.isArray(res)) {
          this.alumnes = res;
        } else if (res && Array.isArray((res as any).alumnes)) {
          this.alumnes = (res as any).alumnes;
        } else if (res && Array.isArray((res as any).data)) {
          this.alumnes = (res as any).data;
        } else {
          this.alumnes = [];
        }
        this.loading = false;
        this.cd.detectChanges();
      },
      error: (err) => { console.error(err); this.loading = false; this.cd.detectChanges(); }
    });
  }

  afegir() {
    this.loading = true;
    this.svc.addAlumne().subscribe({
      next: (res) => {
        console.log('addAlumne response:', res);
        if (Array.isArray(res)) {
          this.alumnes = res;
        } else if (res && Array.isArray((res as any).alumnes)) {
          this.alumnes = (res as any).alumnes;
        } else if (res && Array.isArray((res as any).data)) {
          this.alumnes = (res as any).data;
        } else {
          this.alumnes = [];
        }
        this.loading = false;
        this.cd.detectChanges();
      },
      error: (err) => { console.error(err); this.loading = false; this.cd.detectChanges(); }
    });
  }

  reproduirAudio() {
    this.svc.getAudio().subscribe({
      next: (blob) => { this.svc.playAudioBlob(blob); },
      error: (err) => console.error(err)
    });
  }
}
