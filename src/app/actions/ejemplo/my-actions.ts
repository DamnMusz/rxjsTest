import { Action } from '@ngrx/store';
import { Ejemplo } from '../../models/ejemplo/ejemplo';

export const ACTION_RESET = '[Ejemplos] Reset';
export const ACTION_PERFORMED = '[Ejemplos] Pressed';
export const ACTION_SUCCESS = '[Ejemplos] Pressed Success';

export class MyAction implements Action {
    readonly type = ACTION_PERFORMED;
    constructor(public payload: string) { }
}

export class MyActionSuccess implements Action {
    readonly type = ACTION_SUCCESS;
    constructor(public payload: Ejemplo[]) { }
}

export class MyActionReset implements Action {
    readonly type = ACTION_RESET;
    constructor() { }
}

export type All = MyAction | MyActionSuccess | MyActionReset;