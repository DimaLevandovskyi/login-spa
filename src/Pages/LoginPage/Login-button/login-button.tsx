import { connect } from 'react-redux';
import Button from '../../GlobalComponent/Buttons/buttonPrimary';

const superButton = ({ enterData, type, text, className }) => {
    const onClick = () => {
        e.preventDefault();
        dispatch(userLoginAction());

        if (loginPage.defaultLogin === loginPage.enteredLogin && loginPage.defaultPassword === loginPage.enteredPassword) {
            localStorage.setItem('User login', 'true');
            e.target.submit();
        } else {
            wrongSubmitAction();
        }
    };

    return <Button onClick={onClick} text={text} className={className} type={type} enterData={enterData} />;
};

const mapStateToProps = (state) => ({
    className: 'login__button button',
    type: 'submit',
    text: 'Login',

});

const mapDispatchToProps = (dispatch) => ({
    wrongSubmitAction: () => {
        dispatch({ type: WRONG_SUBMIT });
    }
});

const LoginButtonConnect = connect(mapStateToProps, mapDispatchToProps)(superButton);

export default LoginButtonConnect;
