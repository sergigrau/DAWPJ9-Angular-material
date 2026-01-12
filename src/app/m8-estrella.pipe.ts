import {Pipe, PipeTransform} from '@angular/core';
/*
  * Pipe que afegeix una icona d'estrella abans i després del text
  * @author sergi grau,
  * @version 1.0
  * date 15.10.2025
  * format del document UTF-8
  * CHANGELOG
  * 15.10.2025  
*/
  
@Pipe({
  name: 'estrella',
  standalone: true,

})
export class EstrellaPipe implements PipeTransform {
  transform(valor: string): string {
    return `🂡 ${valor} 🂡`;
  }
}