import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'nivell',
  standalone: true,
})
export class NivellPipe implements PipeTransform {
  transform(valor: number): string {
    const repeticions = Math.max(0, Math.floor(Number(valor) || 0));
    return '⭐'.repeat(repeticions);
  }
}