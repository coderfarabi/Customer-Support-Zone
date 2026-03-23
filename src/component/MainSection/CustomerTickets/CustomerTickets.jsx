import React, { use, useState, useRef, useEffect } from "react";
import Ticket from "./Ticket";

const CustomerTickets = ({ ticketsPromise, getUpdatedData, updatedData }) => {
  const initialData = use(ticketsPromise);
  const [getTicketsData, setGetTicketsData] = useState(initialData);
  useEffect(() => {
    getUpdatedData(getTicketsData);
  }, [getTicketsData]);

  const getCheckedTickets = (id) => {
    const data = updatedData.map((tic) => {
      if (tic.id === id && tic.status === "Open")
        return { ...tic, status: "In Progress" };
      return tic;
    });
    getUpdatedData(data);
  };
  return (
    <>
      <div className="col-span-3">
        <p className="text-2xl font-semibold text-gray-600 pb-5">
          Customer Tickets
        </p>
        <div className="grid grid-cols-2 gap-2">
          {updatedData.map((tic) => {
            return (
              <Ticket
                tic={tic}
                key={tic.id}
                getCheckedTickets={getCheckedTickets}
              ></Ticket>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CustomerTickets;
