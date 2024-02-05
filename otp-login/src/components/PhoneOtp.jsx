import React, { useState } from 'react'
import OtpInput from './OtpInput';

function PhoneOtp() {
    const [phoneNumber,setphoneNuber]=useState();
    const [showotp,setshowotp]=useState(false);
    const handlephonesubmit=(e)=>{
        e.preventDefault();
        const regex=/[^0-9]/g;
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert('Invalid Phone Number');
            return;

        }
        setshowotp(true);

    }
    const otpsubmit=(val)=>{
      console.log("login succesfill",val);
    }
  return (
    <div>
       {!showotp?(
 <form onSubmit={handlephonesubmit} >
 <input placeholder='Enter phone humber' type="text" value={phoneNumber} onChange={(e)=>{setphoneNuber(e.target.value)}} />
 <button type='submit'>Submit</button>
</form>
       ):(
        <div>
            OTP sent to this number {phoneNumber}
            <OtpInput length={4} onOtpSubmit={otpsubmit} />
        </div>
       )}
       
    </div>
  )
}

export default PhoneOtp