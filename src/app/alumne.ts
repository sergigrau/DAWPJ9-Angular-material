import { Persona } from './persona';
export class Alumne extends Persona {
    public nota: number;
    constructor(nom: string, nota: number) {
        super(nom);
        this.nota = nota;
    }
}
