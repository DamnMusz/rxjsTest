import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable, Subscriber } from 'rxjs'
import { EjemploComponent } from './ejemplo/ejemplo.component'
import { Ejemplo } from './models/Ejemplo'
import { EjemploService } from './ejemplo.service';
import * as MyActions from './my-actions'
import * as fromRoot from './reducers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  params: Observable<string>;
  ejemplos: Observable<Ejemplo[]>;
  buscadosEjemplos: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private ejemploService: EjemploService) {
    this.params = store.select(fromRoot.selectParams);
    this.ejemplos = store.select(fromRoot.selectEjemplos);
    this.buscadosEjemplos = store.select(fromRoot.selectBuscadosEjemplos);
  }

  ngOnInit(): void { }

  cargarEjemplos(params: string): void {
    this.store.dispatch(new MyActions.MyAction('myParams'));
    
    this.ejemploService.getEjemploSlowly().subscribe(results => this.store.dispatch(new MyActions.MyActionSuccess(results)));
  }
}
