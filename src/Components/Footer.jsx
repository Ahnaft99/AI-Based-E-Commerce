import React from "react";
import Container from "./Container";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Logo & About */}
            <div>
              <h2 className="text-[26px] font-semibold font-poppins text-amber-500">
                Logo
              </h2>

              <p className="text-gray-400 font-poppins text-sm leading-6 mt-4">
                Your trusted online shopping destination. Find quality
                products, great prices, and a simple shopping experience.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-5">

                <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-amber-600 transition">
                  <FaFacebookF />
                </div>

                <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-amber-600 transition">
                  <FaInstagram />
                </div>

                <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-amber-600 transition">
                  <FaTwitter />
                </div>

                <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-amber-600 transition">
                  <FaYoutube />
                </div>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold font-poppins mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">
                <li className="text-gray-400 font-poppins text-sm cursor-pointer hover:text-amber-500 transition">
                  Home
                </li>

                <li className="text-gray-400 font-poppins text-sm cursor-pointer hover:text-amber-500 transition">
                  Shop
                </li>

                <li className="text-gray-400 font-poppins text-sm cursor-pointer hover:text-amber-500 transition">
                  About Us
                </li>

                <li className="text-gray-400 font-poppins text-sm cursor-pointer hover:text-amber-500 transition">
                  Contact Us
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold font-poppins mb-5">
                Customer Service
              </h3>

              <ul className="space-y-3">
                <li className="text-gray-400 font-poppins text-sm cursor-pointer hover:text-amber-500 transition">
                  My Account
                </li>

                <li className="text-gray-400 font-poppins text-sm cursor-pointer hover:text-amber-500 transition">
                  Track Order
                </li>

                <li className="text-gray-400 font-poppins text-sm cursor-pointer hover:text-amber-500 transition">
                  Shipping Information
                </li>

                <li className="text-gray-400 font-poppins text-sm cursor-pointer hover:text-amber-500 transition">
                  Privacy Policy
                </li>

                <li className="text-gray-400 font-poppins text-sm cursor-pointer hover:text-amber-500 transition">
                  Terms & Conditions
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold font-poppins mb-5">
                Contact Us
              </h3>

              <div className="space-y-4">

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1" />

                  <p className="text-gray-400 font-poppins text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-amber-500" />

                  <p className="text-gray-400 font-poppins text-sm">
                    +880 1234-567890
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-amber-500" />

                  <p className="text-gray-400 font-poppins text-sm">
                    support@example.com
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-10 pt-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">

              <p className="text-gray-500 text-sm font-poppins">
                © 2026 Logo. All Rights Reserved.
              </p>

              <p className="text-gray-500 text-sm font-poppins">
                Designed & Developed with ❤️
              </p>

            </div>
          </div>

        </Container>
      </footer>
    </>
  );
};

export default Footer;