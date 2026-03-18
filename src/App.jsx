import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import ProgressDiv from "./component/ProgressDiv/ProgressDiv";
import CustomerTickets from "./component/MainSection/CustomerTickets/CustomerTickets";
import { Suspense } from "react";
const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

function App() {
  const ticketsPromise = fetchTickets();
  return (
    <>
      <div className="space-y-10  ">
        <Navbar></Navbar>
        <div className="sideMargin">
          <ProgressDiv></ProgressDiv>
          <p className="text-2xl font-semibold text-gray-600 pt-10 pb-2">
            Customer Tickets
          </p>
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
