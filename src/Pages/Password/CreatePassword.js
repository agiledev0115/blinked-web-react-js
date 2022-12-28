import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { logo, eye } from "../../assets/img";
import Footer from "../../Components/Footer";

const CreatePassword = () => {
    const history = useHistory();

    const [pass, setPass] = useState({
        npass: "",
        cpass: "",
    });

    const [passErr, setPassErr] = useState({
        npassErr: false,
        cpassErr: false,
    });

    const [passFocus, setPassFocus] = useState({
        npass: false,
        cpass: false,
    });

    const [passwordType, setPasswordType] = useState({
        npassType: 'password',
        cpassType: 'password'
    });

    const inputFocus = (name) => {
        setPassFocus({
            ...passFocus,
            [name]: true,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPass({
            ...pass,
            [name]: value,
        });

        if (name === 'npass') {
            if (!value) {
                setPassErr({ ...passErr, npassErr: true });
            }
            else if (!validator.isStrongPassword(value)) {
                setPassErr({ ...passErr, npassErr: true });
            } else {
                setPassErr({ ...passErr, npassErr: false });
            }
        } else {
            if (!value && pass.npass !== null) {
                setPassErr({ ...passErr, cpassErr: true });
            }
            else if (value !== pass.npass) {
                setPassErr({ ...passErr, cpassErr: true });
            } else {
                setPassErr({ ...passErr, cpassErr: false });
            }
        }
    }

    const handleClick = () => {
        const { npass, cpass } = pass;
        if (!npass && !passErr.npassErr) {
            setPassErr({
                ...passErr,
                npassErr: !npass ? true : false,
            });
        } else if (!cpass && !passErr.cpassErr) {
            setPassErr({
                ...passErr,
                cpassErr: !cpass ? true : false,
            })
        } else if (passErr.npassErr || passErr.cpassErr) {
            return;
        } else {
            history.push("/auth/password_success");
        }
    };

    const handlePassType = (e) => {
        const { id } = e.target;

        if (id === 'cpass') {
            if (passwordType.cpassType === 'password') {
                setPasswordType({ ...passwordType, cpassType: 'text' })
            } else {
                setPasswordType({ ...passwordType, cpassType: 'password' })
            }
        } else {
            if (passwordType.npassType === 'password') {
                setPasswordType({ ...passwordType, npassType: 'text' })
            } else {
                setPasswordType({ ...passwordType, npassType: 'password' })
            }
        }
    }

    const handleLogin = () => {
        history.push("/");
    }

    return (
        <div className="auth-main">
            <div className="container auth-cmn-main">
                <img src={logo} alt="Logo" className="img-fluid my-5" />
                <div className="auth-cmn-subcontainer px-md-5 py-5">
                    <div className="auth-cmn-title">Set a new password, 🔐</div>
                    <div className="row justify-content-center">
                        <div className="auth-cmn-subtitle px-5">
                            Kindly enter and set up a new password for your account.
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12 px-4 mt-md-4 mt-4 auth-input-container fotgot-pass-border">
                            <div
                                className={
                                    passFocus.npass
                                        ? passErr.npassErr ?
                                            "input-box active w-100 forgot-email-border"
                                            : "input-box active w-100"
                                        : passErr.npassErr
                                            ? "input-box w-100 forgot-email-border"
                                            : "input-box w-100"
                                }
                            >
                                <div>
                                    <img src={eye} alt="Eye" className="img-fluid" id="npass" onClick={handlePassType} />
                                </div>
                                <label>New password</label>
                                <input
                                    type={passwordType.npassType}
                                    className="w-100"
                                    name="npass"
                                    value={pass.npass}
                                    onFocus={() => inputFocus("npass")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!pass.npass) {
                                            setPassFocus({
                                                ...passFocus,
                                                npass: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                passErr.npassErr
                                    ? "col-lg-12 text-start px-4 forgot-email-err"
                                    : "d-none"
                            }
                        >
                            Enter a strong password containing at least 8 characters with
                            1 lower case letter, 1 upper case letter, 1 number and 1 special character
                        </div>
                        <div className="col-lg-12 px-4 mt-md-4 mt-4 auth-input-container fotgot-pass-border">
                            <div
                                className={
                                    passFocus.cpass
                                        ? passErr.cpassErr ?
                                            "input-box active w-100 forgot-email-border"
                                            : "input-box active w-100"
                                        : passErr.cpassErr
                                            ? "input-box w-100 forgot-email-border"
                                            : "input-box w-100"
                                }
                            >
                                <div>
                                    <img src={eye} alt="Eye" className="img-fluid" id="cpass" onClick={handlePassType} />
                                </div>
                                <label>Confirm new password</label>
                                <input
                                    type={passwordType.cpassType}
                                    className="w-100"
                                    name="cpass"
                                    value={pass.cpass}
                                    onFocus={() => inputFocus("cpass")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!pass.cpass) {
                                            setPassFocus({
                                                ...passFocus,
                                                cpass: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                passErr.cpassErr
                                    ? "col-lg-12 text-start px-4 forgot-email-err"
                                    : "d-none"
                            }
                        >
                            Passwords do not match
                        </div>
                    </div>

                    <div className="px-2 auth-cmn-btn mt-5">
                        <button className="w-100" onClick={handleClick}>
                            Change password
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

export default CreatePassword;
