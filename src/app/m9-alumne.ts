import { Persona } from './m9-persona';
export class Alumne extends Persona {
    public nota: number;
    public fcts: boolean;
    constructor(nom: string, nota: number, fcts:boolean) {
        super(nom);
        this.nota = nota;
        this.fcts= fcts;
    }
}
