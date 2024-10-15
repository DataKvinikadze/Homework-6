import React from "react";
import FormImage from "../assets/FormImage.svg";

const Form = () => {
  return (
    <div className="max-w-[1440px] w-full flex justify-center mx-auto">
      <div className="max-w-[1256px] w-full flex justify-center items-center text-[#FFFFFF] pr-[184px] gap-x-[30px] border-[2px] rounded-[20px] border-[#C38A8A] backdrop:blur-md">
        <div className="flex flex-col flex-[1] h-[536px] ml-[20px] p-[40px]">
          <h1 className="font-semibold text-[30px] text-[#FFFFFF] mb-[8px]">
            Let’s connect constellations
          </h1>
          <p className="text-[16px] text-[#FFFFFF] opacity-80">
            Let's align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>
          <div className="mt-[41px] flex flex-col gap-y-[14px]">
            <div>
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="First Name" />
            </div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Message" />
          </div>
        </div>
        {/* Image */}
        <div className="flex-[1]">
          <div className="h-[516px] w-[510px] bg-[url('./assets/FormImage.svg')]">
            <p>
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
