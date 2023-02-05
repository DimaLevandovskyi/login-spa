import LoginReducer, { initialState } from '../../Reducers/loginPage/loginReducer';
import Errors, { initialStateT } from '../../Reducers/loginPage/errors';
import { ActionType } from '../../../Types/Types';

const pageInit = {
    loginPage: { ...initialState, ...initialStateT }
};

const arrayReducers = [LoginReducer, Errors];

export type PageInitType = typeof pageInit;
export const loginPageReducers = (state:PageInitType = pageInit, action:ActionType) => {
    return {
        ...state,
        loginPage: arrayReducers.reduce(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (previousValue, currentValue) => currentValue(previousValue, action),
            { ...state.loginPage }
        )
    };
};
