// Modules
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
// Data
import { reducers } from './reducers';
import { routes } from './routes';
import { environment } from '../environments/environment';
// Components
import { AppComponent } from './app.component';
import { MySidebarComponent } from './components/sidebar/my-sidebar/my-sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContentModule } from './modules/content/content.module';
import { HomeModule } from './modules/home/home.module';
// Services
import { EjemploService } from './services/ejemplo/ejemplo.service';
// Effects
import { EjemploEffects } from './effects/ejemplo/my-effects';

@NgModule({
  declarations: [
    AppComponent,
    MySidebarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot( [EjemploEffects] ),
    SidebarModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ContentModule,
    HomeModule
  ],
  providers: [
    EjemploService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
