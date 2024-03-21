import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState(0);
  const [hovernum, setHoverNum] = useState(0);

  return (
    <>
    <div className='App'>Star Rating
       <div className='stars'>
        {[...Array(5)].map((_,index)=>{
          return <span 
          className={`${index+1<=num?'selected':''} ${index+1<=hovernum?'selected':''}`}
          onMouseOut={()=>{
            setHoverNum(0);
          }}
          onMouseOver={()=>{
            setHoverNum(index+1);
          }}
          onClick={()=>{
            setNum(index+1);
          }}>&#9733;</span>
        })}
       </div>
       <div>Rating count:{num}</div>
        </div>
    </>
  )
}

export default App
