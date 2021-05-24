import React, {useState}from 'react'
import {useHistory} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {connect} from "react-redux"
import "./Login.css"
import {login} from "../redux/reducer"


 
function Login(props) {
    const history = useHistory()
    const [email , setEmail] =useState( "")
    const [password , setPassword] = useState( "")
    let {isLoginSuccess ,isLoginPending ,loginError} =  props

    function handleSubmit (e) {
        e.preventDefault();
        props.login(email,password)
          
    }

    return (
        <div  className="login">
        <form  className="login_name" onSubmit={handleSubmit}>
        <h1> Login</h1>
        <input 
            type="text" 
            placeholder="Name" 
            name="email"
            value={email}
            onChange ={(e) => {setEmail(e.target.value)}}
            /> 
            <br/>
        <input 
            type="password" 
            placeholder="Password" 
            value={password}
            name="password"
            onChange={(e) => {setPassword(e.target.value)}}
            /> <br />
        <button className="btn btn-primary">Login</button>
        {isLoginSuccess && <div>Welcome { history.push("/getlearners")}</div>}
        {isLoginPending && <div> Please Wait !!</div>}
        {loginError && <div>Error</div>}
        
        </form>
            
        </div>
    )
    
}
const mapStateToProps = (state) => {
    return {
        isLoginPending : state.isLoginPending,
        isLoginSuccess : state.isLoginSuccess,
        loginError : state.loginError
    }
}
const mapDispatchToPorps = (dispatch) => {
    return {
        login : (email, password) => dispatch (login(email,password))
    }
}

export default connect(mapStateToProps , mapDispatchToPorps)(Login) 
