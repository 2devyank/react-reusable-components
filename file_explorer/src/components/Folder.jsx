import React, { useState } from 'react'
import "../App.css"
const Folder = ({handletreeinsert,explorer}) => {
    console.log(explorer.items);

    const [visible,setvisible]=useState(false);
    const [vinput,setvinput]=useState({
      isFolder:null,
      visible:false
    })
    const handlenewadd=(e)=>{
      if(e.keyCode===13 && e.target.value){
        //addhandletreeinsert
        handletreeinsert(explorer.id,e.target.value,vinput.isFolder)
        setvinput({...vinput,visible:false})
      }
    }
const handlenewFolder=(e,isFolder)=>{
  // e.stopPropagation();
setvinput({isFolder,visible:true})
}
    if(explorer.isFolder){

      return (
        <div >
          <div onClick={()=>setvisible(!visible)}  className='folder'>

      <span >
       🗂️ {explorer.name}
        </span>
        <div>
        <button onClick={(e)=>handlenewFolder(e,true)}>+Folder</button>
        <button onClick={(e)=>handlenewFolder(e,false)}>+File</button>
        </div>
          </div>
      <div className='subfolder'>
        {vinput.visible && (
<div>
  <span>{vinput.isFolder?'🗂️':'📂'}</span>
          <input
          type="text"
          onKeyDown={handlenewadd}
          autoFocus
          onBlur={()=>setvinput({...vinput,visible:false})}
          />
</div>
        )
        }
      {visible && explorer.items.map((item)=>{
        return  <Folder handletreeinsert={handletreeinsert} explorer={item}/>
      })}
      </div>
    </div>
  )
}else{
  return <span className='subfolder'>📂{explorer.name}</span> 
}
}

export default Folder