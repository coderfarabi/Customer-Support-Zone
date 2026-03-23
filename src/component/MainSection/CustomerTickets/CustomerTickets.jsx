import React, { use, useState } from "react";
import Ticket from "./Ticket";

const CustomerTickets = ({ ticketsPromise,getUpdatedData}) => {
  const initialData = use(ticketsPromise);
  const [getTicketsData, setGetTicketsData] = useState(initialData);
  const getCheckedTickets = (id) => {
    const data =  getTicketsData.map((tic) => {
        if (tic.id === id) return { ...tic, status: "In Progress" };
        return tic;
      });
    setGetTicketsData(data);
    getUpdatedData(getTicketsData);
  };
  return (
    <>
      <div className="col-span-3">
        <p className="text-2xl font-semibold text-gray-600 pb-2">
          Customer Tickets
        </p>
        <div className="grid grid-cols-2 gap-2">
          {getTicketsData.map((tic) => {
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
