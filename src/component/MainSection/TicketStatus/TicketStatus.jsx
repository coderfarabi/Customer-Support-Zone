import React, { useState, useEffect } from "react";
import InprogressTask from "./InprogressTask";
import ResolvedTask from "./ResolvedTask";
const TicketStatus = ({ updatedData, getUpdatedData, setCountR ,setCountIP }) => {
  const [completedTickets, setCompletedTickets] = useState(updatedData);
  let cip, cr ;
  const count = () => {
    cip=0,cr=0;
    updatedData.map((tic) => {
      if (tic.status.toLowerCase() === "in progress") cip++;
      if (tic.status.toLowerCase() === "resolved") cr++;
    });
    setCountIP(cip)
    setCountR(cr)
  };
  useEffect(() => {
    count();
  }, [updatedData])
  
  useEffect(() => {
    getUpdatedData(completedTickets);
  }, [completedTickets]);

  const toggleCompleteBtn = (id) => {
    const data = updatedData.map((tic) => {
      if (tic.id === id && tic.status.toLowerCase() === "in progress")
        return { ...tic, status: "Resolved" };
      return tic;
    });
    setCompletedTickets(data);
  };

  const InprogressTaskDiv = updatedData.map((tic) => {
    if (tic.status?.toLowerCase() === "in progress") {
      return (
        <InprogressTask
          key={tic.id}
          tic={tic}
          toggleCompleteBtn={toggleCompleteBtn}
          getUpdatedData={getUpdatedData}
        ></InprogressTask>
      );
    }
    return null;
  });

  const ResolvedTaskDiv = updatedData.map((tic) => {
    if (tic.status?.toLowerCase() === "resolved") {
      return <ResolvedTask key={tic.id} tic={tic}></ResolvedTask>;
    }
    return null;
  });

  return (
    <div className="col-span-1">
      <p className="text-2xl font-semibold text-gray-600 pb-5">Task Status</p>
      <div className="space-y-3">{InprogressTaskDiv}</div>

      <p className="text-2xl font-semibold text-gray-600 pt-10 pb-5">
        Resolved Task
      </p>
      <div className="space-y-3">{ResolvedTaskDiv}</div>
    </div>
  );
};

export default TicketStatus;
