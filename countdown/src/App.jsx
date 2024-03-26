import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const secref=useRef();
  const minref=useRef();
  const hourRef=useRef();
  // const [sec,setsec]=useState(2);
  // const [min,setmin]=useState(0);
  // const [hour,sethour]=useState(0);
  // const [id,setid]=useState(null);
  
  function timer(){
    // console.log(sec);
   

      if(secref.current.value>0){ 
       secref.current.value-=1;
      }else if(minref.current.value>0){
          minref.current.value-=1;
          secref.current.value=59;
        }
      else if(hourRef.current.value>0){
          // sethour((prev)=>prev-1);
          // setmin(59);
          // setsec(59);
          hourRef.current.value-=1;
          minref.current.value=59;
          secref.current.value=59;
        }
  
   
    }
    
  


  useEffect(()=>{
  const c=setInterval(timer,1000);
       
  
  return ()=>clearInterval(c);
  },[])
  return (
    <>
     <div>
      <input   ref={hourRef} maxLength={2} type="text" />
      <input  ref={minref} maxLength={2} type="text" />:
      <input ref={secref}  maxLength={2} type="text" />:
     <button>Start</button>
     </div>
    </>
  )
}

export default App
