export const StepOne = () => {
    return (
      <div>
        <div>
          <p className="text-[#334155] text-[14px] font-semibold">
            First Name<span className="text-red-400">*</span>{" "}
          </p>
          <input
          name="firstName"
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
           name="lastName"
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
           name="userName"
            placeholder="username"
            type="text"
            className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 mb-3"
          ></input>
        </div>
      </div>
    );
  };