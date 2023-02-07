import { connect } from 'react-redux';
import InputWithError from '../../../GlobalComponent/Inputs/input-with-error';
import { enterLoginAction } from '../../../App/Reducers/loginPage/errors';
import { AppDispatch, RootState } from '../../../App/Redux-store/redux-store';

type MapStateToPropsType = {
    placeholder:string,
    className:string,
    type:string,
    value: string,
    errorEmail: boolean,
    errorPassword:boolean,
}
const mapStateToProps = (state:RootState):MapStateToPropsType => ({
    placeholder: 'Email',
    className: 'input',
    type: 'email',
    value: state.pages.loginPage.enteredLogin,
    errorEmail: state.pages.loginPage.errors.wrongLogin,
    errorPassword: false
});
const mapDispatchToProps = (dispatch:AppDispatch) => ({
    enterData: (login:string) => {
        dispatch(enterLoginAction(login));
    }
});

const InputLoginWithErrorConnect = connect(mapStateToProps, mapDispatchToProps)(InputWithError);

export default InputLoginWithErrorConnect;
