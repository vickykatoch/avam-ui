import { ReactNode, FC } from 'react';
import { ThemeContext } from './theme-context';

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};
