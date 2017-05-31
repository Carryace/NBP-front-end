import { HomeComponent } from "./home.page";
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
];

export const routing = RouterModule.forChild(routes);
