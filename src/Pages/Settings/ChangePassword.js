import React, { useState } from "react";
import validator from "validator";
import { eye } from "../../assets/img";

const SettingsChangePassword = () => {
  const [user, setUser] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const [userErr, setUserErr] = useState({
    currentpasswordErr: false,
    newpasswordErr: false,
    confirmpasswordErr: false
  });

  const [userFocus, setUserFocus] = useState({
    currentpassword: false,
    newpassword: false,
    confirmpassword: false,
  });

  const [passwordType, setPasswordType] = useState({
    currentpasswordType: 'password',
    newpasswordType: 'password',
    confirmpasswordType: 'password'
  });

  const [newPasswordError, setNewPasswordError] = useState("");

  const inputFocus = (name) => {
    setUserFocus({
      ...userFocus,
      [name]: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    if (name === "currentpassword") {
      if (!value) {
        setUserErr({ ...userErr, currentpasswordErr: true });
      }
      else if (!validator.isStrongPassword(value)) {
        setUserErr({ ...userErr, currentpasswordErr: true });
        setNewPasswordError("")
      } else {
        setUserErr({ ...userErr, currentpasswordErr: false });
      }
    }
    else if (name === 'newpassword') {
      if (!value) {
        setUserErr({ ...userErr, newpasswordErr: true });
      }
      else if (value === user.currentpassword) {
        setUserErr({ ...userErr, newpasswordErr: true });
        setNewPasswordError("New password cannot be the same as old password");
      }
      else if (!validator.isStrongPassword(value)) {
        setUserErr({ ...userErr, newpasswordErr: true });
        setNewPasswordError(`Enter a strong password containing at least 8 characters with
        1 lower case letter, 1 upper case letter, 1 number and 1 special character`);
      } else {
        setUserErr({ ...userErr, newpasswordErr: false });
      }
    } else {
      if (!value && user.newpassword !== null) {
        setUserErr({ ...userErr, confirmpasswordErr: true });
      }
      else if (value !== user.newpassword) {
        setUserErr({ ...userErr, confirmpasswordErr: true });
      } else {
        setUserErr({ ...userErr, confirmpasswordErr: false });
      }
    }
  };

  const handlePassType = (e) => {
    const { id } = e.target;

    if (id === 'currentpassword') {
      if (passwordType.currentpasswordType === 'password') {
        setPasswordType({ ...passwordType, currentpasswordType: 'text' })
      } else {
        setPasswordType({ ...passwordType, currentpasswordType: 'password' })
      }
    } else if (id === 'newpassword') {
      if (passwordType.newpasswordType === 'password') {
        setPasswordType({ ...passwordType, newpasswordType: 'text' })
      } else {
        setPasswordType({ ...passwordType, newpasswordType: 'password' })
      }
    } else {
      if (passwordType.confirmpasswordType === 'password') {
        setPasswordType({ ...passwordType, confirmpasswordType: 'text' })
      } else {
        setPasswordType({ ...passwordType, confirmpasswordType: 'password' })
      }
    }
  }

  const handleClick = () => {
    const { currentpassword, newpassword, confirmpassword } = user;
    if (!currentpassword && !userErr.currentpasswordErr) {
      setUserErr({
        ...userErr,
        currentpasswordErr: !currentpassword ? true : false,
      });
    } else if (!newpassword && !userErr.newpasswordErr) {
      setUserErr({
        ...userErr,
        newpasswordErr: !newpassword ? true : false,
      })
      setNewPasswordError(`Enter a strong password containing at least 8 characters with
        1 lower case letter, 1 upper case letter, 1 number and 1 special character`);
    } else if (!confirmpassword && !userErr.confirmpasswordErr) {
      setUserErr({
        ...userErr,
        confirmpasswordErr: !confirmpassword ? true : false,
      })
    } else if (userErr.newpasswordErr || userErr.confirmpasswordErr) {
      return;
    }
  }

  return (
    <>
      <div className="py-4 settings-change-pass-main">
        <div className="settings-user-form-title mt-4">Change password</div>
        <div className="settings-user-form-subline mt-2">
          Enter your current password to set a new one. Ensure it is personal to
          you alone.
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.currentpassword
                    ? userErr.currentpasswordErr ?
                      "input-box active w-100 forgot-email-border"
                      : "input-box active w-100"
                    : userErr.currentpasswordErr
                      ? "input-box w-100 forgot-email-border"
                      : "input-box w-100"
                }
              >
                <div>
                  <img src={eye} alt="Eye" className="img-fluid" id="currentpassword" onClick={handlePassType} />
                </div>
                <label>Current password</label>
                <input
                  type={passwordType.currentpasswordType}
                  className="w-100"
                  name="currentpassword"
                  value={user.currentpassword}
                  onFocus={() => inputFocus("currentpassword")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.currentpassword) {
                      setUserFocus({
                        ...userFocus,
                        currentpassword: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div
              className={
                userErr.currentpasswordErr
                  ? "col-lg-12 text-start px-4 forgot-email-err"
                  : "d-none"
              }
            >
              Enter a strong password containing at least 8 characters with
              1 lower case letter, 1 upper case letter, 1 number and 1 special character
            </div>
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.newpassword
                    ? userErr.newpasswordErr ?
                      "input-box active w-100 forgot-email-border"
                      : "input-box active w-100"
                    : userErr.newpasswordErr
                      ? "input-box w-100 forgot-email-border"
                      : "input-box w-100"
                }
              >
                <div>
                  <img src={eye} alt="Eye" className="img-fluid" id="newpassword" onClick={handlePassType} />
                </div>
                <label>New password</label>
                <input
                  type={passwordType.newpasswordType}
                  className="w-100"
                  name="newpassword"
                  value={user.newpassword}
                  onFocus={() => inputFocus("newpassword")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.newpassword) {
                      setUserFocus({
                        ...userFocus,
                        newpassword: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div
              className={
                userErr.newpasswordErr
                  ? "col-lg-12 text-start px-4 forgot-email-err"
                  : "d-none"
              }
            >
              {newPasswordError}
            </div>
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.confirmpassword
                    ? userErr.confirmpasswordErr ?
                      "input-box active w-100 forgot-email-border"
                      : "input-box active w-100"
                    : userErr.confirmpasswordErr
                      ? "input-box w-100 forgot-email-border"
                      : "input-box w-100"
                }
              >
                <div>
                  <img src={eye} alt="Eye" className="img-fluid" id="confirmpassword" onClick={handlePassType} />
                </div>
                <label>Confirm password</label>
                <input
                  type={passwordType.confirmpasswordType}
                  className="w-100"
                  name="confirmpassword"
                  value={user.confirmpassword}
                  onFocus={() => inputFocus("confirmpassword")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.confirmpassword) {
                      setUserFocus({
                        ...userFocus,
                        confirmpassword: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div
              className={
                userErr.confirmpasswordErr
                  ? "col-lg-12 text-start px-4 forgot-email-err"
                  : "d-none"
              }
            >
              Passwords do not match
            </div>
          </div>
          <div className="settings-user-form-action-btn d-flex justify-content-md-end justify-content-center my-5">
            <button>Discard</button>
            <button onClick={handleClick}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsChangePassword;
