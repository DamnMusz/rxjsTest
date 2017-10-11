import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { EjemploService } from './ejemplo.service';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    EjemploService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
