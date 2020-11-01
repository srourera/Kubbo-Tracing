import { Pipe, PipeTransform } from '@angular/core';
import { imagesUrl } from '../configuration/Properties';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: number): string {
    return `${imagesUrl}/${value}`;
  }

}
