import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { PageNotFound } from "./component/notFound/PageNotFound";
import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";
import { Home } from "./pages/Home";
import {
  UserLoginPage,
  UserRegistrationPage,
  ForgotPasswordPage,
  OTPValidationPage,
  ResetPasswordPage,
} from "./pages/UsersAuthentication";


function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/registration" element={<UserRegistrationPage />} />
          <Route path="/forgotPw" element={<ForgotPasswordPage />} />
          <Route path="/OTPvalidation" element={<OTPValidationPage />} />
          <Route path="/resetPw" element={<ResetPasswordPage />} />
          <Route path="/userProfile" element={<UserLoginPage />} />
          <Route path="/userDisplay" element={<UserLoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
