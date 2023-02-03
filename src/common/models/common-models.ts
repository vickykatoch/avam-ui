import { Reducer } from 'react';

export interface ReducerAction<ActionType=any,State=any> {
    type: ActionType;
    payload?: State;
}
