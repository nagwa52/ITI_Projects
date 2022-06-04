import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powertox'
})
export class PowertoxPipe implements PipeTransform {

  transform(value: number,power: number=1): unknown {
    return Math.pow(value,power);
  }

}
