import { Ejemplo } from './models/ejemplo';
import * as MyActions from './my-actions';

export interface State {
    actionParams: string;
    buscadosEjemplos: boolean;
    results: Ejemplo[];
}

const initialState: State = {
    actionParams: '',
    buscadosEjemplos: false,
    results: []
}

export function reducer(state = initialState, action: MyActions.All): State {
    switch (action.type) {
        case MyActions.ACTION_PERFORMED: {
            return {
                ...state,
                buscadosEjemplos: true,
                results: [],
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