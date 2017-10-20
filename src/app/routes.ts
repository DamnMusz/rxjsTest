import { Routes } from '@angular/router';
// import { AuthGuard } from './auth/services/auth-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent
//   , children: [
//     { path: 'ejemplo', component: EjemploComponent },
//     { path: '**', component: NotFoundComponent },
//   ] 
},
  { path: '**', component: NotFoundComponent },
];
