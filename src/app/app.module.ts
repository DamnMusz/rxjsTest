import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SidebarModule } from 'ng-sidebar';

import { reducers } from './reducers';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { EjemploService } from './services/ejemplo/ejemplo.service';
import { EjemploEffects } from './effects/ejemplo/my-effects';
import { HomeComponent } from './components/home/home.component';
import { MySidebarComponent } from './components/sidebar/my-sidebar/my-sidebar.component';
import { TestRoutesComponent } from './components/test-routes/test-routes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { environment } from '../environments/environment';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    HomeComponent,
    MySidebarComponent,
    TestRoutesComponent,
    NotFoundComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot( [EjemploEffects] ),
    SidebarModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: false }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    EjemploService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
