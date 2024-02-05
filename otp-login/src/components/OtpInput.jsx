import React, { useEffect, useRef, useState } from 'react'
import "../styles/otpinput.css"
function OtpInput({length=4,onOtpSubmit=()=>{}}) {
 const [otp,setotp]=useState(new Array(length).fill(""));
 console.log(otp);
 const inputRefs=useRef([]);
 const handlechange=(index,e)=>{
    const value=e.target.value;
    if(isNaN(value))return;

    const newval=[...otp];
    newval[index]=value.substring(value.length-1);
    setotp(newval);

    const combine=newval.join("");
    if(combine.length===length)onOtpSubmit(combine);

    if(value && index<length-1){
        inputRefs.current[newval.indexOf("")].focus();
    }
    // if(value && index<length-1 && otp[index+1] && inputRefs.current[index+1]){
    //     inputRefs.current[index+1].focus();
    // }
 }
 const handlekeydown=(index,e)=>{
    const value=e.target.value;

    if(e.key==="Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]){
        inputRefs.current[index-1].focus();
    }
   
 }
 const handleonClick=(index)=>{
    inputRefs.current[index].setSelectionRange(1,1);
    if(!otp[index-1] && index>0){
        inputRefs.current[otp.indexOf("")].focus();
    }
 }
 useEffect(()=>{
    if(inputRefs.current[0]){
        inputRefs.current[0].focus();
    }
 },[])
    return (
    <div>
        {
            otp.map((value,index)=>{
               return <input 
               key={index}
               ref={(input)=>{inputRefs.current[index]=input}}
               type="text"
               value={value}
               onChange={(e)=>handlechange(index,e)}
               onKeyDown={(e)=>handlekeydown(index,e)}
               onClick={()=>handleonClick(index)}
               className='otpinput'
               />
            })
        }
    </div>
  )
}

export default OtpInput