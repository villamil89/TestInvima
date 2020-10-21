import { RouterModule, Routes } from '@angular/router';
import { AppAccessdeniedComponent } from './pages/accessDenied/app.accessdenied.component';
import { UIComponent } from './ui.component';
import { UI_ROUTES_PATH } from './ui.routing.name';


const UI_ROUTES: Routes = [
    { path: UI_ROUTES_PATH.accessDenied, component: AppAccessdeniedComponent },
    { path: '', redirectTo: UI_ROUTES_PATH.home, pathMatch: 'full' },
    {
        path: '',
        component: UIComponent,
        data: {
            breadcrumb: UI_ROUTES_PATH.home
        }
    }
];

export const UIRoutes = RouterModule.forChild(UI_ROUTES);
