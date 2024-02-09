import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GiOpeningShell } from "react-icons/gi";
import { RiHospitalFill } from "react-icons/ri";

export const Hospitals = ({ state, city }) => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    fetch(`/api/hospitals/filter?state=${state}&city=${city}`)
      .then((response) => response.json())
      .then((data) => setHospitals(data))
      .catch((error) => console.error("Error fetching hospitals:", error));
  }, [state, city]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2500 },
      items: 5,
    },
    LargeDesktop: {
      breakpoint: { max: 2500, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div id="hospital" className="relative w-full h-48">
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            className="w-full h-full object-cover "
            src="https://v4.cdnpk.net/videvo_files/video/free/video0462/large_watermarked/_import_60fa731aa34613.18713168_FPpreview.mp4"
            autoPlay
            loop
            muted
          />
          <h1 className="absolute text-white font-semibold text-3xl font-semibol ">
            Hospital near you finding....
          </h1>
        </div>
      </div>

      <Carousel
        responsive={responsive}
        infiniteLoop
        autoPlay
        className=" bg-gradient-to-tl from-teal-50 to-teal-50 text-gray-900 font-sans p-6 antialiased  mx-auto"
      >
        {hospitals.map((hospital) => (
          <div
            key={hospital._id}
            className="w-full sm:p-3 mb-2 pr-10 sm:pr-1 pl-[-52px]"
          >
            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={hospital.image}
                  alt={hospital.name}
                />
              </div>
              <div className="p-4 h-36">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {hospital.state}
                </span>
                <span className="inline-block ml-5 px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {hospital.city}
                </span>
                <h2 className="mt-2 mb-2  font-bold">{hospital.name}</h2>
                <p className="text-sm">{hospital.address}</p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">Mob. NO.</span>&nbsp;
                  <span className="font-bold text-sm text-blue-800">
                    {hospital.phone}
                  </span>
                </div>
              </div>
              <div className="p-3 border-t border-b text-xs text-gray-700">
                <span className="flex items-center mb-1">
                  <GiOpeningShell className="mr-1 text-gray-900"></GiOpeningShell>
                  Open: {hospital.opening_time}
                  <RiHospitalFill className="text-gray-900 ml-24 mr-2"></RiHospitalFill>{" "}
                  {hospital.type}
                </span>
                <div className="flex items-center">
                  <div className="px-2 pt-2 pb-1 font-semibold">
                    <span className="inline-block  bg-gray-200 rounded-full px-1 py-1 text-xs sm:text-[9px]  text-gray-700 mr-1 mb-2">
                      #{hospital.special_list[0]}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-xs sm:text-[9px] text-gray-700 mr-1 mb-2">
                      #{hospital.special_list[1]}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-xs sm:text-[9px]  text-gray-700 mr-1 mb-2">
                      #{hospital.special_list[2]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3 flex items-center text-sm text-gray-600">
                Patient feedback:
                <span className="ml-2 ">⭐⭐⭐✰✰</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};
