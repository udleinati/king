import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kongDate', pure: false })
export class KongDatePipe implements PipeTransform {
  transform(content) {
    return (new Date(content * 1000)).toISOString().substr(0, 19).replace(/T/, ' ');
  }
}
