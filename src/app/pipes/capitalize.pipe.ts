import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true, // <- делаем pipe автономным
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLocaleUpperCase();
  }
}
