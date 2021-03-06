import * as fromAction from './reducers/ejemplo/my-reducer';
import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
  } from '@ngrx/store';

import { environment } from '../environments/environment';

export interface State {
    action: fromAction.State;
}

export const reducers = {
    action: fromAction.reducer
}

export function selectEjemplos(state: State) {
    return state.action.results;
}

export function selectParams(state: State) {
    return state.action.actionParams;
}

export function selectBuscadosEjemplos(state: State) {
    return state.action.buscadosEjemplos;
}