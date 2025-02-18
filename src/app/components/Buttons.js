export const Buttons = ({ currentStep, backStep, nextStep, stepsLen }) => {
  return (
    <div>
      <div className="flex gap-2">
        {currentStep != 0 && (
          <div className="flex border border-[#CBD5E1] w-[128px] h-11 py-[10px] px-3 rounded-[6px] gap-2 bg-white items-center justify-center">
            <img className="w-6 h-6 " src="chevron_left.png" />
            <button
              className=" text-black text-center text-[16px] font-medium "
              onClick={backStep}
            >
              Back
            </button>
          </div>
        )}

        <div className="py-[10px] px-3 bg-black h-auto rounded-[6px] w-full flex justify-center gap-2" >
          <button
            className=" text-white h-auto rounded-[6px] text-center text-[16px] font-medium "
            onClick={nextStep}
          >
            Continue{" "}
            <span>
              {currentStep + 1} / {stepsLen}
            </span>
          </button>
          <img className="w-6 h-6 " src="chevron_right.png" />
        </div>
      </div>
    </div>
  );
};
