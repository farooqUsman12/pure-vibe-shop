import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-navy h-auto pt-16">
      <div className="container ">
        <div className="flex flex-col flex-wrap gap-20 items-center justify-around  text-white   md:p-8 md:flex-row md:gap-0 md:items-center">
          <div>
            <div className="font-extrabold text-2xl">
              Pure <span className="text-red">vibes.</span>
            </div>
            <div className="mt-2 flex flex-col p-1 gap-4 text-sm">
              <div>About</div>

              <div>Features</div>

              <div>Works</div>

              <div>Career</div>
            </div>
          </div>

          <div>
            <div className="text-base font-extrabold">Help</div>
            <div className="mt-2 flex flex-col p-1 gap-4 text-sm">
              <div>Customer Support</div>

              <div>Delivery Details</div>

              <div>Terms & Conditions</div>

              <div>Privacy Policy</div>
            </div>
          </div>

          <div>
            <div className="text-base font-extrabold">Resources</div>
            <div className="mt-2 flex flex-col p-1 gap-4 text-sm">
              <div>Free eBooks</div>

              <div>Development Tutorial</div>

              <div>How to - Blog</div>

              <div>youtube Playlist</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-extrabold">
              SUBSCRIBE TO NEWSLETTER
            </div>
            <div className="mt-4 flex flex-col p-1 gap-4 text-sm">
              <div className="flex items-center">
                <div className="border-2 border-white p-2 bg-white rounded-l-lg">
                  <input
                    className="w-full "
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="flex justify-center border-2 border-[#8D99AE] p-2 w-24 rounded-r-lg bg-[#8D99AE]">
                  Join
                </div>
              </div>

              <div className="mt-2 flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-normal">CALL US</div>
                  <div className="text-sm font-black ">(+1) 456-4933</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-xs font-normal">Email US</div>
                  <div className="text-sm font-black ">mail@example.com</div>
                </div>
                <div></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between text-white items-center pt-24 pb-8">
          <div className="flex flex-wrap  flex-1 gap-8 text-white">
            <div className="flex gap-4 items-center">
              <IoLogoTwitter />
              <TfiFacebook />
              <FaInstagram />
              <FaGithub />
            </div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
            <div>Support</div>
          </div>
          <div>© Copyright 2024, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
