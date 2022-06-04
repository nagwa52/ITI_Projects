import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendString'
})
export class AppendStringPipe implements PipeTransform {

  transform(value: string , track:string="os"): unknown {
    return track +" "+ value;
  }

}
