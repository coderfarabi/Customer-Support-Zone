import React from "react";

const InprogressTask = ({ tic, toggleCompleteBtn }) => {
  return (
    <>
      <div key={tic.id} className="bg-white p-4 space-y-2 rounded-lg">
        <p>{tic.title}</p>
        <button
          onClick={() => toggleCompleteBtn({ ...tic, status: "Completed" })}
          className="my-btn-hover bg-green-500 text-white p-2 w-full"
        >
          Complete
        </button>
      </div>
    </>
  );
};

export default InprogressTask;
