import { LoginPageType, ActionType } from '../../../Types/Types';

const ENTER_LOGIN = 'ENTER-LOGIN';
const ENTER_PASSWORD = 'ENTER-PASSWORD';
const WRONG_SUBMIT = 'WRONG-SUBMIT';
const USER_STATUS = 'USER-STATUS';

const validEmail = new RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
const validPassword = new RegExp(
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g);

type InitialStateType = {
  loginPage: LoginPageType
}

const initialState: InitialStateType = {
    loginPage: {
        defaultLogin: 'login@login.io',
        defaultPassword: 'baster1!K',
        enteredLogin: '',
        enteredPassword: '',
        wrongSubmit: false,
        userLogin: false,
        errors: {
            wrongLogin: false,
            wrongPassword: false,
        },
        userStatus: localStorage.getItem('User login'),
    },
};

const LoginReducer = (state = initialState, action: ActionType): InitialStateType => {
    const copyState: InitialStateType = { ...state };
    copyState.loginPage = { ...state.loginPage };
    copyState.loginPage.errors = { ...state.loginPage.errors };

    switch (action.type) {
    case ENTER_LOGIN:
        action.login !== undefined ?
            copyState.loginPage.enteredLogin = action.login :
            null;
        !validEmail.test(copyState.loginPage.enteredLogin) ?
            copyState.loginPage.errors.wrongLogin = true :
            copyState.loginPage.errors.wrongLogin = false;
        return copyState;

    case ENTER_PASSWORD:
        action.password !== undefined ?
            copyState.loginPage.enteredPassword = action.password :
            null;
        !validPassword.test(copyState.loginPage.enteredPassword) ?
            copyState.loginPage.errors.wrongPassword = true :
            copyState.loginPage.errors.wrongPassword = false;
        return copyState;

    case WRONG_SUBMIT:
        (!copyState.loginPage.errors.wrongLogin && !copyState.loginPage.errors.wrongPassword) ?
            copyState.loginPage.wrongSubmit = true :
            null;
        return copyState;

    case USER_STATUS:
        copyState.loginPage.userStatus = localStorage.getItem('User login');
        return copyState;

    default:
        return copyState;
    }
};

export default LoginReducer;

export const enterLoginAction = (login: string) => ({
    type: ENTER_LOGIN,
    login,
});

export const enterPasswordAction = (password: string) => ({
    type: ENTER_PASSWORD,
    password,
});

export const userStatusAction = () => ({
    type: USER_STATUS
});
