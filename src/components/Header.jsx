import React from "react";

export const Header = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full flex justify-center mx-auto overflow-hidden py-[67px]">
        <div className="max-w-[1280px] w-full flex flex-col gap-y-[7px] items-center text-center">
          <h1 className="text-[82px] font-extrabold bg-gradient-to-r from-white via-[#763AF5] to-[#A604F2] bg-clip-text text-transparent">
            Get in touch
          </h1>
          <p className="text-[22px] font-medium opacity-70 text-[#FFFFFF] ">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>
      </div>
    </>
  );
};
