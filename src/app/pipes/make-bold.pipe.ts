import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'makeBold'
})
export class MakeBoldPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  //transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: any, args: any): any {

    if (!value)
      return value;


    if (!args) {
      return value;
    }

    console.info('value:', value + ' args:', args);

    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    const match = value.match(re);

    // If there's no match, just return the original value.
    if (!match) {
      return value;
    }

    const replacedValue = value.replace(re, "<b>$&</b>")
    //return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
    return '---' + value;
  }

}
