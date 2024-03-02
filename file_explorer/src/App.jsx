
import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/datafolder";
import useTraversetree from "./hooks/useAdder";
function App() {
  const [explorerdata,setexplorerdata]=useState(explorer);

 const {insertNode} = useTraversetree();


 const handletreeinsert=(folderId,item,isFolder)=>{
  const finaltree=insertNode(explorerdata,folderId,item,isFolder);
  setexplorerdata(finaltree);
 }
  return (
    <>
     <Folder handletreeinsert={handletreeinsert} explorer={explorerdata}/>
    </>
  )
}

export default App
