import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import ProgressDiv from "./component/ProgressDiv/ProgressDiv";
import CustomerTickets from "./component/MainSection/CustomerTickets/CustomerTickets";
import { Suspense, useState, use, useEffect } from "react";
import TicketStatus from "./component/MainSection/TicketStatus/TicketStatus";
const fetchTickets = async () => {
  try {
    const res = await fetch("/tickets.json");
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
const ticketsPromise = fetchTickets();
function App() {
  const [updatedData, setUpdatedData] = useState([])  
  const [countIP, setCountIP] = useState(0);
  const [countR, setCountR] = useState(0);
  const setCounts = (str) => {
console.log(str);
  }
  const getUpdatedData = (tics) => setUpdatedData(tics);
  return (
    <div className="space-y-10  ">
      <Navbar></Navbar>
      <div className="sideMargin">
        <ProgressDiv></ProgressDiv>
        <div className="grid grid-cols-4 pt-10 gap-5">
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <CustomerTickets ticketsPromise={ticketsPromise} updatedData={updatedData} getUpdatedData={getUpdatedData}></CustomerTickets>
          </Suspense>
          <TicketStatus updatedData={updatedData} getUpdatedData={getUpdatedData} setCounts={setCounts}></TicketStatus>
        </div>
      </div>
    </div>
  );
}

export default App;
