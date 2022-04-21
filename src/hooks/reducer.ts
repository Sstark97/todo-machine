import { LocalStorageInitialState, LocalStorageAction, LocalStorageReducerObject, Todo} from "../types/types";

export const giveMyInitialState = (initialValue: any): LocalStorageInitialState => ({
    loading: true,
    error: false,
    sincronized: true,
    item: initialValue
});

export enum ActionTypes {
    ERROR = 'ERROR',
    INITIALIZE = 'INITIALIZE',
    SET_ITEM = 'SET_ITEM',
    SINCRONIZE = 'SINCRONIZE',
};

const reducerObject: LocalStorageReducerObject = {
    [ActionTypes.ERROR]: (state: LocalStorageInitialState): LocalStorageInitialState => ({
        ...state,
        error: true
    }),

    [ActionTypes.INITIALIZE]: (state: LocalStorageInitialState, action: LocalStorageAction): LocalStorageInitialState => ({
        ...state,
        item: action.payload?.item as Todo[],
        loading: false,
    }),

    [ActionTypes.SET_ITEM]: (state: LocalStorageInitialState, action: LocalStorageAction): LocalStorageInitialState => ({
        ...state,
        item: action.payload?.item as Todo[]
    }),

    [ActionTypes.SINCRONIZE]: (state: LocalStorageInitialState): LocalStorageInitialState => ({
        ...state,
        loading: true,
        sincronized: false
    })
};

export const reducer = (state: LocalStorageInitialState, action: LocalStorageAction): LocalStorageInitialState => (reducerObject[action.type](state, action) ?? state);