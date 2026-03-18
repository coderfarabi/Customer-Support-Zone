import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import ProgressDiv from "./component/ProgressDiv/ProgressDiv";
function App() {

  return (
    <>
      <div className="space-y-10">
        <Navbar></Navbar>
        <ProgressDiv></ProgressDiv>
        
      </div>
    </>
  );
}

export default App;
