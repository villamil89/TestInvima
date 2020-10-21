import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/infraestructure/pipes/pipe.module';
import { PRIMENG_MODULES } from 'src/app/shared/primeng.elements';
import { LayoutModule } from './layouts/layout.module';
import { AppAccessdeniedComponent } from './pages/accessDenied/app.accessdenied.component';
import { AppNotfoundComponent } from './pages/notFound/app.notfound.component';
import { UIComponent } from './ui.component';
import { UIRoutes } from './ui.routes';

@NgModule({
    declarations: [
        UIComponent,
        AppNotfoundComponent,
        AppAccessdeniedComponent
    ],
    exports: [
        UIComponent,
        AppNotfoundComponent,
        AppAccessdeniedComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        LayoutModule,
        ...PRIMENG_MODULES,
        UIRoutes,
        PipeModule.forRoot()
    ]
})
export class UIModule {
}