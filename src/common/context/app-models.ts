
export interface Role {
    name: string;
}
export interface User {
    userId: string;
    firstName: string;
    lastName: string;
    roles: Array<Role>
}
export enum LoadStatus {
    Loading,
    Loaded,
    Error
}

export interface AppState {
    loadStatus: LoadStatus;
    user: User;
}

export enum AppContextAction {
    Update = 'Update'
}