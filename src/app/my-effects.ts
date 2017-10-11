import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/OBservable'
import { Action } from '@ngrx/store'

import * as MyActions from './my-actions';

@Injectable()
export class EjemploEffects {
    constructor(
        private actions$: Actions
    ) {}
}