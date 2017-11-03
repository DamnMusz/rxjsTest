import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as MyActions from '../../../actions/ejemplo/my-actions';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { 
    this.store.dispatch(new MyActions.MyActionReset());
  }

  ngOnInit() {
  }

}
