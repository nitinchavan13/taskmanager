import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWord',
  standalone: true,
})
export class LimitWordPipe implements PipeTransform {
  transform(value: string, ...args: number[]): any {
    let str = value;
    if (value.length > args[0]) {
      str = value.slice(0, args[0]) + '...';
    }
    return str;
  }
}
