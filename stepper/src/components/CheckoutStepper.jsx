import React, { useState } from 'react'
import "../App.css"
const CheckoutStepper = ({stepconfig=[]}) => {

  const [currentstep,setcurrentstep]=useState(1);
  const [iscomplete,setiscomplete]=useState(false);
  const calculateprogress=()=>{
    return ((currentstep-1)/(stepconfig.length)*100)
  }

  const handlenext=()=>{
setcurrentstep((prevstep)=>{
  if(prevstep===stepconfig.length){
    setiscomplete(true);
    return prevstep;
  }else{
    return prevstep+1;
  }
})
  }

  if(!stepconfig.length){
    return <></>;
  }

  const ActiveComponents=stepconfig[currentstep-1]?.Component;
  return (
    <>
    <div className='stepper'> 
      {
        stepconfig.map((step,index)=>{
          return (
            <div className={`step ${currentstep>index+1 || iscomplete ? "complete":"active"}`}>
              <div className='step-number'>{
              currentstep>index+1||iscomplete?(
                <span>&#10003;</span>
                ):(

                  index+1
                  )
                }
                </div>
              <div className='step-name'>{step.name}</div>
            </div>
          )
        })
      }
      <div className='progress-bar'>
        <div className='progress' style={{width:`${calculateprogress()}%`}}></div>
      </div>
    </div>
    <ActiveComponents/>
   {!iscomplete &&(
     <button onClick={handlenext}>
      {currentstep===stepconfig.length?"Finish":"Next"}
    </button>
       )

    }
      </>
  )
}

export default CheckoutStepper