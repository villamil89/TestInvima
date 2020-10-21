import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PRIMENG_MODULES } from 'src/app/shared/primeng.elements';

@NgModule({
    declarations: [
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        ...PRIMENG_MODULES
    ]
})
export class LayoutModule {
}
