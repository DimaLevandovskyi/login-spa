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


let loginReducer = (state = initialState, action):any =>{
    switch (action.type) {
        case ENTER_LOGIN:

            state.loginPage.enteredLogin = action.login
            return state;

        case ENTER_PASSWORD:

            state.loginPage.enteredPassword = action.password
            return state;
    
        case WRONG_SUBMIT:

            if(state.loginPage.errors.wrongLogin === false && state.loginPage.errors.wrongPassword === false){
                state.loginPage.wrongSubmit = true
            }
            return state;

        case USER_LOGIN:

            let validEmail:any = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
            if(validEmail.test(state.loginPage.enteredLogin) === false) {
                state.loginPage.errors.wrongLogin = true
            } else {
                state.loginPage.errors.wrongLogin = false
            }

            let validPassword:any = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
            if(validPassword.test(state.loginPage.enteredPassword) === false) {
                state.loginPage.errors.wrongPassword = true
            } else {
                state.loginPage.errors.wrongPassword = false
            }

            return state;

        case USER_STATUS:

            state.loginPage.userStatus = localStorage.getItem("User login")
            return state 
        default:
            return state;
    }
}

export default loginReducer

export let enterLoginAction = (login) => ({type: ENTER_LOGIN, login:login})

export let enterPasswordAction = (password) => ({type: ENTER_PASSWORD, password:password})

export let wrongSubmitAction = () => ({type: WRONG_SUBMIT})

export let userLoginAction = () => ({type: USER_LOGIN})

export let userStatusAction = () => ({type: USER_STATUS})
