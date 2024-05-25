import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopMedical } from "react-icons/fa";
import { RiHospitalFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const Hero = ({ onFindHospital }) => {
  const cities = [
    {
      state: "West Bengal",
      cities: [
        { name: "Kolkata" },
        { name: "Tamluk" },
        { name: "Bengaluru" },
        { name: "Haldia" },
        { name: "Durgapur" },
        { name: "Howrah" },
        { name: "Kalyani" },
        { name: "Agarpara" },
        { name: "Siliguri" },
      ],
    },
  ];

  const [selectedState, setSelectedState] = useState("West Bengal");
  const [selectedCity, setSelectedCity] = useState("Kolkata");

  const handleFindHospital = () => {
    onFindHospital(selectedState, selectedCity);
    // onFindCareTakker(selectedState, selectedCity);
  };

  return (
    <>
      <div id="home" className="relative w-full  h-[83vh] sm:h-[95vh]">
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="https://videocdn.cdnpk.net/joy/content/video/free/video0484/large_preview/_import_60e9313090cf28.81013704.mp4?filename=1117879_1080p_4k_2k_3840x2160.mp4"
            autoPlay
            loop
            muted
          />
          <div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 flex flex-col md:flex-row">
              <motion.section
                initial={{ opacity: 0, y: -100 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col leading-10 justify-center items-center align-middle md:w-2/3 pt-14 pb-5 md:mb-14"
              >
                <h1 className="text-4xl font-extrabold text-white">
                  Welcome to MediStore
                </h1>
                <h4 className=" px-6 pt-3 mb-5 md:mb-20 text-xl font-semibold text-white">
                  The Decentralize Medical Data Storage
                </h4>
                <FaLaptopMedical className="animate-bounce text-6xl text-white " />
                <NavLink to="/login">
                  <button className="text-white font-semibold md:font-normal border-white hover:bg-[#03919b] hover:border-[#03919b] inline-flex items-center justify-center rounded-md border mt-4 py-4 px-12 text-center text-base transition hover:text-white lg:px-12 xl:px-14">
                    Get Start
                  </button>
                </NavLink>
              </motion.section>
              <motion.section
                initial={{ opacity: 0, x: +100 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex justify-center items-center align-middle"
              >
                <section className="py-8">
                  <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full mb-6">
                        <label className="mb-3 block text-xl font-medium text-white">
                          Select State
                        </label>
                        <div className="relative">
                          <select
                            className="border-form-stroke text-[#535a5f] focus:border-primary active:border-primary w-full md:w[500px] appearance-none rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition pr-20"
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                          >
                            {cities.map((state) => (
                              <option key={state.state} value={state.name}>
                                {state.state}
                              </option>
                            ))}
                          </select>
                          <span className="border-body-color absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2"></span>
                        </div>
                      </div>

                      <div className="w-full">
                        <label className="mb-3 block text-xl font-medium text-white">
                          Select City
                        </label>
                        <div className="relative">
                          <select
                            className="border-form-stroke text-[#535a5f] focus:border-primary active:border-primary w-full md:w[500px] appearance-none rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD] pr-20"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                          >
                            {cities.map((state) =>
                              state.cities.map((city) => (
                                <option key={city.name} value={city.name}>
                                  {city.name}
                                </option>
                              ))
                            )}
                          </select>
                          <span className="border-body-color absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2"></span>
                        </div>
                        <a href="/#hospital">
                          <button
                            onClick={handleFindHospital}
                            className=" mt-6 bg-secondary inline-flex items-center justify-center rounded-full py-3 px-6 text-center text-base font-medium text-white hover:bg-opacity-90 gap-2"
                          >
                            <RiHospitalFill className="animate-pulse" />
                            Find Hospital
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
