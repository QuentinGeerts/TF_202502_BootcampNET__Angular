import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono',
  standalone: false
})
export class ChronoPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 0) return value.toString();

    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    const hh = hours.toString().padStart(2, '0');
    const mm = minutes.toString().padStart(2, '0');
    const ss = seconds.toString().padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
  }

}
