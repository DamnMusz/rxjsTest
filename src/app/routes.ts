import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ContentComponent } from './modules/content/content/content.component';
// import { AuthGuard } from './auth/services/auth-guard.service';
// import { HomeComponent } from './components/home/home.component';
//import { EjemploComponent } from './components/ejemplo/ejemplo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent
//   , children: [
//     { path: 'ejemplo', component: EjemploComponent },
//     { path: '**', component: NotFoundComponent },
//   ] 
},
  { path: 'content', component: ContentComponent },
  { path: '**', component: NotFoundComponent },
];
