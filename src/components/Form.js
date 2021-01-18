import React from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src="img/img-2.svg" className="form-img" alt="formImage" />
                </div>
                {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
            </div>
           
        </>
    )
}

export default Form
