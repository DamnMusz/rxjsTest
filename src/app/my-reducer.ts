import { Ejemplo } from './models/ejemplo';
import * as MyActions from './actions';

export interface State {
    actionParams: string;
    results: Ejemplo[];
}

const initialState: State = {
    actionParams: '',
    results: []
}

export function reducer(state = initialState, action: MyActions.All): State {
    switch (action.type) {
        case MyActions.ACTION_PERFORMED: {
            return {
                ...state,
                actionParams: action.payload
            }
        }
        case MyActions.ACTION_SUCCESS: {
            return {
                ...state,
                results: action.payload
            }
        }
        default: {
            return state;
        }
    }
}