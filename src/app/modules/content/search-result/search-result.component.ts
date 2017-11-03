import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Ejemplo } from '../../../models/ejemplo/ejemplo';
import * as MyActions from '../../../actions/ejemplo/my-actions';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  params: Observable<string>;
  ejemplos: Observable<Ejemplo[]>;
  buscadosEjemplos: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { 
    this.params = store.select(fromRoot.selectParams);
    this.ejemplos = store.select(fromRoot.selectEjemplos);
    this.buscadosEjemplos = store.select(fromRoot.selectBuscadosEjemplos);
  }

  ngOnInit() {}
}
