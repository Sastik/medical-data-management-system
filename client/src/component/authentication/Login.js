import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets";
const Logo = () => (
  <NavLink
    to="/"
    className="flex items-center mb-6 text-2xl font-semibold text-white"
  >
    <img className="w-12 h-10 mr-2" src={logo} alt="logo" />
    Medistore
  </NavLink>
);

const InputField = ({ id, label, type, placeholder, required }) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-50"
    >
      {label}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2-600 focus:border-primary2-600 block w-full p-2.5"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const Checkbox = ({ id, label }) => (
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id={id}
        aria-describedby={id}
        type="checkbox"
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary2-300 "
        required
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={id} className="text-gray-100 ">
        {label}
      </label>
    </div>
  </div>
);

export const Login = () => {
  return (
    <>
      <div className="relative w-full  h-[83vh] sm:h-[95vh]">
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="https://v4.cdnpk.net/videvo_files/video/free/video0455/large_watermarked/_import_6091163cc1c9c5.51185665_FPpreview.mp4"
            autoPlay
            loop
            muted
            style={{
              objectPosition: "65% 40%",
            }}
          />
          <div>
            <div className="absolute inset-0 bg-gradient-to-l from-gray-900 flex flex-col md:flex-row">
              <motion.section
                initial={{ opacity: 0, y: -100 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col leading-10 justify-center items-center align-middle md:w-2/3 pt-14 pb-5 md:mb-14"
              >
               
                  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 rounded-lg">
                    <Logo />
                    <div className="w-full bg-[#074a7028] p-8 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                          Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                          <InputField
                            id="email"
                            label="Your email"
                            type="email"
                            placeholder="name@company.com"
                            required
                          />
                          <InputField
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            required
                          />
                          <div className="flex items-center justify-between">
                            <Checkbox id="remember" label="Remember me" />
                            <NavLink
                              to="/ForgotPw"
                              className="text-sm font-medium text-primary2-600 hover:underline"
                            >
                              Forgot password?
                            </NavLink>
                          </div>
                          <button
                            type="submit"
                            className="w-full text-white bg-primary2-600 hover:bg-primary2-700 focus:ring-4 focus:outline-none focus:ring-primary2-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                          >
                            Sign in
                          </button>
                          <p className="text-sm font-light text-gray-100 ">
                            Don’t have an account yet?{" "}
                            <NavLink
                              to="/registration"
                              className="font-medium text-primary2-600 hover:underline "
                            >
                              Sign up
                            </NavLink>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
