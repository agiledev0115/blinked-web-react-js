import React, { useState } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";

import { logo, validemail } from "../../assets/img";
import Footer from "../../Components/Footer";

const ForgotEmailScreen = () => {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const inputFocus = () => setEmailFocus(true);

    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);

        if (!value) return setEmailErr(true);

        if (typeof value !== "undefined") {
            const lastAtPos = value.lastIndexOf("@");
            const lastDotPos = value.lastIndexOf(".");
            const validEmail = (
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                value.indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                value.length - lastDotPos > 2
            );

            if (!validEmail) return setEmailErr(true);
        };
        return setEmailErr(false);
    };

    const handleSendLink = () => {
        if (!validator.isEmail(email)) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
            history.push("/auth/otp")
        }
    };

    const handleLogin = () => {
        history.push("/")
    }

    return (
        <div className="auth-main">
            <div className="container auth-cmn-main">
                <img src={logo} alt="Logo" className="img-fluid my-5" />
                <div className="auth-cmn-subcontainer px-md-5 py-5">
                    <div className="auth-cmn-title">Forget password, 🔐</div>
                    <div className="row justify-content-center">
                        <div className="auth-cmn-subtitle col-md-7">
                            Enter your email address and we’ll email you a link to reset your
                            password.
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12 px-4 mt-md-4 mt-4 auth-input-container fotgot-pass-border">
                            <div
                                className={
                                    emailFocus
                                        ? emailErr
                                            ? "input-box active w-100 forgot-email-border"
                                            : "input-box active w-100"
                                        : emailErr
                                            ? "input-box w-100 forgot-email-border"
                                            : "input-box w-100"
                                }
                            >
                                <div className={!validator.isEmail(email) ? "d-none" : ""}>
                                    <img
                                        src={validemail}
                                        alt="Valid Email"
                                        className="img-fluid"
                                    />
                                </div>
                                <label>Email address</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="email"
                                    value={email}
                                    onFocus={() => inputFocus()}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!email) {
                                            setEmailFocus(false);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className={emailErr ? "col-lg-12 text-start px-4 forgot-email-err" : "d-none"}>
                            Enter a valid email address
                        </div>
                    </div>

                    <div className="px-2 auth-cmn-btn mt-5">
                        <button className="w-100" onClick={handleSendLink}>
                            Send link
                        </button>
                    </div>

                    <div className="auth-cmn-signin mt-4">
                        Take me back to<span onClick={handleLogin}> Login</span>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ForgotEmailScreen;
