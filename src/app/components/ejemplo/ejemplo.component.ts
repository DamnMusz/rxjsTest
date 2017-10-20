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
  @Input() params: Observable<string>;
  @Input() buscadosEjemplos: Observable<boolean>;
  @Input() ejemplos: Observable<Ejemplo[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.params = store.select(fromRoot.selectParams);
    this.buscadosEjemplos = store.select(fromRoot.selectBuscadosEjemplos);
    this.ejemplos = store.select(fromRoot.selectEjemplos);    
  }
  
  cargarEjemplos(params: string): void {
    this.store.dispatch(new MyActions.MyAction('myParams'));
  }

  ngOnInit() { 
    setInterval(function() {
      console.log(this.ejemplos);
    }, 2000);
  }
}
