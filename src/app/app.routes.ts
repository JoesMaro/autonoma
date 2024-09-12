import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { CondifencialComponent } from './pages/condifencial/condifencial.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { GaleriaCompletaComponent } from './pages/galeria-completa/galeria-completa.component';
import { confidencialGuard, galeriaGuard } from './guards/confidencial.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'confidencial', component: CondifencialComponent, canActivate: [confidencialGuard] },
    { path: 'galeria', component: GaleriaComponent, canMatch: [galeriaGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },

    { path: 'galeria', component: GaleriaCompletaComponent },


    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: '**', component: Error404Component}

];
