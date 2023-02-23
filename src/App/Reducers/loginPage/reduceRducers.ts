import LoginReducer, { initialState } from '../../Reducers/loginPage/loginReducer';
import Errors, { initialStateT } from '../../Reducers/loginPage/errors';
import { ActionType } from '../../../Types/types';
import { compose } from 'redux';

const pageInit = {
    loginPage: { ...initialState, ...initialStateT }
};

export type PageInitType = typeof pageInit;
export type PageType = typeof pageInit.loginPage;

export const loginPageReducers = (state:PageInitType = pageInit, action:ActionType): PageInitType => {
    const arrayReducers = compose(
        (s: PageType) => LoginReducer(s, action),
        (s: PageType) => Errors(s, action),
    );

    return {
        loginPage: arrayReducers({ ...state.loginPage }, action) as PageType
    };
};
