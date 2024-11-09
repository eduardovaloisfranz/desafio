import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'putZeroIfAbsent',
  standalone: true
})
export class PutZeroIfAbsentPipe implements PipeTransform {

  transform(value: number): string {
    return value < 9 ? `0${value}` : value.toString();
  }

}
