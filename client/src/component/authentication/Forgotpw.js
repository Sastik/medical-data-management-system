import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets";


const Logo = () => (
  <NavLink
    to="/"
    className="flex items-center mb-6 text-2xl font-semibold text-white "
  >
    <img className="w-12 h-10 mr-2" src={logo} alt="logo" />
    Medistore
  </NavLink>
);

const Checkbox = () => (
  <div className="flex items-center h-5">
    <input
      id="remember"
      aria-describedby="remember"
      type="checkbox"
      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary2-300 "
      required=""
    />
  </div>
);

export const Forgotpw = () => {
  return (
    <>
      <div id="home" className="relative w-full  h-[83vh] sm:h-[95vh]">
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="https://videocdn.cdnpk.net/joy/content/video/free/video0484/large_preview/_import_61a5d017a01043.11657738.mp4?filename=1118322_form_graphic_structure_3840x2160.mp4"
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
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                  <Logo />
                  <div className="w-full bg-[#074a7028] rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 p-8">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                        Reset Your Password
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-50 "
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2-600 focus:border-primary2-600 block w-full p-2.5 "
                            placeholder="name@company.com"
                            required=""
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <Checkbox />
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="remember"
                                className="text-gray-50 "
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <NavLink
                            to="#"
                            className="text-sm font-medium text-primary2-600 hover:underline "
                          >
                            Forgot Email?
                          </NavLink>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-primary2-600 hover:bg-primary2-700 focus:ring-4 focus:outline-none focus:ring-primary2-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                          Reset Now
                        </button>
                        <p className="text-sm font-light text-gray-50 ">
                          Remember Your Password?{" "}
                          <NavLink
                            to="/Login"
                            className="font-medium text-primary2-600 hover:underline "
                          >
                            Sign In
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
