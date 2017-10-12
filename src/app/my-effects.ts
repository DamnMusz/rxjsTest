import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { EjemploService } from './ejemplo.service';
import * as MyActions from './my-actions';

@Injectable()
export class EjemploEffects {
    @Effect()
    search$: Observable<Action> = this.actions$.ofType(MyActions.ACTION_PERFORMED)
    .map((action: MyActions.MyAction) => action.payload)
    .switchMap((actionParams) => this.ejemploService.getEjemploSlowly(actionParams))
    .map(results => new MyActions.MyActionSuccess(results));

    constructor(
        private actions$: Actions,
        private ejemploService: EjemploService
    ) { }
}