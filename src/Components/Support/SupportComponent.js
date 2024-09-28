import React from "react";

const SupportComponent = ({ icon, title, description }) => {
  return (
    <div className="w-[282px] h-[270px] rounded-[8px] shadow-md p-[35px]">
      <div className="h-[60px] w-[60px] bg-[#ECEEFF] rounded-[100%] flex justify-center items-center">
        <div className="text-[#DE8894] text-[26px] font-[900]">{icon}</div>
      </div>

      <div className="mt-[40px] text-[20px] font-[700] text-[#3E4581]">
        {title}
      </div>
      <div className="mt-[15px] text-[#3E4581] text-[14px]">{description}</div>
    </div>
  );
};

export default SupportComponent;
