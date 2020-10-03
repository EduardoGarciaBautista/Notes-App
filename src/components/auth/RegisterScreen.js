import React from "react";
import {Link} from "react-router-dom";

export const RegisterScreen = () => {
    return(
        <>
            <h3 className="auth__title">Register</h3>
            <form action="">
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm"
                    name="pwdConfirm"
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