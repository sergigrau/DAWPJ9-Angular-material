
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
    * Component que te la lògica del component compte enrera,
    * mostra con es generen esdeveniments i es controlen propietats
    * @author sergi grau,
    * @version 1.0
    * date 15.10.2016
    * format del document UTF-8
    *
    * CHANGELOG
    * 15.10.2016
    * - Component que te la lògica del component compte enrera,
    * 15.10.2017
    * - Actualització a Angular 5
    * 1.12.2020
    * - Actualització a Angular 11
    *
    * 1-1-2026
    * - Actualització a Angular 21
    * NOTES
    * ORIGEN
    * Desenvolupament Aplicacions Web. Jesuïtes El Clot
*/

@Component({
    selector: 'rellotge',
    template: `
    <div>
      <h1> queden {{segons}} </h1>
    </div>
    `,
    styles: ['h1 { color: #900 }'],
    standalone: true,
    imports: [CommonModule],
    encapsulation: ViewEncapsulation.Emulated
})
export class M05_CompteEnrera_Component {
    private intervalId;
    @Input() segons: number = 60; //si no es defineix la prop d'entrada val 60
    @Output() completat: EventEmitter<any> = new EventEmitter();
    @Output() progres: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
        this.intervalId = setInterval(() => this.tick(), 1000);        
    }
    private tick(): void {
        if (--this.segons < 1) {
            clearInterval(this.intervalId);
            this.completat.emit(null);
        }
        this.progres.emit(this.segons);
    }
}

@Component({
    selector: 'aplicacio',
    templateUrl: './m05-bindings-pomodoro.html',
    standalone: true,
    imports: [CommonModule, M05_CompteEnrera_Component],
})

export class M05_BindingsComponent {
    onCompteEnreraFinalitza(): void {
        alert('Final!');
    }
}


