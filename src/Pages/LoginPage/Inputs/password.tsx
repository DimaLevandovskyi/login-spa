import { connect } from 'react-redux';
import InputWithError from '../../../GlobalComponent/Inputs/input-with-error';
import { enterPasswordAction } from '../../../App/Reducers/loginPage/loginReducer';
import { AppDispatch, RootState } from '../../../App/Redux-store/redux-store';

type MapStateToPropsType = {
    placeholder:string,
    className:string,
    type:string,
    value: string,
    errorPassword:boolean,
    errorEmail: boolean
}
const mapStateToProps = (state:RootState):MapStateToPropsType => ({
    placeholder: 'Password',
    className: 'input',
    type: 'text',
    value: state.pages.loginPage.enteredPassword,
    errorPassword: state.pages.loginPage.errors.wrongPassword,
    errorEmail: false
});

const mapDispatchToProps = (dispatch:AppDispatch) => ({
    enterData: (password:string) => {
        dispatch(enterPasswordAction(password));
    }
});


const InputLoginWithErrorConnect = connect(mapStateToProps, mapDispatchToProps)(InputWithError);

export default InputLoginWithErrorConnect;
