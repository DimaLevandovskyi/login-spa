export type ActionType = {
    type: string,
    password?: string,
    login?: string,
}

export type LoginPageType = {
    enteredLogin: string,
    enteredPassword: string,
    wrongSubmit: boolean,
    errors: {
        wrongLogin: boolean,
        wrongPassword: boolean,
    },
    defaultLogin: string,
    defaultPassword: string,
    userLogin: boolean,
    userStatus: string | null,
}
