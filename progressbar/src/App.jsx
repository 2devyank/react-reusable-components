import { useEffect, useState } from "react";
import ProgressBar from "./Components/ProgressBar";

function App() {
  const [value, setvalue] = useState(0);
  const [status,setstatus]=useState(false);
  useEffect(() => {
    setInterval(() => {
      setvalue((value)=>value + 1);
    }, 100);
  }, []);

  return (
    <>
      <div className="app">
        <p>progress bar</p>
        <ProgressBar onComplete={()=>setstatus(true)} value={value} />
        {status?"complete":"loading..."}
      </div>
    </>
  );
}

export default App;
