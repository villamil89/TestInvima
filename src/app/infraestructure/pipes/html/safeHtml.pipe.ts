import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'SafeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(binImage): any {
        return this.sanitizer.bypassSecurityTrustUrl(binImage);
    }

}
