let ENTER_LOGIN = 'ENTER-LOGIN'
let ENTER_PASSWORD = 'ENTER-PASSWORD'
let WRONG_SUBMIT = 'WRONG-SUBMIT'
let USER_LOGIN = 'USER-LOGIN'
let USER_STATUS = 'USER-STATUS'

type errorsType = {
    wrongLogin: boolean,
    wrongPassword: boolean,
}

type initialStateType = {
    loginPage: {
        defaultLogin: string,
        defaultPassword: string,
        enteredLogin: string,
        enteredPassword: string,
        wrongSubmit: boolean,
        userLogin: boolean,
        errors: errorsType,
        userStatus: any
    }
}

let initialState: initialStateType = {
    loginPage: {
        defaultLogin: 'login@login.io',
        defaultPassword: 'baster1!K',
        enteredLogin: '',
        enteredPassword: '',
        wrongSubmit: false,
        userLogin: false,
        errors: {
            wrongLogin: false,
            wrongPassword: false
        },
        userStatus: localStorage.getItem("User login")
    }
}


let LoginReducer = (state = initialState, action):any =>{
    let copyState:any = {...state}
    copyState.loginPage = {...state.loginPage}
    copyState.loginPage.errors = {...state.loginPage.errors}

    switch (action.type) {
        case ENTER_LOGIN:

            copyState.loginPage.enteredLogin = action.login
            return copyState;

        case ENTER_PASSWORD:

            copyState.loginPage.enteredPassword = action.password
            return copyState;
    
        case WRONG_SUBMIT:

            if(copyState.loginPage.errors.wrongLogin === false && copyState.loginPage.errors.wrongPassword === false){
                copyState.loginPage.wrongSubmit = true
            }
            return copyState;

        case USER_LOGIN:

            let validEmail:any = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
            if(validEmail.test(copyState.loginPage.enteredLogin) === false) {
                copyState.loginPage.errors.wrongLogin = true
            } else {
                copyState.loginPage.errors.wrongLogin = false
            }

            let validPassword:any = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
            if(validPassword.test(copyState.loginPage.enteredPassword) === false) {
                copyState.loginPage.errors.wrongPassword = true
            } else {
                copyState.loginPage.errors.wrongPassword = false
            }

            return copyState;

        case USER_STATUS:

            copyState.loginPage.userStatus = localStorage.getItem("User login")
            return copyState 
        default:
            return copyState;
    }
}

export default LoginReducer

export let enterLoginAction = (login) => ({type: ENTER_LOGIN, login:login})

export let enterPasswordAction = (password) => ({type: ENTER_PASSWORD, password:password})

export let wrongSubmitAction = () => ({type: WRONG_SUBMIT})

export let userLoginAction = () => ({type: USER_LOGIN})

export let userStatusAction = () => ({type: USER_STATUS})
