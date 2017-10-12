import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import { Ejemplo } from './models/ejemplo/Ejemplo';
import * as MyActions from './actions/ejemplo/my-actions';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  params: Observable<string>;
  ejemplos: Observable<Ejemplo[]>;
  buscadosEjemplos: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.params = store.select(fromRoot.selectParams);
    this.ejemplos = store.select(fromRoot.selectEjemplos);
    this.buscadosEjemplos = store.select(fromRoot.selectBuscadosEjemplos);
  }

  ngOnInit(): void { }

  cargarEjemplos(params: string): void {
    this.store.dispatch(new MyActions.MyAction('myParams'));
  }
}
