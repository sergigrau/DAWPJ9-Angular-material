import { Pipe, PipeTransform } from '@angular/core';
/*
  * Pipe que inverteix una cadena de text
  * @author sergi grau,
  * @version 1.0
  * date 15.10.2025
  * format del document UTF-8
  * CHANGELOG
  * 15.10.2025  
*/

@Pipe({
  name: 'inversa',
  standalone: true,

})

export class InversaPipe implements PipeTransform {
  transform(valor: string): string {
      let inversa = valor.split('').reverse().join('');
      return inversa;
  }
}