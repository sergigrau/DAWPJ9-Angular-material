import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'qualificacio',
  standalone: true,
})
export class QualificacioPipe implements PipeTransform {
  transform(valor: number): string {
    const notes = ['MD','I','I','I','I','SF','B','N','N','EX', 'EX']; 
    const v = Number(valor);
    return notes[v];
  }
}