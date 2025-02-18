
export const StepTwo = () => {
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