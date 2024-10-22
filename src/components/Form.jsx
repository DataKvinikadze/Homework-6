import React from "react";
import FormImage from "../assets/FormImage.svg";
import { useForm } from "react-hook-form";

const Form = () => {
  return (
    <div className="max-w-[1440px] w-full flex justify-center mx-auto pb-[104px]">
      <div className="max-w-[1256px] w-full flex justify-center items-center text-[#FFFFFF] pr-[184px] gap-x-[30px] border-[2px] rounded-[20px] bg-[#FFFFFF] bg-opacity-5 backdrop-blur-[380px] py-[20px] border-[#0A0D17] backdrop:blur-md">
        <div className="flex flex-col flex-[1] ml-[20px] p-[40px]">
          <h1 className="font-semibold text-[30px] text-[#FFFFFF] mb-[8px]">
            Let’s connect constellations
          </h1>
          <p className="text-[16px] text-[#FFFFFF] opacity-80">
            Let's align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>
          <div className="mt-[41px] grid grid-cols-2 gap-[14px]">
            <input
              className="col-start-1 row-start-1 px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="col-start-2 row-start-1 px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
              type="text"
              placeholder="First Name"
            />
            <input
              className="row-start-2 col-span-2 px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
              type="text"
              placeholder="Email"
            />
            <input
              className="row-start-3 col-span-2 px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
              type="text"
              placeholder="Phone Number"
            />
            <textarea
              className="max-h-[109px] row-start-4 col-span-2 h-[109px] px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
              type="text"
              placeholder="Message"
            />
            <button className="col-span-2 w-full bg-gradient-to-r from-[#763AF5] to-[#A604F2] h-[42px] py-[12px] rounded-[5px]">
              Send it to the moon
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="flex-[1]">
          <div className="h-[516px] w-[510px] bg-[url('./assets/FormImage.svg')]">
            <p className="max-w-[466px] pt-[425px] mx-auto">
              “Two lunar months revealed Earth's fragile beauty against vast
              silence, transforming my view of our place in the universe. Irinel
              Traista
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
