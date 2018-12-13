import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any): string {
    if (typeof value !== 'string') {
      throw new Error('The value has to be a string!');
    }

    return value + '123';
  }

}
