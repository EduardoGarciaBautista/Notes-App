import React from "react";
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import validator from "validator";
import {useDispatch, useSelector} from "react-redux";
import {removeError, setError} from "../../actions/ui";
import {startRegisterWithEmaiPassword} from "../../actions/auth";

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);

    const [formValues, handleOnChange] = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {name, email, password, confirmPassword} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValue()) {
            console.log('OK')
        }
        dispatch(startRegisterWithEmaiPassword(formValues));
    }

    const isFormValue = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Invalid email'));
            return false;
        } else if (password !== confirmPassword || password.length < 5) {
            dispatch(setError('Invalid password'));
            return false;
        }
        dispatch(removeError());
        return true;
    }


    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>

                {msgError && <div className="auth__alert-error">
                    {msgError}
                </div>}
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    onChange={handleOnChange}
                />
                <input
                    className="auth__input"
                    type="email"
                    placeholder="e-mail"
                    name="email"
                    onChange={handleOnChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleOnChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    onChange={handleOnChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary bnt-block"
                >
                    Login
                </button>


                <div className="auth__social-networks">
                    <Link
                        className="link mb-5"
                        to="/auth/login">
                        Already registered
                    </Link>
                </div>
            </form>
        </>
    )
}