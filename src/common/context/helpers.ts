import { AppState, LoadStatus } from './app-models';

export const DEFAULT_APP_STATE: AppState = {
	loadStatus: LoadStatus.Loading,
	user: {
		firstName: 'Guest',
		lastName: 'User',
		userId: 'guest',
		roles: [],
	},
};
