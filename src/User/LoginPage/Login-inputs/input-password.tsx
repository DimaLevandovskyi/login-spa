import { connect } from 'react-redux'
import InputWithError from '../../GlobalComponent/Inputs/input-with-error.tsx'
import { enterPasswordAction } from '../../../App/Reducers/loginPage/loginReducer.ts'


const mapStateToProps = (state)=> {
    console.log(state);
    
    return {
        placeholder: 'Password',
        className: 'input',
        type: 'text',
        value: state.pages.loginPage.enteredPassword,
        errorPassword: state.pages.loginPage.errors.wrongPassword,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        enterData: (password)=>{
            dispatch(enterPasswordAction(password))
        }
    }
}


const InputLoginWithErrorConnect = connect(mapStateToProps, mapDispatchToProps)(InputWithError);

export default InputLoginWithErrorConnect