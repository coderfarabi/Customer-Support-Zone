import React from "react";

const ResolvedTask = ({tic}) => {
  return (
    <>
      <div>
        <div className="bg-[#E0E7FF] p-3 text-black font-semibold">
          { tic.title}
        </div>
      </div>
    </>
  );
};

export default ResolvedTask;
