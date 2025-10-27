import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
import { Alumne } from './model/alumne';

@Component({
    selector: 'aplicacio',
    imports: [CommonModule, FormsModule], 
    templateUrl: './alumnes.html',
    styles: []
})

export class AlumnesComponent {
    alumnes: Alumne[] = [new Alumne('Joan', 10), new Alumne('Maria', 8)];
    nouNom: string = '';
    nouNota: number = 0;
    editantIndex: number = -1;
    editNom: string = '';
    editNota: number = 0;

    afegirAlumne():void {
        if (this.nouNom && this.nouNota > 0) {
            this.alumnes.push(new Alumne(this.nouNom, this.nouNota));
            this.nouNom = '';
            this.nouNota = 0;
        }
    }

    borrarAlumne(index: number):void {
        this.alumnes.splice(index, 1);
    }
    esborrarTots():void {
        this.alumnes = [];
    }
    editarAlumne(index: number):void {
        this.editantIndex = index;
        this.editNom = this.alumnes[index].nom;
        this.editNota = this.alumnes[index].nota;
    }

    guardarEdicio():void {
        if (this.editantIndex !== -1) {
            this.alumnes[this.editantIndex] = new Alumne(this.editNom, this.editNota);
            this.editantIndex = -1;
            this.editNom = '';
            this.editNota = 0;
        }
    }

    cancelarEdicio() {
        this.editantIndex = -1;
        this.editNom = '';
        this.editNota = 0;
    }

}



