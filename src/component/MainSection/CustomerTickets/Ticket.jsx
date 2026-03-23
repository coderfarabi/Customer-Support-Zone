import React from "react";
const priority = (p) => {
  if (p.toLowerCase() === "critical") return "text-red-500";
  if (p.toLowerCase() === "high") return "text-yellow-600";
  if (p.toLowerCase() === "medium") return "text-green-500";
  if (p.toLowerCase() === "low") return "text-blue-500";
};

const status = (s) => {
  if (s.toLowerCase() === "open") return ["bg-green-200", "bg-green-900"];
  if (s.toLowerCase() === "in progress")
    return ["bg-yellow-200", "bg-yellow-900"];
  if (s.toLowerCase() === "resolved") return ["hidden", "hidden"];
};

const Ticket = ({ tic,getCheckedTickets }) => {
  return (
      <button  onClick={() => {getCheckedTickets(tic.id)}} className={`${tic.status.toLowerCase()==="resolved"?"hidden":""} my-btn-hover bg-white p-3 space-y-2 rounded-lg border border-gray-200`}>
        <div className="flex items-center justify-between font-semibold">
          <p>{tic.title}</p>
          <div className={`flex items-center gap-2 ${status(tic.status)[0]} px-2 py-1 rounded-full`}>
            <div className={`${status(tic.status)[1]} rounded-full size-3`}></div>
            <p className="font-bold">{tic.status}</p>
          </div>
        </div>
        <p className="text-gray-600 text-start">
          {tic.description}
        </p>
        <div className="flex justify-between items-center gap-2 text-gray-600">
          <div className="flex gap-5">
            <p>#{tic.id}</p>
            <p className={`font-semibold ${priority(tic.priority)}`}>{tic.priority.toUpperCase()} PRIORITY</p>
            {/* <p className='text-blue-500'>{tic.priority}</p> */}
          </div>
          <div className="flex gap-5">
            <p>{tic.customer}</p>
            <div className="flex gap-1 items-center">
              <span className="material-symbols-outlined">date_range</span>
              <p>{new Date(tic.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </button>
  );
};

export default Ticket;
