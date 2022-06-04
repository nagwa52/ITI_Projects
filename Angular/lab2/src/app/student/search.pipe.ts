import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args ?: any): any {
if(!value) return null
if(!args) return value
args = args.toLowercase();

return value.filter(function(data:string){
  return JSON.stringify(data).toLowerCase().includes(args);
});
  }

}
