import { connect } from 'react-redux';
import InputWithError from '../../GlobalComponent/Inputs/input-with-error';
import { enterLoginAction } from '../../../App/Reducers/loginPage/loginReducer';


const mapStateToProps = (state) => ({
    placeholder: 'Email',
    className: 'input',
    type: 'email',
    value: state.pages.loginPage.enteredLogin,
    errorEmail: state.pages.loginPage.errors.wrongLogin,
});

const mapDispatchToProps = (dispatch) => ({
    enterData: (login) => {
        dispatch(enterLoginAction(login));
    }
});

const InputLoginWithErrorConnect = connect(mapStateToProps, mapDispatchToProps)(InputWithError);

export default InputLoginWithErrorConnect;