import React from "react";
import vectorImg from "../../assets/vector1.png";
const ProgressDiv = () => {
  return (
    <div className="grid grid-cols-2 gap-5 sideMargin text-white">
      <div className="relative rounded-xl p-10 bg-linear-to-br from-[#632EE3] to-[#9F62F2] ">
        <img src={vectorImg} className="absolute -left-4 -bottom-0 h-36 pointer-events-none" />
        <img src={vectorImg} className="absolute -right-4 -bottom-0 h-36 scale-x-[-1] pointer-events-none" />
        <div className="flex flex-col items-center justify-center">
          <spna>In-Progress</spna>
          <spna className="text-3xl font-bold">0</spna>
        </div>
      </div>
      <div className="relative rounded-xl p-10 bg-linear-to-br from-[#54CF68] to-[#00827A] flex flex-col items-center justify-center">
        <img src={vectorImg} className="absolute -left-4 -bottom-0 h-36 pointer-events-none" />
        <img src={vectorImg} className="absolute -right-4 -bottom-0 h-36 scale-x-[-1] pointer-events-none" />
        <spna>Resolved</spna>
        <spna className="text-3xl font-bold">0</spna>
      </div>
    </div>
  );
};

export default ProgressDiv;
