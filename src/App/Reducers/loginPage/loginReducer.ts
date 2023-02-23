import { ActionType } from '../../../Types/types';

const USER_STATUS = 'USER-STATUS';

export type InitialStateType = {
    defaultLogin: string,
    defaultPassword: string,
    userLogin: boolean,
    userStatus: string | null,
}

export const initialState: InitialStateType = {
    defaultLogin: 'login@login.io',
    defaultPassword: 'baster1!K',
    userLogin: false,
    userStatus: localStorage.getItem('User login'),
};

const LoginReducer = (state:InitialStateType, action: ActionType) => {
    switch (action.type) {
    case USER_STATUS:
        state.userStatus = localStorage.getItem('User login');
        return state;

    default:
        return state;
    }
};

export default LoginReducer;

export const userStatusAction = () => ({
    type: USER_STATUS
});
