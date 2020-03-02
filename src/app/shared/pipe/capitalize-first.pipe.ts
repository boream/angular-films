import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // no viene arg
    if (args.length === 0) {
      if (value && value.length > 0) {
        return value.charAt(0).toUpperCase() + value.substr(1, value.length);
      }
      return value;
    }
    // viene arg
    if (args[0] >= value.length || args[0] < 0) {
      return value;
    }
    const indexToTransform = args[0];
    // const logitudrestante = value.length - indexToTransform;
    return value.substr(0, indexToTransform) + 
      value.charAt(indexToTransform).toUpperCase() +
      value.slice(indexToTransform + 1, value.length);
  }

}
