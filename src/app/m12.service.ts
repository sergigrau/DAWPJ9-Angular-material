// Servei per a gestionar peticions relacionades amb alumnes i reproducció d'àudio.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/*
* @title M12Service
* @description Servei per a gestionar peticions relacionades amb alumnes i reproducció d'àudio.
* @author sergi.grau@fje.edu
* @date  1-1-2026
* - Actualització a Angular 21   
*/
@Injectable({ providedIn: 'root' })
export class M12Service {
  // URL base del servidor local
  private base = 'http://localhost:8888';

  // Injecció del client HTTP d'Angular
  constructor(private http: HttpClient) {}

  /**
   * Recupera tots els alumnes.
   * Retorna un Observable amb la resposta del servidor (tipus any).
   */
  obtenirAlumnes(): Observable<any> {
    return this.http.get(`${this.base}/consultarTots`);
  }

  /**
   * Crida per afegir un alumne.
   * (Actualment implementat com a GET a /afegirAlumne.)
   */
  afegirAlumne(): Observable<any> {
    return this.http.get(`${this.base}/afegirAlumne`);
  }

  /**
   * Sol·licita el fitxer d'àudio com a Blob.
   * Es fa el cast necessari perquè HttpClient requereix un tipus per responseType.
   */
  obtenirAudio(): Observable<Blob> {
    return this.http.get(`${this.base}/audio1.mp3`, { responseType: 'blob' as 'json' }) as Observable<Blob>;
  }

  /**
   * Reprodueix un Blob d'àudio creant una URL temporal i utilitzant l'objecte Audio.
   */
  reproduirAudioBlob(blob: Blob) {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
  }
}
