import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppNotfoundComponent } from './ui/components/pages/notFound/app.notfound.component';
import { UIComponent } from './ui/components/ui.component';

export const routes: Routes = [
    {
        path: '',
        component: UIComponent,
        loadChildren: './ui/components/ui.module#UIModule'
    },
    { path: '**', component: AppNotfoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
