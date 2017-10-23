import { SimpleChange, Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import { Ejemplo } from '../../models/ejemplo/Ejemplo';
import * as MyActions from '../../actions/ejemplo/my-actions';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  public params: Observable<string>;
  public buscadosEjemplos: Observable<boolean>;
  public ejemplos: Observable<Ejemplo[]>;

  constructor(private store: Store<fromRoot.State>) {        
  }
  
  cargarEjemplos(params: string): void {
    this.store.dispatch(new MyActions.MyAction('myParams'));
  }

  ngOnInit() { 
    this.params = this.store.select(fromRoot.selectParams);
    this.buscadosEjemplos = this.store.select(fromRoot.selectBuscadosEjemplos);
    this.ejemplos = this.store.select(fromRoot.selectEjemplos);
    setInterval(function() {
      console.log(this.ejemplos);
    }, 2000);
  }
}
