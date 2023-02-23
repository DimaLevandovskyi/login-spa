import { ActionType } from '../../../Types/types';

const ENTER_LOGIN = 'ENTER-LOGIN';
const ENTER_PASSWORD = 'ENTER-PASSWORD';
const WRONG_SUBMIT = 'WRONG-SUBMIT';

const validEmail = new RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
const validPassword = new RegExp(
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g);

export type InitialStateType = {
    enteredLogin: string,
    enteredPassword: string,
    wrongSubmit: boolean,
    errors: {
        wrongLogin: boolean,
        wrongPassword: boolean,
    },
}

export const initialStateT: InitialStateType = {
    enteredLogin: '',
    enteredPassword: '',
    wrongSubmit: false,
    errors: {
        wrongLogin: false,
        wrongPassword: false,
    },
};

const Errors = (state:InitialStateType, action: ActionType) => {

    switch (action.type) {
    case ENTER_LOGIN:
        action.login !== undefined ?
            state.enteredLogin = action.login :
            null;
        !validEmail.test(state.enteredLogin) ?
            state.errors.wrongLogin = true :
            state.errors.wrongLogin = false;
        return state;

    case ENTER_PASSWORD:
        action.password !== undefined ?
            state.enteredPassword = action.password :
            null;
        !validPassword.test(state.enteredPassword) ?
            state.errors.wrongPassword = true :
            state.errors.wrongPassword = false;
        return state;
    case WRONG_SUBMIT:
        (!state.errors.wrongLogin && !state.errors.wrongPassword) ?
            state.wrongSubmit = true :
            null;
        return state;
    default:
        return state;
    }
};

export default Errors;

export const enterLoginAction = (login: string) => ({
    type: ENTER_LOGIN,
    login,
});

export const enterPasswordAction = (password: string) => ({
    type: ENTER_PASSWORD,
    password,
});
