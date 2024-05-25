import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets";
const Logo = () => (
  <NavLink
    to="/"
    className="flex items-center mb-6 text-2xl font-semibold text-white z-0"
  >
    <img className="w-12 h-10 mr-2" src={logo} alt="logo" />
    Medistore
  </NavLink>
);

const InputField = ({
  id,
  label,
  type,
  placeholder,
  required,
  value,
  handleInput,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-1 text-sm font-medium text-gray-50 "
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={handleInput}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2-600 focus:border-primary2-600 block w-full p-2 "
      placeholder={placeholder}
      required={required}
      autoComplete="off"
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
        required=""
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={id} className="font-light text-gray-50 ">
        {label}
      </label>
    </div>
  </div>
);

export const Signin = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  return (
    <>
      <div className="relative w-full  h-[83vh] sm:h-[95vh]">
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
                className="flex flex-col leading-10 justify-center items-center align-middle md:w-2/3 pb-5 md:mb-14"
              >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  <Logo />
                  <div className="w-full bg-[#074a7028] rounded-lg shadow  md:mt-0 sm:max-w-md px-9 ">
                    <div className="space-y-4 md:space-y-6 p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                        Create an account
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                        <InputField
                          id="name"
                          value={user.name}
                          handleInput={handleInput}
                          label="Name"
                          type="text"
                          placeholder="John"
                          required
                        />
                        <InputField
                          id="email"
                          value={user.email}
                          handleInput={handleInput}
                          label="Your email"
                          type="email"
                          placeholder="name@company.com"
                          required
                        />
                        <InputField
                          id="password"
                          value={user.password}
                          handleInput={handleInput}
                          label="Password"
                          type="password"
                          placeholder="••••••••"
                          required
                        />
                        <InputField
                          id="cpassword"
                          value={user.cpassword}
                          handleInput={handleInput}
                          label="Confirm password"
                          type="password"
                          placeholder="••••••••"
                          required
                        />
                        <Checkbox
                          id="terms"
                          label="I accept the Terms and Conditions"
                        />
                        <button
                          type="submit"
                          className="w-full text-white bg-primary2-600 hover:bg-primary2-700 focus:ring-4 focus:outline-none focus:ring-primary2-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                          Create an account
                        </button>
                        <p className="text-sm font-light text-gray-50 ">
                          Already have an account?{" "}
                          <NavLink
                            to="/Login"
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
