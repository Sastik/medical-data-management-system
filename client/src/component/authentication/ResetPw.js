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
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      {label}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2-600 focus:border-primary2-600 block w-full p-2.5 "
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export const Resetpw = () => {
  return (
    <>
      <div id="home" className="relative w-full  h-[83vh] sm:h-[95vh]">
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="https://v4.cdnpk.net/videvo_files/video/free/video0477/large_watermarked/_import_6258ffa8cc3e86.93985828_FPpreview.mp4"
            autoPlay
            loop
            muted
          />
          <div>
            <div className="absolute inset-0 bg-gradient-to-l from-gray-900 flex flex-col md:flex-row">
              <motion.section
                initial={{ opacity: 0, y: -100 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col leading-10 justify-center items-center align-middle md:w-2/3 pt-14 pb-5 md:mb-14"
              >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  <Logo />
                  <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Create New Password
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                        <InputField
                          id="password"
                          label="New Password"
                          type="password"
                          placeholder="••••••••"
                          required
                        />
                        <InputField
                          id="confirm-password"
                          label="Confirm new password"
                          type="password"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="submit"
                          className="w-full text-white bg-primary2-600 hover:bg-primary2-700 focus:ring-4 focus:outline-none focus:ring-primary2-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                          Save Password
                        </button>
                        <p className="text-sm font-light text-gray-500 ">
                          Already have a password?{" "}
                          <NavLink
                            to="#"
                            className="font-medium text-primary2-600 hover:underline "
                          >
                            Login here
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
