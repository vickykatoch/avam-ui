import { Reducer } from 'react';
import { ReducerAction } from '../models';
import { AppState, AppContextAction } from './app-models';

export function appContextReducer(state: AppState, action: ReducerAction<AppContextAction, Partial<AppState>>): AppState {
    console.log(action)
	return state;
}

// const reducer : Reducer<AppState,any>˝
