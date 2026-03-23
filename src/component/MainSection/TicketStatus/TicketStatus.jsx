import React, { useState } from "react";
import InprogressTask from "./InprogressTask";
import ResolvedTask from "./ResolvedTask";
const TicketStatus = ({ updatedData, setUpdatedData }) => {
  const [completedTicket, setCompletedTicket] = useState([]);
  const toggleCompleteBtn = (ticket) => {
    const data = updatedData.filter((tic) => tic.id !== ticket.id);
    setCompletedTicket([...completedTicket, ticket]);
    setUpdatedData(data);
    console.log(updatedData);
  };
  return (
    <div className="col-span-1">
      <p className="text-2xl font-semibold text-gray-600 pb-2">Task Status</p>

      {updatedData.map((tic) => {
        if (tic.status.toLowerCase() === "in progress") {
          return (
            <InprogressTask
            key={tic.id}
              tic={tic}
              toggleCompleteBtn={toggleCompleteBtn}
            ></InprogressTask>
          );
        }
      })}
      <p className="text-2xl font-semibold text-gray-600 pb-2">Resolved Task</p>

      {completedTicket.map((tic) => {
        return <ResolvedTask key={tic.id} tic={tic}></ResolvedTask>;
      })}
    </div>
  );
};

export default TicketStatus;
