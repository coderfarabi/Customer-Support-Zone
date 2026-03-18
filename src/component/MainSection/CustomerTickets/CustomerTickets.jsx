import React, { use } from "react";
import Ticket from "./Ticket";

const CustomerTickets = ({ ticketsPromise }) => {
  const ticketsData = use(ticketsPromise);
  return (
    <div className="grid grid-cols-2 gap-2">
      {ticketsData.map((tic) => {
        return (
          <button key={tic.id} className="my-btn-hover p-3 space-y-2 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between font-semibold">
              <p>{tic.title}</p>
              <div className="flex items-center gap-2 bg-green-200 px-2 py-1 rounded-full">
                <div className="bg-green-900 rounded-full size-3"></div>
                <p className="font-bold">{tic.status}</p>
              </div>
            </div>
            <p className="text-gray-600 -start">
              {tic.description}
            </p>
            <div className="flex justify-between items-center gap-2 text-gray-600">
              <div className="flex gap-5">
                <p>#{tic.id}</p>
                <p className="text-red-500">{tic.priority}</p>
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
      })}
    </div>
  );
};

export default CustomerTickets;
