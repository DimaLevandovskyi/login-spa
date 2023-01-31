// import { LoginPageType, ActionType } from '../../../Types/Types';
//
// const ENTER_LOGIN = 'ENTER-LOGIN';
// const ENTER_PASSWORD = 'ENTER-PASSWORD';
//
// const validEmail = new RegExp(
//     /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
// const validPassword = new RegExp(
//     /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g);
//
// type InitialStateType = {
//     enteredLogin: string,
//     enteredPassword: string,
//     errors: {
//         wrongLogin: boolean,
//         wrongPassword: boolean,
//     },
// }
//
// const initialState: InitialStateType = {
//     enteredLogin: '',
//     enteredPassword: '',
//     errors: {
//         wrongLogin: false,
//         wrongPassword: false,
//     },
// };
//
// const Errors = (state = initialState, action: ActionType): InitialStateType => {
//     const copyState: InitialStateType = { ...state };
//     copyState.errors = { ...state.errors };
//
//     switch (action.type) {
//     case ENTER_LOGIN:
//         action.login !== undefined ?
//             copyState.enteredLogin = action.login :
//             null;
//         !validEmail.test(copyState.enteredLogin) ?
//             copyState.errors.wrongLogin = true :
//             copyState.errors.wrongLogin = false;
//         return copyState;
//
//     case ENTER_PASSWORD:
//         action.password !== undefined ?
//             copyState.enteredPassword = action.password :
//             null;
//         !validPassword.test(copyState.enteredPassword) ?
//             copyState.errors.wrongPassword = true :
//             copyState.errors.wrongPassword = false;
//         return copyState;
//
//     default:
//         return copyState;
//     }
// };
//
// export default Errors;
//
// export const enterLoginAction = (login: string) => ({
//     type: ENTER_LOGIN,
//     login,
// });
//
// export const enterPasswordAction = (password: string) => ({
//     type: ENTER_PASSWORD,
//     password,
// });
export {};
