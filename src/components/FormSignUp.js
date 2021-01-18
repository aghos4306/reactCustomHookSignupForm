import React from 'react'

const FormSignUp = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Get Started with us today by creating an account</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" className="form-input"  id="username" placeholder="Pls Enter Your Username" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-input"  id="email" placeholder="Pls Enter Your Email" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-input"  id="password" placeholder="Pls Enter Your Password" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Confirm Password</label>
                    <input type="password2" name="password2" className="form-input"  id="password2" placeholder="Pls Re-type Password" />
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
