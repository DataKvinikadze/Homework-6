import React from "react";
import FormImage from "../assets/FormImage.svg";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, formState, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = () => {
    console.log("Form has been Submited");
  };

  const { errors } = formState;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const phoneRegex = /^\(?([0-9]{3})\)?[-.●\s]?([0-9]{3})[-.●\s]?([0-9]{4})$/;
  // chatgpts vkitxe emailis validaciaze da chawerili videoc vnaxe

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
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mt-[41px] grid grid-cols-2 gap-[14px]">
              <input
                {...register("lastname", {
                  validate: (value) => {
                    if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
                      return "Lastname Doesnt start with Uppercase!";
                    }
                    return true;
                  },
                })}
                className="col-start-1 row-start-1 px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
                type="text"
                placeholder="Last Name"
              />
              <input
                {...register("firstname", {
                  validate: (value) => {
                    if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
                      return "Firstname Doesnt start with Uppercase!";
                    }
                    return true;
                  },
                })}
                className="col-start-2 row-start-1 px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
                type="text"
                placeholder="First Name"
              />
              <input
                {...register("email", {
                  validate: (value) => {
                    if (!emailRegex.test(value)) {
                      return "Invalid Gmail address!";
                    }
                    return true;
                  },
                })}
                className="row-start-2 col-span-2 px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
                type="text"
                placeholder="Email"
              />
              <input
                {...register("phonenumber", {
                  validate: (value) => {
                    if (!phoneRegex.test(value)) {
                      return "Invalid phone number!";
                    }

                    return true;
                  },
                })}
                className="row-start-3 col-span-2 px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
                type="text"
                placeholder="Phone Number"
              />
              <textarea
                {...register("textarea", {
                  maxLength: {
                    value: 100,
                    message: "Max Length 100!",
                  },
                  minLength: {
                    value: 10,
                    message: "Min Length 10",
                  },
                })}
                className="max-h-[109px] row-start-4 col-span-2 h-[109px] px-[14px] py-[12px] rounded-[5px] bg-[#ffffff] bg-opacity-5 text-[#FFFFFF] border-[#FFFFFF] border-opacity-20 border-[1px]"
                type="text"
                placeholder="Message"
              />
              <button
                type="submit"
                className="col-span-2 w-full bg-gradient-to-r from-[#763AF5] to-[#A604F2] h-[42px] py-[12px] rounded-[5px]"
              >
                Send it to the moon
              </button>
            </div>
            <div>
              {errors.lastname && (
                <span className="text-red-400 block">
                  {errors.lastname.message}
                </span>
              )}
              {errors.firstname && (
                <span className="text-red-400 block">
                  {errors.firstname.message}
                </span>
              )}
              {errors.email && (
                <span className="text-red-400 block">
                  {errors.email.message}
                </span>
              )}
              {errors.phonenumber && (
                <span className="text-red-400 block">
                  {errors.phonenumber.message}
                </span>
              )}
              {errors.textarea && (
                <span className="text-red-400 block">
                  {errors.textarea.message}
                </span>
              )}
            </div>
          </form>
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
