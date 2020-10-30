import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    if(!isNaN(value)) return Number(value).toFixed(2) + " €";  
    else return value + " €";
  }

}
