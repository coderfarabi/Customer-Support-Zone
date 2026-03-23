import React, { useState, useEffect } from "react";
import InprogressTask from "./InprogressTask";
import ResolvedTask from "./ResolvedTask";
const TicketStatus = ({ updatedData, getUpdatedData, setCounts }) => {
  const [completedTickets, setCompletedTickets] = useState(updatedData);
  useEffect(() => getUpdatedData(completedTickets), [completedTickets]);

  const toggleCompleteBtn = (id) => {
    const data = updatedData.map((tic) => {
      if (tic.id === id && tic.status.toLowerCase() === "in progress")
        return { ...tic, status: "Resolved" };
      return tic;
    });
    setCompletedTickets(data);
  };
  return (
    <div className="col-span-1">
      <p className="text-2xl font-semibold text-gray-600 pb-5">Task Status</p>
      <div className="space-y-3">
        {updatedData.map((tic) => {
          if (tic.status?.toLowerCase() === "in progress") {
            console.log("hello")
            setCounts("in progress");
            return (
              <InprogressTask
                key={tic.id}
                tic={tic}
                toggleCompleteBtn={toggleCompleteBtn}
                getUpdatedData={getUpdatedData}
              ></InprogressTask>
            );
          }
        })}
      </div>

      <p className="text-2xl font-semibold text-gray-600 pt-10 pb-5">
        Resolved Task
      </p>
      <div className="space-y-3">
        {updatedData.map((tic) => {
          if (tic.status?.toLowerCase() === "resolved") {
            setCounts("resolved");
            return <ResolvedTask key={tic.id} tic={tic}></ResolvedTask>;
          }
        })}
      </div>
    </div>
  );
};

export default TicketStatus;
