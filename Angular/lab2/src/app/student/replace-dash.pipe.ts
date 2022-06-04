import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceDashPipe'
})
export class ReplaceDashPipe implements PipeTransform {

  // transform(value: string): string {
  //   return value? value.replace(/-/g, " ") : value;
  // }
  transform(value: string, strToReplace: string, replacementStr: string): string {

    if(!value || ! strToReplace || ! replacementStr)
    {
      return value;
    }

 return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
  }


}
