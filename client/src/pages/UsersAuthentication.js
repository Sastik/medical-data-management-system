import React from "react";
import { Signin } from "../component/authentication/Singin";
import { Login } from "../component/authentication/Login";
import { Forgotpw as ForgotPassword } from "../component/authentication/Forgotpw";
import { OTPvalidation as OTPValidation } from "./../component/authentication/OTPvalidation";
import { Resetpw as ResetPassword } from "./../component/authentication/ResetPw";

export const UserRegistrationPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export const UserLoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassword />
    </>
  );
};

export const OTPValidationPage = () => {
  return (
    <>
      <OTPValidation />
    </>
  );
};

export const ResetPasswordPage = () => {
  return (
    <>
      <ResetPassword />
    </>
  );
};
