

export const StepThree = () => {

    const onChange = (event) =>{
        
    } 

  return (
    <div>
      <div>
        <p className="text-[#334155] text-[14px] font-semibold ">
          Date of birth<span className="text-red-400">*</span>
        </p>
        <input
         name="bhday"
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
          <input 
          name= "profile" className="absolute inset-0 opacity-0" type="file" />
        </div>
      </div>
    </div>
  );
};