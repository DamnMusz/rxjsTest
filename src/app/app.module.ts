import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';

import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { EjemploService } from './ejemplo.service';
import { EjemploEffects } from './my-effects';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( reducers ),
    EffectsModule.forRoot( [EjemploEffects] ),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    EjemploService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
