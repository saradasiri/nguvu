import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"
import "./Login.css"
import Form from "react-bootstrap/Form";
import {useFormik} from 'formik';


function Login(){

    const formik = useFormik({
        initialValues : {
            email:''
        },onSubmit: values=> {alert(JSON.stringify(values ,null ,2));
        },
    })

    return <div className="container">
    <form onSubmit={formik.handleChange}>
            <h5><b>Sign in</b></h5>
            
               <div class="form-floating mb-4">
                    <label for="floatingInput">Email address</label>
                    <input id="email" name="email" type="email"  htmlfor="email" id="floatingInputInvalid"  className="form-control is-invalid"placeholder="name@example.com" onChange={formik.handleChange} value={formik.values.email}/>
                </div>
                <div className="form-floating">
                        <label for="floatingPassword">Password</label>
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button className="btn btn-primary">Sign in</button>
             
                </form> 
        </div>
    

}
export default Login;