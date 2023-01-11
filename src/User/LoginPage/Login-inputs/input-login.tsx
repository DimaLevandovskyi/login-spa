import { connect } from 'react-redux'
import InputWithError from '../../GlobalComponent/Inputs/input-with-error.tsx'
import { enterLoginAction } from '../../../App/Reducers/loginPage/loginReducer.ts'


const mapStateToProps = (state)=> {
    return {
        placeholder: 'Email',
        className: 'input',
        type: 'email',
        value: state.pages.loginPage.enteredLogin,
        errorEmail: state.pages.loginPage.errors.wrongLogin,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        enterData: (login)=>{
            dispatch(enterLoginAction(login))
        }
    }
}

const InputLoginWithErrorConnect = connect(mapStateToProps, mapDispatchToProps)(InputWithError);

export default InputLoginWithErrorConnect