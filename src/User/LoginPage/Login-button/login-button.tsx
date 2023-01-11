import { connect } from 'react-redux'
import Button from '../../GlobalComponent/Buttons/buttonPrimary.tsx'


const mapStateToProps = (state)=> {
    
    return {
        className:'login__button button',
        type:'submit',
        text:'Login',
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        enterData: (password)=>{
            
        }
    }
}

const LoginButtonConnect = connect(mapStateToProps, mapDispatchToProps)(Button);

export default LoginButtonConnect
