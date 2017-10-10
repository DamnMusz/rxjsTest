import * as fromAction from './my-reducer';

export interface State {
    action: fromAction.State;
}

export const reducers = {
    action: fromAction.reducer
}