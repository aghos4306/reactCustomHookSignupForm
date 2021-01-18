import React from 'react';
import useForm from './useForm';
import validate from './ValidateFormInfo';
import './Form.css';

const FormSignUp = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get Started with us today by creating an account</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" className="form-input"  id="username" placeholder="Pls Enter Your Username" 
                    value={values.username}
                    onChange={handleChange}/>
                    <p>{errors.username && errors.username}</p>
                </div>
                
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-input"  id="email" placeholder="Pls Enter Your Email" 
                    value={values.email}
                    onChange={handleChange}/>
                    <p>{errors.email && errors.email}</p>
                </div>
                
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-input"  id="password" placeholder="Pls Enter Your Password" 
                    value={values.password}
                    onChange={handleChange}/>
                    <p>{errors.password && errors.password}</p>
                </div>
               
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Confirm Password</label>
                    <input type="password" name="password2" className="form-input"  id="password2" placeholder="Pls Re-type Password" 
                    value={values.password2}
                    onChange={handleChange}/>
                    <p>{errors.password2 && errors.password2} </p>
                </div>
                
                <button className="form-input-btn" type="submit">Sign Up</button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">Here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignUp
