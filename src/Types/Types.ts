export type ActionType = {
    type: string,
    password?: string,
    login?: string,
}

type ErrorsType = {
    wrongLogin: boolean,
    wrongPassword: boolean,
}

export type LoginPageType = {
    defaultLogin: string,
    defaultPassword: string,
    enteredLogin: string,
    enteredPassword: string,
    wrongSubmit: boolean,
    userLogin: boolean,
    errors: ErrorsType,
    userStatus: string | null,
}

export default LoginPageType;
