import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ejemplo } from '../../../models/ejemplo/ejemplo';
import { Store } from '@ngrx/store';

import * as MyActions from '../../../actions/ejemplo/my-actions';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {
  
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void { }

  cargarEjemplos(params: string): void {
    this.store.dispatch(new MyActions.MyAction('myParams'));
  }
}
