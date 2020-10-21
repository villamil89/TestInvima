import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './html/safeHtml.pipe';

@NgModule({
    imports: [],
    declarations: [
        SafeHtmlPipe
    ],
    exports: [
        SafeHtmlPipe
    ],
})
export class PipeModule {
    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: [],
        };
    }
} 