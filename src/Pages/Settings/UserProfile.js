import React, { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import validator from "validator";
import { validemail } from "../../assets/img";

const UserProfile = () => {

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phonenumber: "",
    choosepermission: "",
  });

  const [userErr, setUserErr] = useState({
    fnameErr: false,
    lnameErr: false,
    emailErr: false,
    phonenumberErr: false,
  });

  const [userFocus, setUserFocus] = useState({
    fname: false,
    lname: false,
    email: false,
    phonenumber: false,
    choosepermission: false,
  });

  const inputFile = useRef(null)

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

    if (name === 'email') {

      if (!value) {
        setUserErr({
          ...userErr,
          emailErr: true
        });
      }

      if (typeof value !== "undefined") {
        let lastAtPos = value.lastIndexOf("@");
        let lastDotPos = value.lastIndexOf(".");

        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            value.indexOf("@@") === -1 &&
            lastDotPos > 2 &&
            value.length - lastDotPos > 2
          )
        ) {
          setUserErr({
            ...userErr,
            emailErr: true
          });
        } else {
          setUserErr({
            ...userErr,
            emailErr: false
          });
        }
      }
    }
  };

  const handleSave = () => {
    const { fname, lname, email, phonenumber } = user;
    if (!fname || !lname) {
      setUserErr({
        ...userErr,
        fnameErr: !fname ? true : false,
        lnameErr: !lname ? true : false,
      });
    } else if (!email && !userErr.emailErr) {
      setUserErr({
        ...userErr,
        emailErr: !email ? true : false,
      });
    } else if (userErr.emailErr) {
      return;
    } else if (!phonenumber) {
      setUserErr({
        ...userErr,
        phonenumberErr: !phonenumber ? true : false,
      });
    } else {
      setUserErr({
        fnameErr: false,
        lnameErr: false,
        emailErr: false,
        phonenumberErr: false,
      });
      setUser({
        fname: "",
        lname: "",
        email: "",
        phonenumber: "",
        choosepermission: "",
      });
    }
  };

  const onEditClick = () => {
    inputFile.current.click();
    console.log(inputFile)
  };

  return (
    <>
      <div className="setting-user-profile">
        <div className="setting-user-title">
          <div className="d-flex justify-content-between mt-4">
            <span> User Profile</span>
          </div>
        </div>
        <div className="setting-user-picture mt-4">
          <div>BL</div>
          <div className="setting-edit-picture-btn mx-4">
            <input type="file" accept="image/*" id="file" ref={inputFile} style={{ display: 'none' }} />
            <button onClick={onEditClick}>Edit photo </button>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="py-4">
        <div className="settings-user-form-title">Basic information</div>
        <div className="settings-user-form-subline">
          Let’s get to know you. Set up your name and contact details in simple
          steps.
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-lg-6 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.fname
                    ? "input-box active w-100"
                    : userErr.fnameErr
                      ? "input-box w-100 forgot-email-border"
                      : "input-box w-100"
                }
              >
                <label>First Name</label>
                <input
                  type="text"
                  className="w-100"
                  name="fname"
                  value={user.fname}
                  onFocus={() => inputFocus("fname")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.fname) {
                      setUserFocus({
                        ...userFocus,
                        fname: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.lname
                    ? "input-box active w-100"
                    : userErr.lnameErr
                      ? "input-box w-100 forgot-email-border"
                      : "input-box w-100"
                }
              >
                <label>Last Name</label>
                <input
                  type="text"
                  className="w-100"
                  name="lname"
                  value={user.lname}
                  onFocus={() => inputFocus("lname")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.lname) {
                      setUserFocus({
                        ...userFocus,
                        lname: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.email
                    ? userErr.emailErr ?
                      "input-box active w-100 forgot-email-border"
                      : "input-box active w-100"
                    : userErr.emailErr
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
            <div
              className={
                userErr.emailErr
                  ? "col-lg-12 text-start px-4 forgot-email-err"
                  : "d-none"
              }
            >
              Enter a valid email address
            </div>
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.phonenumber
                    ? "input-box active w-100"
                    : userErr.phonenumberErr
                      ? "input-box w-100 forgot-email-border"
                      : "input-box w-100"
                }
              >
                <label>Phone number</label>
                <input
                  type="text"
                  className="w-100"
                  name="phonenumber"
                  value={user.phonenumber}
                  onFocus={() => inputFocus("phonenumber")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.phonenumber) {
                      setUserFocus({
                        ...userFocus,
                        phonenumber: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
              <div
                className={
                  userFocus.choosepermission
                    ? "input-box active w-100"
                    : "input-box w-100"
                }
              >
                <div>
                  {/* <img src={images.eye} alt="Eye" className="img-fluid" /> */}
                  <BiChevronDown size={25} color="#A3A3C2" />
                </div>
                <label>Choose permission set</label>
                <input
                  type="text"
                  className="w-100"
                  name="choosepermission"
                  value={user.choosepermission}
                  onFocus={() => inputFocus("choosepermission")}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!user.choosepermission) {
                      setUserFocus({
                        ...userFocus,
                        choosepermission: false,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="settings-user-form-action-btn d-flex justify-content-md-end justify-content-center my-5">
            <button>Discard</button>
            <button onClick={handleSave}>Save</button>
          </div>
          <hr className="my-4" />
          <div className="py-4">
            <div className="settings-danger">Danger zone</div>
            <div className="settings-danger-desc mt-2 col-md-8">
              Deactivating your account means you will lose all workspaces
              created by you and all your every other account information.{" "}
            </div>
            <button className="settings-deactive-user-btn px-md-5 px-2 py-md-2 py-2 mt-5">
              Deactivate your account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
