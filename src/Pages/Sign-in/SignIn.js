import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { google, eye, hiddenEye, partical, partical2, partical3, partical4, partical5, loginVectorA, validemail } from "../../assets/img";
import bLinkedLogo from '../../assets/landing/bLinkedLogo.svg';
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script"

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

const SignInPage = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [userErr, setUserErr] = useState({
        email: false,
        password: false,
    });

    const [userFocus, setUserFocus] = useState({
        email: false,
        password: false,
    });

    const [passwordType, setPasswordType] = useState("password");

    const inputFocus = (name) => setUserFocus({ ...userFocus, [name]: true });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

        if (!value) return setUserErr({ ...userErr, [name]: true });
        
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

            if (!validEmail) return setUserErr({ ...userErr, [name]: true });
        };
        return setUserErr({ ...userErr, [name]: false })
    };

    const handlePassType = () => passwordType === "password" ? setPasswordType("text") : setPasswordType('password');

    const handleLogin = () => {
        const { email, password } = user;
        if (!password) return setUserErr({ ...userErr, password: true });
        if (!email) return setUserErr({ ...userErr, email: true });
        if (userErr.email || userErr.password) return;

        localStorage.setItem("accessToken", email);
        history.push("/home");
    };

    const handleForgot = () => history.push("/auth/forgot_password");

    const handleCreateAC = () => history.push("/auth/sign_up1");

    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            scope: 'email',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);
      
    const googleSuccess = async (googleData) => {
        console.log(googleData)
        const token = googleData.tokenId;

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        });

        const { name, email, picture } = ticket.getPayload();    
        console.log(name);
        console.log(email);
        console.log(picture);
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sing In ha fracasado intentelo denuevo mas tarde");
    };

    return (
        <div className="auth-main">
            <div className="row w-100">
                <div className="col-lg-8 signin-comp-a">
                    <div className="d-flex justify-content-center">
                        <img src={bLinkedLogo} alt="Logo" className="img-fluid" style={{maxHeight: '150px'}}/>
                    </div>
                    <div className="signin-title">Welcome back to bLinked, 👏🏽</div>
                    <div className="signin-subcontainer px-md-5 mt-5">
                        {/* <div className="signin-with-google px-md-3">
                            <div className="shadow-sm">
                                <img src={google} alt="" />
                            </div>
                            <button className="w-100">Sign in with Google</button>
                        </div> */}
                        <GoogleLogin
                            className="signin-with-google px-md-3"
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText={"Sign in with Google"}
                            render={renderProps => (
                                <div className="signin-with-google px-md-3">
                                    <div className="shadow-sm">
                                        <img src={google} alt="" />
                                    </div>
                                    <button className="w-100" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        Sign in with Google
                                    </button>
                                </div>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                        <div className="signin-with-email">
                            <div></div>
                            <div className="mx-4">Or, sign in with your email</div>
                            <div></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 auth-input-container">
                                <div
                                    className={
                                        userFocus.email
                                            ? userErr.email ?
                                                "input-box active w-100 forgot-email-border"
                                                : "input-box active w-100"
                                            : userErr.email
                                                ? "input-box w-100 forgot-email-border"
                                                : "input-box w-100"
                                    }
                                >
                                    <div className={!validator.isEmail(user.email) ? "d-none" : ""}>
                                        <img
                                            src={validemail}
                                            alt="Valid Email"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        className="w-100"
                                        name="email"
                                        value={user.email}
                                        onFocus={() => inputFocus("email")}
                                        onChange={handleChange}
                                        onBlur={() => {
                                            if (!user.email) {
                                                setUserFocus({
                                                    ...userFocus,
                                                    email: false,
                                                });
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={userErr.email ? "col-lg-12 text-start px-4 forgot-email-err" : "d-none"}>
                                Enter a valid email address
                            </div>
                            <div className="col-lg-12 auth-input-container">
                                <div
                                    className={
                                        userFocus.password
                                            ? "input-box active w-100"
                                            : userErr.password
                                                ? "input-box w-100 forgot-email-border"
                                                : "input-box w-100"
                                    }
                                >
                                    <div>
                                        <img src={passwordType === 'password' ? eye : hiddenEye} alt="Eye" className="img-fluid pointer" onClick={handlePassType} />
                                    </div>
                                    <label>Password</label>
                                    <input
                                        type={passwordType}
                                        className="w-100"
                                        name="password"
                                        value={user.password}
                                        onFocus={() => inputFocus("password")}
                                        onChange={handleChange}
                                        onBlur={() => {
                                            if (!user.password) {
                                                setUserFocus({
                                                    ...userFocus,
                                                    password: false,
                                                });
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="signin-with-email-btn px-md-3">
                            <button className="w-100" onClick={handleLogin}>
                                Log in
                            </button>
                        </div>
                        <div
                            className="signin-forgot-password px-3"
                            onClick={handleForgot}
                        >
                            Forgot your password?
                        </div>
                        <div className="signin-create-ac mt-4 px-3">
                            Don’t have an account yet?{" "}
                            <span onClick={handleCreateAC}>Create account</span>
                        </div>
                        <div className="signin-footer px-3 mb-5">
                            <div>Help</div>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-5 py-5 signin-comp-b">
                    <div>
                        <div>
                            <img src={partical5} alt="" className="img-fluid" />
                        </div>
                        <div className="signin-comp-b-title mt-5">
                            Sell fast, sell more - grow your business.
                        </div>
                        <p className="signin-comp-b-desc mt-4">
                            Manage your inventory accross multiple sales channels, collect all
                            types of payments and analyze your sales with one tool.
                        </p>
                    </div>
                    <div className="signin-vector">
                        <div>
                            <img
                                src={loginVectorA}
                                alt="Login"
                                className="img-fluid"
                            />
                        </div>
                        <div>
                            <img src={partical} alt="" className="img-fluid" />
                        </div>
                        <div>
                            <img src={partical2} alt="" className="img-fluid" />
                        </div>
                        <div>
                            <img src={partical3} alt="" className="img-fluid" />
                        </div>
                        <div>
                            <img src={partical4} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
