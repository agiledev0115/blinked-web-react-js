import React, { useState } from "react";
import { useHistory } from "react-router";
import validator from "validator";
// Assets
import { logo, validemail } from "../../assets/img";
// Components
import Footer from "../../Components/Footer";

const SignUpPage2 = () => {
    const history = useHistory();

    const [cmp, setCmp] = useState({
        cname: "",
        cemail: "",
        cphone: "",
    });

    const [cmpErr, setCmpErr] = useState({
        cname: false,
        cemail: false,
        cphone: false,
    });

    const [cmpFocus, setCmpFocus] = useState({
        cname: false,
        cemail: false,
        cphone: false,
    });

    const inputFocus = (name) => setCmpFocus({ ...cmpFocus, [name]: true });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCmp({ ...cmp, [name]: value });
        if (!value) return setCmpErr({ ...cmpErr, [name]: true })

        if (typeof value !== "undefined" && name === 'email') {
            const lastAtPos = value.lastIndexOf("@");
            const lastDotPos = value.lastIndexOf(".");
            const validEmail = (
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                value.indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                value.length - lastDotPos > 2
            );

            if (!validEmail) return setCmpErr({ ...cmpErr, [name]: true });
        };
        return setCmpErr({ ...cmpErr, [name]: false });
    };

    const handleSignUp = () => {
        const { cname, cphone, cemail } = cmp;
        if (!cname) return setCmpErr({ ...cmpErr, cname: true });
        if (!cemail) return setCmpErr({ ...cmpErr, cemail: true });
        if (!cphone) return setCmpErr({ ...cmpErr, cphone: true });
        if (cmpErr.cname) return;
        localStorage.setItem("accessToken", cemail);
        return history.push("/home");
    }

    const handleLogin = () => history.push("/login");

    return (
        <div className="auth-main">
            <div className="container auth-cmn-main">
                <img src={logo} alt="Logo" className="img-fluid my-5" />
                <div className="auth-cmn-subcontainer px-md-5 py-5">
                    <div className="auth-cmn-title">It's time to Grow your Business,</div>
                    <div className="auth-cmn-subtitle">
                        You’re almost there! Quickly tell us about your business{" "}
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12 martop-32 auth-input-container">
                            <div
                                className={
                                    cmpFocus.cname
                                        ? "input-box active w-100"
                                        : cmpErr.cname
                                            ? "input-box w-100 forgot-email-border"
                                            : "input-box w-100"
                                }
                            >
                                <label>Company name</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="cname"
                                    value={cmp.cname}
                                    onFocus={() => inputFocus("cname")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!cmp.cname) {
                                            setCmpFocus({
                                                ...cmpFocus,
                                                cname: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 martop-32 auth-input-container">
                            <div
                                className={
                                    cmpFocus.cemail
                                        ? cmpErr.cemail ?
                                            "input-box active w-100 forgot-email-border"
                                            : "input-box active w-100"
                                        : cmpErr.cemail
                                            ? "input-box w-100 forgot-email-border"
                                            : "input-box w-100"
                                }
                            >
                                <div className={!validator.isEmail(cmp.cemail) ? "d-none" : ""}>
                                    <img
                                        src={validemail}
                                        alt="Valid Email"
                                        className="img-fluid"
                                    />
                                </div>
                                <label>Company Email address</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="cemail"
                                    value={cmp.cemail}
                                    onFocus={() => inputFocus("cemail")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!cmp.cemail) {
                                            setCmpFocus({
                                                ...cmpFocus,
                                                cemail: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className={cmpErr.emailErr ? "col-lg-12 text-start px-4 forgot-email-err" : "d-none"}>
                            Enter a valid email address
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 martop-32 auth-input-container">
                            <div
                                className={
                                    cmpFocus.cphone
                                        ? "input-box active w-100"
                                        : cmpErr.cphone
                                            ? "input-box w-100 forgot-email-border"
                                            : "input-box w-100"
                                }
                            >
                                <label>Company phone</label>
                                <input
                                    type="text"
                                    className="w-100"
                                    name="cphone"
                                    value={cmp.cphone}
                                    onFocus={() => inputFocus("cphone")}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        if (!cmp.cphone) {
                                            setCmpFocus({
                                                ...cmpFocus,
                                                cphone: false,
                                            });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="px-2 auth-cmn-btn mt-5">
                        <button className="w-100" onClick={handleSignUp}>Sign up</button>
                    </div>

                    <div className="auth-cmn-signin mt-4">
                        Already have an account yet? <span onClick={handleLogin}>Sign in</span>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default SignUpPage2;
