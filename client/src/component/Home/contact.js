import React from "react";
import { MdAddLocationAlt, MdMarkEmailRead } from "react-icons/md";
import { BsTelephoneXFill } from "react-icons/bs";
export const Contact = () => {
  return (
    <>
     <div id="contact" className="relative w-full h-[195px] ">
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            className="w-full h-full object-cover "
            src="https://v4.cdnpk.net/videvo_files/video/free/video0478/large_watermarked/_import_625a512e233c84.47154637_FPpreview.mp4"
            autoPlay
            loop
            muted
          />
          <h1 className="absolute font-semibold text-white text-3xl font-semibol bg-gradient-to-r from-teal-400 p-5 rounded-md">
          GET IN TOUCH WITH US
          </h1>
        </div>
      </div>
      <section className="bg-gradient-to-tl from-teal-50 to-teal-50 overflow-hidden relative pb-6">
        <div className="container">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="mt-7 mb-3 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Contact Us
                </h2>
                <p className="text-base leading-relaxed mb-9 text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[80px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <MdAddLocationAlt className=" text-teal-700" />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color">
                      CVJ6+9PC, Kolaghat Thermal Power Plant Township, Kolaghat,
                      West Bengal 721171
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[80px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <BsTelephoneXFill className=" text-teal-700" />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                      Phone No
                    </h4>
                    <p className="text-base text-body-color">
                      (+91) 9679482955
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[80px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <MdMarkEmailRead className=" text-teal-700" />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color">
                      medihelp@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:pt-6 lg:w-1/2 xl:w-5/12">
              <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
    
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-[#3d353638] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-[#3d353644] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </>
  );
};
