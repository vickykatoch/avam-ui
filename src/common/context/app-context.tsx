import { createContext, Dispatch, useContext } from 'react';
import { AppState } from './app-models';

interface AppContextProps extends AppState {
	dispatch: Dispatch<any>;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useAppContext = () => useContext(AppContext);
