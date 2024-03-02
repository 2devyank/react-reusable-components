
import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/datafolder";
function App() {
  const [explorerdata,setexplorerdata]=useState(explorer);

 
  return (
    <>
     <Folder explorer={explorerdata}/>
    </>
  )
}

export default App
