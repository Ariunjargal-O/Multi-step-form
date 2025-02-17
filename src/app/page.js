"use client";
import Image from "next/image";
import { useState } from "react";

const stepOne = () => {
  return (
    <div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold ">
          First Name<span className="text-red-400">*</span>{" "}
        </p>
        <input
          placeholder="Firstname"
          type="text"
          className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 mb-3"
        ></input>
      </div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold">
          Last name<span className="text-red-400">*</span>
        </p>
        <input
          placeholder="Lastname"
          type="text"
          className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 mb-3"
        ></input>
      </div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold">
          Username<span className="text-red-400">*</span>
        </p>
        <input
          placeholder="username"
          type="text"
          className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 mb-3"
        ></input>
      </div>
    </div>
  );
};

const stepTwo = () => {
  return (
    <div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold">
          Email<span className="text-red-400">*</span>
        </p>
        <input
          placeholder="email@gmail.com"
          type="email"
          className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 mb-3"
        ></input>
      </div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold">
          Phone Number<span className="text-red-400">*</span>
        </p>
        <input
          placeholder="00000000"
          type="number"
          className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 mb-3"
        ></input>
      </div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold">
          Password<span className="text-red-400">*</span>
        </p>
        <input
          placeholder="Password"
          type="password"
          className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 mb-3"
        ></input>
      </div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold">
          Confirm Password<span className="text-red-400">*</span>
        </p>
        <input
          placeholder="Password"
          type="password"
          className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 mb-3"
        ></input>
      </div>
    </div>
  );
};

const stepThree = () => {
  return (
    <div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold ">
          Date of birth<span className="text-red-400">*</span>
        </p>
        <input
          placeholder="email@gmail.com"
          type="date"
          className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 mb-3"
        ></input>
      </div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold mb-3">
          Profile image<span className="text-red-400">*</span>
        </p>
        <div className="relative bg-[#f2f4f6] p-4 w-[416px] h-[180px] rounded-[6px] text-center flex flex-col justify-center items-center ">
          <div className="bg-white w-9 h-9 mb-2 rounded-full flex justify-center items-center">
            <img src="imageicon.png" className="w-5 h-5 "></img>
          </div>
          <p className="text-black font-medium leading-5">Add Image</p>
          <input className="absolute inset-0 opacity-0" type="file" />
        </div>
      </div>
    </div>
  );
};



export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);


  const steps = [stepOne, stepTwo, stepThree];
  const Component = steps[currentStep];

  const nextStep = () => {
    if (steps.length - 1 <= currentStep) return;
    setCurrentStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[480px] h-[655px] bg-white rounded-lg flex flex-col justify-between p-8">
        <div className="flex flex-col justify-between">
          <div>
            <img src="Logo.png" className="w-12 h-12 "></img>
           
              <h1 className="text-[26px] font-semibold text-[#202124] my-2">
              Join us! 😎
            </h1>
            <h2 className="text-[#8E8E8E] text-[18px] font-normal mb-7">
              Please provide all current information accurately.
            </h2>
              
        
            
            <h1 className="text-[26px] font-semibold text-[#202124] my-2">
              Join us! 😎
            </h1>
            <h2 className="text-[#8E8E8E] text-[18px] font-normal mb-7">
              Please provide all current information accurately.
            </h2>
          </div>
          <Component></Component>
        </div>

        <div>
          <div className="flex gap-2">
            {currentStep != 0 && (
              <button
                className="bg-white text-black py-[10px] px-3 rounded-[6px] text-center text-[16px] w-[128px] font-medium border border-[#CBD5E1]"
                onClick={backStep}
              >
                Back
              </button>
            )}

            <button
              className="py-[10px] px-3 bg-black text-white h-auto rounded-[6px] text-center text-[16px] font-medium w-full"
              onClick={nextStep}
            >
              Continue{" "}
              <span>
                {currentStep + 1} / {steps.length}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
