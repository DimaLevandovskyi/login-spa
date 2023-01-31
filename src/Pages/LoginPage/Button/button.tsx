import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../../App/Redux-store/redux-store';
import superButton from './super-button';

const WRONG_SUBMIT = 'WRONG-SUBMIT';

const mapStateToProps = (state:RootState) => ({
    text: 'Login',
    className: 'login__button button',
    loginPage: state.pages.loginPage
});

const mapDispatchToProps = (dispatch:AppDispatch) => ({
    wrongSubmitAction: () => {
        dispatch({ type: WRONG_SUBMIT });
    }
});

const LoginButtonConnect = connect(mapStateToProps, mapDispatchToProps)(superButton);

export default LoginButtonConnect;
