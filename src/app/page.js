"use client";

import { useState } from "react";
import { StepThree } from "./components/StepThree";
import { StepTwo } from "./components/StepTwo";
import { StepOne } from "./components/StepOne";
import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    bhday: "",
    profile: "",
  });

  const steps = [StepOne, StepTwo, StepThree];
  const Component = steps[currentStep];

  const nextStep = () => {
    if (steps.length - 1 <= currentStep) {
      setCompleted(true);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };

  if (completed)
    return (
      <div className="flex h-screen items-start justify-center mt-[182px]">
        <div className="w-[480px] h-auto bg-white rounded-lg flex flex-col justify-between p-8">
          <img src="Logo.png" className="w-12 h-12 "></img>

          <h1 className="text-[26px] font-semibold text-[#202124] my-2">
            You're All Set 🔥
          </h1>
          <h2 className="text-[#8E8E8E] text-[18px] font-normal ">
            We have received your submission. Thank you!
          </h2>
        </div>
      </div>
    );

const onChange = (event) => {
  setFormInput((prev) => ({...prev, [event.target.name]:event.target.value}))
}

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[480px] h-[655px] bg-white rounded-lg flex flex-col justify-between p-8">
        <div className="flex flex-col justify-between">
          <Header />
          <Component />
        </div>

        <Buttons
          currentStep={currentStep}
          backStep={backStep}
          nextStep={nextStep}
          stepsLen={steps.length}
        />
      </div>
    </div>
  );
}
