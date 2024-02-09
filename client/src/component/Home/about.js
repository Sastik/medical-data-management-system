import React from "react";
import { NavLink } from 'react-router-dom';

export const Aboutus = () => {
  return (
    <>
      <section id="about" className="pt-2 lg:pt-[12px] pb-12 lg:pb-[60px] overflow-hidden bg-gradient-to-bl from-teal-100">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <div className="block mb-2 text-lg font-semibold  text-teal-900">
                  Why Choose this <span className="inline-block animate-bounce">🤔</span>
                </div>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl text-gray-800">
                  A piece of data in your life can save your life...
                </h2>
                <p className="mb-8 text-xl text-body-color">
                The patient is not getting proper treatment on-time because of patient’s unknown Medical history..! <br />
                <span className=" text-base">
                This is transparent system for storing your health-related documents, ensuring privacy,and easy access for authorized individuals. This can establish a tamper-proof and auditable record of your health documents... <br /> <br /> The system allows to doctor and hospital to access immediately of any patient’s medical history and can take the right decision to start treatment instantly.</span>
                </p>
                <NavLink
                  to="/registration"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10 ml-48 md:ml-80"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">             
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://www.cartika.com/web/default/files/users/12/Online%20Personal%20Information%20Storage.jpg"
                      alt=""
                      className="w-full h-48 sm:h-[300px] rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://www.visitbest.in/wp-content/uploads/2020/05/Best-Hospitals-In-India-e1594974018398.jpg"
                      alt=""
                      className="w-full h-48 sm:h-[300px] rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative my-4">
                    <img
                      src="https://images.pexels.com/photos/6129243/pexels-photo-6129243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="w-full rounded-2xl"
                    />                   
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

