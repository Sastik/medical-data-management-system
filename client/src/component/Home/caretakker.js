import axios from "axios";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CareTakker = ({ state, city }) => {
  const [CareTakker, setCareTakker] = useState([]);


    useEffect(() => {
    const fetchCareTakkers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}api/caretackers/filter`, {
          params: {
            state: state,
            city: city
          }
        });
        setCareTakker(response.data);
      } catch (error) {
        console.error("Error fetching CareTakker:", error);
      }
    };

    fetchCareTakkers();
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
      <div id="service" className="relative w-full h-48 ">
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            className="w-full h-full object-cover "
            src="https://videocdn.cdnpk.net/joy/content/video/free/video0462/large_preview/_import_60fa8679e10a55.83315257.mp4?filename=1107237_1080p_care_sanitary_1920x1080.mp4"
            autoPlay
            loop
            muted
          />
          <h1 className="absolute font-semibold text-white text-3xl font-semibol bg-gradient-to-l from-teal-400 p-5 rounded-md">
          Are You need CareTaker....
          </h1>
         
        </div>
      </div>

      <Carousel
        responsive={responsive}
        infiniteLoop
        autoPlay
        className=" bg-gradient-to-tl from-teal-50 to-teal-50 text-gray-900 font-sans p-6 antialiased  mx-auto"
      >
        {CareTakker.map((hospital) => (
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
                <p className="text-sm">{hospital.hospital}</p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">Mob. NO.</span>&nbsp;
                  <span className="font-bold text-sm text-blue-800">
                    {hospital.phone}
                  </span>
                </div>
              </div>
              <div className="p-1 border-t border-b text-xs text-gray-700">
                <div className="p-1 flex items-center text-sm text-gray-600">
                  Patient feedback:
                  <span className="ml-2 ">⭐⭐⭐✰✰</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};
