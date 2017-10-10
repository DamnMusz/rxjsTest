import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable, Subscriber } from 'rxjs'
import { EjemploComponent } from './ejemplo/ejemplo.component'
import { Ejemplo } from './models/Ejemplo'
import * as MyActions from './actions'
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
  buttonPressed: boolean = false;

  constructor(private store: Store<fromRoot.State>) {
    this.params = store.select(state => state.action.actionParams);
    this.ejemplos = store.select(state => state.action.results);
  }

  ngOnInit(): void { }

  getEjemploSlowly(): Observable<Ejemplo[]> {
    return new Observable<Ejemplo[]>((observer: Subscriber<Ejemplo[]>) => {
      let ejemplos: Ejemplo[] = [];
      ejemplos.push(new Ejemplo('Un ejemplo'));
      ejemplos.push(new Ejemplo('Otro ejemplo'));
      //3 second interval
      setInterval(() => observer.next(ejemplos), 3000);
    });
  }

  cargarEjemplos(params: string): void {
    this.store.dispatch(new MyActions.MyAction('myParams'));
    
    this.buttonPressed = true;
    this.getEjemploSlowly().subscribe(results => this.store.dispatch(new MyActions.MyActionSuccess(results)));
  }
}
