import React, { useEffect, useState } from 'react'

function ProgressBar({value,onComplete=()=>{}}) {
  const[percent,setpercent]=useState(value);
  useEffect(()=>{
    setpercent(Math.min(100,Math.max(value,0)));
    if(value>=100){
      onComplete();
    }
  },[value]);

  return (
    <div className='progressbar'>
        <span style={{color:percent>49?'white':'black'}}>{percent?.toFixed()}%</span>
        <div style={{width:`${percent}%`}}/>
        {}
    </div>
  )
}

export default ProgressBar