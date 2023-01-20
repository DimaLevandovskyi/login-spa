const ENTER_LOGIN = 'ENTER-LOGIN';
const ENTER_PASSWORD = 'ENTER-PASSWORD';
const WRONG_SUBMIT = 'WRONG-SUBMIT';
const USER_LOGIN = 'USER-LOGIN';
const USER_STATUS = 'USER-STATUS';

type ErrorsType = {
  wrongLogin: boolean,
  wrongPassword: boolean,
}

type InitialStateType = {
  loginPage: {
    defaultLogin: string,
    defaultPassword: string,
    enteredLogin: string,
    enteredPassword: string,
    wrongSubmit: boolean,
    userLogin: boolean,
    errors: ErrorsType,
    userStatus: any
  }
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

const LoginReducer = (state = initialState, action: any): InitialStateType => {
    const copyState: InitialStateType = { ...state };
    copyState.loginPage = { ...state.loginPage };
    copyState.loginPage.errors = { ...state.loginPage.errors };

    switch (action.type) {
    case ENTER_LOGIN:

        copyState.loginPage.enteredLogin = action.login;
        return copyState;

    case ENTER_PASSWORD:

        copyState.loginPage.enteredPassword = action.password;
        return copyState;

    case WRONG_SUBMIT:

        if (copyState.loginPage.errors.wrongLogin === false &&
          copyState.loginPage.errors.wrongPassword === false) {
            copyState.loginPage.wrongSubmit = true;
        }
        return copyState;

    case USER_LOGIN:

        const validEmail = new RegExp(
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
        if (validEmail.test(copyState.loginPage.enteredLogin) === false) {
            copyState.loginPage.errors.wrongLogin = true;
        } else {
            copyState.loginPage.errors.wrongLogin = false;
        }

        const validPassword = new RegExp(
            /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g);
        if (validPassword.test(copyState.loginPage.enteredPassword) === false) {
            copyState.loginPage.errors.wrongPassword = true;
        } else {
            copyState.loginPage.errors.wrongPassword = false;
        }

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

export const wrongSubmitAction = () => ({ type: WRONG_SUBMIT });

export const userLoginAction = () => ({ type: USER_LOGIN });

export const userStatusAction = () => ({ type: USER_STATUS });
