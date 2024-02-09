import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillFacebook,AiFillTwitterSquare} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {FaInstagramSquare,FaLongArrowAltRight} from 'react-icons/fa'

export const Footer =()=> {
  return (
    <>
     <footer className="bg-blue-gray-700 py-16 text-dimWhite mt-auto">
      <div className="container lg:flex lg:text-center lg:justify-between">
        <div className="lg:w-1/3">
          <div className="flex">
            <i className="fas fa-tooth text-4xl text-primary"></i>
            <span className="text-2xl font-Poppins">
              MEDI <span className="text-cyan-500">STORE</span>
            </span>
          </div>
          <p className="text-justify py-4">
          This website offers a secure and efficient platform for storing medical records. By utilizing blockchain technology, it ensures data integrity and privacy, granting patients full control over their information. With encryption and permissioned access, healthcare providers can securely access patient data, leading to improved interoperability and patient care.
          </p>
          <div className="text-cyan-500 text-2xl flex">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/"
            >
              <AiFillFacebook className="ml-2"/>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.twitter.com/"
            >
              <AiFillTwitterSquare className="ml-2"/>
            </a>
            
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.telegram.com/"
            >
              <BsTelegram className="ml-2"/>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <FaInstagramSquare className="ml-2"/>
            </a>
          </div>
        </div>
        <div className="w-1/3 lg:py-0 py-8 ">
          <h1 className="text-2xl font-Poppins">Quick Links</h1>
          <ul className="py-4">
            <li className="py-1 hover:text-cyan-500">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1 hover:text-cyan-500">
              <Link to="/">About Us</Link>
            </li>
            <li className="py-1 hover:text-cyan-500">
              <Link to="/">Services</Link>
            </li>
            <li className="py-1 hover:text-cyan-500">
              <Link to="/">Login now</Link>
            </li>
          </ul>
        </div>
        <div className="w-auto">
          <h1 className="text-2xl font-Poppins">Join Us</h1>

          <div className="py-4 flex">
            <input
              type="email"
              className=" text-blue-gray-800 border px-4 border-teal-500 border-r-0  py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="Your Email Address"
            />
            <button className="bg-teal-500 border border-teal-500 text-white px-8 rounded-r-md hover:bg-transparent hover:text-teal-500 transition">
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}


