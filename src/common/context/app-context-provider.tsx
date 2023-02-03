import { FC, ReactNode, useReducer } from 'react';
import { AppContext } from './app-context';
import { appContextReducer } from './app-context-reducer';
import { DEFAULT_APP_STATE } from './helpers';

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [context, dispatch] = useReducer(appContextReducer, DEFAULT_APP_STATE);

	return (
		<AppContext.Provider
			value={{
				...context,
				dispatch,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
